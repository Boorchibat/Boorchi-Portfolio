import { Delete } from "../getDatafromBackend";


export const DeleteProject = (
  projectId: string,
  token: string
) => {
  return Delete(`/project/${projectId}`, token);
};
