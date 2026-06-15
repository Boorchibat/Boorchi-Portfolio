import { Delete } from "../getDatafromBackend";



export const DeleteUser = (
  userid: string,
  token: string
): Promise<SignInResponse> => {
  return Delete<SignInResponse>(`/auth/${userid}`, token);
};
