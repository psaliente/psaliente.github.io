import HeaderComponent from "./header.component";
import ProjectList from "./projectList.component";
import { ProjectType } from "../types/Project.Type";
import { SkillType } from "../types/Skill.Type";
import { MyInfoType } from "../types/MyInfo.type";
import { useEffect, useState } from "react";
import { useMyInfoService, useProjectsService } from "../services";
import ProgLangs from "./proglangs.component";
import ProgLibraries from "./proglibs.component";
import ProgTools from "./progtools.component";
import Footer from "./footer.component";

function PortfolioPage() {
  const { getProjects } = useProjectsService();
  const { getMyInfo } = useMyInfoService();
  
  const [Me, setMe] = useState("");
  const [Description, setDescription] = useState("");
  const [Projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const myInfo: MyInfoType = getMyInfo();

    setMe(myInfo.Name);
    setDescription(myInfo.Description);    
    setProjects(getProjects());
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col">
      <HeaderComponent Name={Me} Description={Description} />
      <ProjectList projects={Projects} />
      <ProgLangs />
      <ProgLibraries />
      <ProgTools />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
