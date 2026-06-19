import { postUser } from "../getDatafromBackend";


export interface SignUpPayload {
  name: string;
  email: string;
  number: string;
  username: string;
  password: string;
  profileImage: string;
}

export interface SignUpResponse {
  token: string;
  user: {
    _id: string;
    username: string;
    email: string;
  };
}

export const signUp = (
  payload: SignUpPayload
): Promise<SignUpResponse> => {
  return postUser<SignUpResponse, SignUpPayload>("/auth/signup", payload);
};
