import MySkills from "../assets/skills.json";

export const useSkillsService = () => {
  function getSkills() {
    return MySkills;
  }

  return {
    getSkills
  }
}