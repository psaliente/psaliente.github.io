import MyProjects from "../assets/projects.json";
import { ProjectType } from "../types/Project.Type";

export const useProjectsService = () => {
  function getProjects(): ProjectType[] {
    return MyProjects.map(p => p as ProjectType);
  }

  return {
    getProjects
  }
}
