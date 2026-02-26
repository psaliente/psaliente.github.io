import { Activity, useContext, useEffect, useState } from 'react';
import { useCommonHook } from '../../../hooks/common.hook';
import { Card } from '../../containers';
import { Link } from 'react-router-dom';
import { LanguageList } from '../..';
import { ProjectItemType } from '../../../types/Project.Type';
import useProjectThumbnail from '../../../hooks/useProjectThumbnail';
import { ProjectItemContext } from '../../../contexts';

type ProjectListItemPropType = { ProjectID: number; wait?: number } & ProjectItemType;

function ProjectListItem(projectItem: ProjectListItemPropType) {
  const { trimText2Elipse } = useCommonHook();
  const { setProjectItem } = useContext(ProjectItemContext);
  const projectThumb = useProjectThumbnail(projectItem.Type);
  const trimmedTitle = trimText2Elipse(projectItem.Title, 30);
  const [doneWait, setDoneWait] = useState(false);
  const { wait = 0 } = projectItem;

  const setCurrentProjectItem = () => {
    setProjectItem(projectItem);
  };

  useEffect(() => {
    if (wait > 0) {
      const timer = setTimeout(() => {
        setDoneWait(true);
      }, wait);
      return () => clearTimeout(timer);
    } else {
      setDoneWait(true);
    }
  }, [wait]);

  return (
    <Activity mode={doneWait ? 'visible' : 'hidden'}>
      <Link to="/project" onClick={setCurrentProjectItem}>
        <Card className="w-sm h-(--project-card-height) fade-in gap-4 px-7 pb-5 pt-8 bg-white dark:bg-gray-800 justify-center transition delay-300 duration-500 hover:scale-[1.02]">
          <div className="w-full flex justify-center">
            <img src={projectThumb} className="w-40 h-40" alt={projectItem.Type} />
          </div>
          <div className="flex flex-col gap-5 max-w-xs content-between">
            <h3 className="dark:text-gray-300 transition delay-300 duration-500 text-3xl md:text-5xl font-[SourceCodePro] text-wrap wrap-break-word">
              {trimmedTitle}
            </h3>
            <LanguageList ProjectID={'' + projectItem.ProjectID} Languages={projectItem.Languages} />
          </div>
        </Card>
      </Link>
    </Activity>
  );
}

export default ProjectListItem;
