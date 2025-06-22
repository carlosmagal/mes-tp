export interface AgentReasoning {
  agentName: string;
  messages: any[];
  nodeName: string;
  nodeId: string;
  usedTools?: any[];
  sourceDocuments?: any[];
  artifacts?: any[];
  state?: Record<string, any>;
}

export interface FlowiseResponse {
  text: string;
  question: string;
  chatId: string;
  chatMessageId: string;
  sessionId: string;
  memoryType: string;
  agentReasoning?: AgentReasoning[];
}
