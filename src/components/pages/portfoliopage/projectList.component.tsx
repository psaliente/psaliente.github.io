import { Activity, memo, useMemo, useState } from 'react';
import ProjectListItem from './projecListItem.component';
import { ProjectItemType, ProjectType } from '../../../types/Project.Type';
import { Section } from '../../containers';
import { SECTIONS } from '../../../constants';
import useCarouselScroll from '../../../hooks/useCarouselScroll.hook';
import { CarouselButtons } from '../../buttons';

type ProjectListPropType = { projects: ProjectItemType[] };

function ProjectList({ projects }: ProjectListPropType) {
  const { TITLE, SUBTITLE } = SECTIONS.PROJECTS;
  const { scrollToLeft, scrollToRight, disableLeft, disableRight } = useCarouselScroll('.project-list');
  const [projectsToShow, setProjectsToShow] = useState<ProjectType | null>(null);

  const filteredProjects = useMemo(() => {
    return projectsToShow ? projects.filter((p) => p.Type === projectsToShow) : projects;
  }, [projects, projectsToShow]);

  return (
    <Section className="flex flex-col gap-10 py-12 overflow-x-hidden">
      <Section.Title className="px-10 text-gray-500 dark:text-gray-100 transition delay-300 duration-500 font-thin wrap-break-word">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-col gap-6">
        <div className="nav-wrap p-10 relative">
          <nav className="nav w-10/12 md:w-fit flex flex-row font-[SourceCodePro] text-xs md:text-lg flex-nowrap overflow-hidden p-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-100 transition delay-300 duration-500 drop-shadow-xs">
            <div className="absolute bubble rounded-full bg-linear-to-r from-blue-500 from-10% via-cyan-500 via-60% to-lime-400 to-90%"></div>
            <button onClick={() => setProjectsToShow(null)} className={projectsToShow === null ? 'active' : ''}>
              All projects
            </button>
            <button
              onClick={() => setProjectsToShow('console')}
              className={projectsToShow === 'console' ? 'active' : ''}
            >
              Console
            </button>
            <button
              onClick={() => setProjectsToShow('cross-platform')}
              className={projectsToShow === 'cross-platform' ? 'active' : ''}
            >
              Cross-Platform
            </button>
            <button
              onClick={() => setProjectsToShow('desktop')}
              className={projectsToShow === 'desktop' ? 'active' : ''}
            >
              Desktop
            </button>
            <button
              onClick={() => setProjectsToShow('generic')}
              className={projectsToShow === 'generic' ? 'active' : ''}
            >
              Generic
            </button>
            <button onClick={() => setProjectsToShow('mobile')} className={projectsToShow === 'mobile' ? 'active' : ''}>
              Mobile
            </button>
            <button onClick={() => setProjectsToShow('web')} className={projectsToShow === 'web' ? 'active' : ''}>
              Web
            </button>
          </nav>
        </div>
        <div className="project-list flex flex-row h-(--project-section-height) mt-6 px-10 gap-8 overflow-x-scroll">
          {filteredProjects.map((p, i) => (
            <ProjectListItem key={'projectItem' + i} ProjectID={i} wait={100 * (i + 1)} {...p} />
          ))}
          <Activity mode={filteredProjects.length > 0 ? 'hidden' : 'visible'}>
            <div className="w-full h-full flex items-center justify-center font-[SourceCodePro] text-gray-500 dark:text-gray-100 transition delay-300 duration-500">
              <strong>No items to show.</strong>
            </div>
          </Activity>
        </div>
        <div className="flex flex-row px-10 gap-3 justify-end">
          <CarouselButtons
            leftAction={scrollToLeft}
            rightAction={scrollToRight}
            disableLeft={disableLeft}
            disableRight={disableRight}
          />
        </div>
      </Section.Content>
    </Section>
  );
}

export default memo(ProjectList);
