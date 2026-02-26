import React from 'react';
import ProjectListItem from './projecListItem.component';
import { ProjectType } from '../../../types/Project.Type';
import { Section } from '../../containers';
import { SECTIONS } from '../../../constants';

type ProjectListPropType = { projects: ProjectType[] };

function ProjectList({ projects }: ProjectListPropType) {
  const { TITLE, SUBTITLE } = SECTIONS.PROJECTS;

  const scrollToLeft = () => {
    const projectList = document.querySelector('.project-list');
    if (projectList) {
      projectList.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollToRight = () => {
    const projectList = document.querySelector('.project-list');
    if (projectList) {
      projectList.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Section className="flex flex-col gap-10 px-10 py-12 overflow-x-hidden">
      <Section.Title className="text-gray-500 dark:text-gray-100 transition delay-300 duration-500 font-thin wrap-break-word">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-col gap-2">
        <div className="project-list flex flex-row h-(--project-section-height) gap-8 overflow-x-hidden">
          {projects.map((p, i) => (
            <ProjectListItem key={'projectItem' + i} ProjectID={i} {...p} />
          ))}
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <button className="rounded-full bg-white size-12 drop-shadow-sm" onClick={scrollToLeft}>
            &lt;
          </button>
          <button className="rounded-full bg-white size-12 drop-shadow-sm" onClick={scrollToRight}>
            &gt;
          </button>
        </div>
      </Section.Content>
    </Section>
  );
}

export default React.memo(ProjectList);
