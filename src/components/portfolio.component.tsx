import HeaderComponent from "./header.component";
import ProjectList from "./projectList.component";
import SkillList from "./skillList.component";
import { ProjectType } from "../types/Project.Type";
import { SkillType } from "../types/Skill.Type";
import { MyInfoType } from "../types/MyInfo.type";
import { useEffect, useState } from "react";
import { useMyInfoService, useProjectsService, useSkillsService } from "../services";
import useStyle from "../styles/portfolio.style";

function PortfolioPage() {
  const { getSkills } = useSkillsService();
  const { getProjects } = useProjectsService();
  const { getMyInfo } = useMyInfoService();
  
  const [Me, setMe] = useState("");
  const [Description, setDescription] = useState("");
  const [Projects, setProjects] = useState<ProjectType[]>([]);
  const [Skills, setSkills] = useState<SkillType[]>([]);

  const styles = useStyle();

  useEffect(() => {
    const myInfo: MyInfoType = getMyInfo();

    setMe(myInfo.Name);
    setDescription(myInfo.Description);    
    setProjects(getProjects());
    setSkills(getSkills());
  }, []);

  return (
    <div style={styles.PortfolioPage}>
      <HeaderComponent Name={Me} Description={Description} />
      <br />
      <ProjectList projects={Projects} />
      <br />
      <SkillList skills={Skills} />
    </div>
  );
}

export default PortfolioPage;
