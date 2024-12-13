import React from "react";
import { ProjectListItem } from ".";
import { ProjectType } from "../types/Project.Type";
import { TextTitle } from "./labels";

type ProjectListPropType = {
  projects: ProjectType[]
}

function ProjectList({ projects }: ProjectListPropType) {
  return (
    <div className="flex flex-col gap-10 p-10 overflow-x-hidden">
      <TextTitle>Projects</TextTitle>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 hd:grid-cols-2 fhd:grid-cols-4">
        {projects.map((p, i) => (
          <ProjectListItem
            key={"projectItem" + i}
            ProjectID={i}
            {...p}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(ProjectList);
