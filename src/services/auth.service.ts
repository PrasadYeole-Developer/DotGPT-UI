import { axiosInstance } from "../lib/axios";

import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "../types/auth.types";

export const registerUser = async (
  payload: RegisterPayload,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/register", payload);

  return response.data;
};

export const loginUser = async (
  payload: LoginPayload,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/login", payload);

  return response.data;
};
