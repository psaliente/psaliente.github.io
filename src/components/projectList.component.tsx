import React from "react";
import { ProjectListItem } from ".";
import { ProjectType } from "../types/Project.Type";
import { Section } from "./containers";

type ProjectListPropType = {
  projects: ProjectType[]
}

function ProjectList({ projects }: ProjectListPropType) {
  return (
    <Section className="flex flex-col gap-10 px-10 py-12 overflow-x-hidden">
      <Section.Title>
        <Section.Title.Gradient>
          Projects
        </Section.Title.Gradient>
      </Section.Title>
      <Section.Content className="grid grid-cols-1 gap-x-8 gap-y-12 hd:grid-cols-2 fhd:grid-cols-4">
        {projects.map((p, i) => (
          <ProjectListItem
            key={"projectItem" + i}
            ProjectID={i}
            {...p}
          />
        ))}
      </Section.Content>
    </Section>
  );
}

export default React.memo(ProjectList);
