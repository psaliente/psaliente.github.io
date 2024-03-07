import ProjectList from "./projectList.component";
import SkillList from "./skillList.component";
import { ProjectType } from "../types/Project.Type";
import { SkillType } from "../types/Skill.Type";
import { MyInfoType } from "../types/MyInfo.type";
import { useEffect, useState } from "react";
import { useMyInfoService, useProjectsService, useSkillsService } from "../services";

function PortfolioPage() {
  const { getSkills } = useSkillsService();
  const { getProjects } = useProjectsService();
  const { getMyInfo } = useMyInfoService();
  
  const [Me, setMe] = useState("");
  const [Description, setDescription] = useState("");
  const [Projects, setProjects] = useState<ProjectType[]>([]);
  const [Skills, setSkills] = useState<SkillType[]>([]);

  useEffect(() => {
    const myInfo: MyInfoType = getMyInfo();

    setMe(myInfo.Name);
    setDescription(myInfo.Description);    
    setProjects(getProjects());
    setSkills(getSkills());
  }, []);

  return (
    <div>
      <h1 className="display-4 text-center">{Me}</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="lead">{Description}</p>
          </div>
        </div>
      </div>
      <br />
      <ProjectList projects={Projects} />
      <br />
      <SkillList skills={Skills} />
    </div>
  );
}

export default PortfolioPage;
