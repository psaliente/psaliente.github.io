import HeaderComponent from './header.component';
import ProjectList from './projectList.component';
import { ProjectType } from '../types/Project.Type';
import { useEffect, useState } from 'react';
import { useProjectsService } from '../services';
import ProgLangs from './proglangs.component';
import ProgLibraries from './proglibs.component';
import ProgTools from './progtools.component';
import Footer from './footer.component';

function PortfolioPage() {
  const { getProjects } = useProjectsService();

  const [Projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setProjects(getProjects());
  }, [getProjects]);

  return (
    <div className="bg-gray-100 flex flex-col">
      <HeaderComponent />
      <ProjectList projects={Projects} />
      <ProgLangs />
      <ProgLibraries />
      <ProgTools />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
