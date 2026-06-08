import { axiosInstance } from "../lib/axios";
import type { CreateChatResponse, DeleteChatResponse, GetChatsResponse } from "../types/chat.types";

export const createChat = async (
  title: string,
): Promise<CreateChatResponse> => {
  const response = await axiosInstance.post("/chat/create-chat", {
    title,
  });

  return response.data;
};

export const getChats = async (): Promise<GetChatsResponse> => {
  const response = await axiosInstance.get("/chat");
  return response.data;
};

export const deleteChat = async (
  chatId: string,
): Promise<DeleteChatResponse> => {
  const response = await axiosInstance.delete(`/chat/${chatId}`);

  return response.data;
};
