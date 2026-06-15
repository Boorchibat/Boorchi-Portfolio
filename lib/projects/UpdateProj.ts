import {update} from "../getDatafromBackend";

export const updateProject = (
  payload: Partial<Project>,
  projectId: string,
  token: string
): Promise<Project> => {
  return update<Project, Partial<Project>>(`/project/${projectId}`, payload, token);
};
