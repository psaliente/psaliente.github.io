import React, { useContext } from 'react';
import { useCommonHook } from '../../../hooks/common.hook';
import { Card } from '../../containers';
import { Link } from 'react-router-dom';
import { LanguageList } from '../..';
import { ProjectType } from '../../../types/Project.Type';
import useProjectThumbnail from '../../../hooks/useProjectThumbnail';
import { ProjectItemContext } from '../../../contexts';

type ProjectListItemPropType = {
  ProjectID: number;
} & ProjectType;

function ProjectListItem(projectItem: ProjectListItemPropType) {
  const { trimText2Elipse } = useCommonHook();
  const { setProjectItem } = useContext(ProjectItemContext);
  const projectThumb = useProjectThumbnail(projectItem.Type);
  const trimmedTitle = trimText2Elipse(projectItem.Title, 30);

  const setCurrentProjectItem = () => {
    setProjectItem(projectItem);
  };

  return (
    <Link to="/project" onClick={setCurrentProjectItem}>
      <Card className="flex flex-row flex-wrap gap-4 px-7 pb-5 pt-8 bg-white dark:bg-gray-800 justify-center hd:justify-normal transition delay-300 duration-500 hover:scale-[1.02]">
        <img src={projectThumb} className="w-40 h-40" alt={projectItem.Type} />
        <div className="flex flex-col gap-5 max-w-xs content-between">
          <h3 className="dark:text-gray-300 transition delay-300 duration-500 text-3xl md:text-5xl font-[SourceCodePro] text-wrap break-words">
            {trimmedTitle}
          </h3>
          <LanguageList ProjectID={'' + projectItem.ProjectID} Languages={projectItem.Languages} />
        </div>
      </Card>
    </Link>
  );
}

export default React.memo(ProjectListItem);
