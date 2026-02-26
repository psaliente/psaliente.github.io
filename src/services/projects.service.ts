import MyProjects from '../assets/projects.json';
import { ProjectItemType } from '../types/Project.Type';

export const useProjectsService = () => {
  function getProjects(): ProjectItemType[] {
    return MyProjects.map((p) => p as ProjectItemType);
  }

  return { getProjects };
};
