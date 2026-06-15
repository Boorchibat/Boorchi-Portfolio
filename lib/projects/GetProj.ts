import { getData } from "../getDatafromBackend";

export const getProject = <T>(projectID: string, ) => {
  return getData<T>(`/project/${projectID}`);
};
