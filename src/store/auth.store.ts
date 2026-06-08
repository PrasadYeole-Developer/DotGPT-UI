import { create } from "zustand";

import type { User } from "../types/auth.types";

interface AuthStore {
  user: User | null;

  isLoading: boolean;

  setUser: (user: User | null) => void;

  setIsLoading: (value: boolean) => void;

  isAuthChecked: boolean;

  setIsAuthChecked: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  isLoading: false,

  setUser: (user) => {
    set({ user });
  },

  setIsLoading: (value) => {
    set({ isLoading: value });
  },

  isAuthChecked: false,

  setIsAuthChecked: (value) => {
    set({
      isAuthChecked: value,
    });
  },
}));
