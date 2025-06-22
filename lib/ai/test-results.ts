import postgres from "postgres";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";

const client = postgres(process.env.POSTGRES_URL!);

interface CodeSmell {
  category: string;
  description: string;
  java_exemple: string;
  name: string;
}

interface TestResult {
  codeSmellName: string;
  expected: string;
  detected: string;
  match: boolean;
  agentRawOutput: any;
}

export async function runCodeSmellAgentTest(): Promise<TestResult[]> {
  const codeSmells: CodeSmell[] = await client`
    SELECT category, description, java_exemple, name FROM code_smells
  `;

  const results: TestResult[] = [];

  for (const example of codeSmells) {
    const flowiseResponse = await fetch(process.env.FLOWISE_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`,
      },
      body: JSON.stringify({
        question: `Analise o código-fonte abaixo e identifique os code smells existentes: \n\n${example.java_exemple}`,
      }),
    });

    if (!flowiseResponse.ok) {
      results.push({
        codeSmellName: example.name,
        expected: example.name,
        detected: "",
        match: false,
        agentRawOutput: {
          error: `Flowise API error: ${flowiseResponse.status}`,
        },
      });
      continue;
    }

    const agentOutput = await flowiseResponse.json();

    let detected = "";
    let match = false;
    let evalError = null;
    try {
      const { object } = await generateObject({
        model: google("gemini-2.5-pro-preview-05-06"),
        schema: z.object({
          success: z.boolean().describe("Se o teste foi bem sucedido"),
          thought: z.string().describe("Motivação para o resultado"),
          code_smell: z
            .string()
            .describe("Nome do code smell detectado no código Java"),
        }),
        prompt: buildPrompt(example, agentOutput),
      });
      detected = object.code_smell;
      match = object.success;
    } catch (err) {
      evalError = err;
    }

    results.push({
      codeSmellName: example.name,
      expected: example.name,
      detected,
      match,
      agentRawOutput: evalError
        ? { error: String(evalError), agentOutput }
        : agentOutput,
    });
  }

  console.log(results);

  return results;
}

function buildPrompt(example: CodeSmell, output: string) {
  return `
Você é um especialista em engenharia de software e revisão de código Java. Receberá uma análise automatizada de code smells feita por outra LLM e deverá verificar se os seguintes tipos de smells estão corretamente identificados no código-fonte:

- Bloaters (ex.: classes ou métodos muito grandes, com muita complexidade ou dados primitivos excessivos)
- Object-Orientation Abusers (ex.: long method chains, ausência de encapsulamento, falta de coesão)
- Change Preventers (ex.: shotgun surgery, divergência entre classes que deveriam evoluir juntas)
- Dispensables (ex.: código morto, comentários desnecessários, redundância)
- Couplers (ex.: acoplamento excessivo entre classes, dependência indevida)

Para isso, siga os seguintes passos:
- Analise o código-fonte abaixo.
- Compare com os smells identificados pela LLM analisadora.
- Verifique se os smells detectados são realmente válidos de acordo com a definição técnica de cada grupo.
- Justifique cada ponto com base em evidências no código.

Código-fonte analisado:

${example.java_exemple}

Saída da LLM que detecta code smells:

${output}
  `;
}
