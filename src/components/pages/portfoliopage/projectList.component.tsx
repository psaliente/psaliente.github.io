import { memo, useState } from 'react';
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

  return (
    <Section className="flex flex-col gap-10 py-12 overflow-x-hidden">
      <Section.Title className="px-10 text-gray-500 dark:text-gray-100 transition delay-300 duration-500 font-thin wrap-break-word">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-col gap-6">
        <div className="w-fit p-[0.37rem] mx-10 my-2 gap-4 rounded-full bg-white dark:bg-gray-800 dark:text-white transition delay-300 duration-500 drop-shadow-xs">
          <button onClick={() => setProjectsToShow(null)} className="rounded-full text-lg px-5 py-2">
            All projects
          </button>
          <button onClick={() => setProjectsToShow('console')} className="rounded-full text-lg px-5 py-2">
            Console
          </button>
          <button onClick={() => setProjectsToShow('cross-platform')} className="rounded-full text-lg px-5 py-2">
            Cross-Platform
          </button>
          <button onClick={() => setProjectsToShow('desktop')} className="rounded-full text-lg px-5 py-2">
            Desktop
          </button>
          <button onClick={() => setProjectsToShow('generic')} className="rounded-full text-lg px-5 py-2">
            Generic
          </button>
          <button onClick={() => setProjectsToShow('mobile')} className="rounded-full text-lg px-5 py-2">
            Mobile
          </button>
          <button onClick={() => setProjectsToShow('web')} className="rounded-full text-lg px-5 py-2">
            Web
          </button>
        </div>
        <div className="project-list flex flex-row h-(--project-section-height) mt-6 px-10 gap-8 overflow-x-hidden">
          {projects
            .filter((p) => (projectsToShow ? p.Type === projectsToShow : true))
            .map((p, i) => (
              <ProjectListItem key={'projectItem' + i} ProjectID={i} wait={100 * (i + 1)} {...p} />
            ))}
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
