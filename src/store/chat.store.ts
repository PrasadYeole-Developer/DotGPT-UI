import { create } from "zustand";

import type { Chat, Message } from "../types/chat.types";

interface ChatStore {
  chats: Chat[];
  activeChat: Chat | null;
  messages: Message[];
  isAiThinking: boolean;
  setChats: (chats: Chat[]) => void;
  setActiveChat: (chat: Chat | null) => void;
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  setIsAiThinking: (value: boolean) => void;
  isTemporaryChat: boolean;
  setIsTemporaryChat: (value: boolean) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],

  activeChat: null,

  messages: [],
  isAiThinking: false,

  setChats: (chats) => {
    set({ chats });
  },

  setActiveChat: (chat) => {
    set({ activeChat: chat });
  },

  setMessages: (messages) => {
    set({ messages });
  },

  addMessage: (message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  setIsAiThinking: (value) => {
    set({
      isAiThinking: value,
    });
  },
  isTemporaryChat: false,
  setIsTemporaryChat: (value) => {
    set({
      isTemporaryChat: value,
    });
  },
}));
