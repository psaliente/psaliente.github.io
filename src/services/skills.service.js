import MySkills from "../assets/skills.json";

class SkillsService {
  async getSkills() {
    return await new Promise(() => MySkills);
  }
}

export default SkillsService;
