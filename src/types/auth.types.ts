export type RegisterPayload = {
  email: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
};

export type LoginPayload = {
  email: string;
  password: string;
};
