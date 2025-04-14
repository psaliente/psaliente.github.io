import HeaderComponent from '../../header.component';
import Footer from '../../footer.component';
import { useProjectsService } from '../../../services';
import ProgLangs from './proglangs.component';
import ProgLibraries from './proglibs.component';
import ProgTools from './progtools.component';
import ProjectList from './projectList.component';

function PortfolioPage() {
  const { getProjects } = useProjectsService();

  return (
    <div className="bg-gray-100 flex flex-col">
      <HeaderComponent />
      <ProjectList projects={getProjects()} />
      <ProgLangs />
      <ProgLibraries />
      <ProgTools />
      <Footer />
    </div>
  );
}

export default PortfolioPage;
