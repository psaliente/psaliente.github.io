import React from 'react';
import ProjectListItem from './projecListItem.component';
import { ProjectType } from '../../../types/Project.Type';
import { Section } from '../../containers';
import { SECTIONS } from '../../../constants';

type ProjectListPropType = {
  projects: ProjectType[];
};

function ProjectList({ projects }: ProjectListPropType) {
  const { TITLE, SUBTITLE } = SECTIONS.PROJECTS;

  return (
    <Section className="flex flex-col gap-10 px-10 py-12 overflow-x-hidden">
      <Section.Title className="text-gray-500 dark:text-gray-100 transition delay-300 duration-500 font-thin wrap-break-word">
        <Section.Title.Gradient>{TITLE}</Section.Title.Gradient>
        {SUBTITLE}
      </Section.Title>
      <Section.Content className="grid grid-cols-1 gap-x-8 gap-y-12 fhd:grid-cols-2 qhd:grid-cols-3 uhd:grid-cols-4">
        {projects.map((p, i) => (
          <ProjectListItem key={'projectItem' + i} ProjectID={i} {...p} />
        ))}
      </Section.Content>
    </Section>
  );
}

export default React.memo(ProjectList);
