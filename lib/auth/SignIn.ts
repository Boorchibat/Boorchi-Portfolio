import { postUser } from "../getDatafromBackend";

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: User;
}

export const signIn = (
  payload: SignInPayload
): Promise<SignInResponse> => {
  return postUser<SignInResponse, SignInPayload>(
    "/auth/signin",
    payload
  );
};