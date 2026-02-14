/** A single message in the chat conversation. */
export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

/** Request body for POST /api/chat */
export interface ChatRequest {
  message: string;
  session_id: string;
}

/** Response body from POST /api/chat */
export interface ChatResponse {
  reply: string;
  session_id: string;
}
