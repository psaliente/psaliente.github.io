import MyProjects from "../assets/projects.json";

export const useProjectsService = () => {
  function getProjects() {
    return MyProjects;
  }

  return {
    getProjects
  }
}
