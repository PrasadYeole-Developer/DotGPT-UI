import { axiosInstance } from "../lib/axios";

import type { Message } from "../types/chat.types";

interface GetMessagesResponse {
  messages: Message[];
}

export const getMessagesByChat = async (
  chatId: string,
): Promise<GetMessagesResponse> => {
  const response = await axiosInstance.get(`/messages/${chatId}`);

  return response.data;
};
