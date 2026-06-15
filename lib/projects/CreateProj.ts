import { Project } from "@/index";
import { postProjects } from "../getDatafromBackend";


export const Post = (payload: Project, token: string) => {
  return postProjects("/project", payload, token);
};
