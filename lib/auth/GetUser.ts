import { getData } from "../getDatafromBackend";


export const getSingleUser = <T>(userId: string) => {
  return getData<T>(`/auth/${userId}`);
};
