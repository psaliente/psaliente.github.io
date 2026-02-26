import React from 'react';
import ProjectListItem from './projecListItem.component';
import { ProjectType } from '../../../types/Project.Type';
import { Section } from '../../containers';
import { SECTIONS } from '../../../constants';
import useCarouselScroll from '../../../hooks/useCarouselScroll.hook';
import { CarouselButtons } from '../../buttons';

type ProjectListPropType = { projects: ProjectType[] };

function ProjectList({ projects }: ProjectListPropType) {
  const { TITLE, SUBTITLE } = SECTIONS.PROJECTS;
  const { scrollToLeft, scrollToRight } = useCarouselScroll('.project-list');

  return (
    <Section className="flex flex-col gap-10 py-12 overflow-x-hidden">
      <Section.Title className="px-10 text-gray-500 dark:text-gray-100 transition delay-300 duration-500 font-thin wrap-break-word">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="flex flex-col gap-2">
        <div className="project-list flex flex-row h-(--project-section-height) px-10 gap-8 overflow-x-hidden">
          {projects.map((p, i) => (
            <ProjectListItem key={'projectItem' + i} ProjectID={i} {...p} />
          ))}
        </div>
        <div className="flex flex-row px-12 gap-3 justify-end">
          <CarouselButtons leftAction={scrollToLeft} rightAction={scrollToRight} />
        </div>
      </Section.Content>
    </Section>
  );
}

export default React.memo(ProjectList);
