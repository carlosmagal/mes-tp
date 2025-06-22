# Smells-analyzer
Code smells analyzer system, powered with LLM Model e dataset context.

# Membros da equipe:

Carlos Magalhães Silva - Ciência da Computação

Diogo do Nascimento Rodrigues - Matemática Computacional

Henrique César Alves de Souza - Sistemas de Informação

Kaique de Oliveira e Silva - Sistemas de Informação

# Objetivo do Trabalho

O objetivo deste trabalho acadêmico é desenvolver uma aplicação que utilize uma Linguagem de Modelo de Grande Escala (LLM) e um conjunto de dados robusto para analisar códigos de programação, identificar "code smells" e sugerir correções eficazes. Os "code smells" são padrões de código que podem indicar problemas de manutenibilidade, legibilidade ou eficiência, e sua detecção é crucial para melhorar a qualidade do software. Além do desenvolvimento será realizado testes, análises qualitativas e quantitativas para verificação de eficiência, viabilidade, usabilidade e geração de dados de conclusão.

A aplicação será projetada para processar códigos em JAVA, utilizando a capacidade da LLM de compreender e analisar estruturas de código complexas. O Dataset será  selecionado e treinado para garantir que a aplicação possa reconhecer uma ampla variedade de "code smells" e fornecer sugestões de melhoria baseadas em práticas de codificação recomendadas.

O desenvolvimento desta ferramenta visa não apenas automatizar o processo de revisão de código, mas também auxiliar os desenvolvedores a melhorar suas habilidades de programação ao fornecer feedback instantâneo e orientações precisas. Além disso, a aplicação contribuirá para a redução dos custos associados à manutenção de software, ao minimizar a necessidade de revisões manuais extensivas e ao promover a adoção de padrões de codificação mais robustos e sustentáveis.

## Metodologia

A metodologia proposta para este trabalho acadêmico envolve o uso de uma Linguagem de Modelo de Grande Escala (LLM), o GPT-4o Mini, e o dataset de *code smells* disponível no Kaggle. A abordagem será dividida em etapas claras, desde a preparação dos dados até a avaliação da aplicação desenvolvida.

### **Etapas do Desenvolvimento**

1. **Seleção e Preparação do Dataset**
   O dataset escolhido, disponível no Kaggle (https://www.kaggle.com/datasets/kolliparajaswanth030/code-smell), contém informações detalhadas sobre *code smells* em projetos, incluindo  *code smells* em níveis de classe e método.
   - Será realizada uma análise exploratória dos dados para entender sua estrutura e características.
   - Os dados serão pré-processados para garantir que estejam adequados ao treinamento e validação do modelo. Isso inclui limpeza, normalização e divisão em conjuntos de treinamento e teste.

2. **Configuração do Modelo GPT-4o Mini**
   O GPT-4o Mini será utilizado devido à sua eficiência em ambientes com recursos limitados e sua capacidade de gerar respostas rápidas e contextualmente relevantes.
   - O modelo será ajustado para interpretar estruturas de código e identificar padrões associados a *code smells*.
   - Técnicas de *fine-tuning* serão aplicadas para adaptar o modelo às especificidades do dataset.

3. **Desenvolvimento da Aplicação**
   A aplicação será projetada para:
   - Analisar trechos de código fornecidos.
   - Identificar possíveis *code smells* com base nos padrões detectados pelo GPT-4o Mini.
   - Sugerir correções práticas e alinhadas às melhores práticas de desenvolvimento.

### **Avaliação da Aplicação**

Para avaliar a eficácia da aplicação, serão realizadas análises quantitativas e qualitativas:

#### **Avaliação Quantitativa**
- **Precisão na Detecção:**
  A precisão será medida comparando os *code smells* detectados pela aplicação com os rótulos presentes no dataset. Métricas como acurácia, precisão, recall e F1-score serão calculadas.
- **Tempo de Resposta:**
  Será avaliado o tempo médio necessário para analisar um trecho de código e gerar sugestões, destacando a eficiência do GPT-4o Mini.

#### **Avaliação Qualitativa**
- **Testes Controlados:**
  Membros da equipe realizarão testes com códigos cuidadosamente selecionados, que incluem:
  - **Códigos com Número Definido de Code Smells:**
    Estes códigos terão um número pré-definido de *code smells*, permitindo que a equipe avalie a capacidade da aplicação em detectar corretamente esses padrões.
  - **Códigos Sem Code Smells:**
    Serão utilizados códigos limpos para verificar se a aplicação não gera falsos positivos.
  - **Códigos com Número Indefinido de Code Smells:**
    Estes códigos terão uma variedade desconhecida de *code smells*, permitindo que a equipe avalie a robustez da aplicação em cenários mais complexos.
- **Análise dos Resultados:**
  A equipe analisará os resultados dos testes para avaliar a eficácia da aplicação em diferentes cenários, considerando tanto a precisão das detecções quanto a relevância das sugestões de correção.

### **Resultados Esperados**
Espera-se que a aplicação seja capaz de identificar *code smells* com alta precisão e fornecer sugestões úteis que contribuam para melhorar a qualidade do código. Além disso, as avaliações quantitativas e qualitativas fornecerão insights valiosos para aprimorar o sistema e validar sua eficácia no contexto acadêmico e profissional.
