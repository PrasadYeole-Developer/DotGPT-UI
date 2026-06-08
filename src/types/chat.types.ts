export type MessageRole = "user" | "model" | "system";

export interface Chat {
  id: string;
  title: string;
  lastActivity: string;
  userId: string;
  isTemporary?: boolean;
}

export interface Message {
  id?: string;
  chat: string;
  content: string;
  role: MessageRole;
  createdAt?: string;
}

export interface CreateChatResponse {
  message: string;
  chat: Chat;
}

export interface AIResponse {
  content: string;
  chat: string;
}

export interface GetChatsResponse {
  chats: Chat[];
}

export interface DeleteChatResponse {
  message: string;
}

export interface RenameChatResponse {
  message: string;
  chat: Chat;
}
