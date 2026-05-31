export interface User {
  id: string;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
}

export interface RegisterPayload {
  email: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}
