import { getData } from "../getDatafromBackend";

export const getProjects = <T>( ) => {
  return getData<T>(`/project`);
};
