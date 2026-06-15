import { update } from "../getDatafromBackend";


export const UpdateUser = (
  payload: User,
  userId: string,
  token: string
): Promise<User> => {
  return update<User, User>(`/auth/${userId}`, payload, token);
};
