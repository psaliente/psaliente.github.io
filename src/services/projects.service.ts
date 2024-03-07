import MyProjects from "../assets/projects.json";

class ProjectService {
  async getProjects() {
    return await new Promise(() => MyProjects);
  }
}

export default ProjectService;
