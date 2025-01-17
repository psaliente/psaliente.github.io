import React, { useContext } from 'react';
import { useCommonHook } from '../hooks/common.hook';
import { Card } from './containers';
import { Link } from 'react-router-dom';
import { LanguageList } from '.';
import { ProjectType } from '../types/Project.Type';
import useProjectThumbnail from '../hooks/useProjectThumbnail';
import { ProjectItemContext } from '../contexts';

type ProjectListItemPropType = {
  ProjectID: number;
} & ProjectType;

function ProjectListItem(projectItem: ProjectListItemPropType) {
  const { trimText2Elipse } = useCommonHook();
  const { setProjectItem } = useContext(ProjectItemContext);
  const projectThumb = useProjectThumbnail(projectItem.Type);
  const trimmedTitle = trimText2Elipse(projectItem.Title, 30);
  const trimmedDesc = trimText2Elipse(projectItem.Description, 60);

  const setCurrentProjectItem = () => {
    setProjectItem(projectItem);
  };

  return (
    <Card className="flex flex-row flex-wrap gap-4 px-7 pb-5 pt-8 bg-white justify-center hd:justify-normal">
      <img src={projectThumb} className="w-40 h-40" alt="mobile app" />
      <div className="flex flex-col gap-5 max-w-xs content-between">
        {projectItem.Link ? (
          <Link to={projectItem.Link}>
            <h3 className="text-3xl md:text-5xl font-[SourceCodePro] text-blue-500 text-wrap break-words">
              {trimmedTitle}
            </h3>
          </Link>
        ) : (
          <h3 className="text-3xl md:text-5xl font-[SourceCodePro] text-wrap break-words">{trimmedTitle}</h3>
        )}
        <LanguageList ProjectID={'' + projectItem.ProjectID} Languages={projectItem.Languages} />
        <p className="text-lg md:text-xl font-[SourceCodePro] text-gray-700">{trimmedDesc}</p>
        <Link to="/project" className="font-bold text-blue-700" onClick={setCurrentProjectItem}>
          see more
        </Link>
      </div>
    </Card>
  );
}

export default React.memo(ProjectListItem);
