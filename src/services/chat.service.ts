import { axiosInstance } from "../lib/axios";
import type { Chat, CreateChatResponse } from "../types/chat.types";

export const createChat = async (
  title: string,
): Promise<CreateChatResponse> => {
  const response = await axiosInstance.post("/chat/create-chat", {
    title,
  });

  return response.data;
};

interface GetChatsResponse {
  chats: Chat[];
}

export const getChats = async (): Promise<GetChatsResponse> => {
  const response = await axiosInstance.get("/chat");
  return response.data;
};
