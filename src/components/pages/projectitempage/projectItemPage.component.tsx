import { useContext } from 'react';
import { PortfolioContext, ProjectItemContext } from '../../../contexts';
import useProjectThumbnail from '../../../hooks/useProjectThumbnail';
import { TextTitle } from '../../labels';
import { BrandColors, Footer, LanguageList, RolesList } from '../..';
import { Link, useNavigate } from 'react-router-dom';
import useScrollToTop from '../../../hooks/useScrollToTop.hook';
import useRedirect from '../../../hooks/useRedirect.hook';

export default function ProjectItemPage() {
  const { projectItem } = useContext(ProjectItemContext);
  const { Name } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const projectItemType = !projectItem ? 'generic' : projectItem.Type;
  const projectImage = useProjectThumbnail(projectItemType);
  const projectLanguages = !projectItem ? [] : projectItem.Languages;

  const navBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  useRedirect('/', !!projectItem == false);
  useScrollToTop();

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-col bg-white p-5">
        <Link to="/" aria-label="home">
          <TextTitle className={'text-center'}>
            <TextTitle.Gradient>{Name}</TextTitle.Gradient>
          </TextTitle>
        </Link>
      </div>
      <BrandColors />
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center p-8">
        <img src={projectImage} alt={projectItemType} className="w-full md:w-auto max-h-60" />
        <div className="w-full max-w-4xl pb-5 md:pb-10">
          <h1 className="text-5xl md:text-7xl text-gray-600">{projectItem?.Title}</h1>
          <LanguageList ProjectID="" Languages={projectLanguages} />
        </div>
        <div className="flex flex-col w-full p-10 items-center justify-center">
          <p className="text-2xl md:text-4xl max-w-4xl font-light break-words">{projectItem?.Description}</p>
          <RolesList Roles={projectItem?.Role} />
        </div>
        <button
          className="bg-gradient-to-tr rounded-full px-8 py-1 from-blue-500 to-emerald-300 text-2xl shadow-md text-gray-200"
          onClick={navBack}
        >
          Back
        </button>
      </div>
      <Footer />
    </div>
  );
}
