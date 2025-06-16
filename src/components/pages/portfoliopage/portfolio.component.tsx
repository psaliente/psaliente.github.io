import HeaderComponent from '../../header.component';
import FooterComponent from '../../footer.component';
import { useProjectsService } from '../../../services';
import ProgLangs from './proglangs.component';
import ProgLibraries from './proglibs.component';
import ProgTools from './progtools.component';
import ProjectList from './projectList.component';
import { NightModeToggle } from '../../buttons';

function PortfolioPage() {
  const { getProjects } = useProjectsService();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      <HeaderComponent />
      <NightModeToggle />
      <ProjectList projects={getProjects()} />
      <ProgLangs />
      <ProgLibraries />
      <ProgTools />
      <FooterComponent />
    </div>
  );
}

export default PortfolioPage;
