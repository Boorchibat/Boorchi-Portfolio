import { postProjects } from "../getDatafromBackend";

export interface User {
  _id: string;
  username: string;
  email: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: User;
}

export const signIn = (payload: SignInPayload, token: string): Promise<SignInResponse> => {
  return postProjects<SignInResponse, SignInPayload>("/auth/signin", payload, token);
};
