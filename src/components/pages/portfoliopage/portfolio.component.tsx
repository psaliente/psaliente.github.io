import HeaderComponent from '../../header.component';
import FooterComponent from '../../footer.component';
import { useProjectsService } from '../../../services';
import ProgLangs from './proglangs.component';
import ProgLibraries from './proglibs.component';
import ProgTools from './progtools.component';
import ProjectList from './projectList.component';
import { NightModeToggle } from '../../buttons';
import useGTag from '../../../hooks/useGTag.hook';

function PortfolioPage() {
  const { getProjects } = useProjectsService();

  useGTag();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition delay-300 duration-500 min-h-screen flex flex-col">
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
