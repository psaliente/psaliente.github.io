import React, { createContext } from 'react';
import { ProjectType } from '../types/Project.Type';

export type ProjectItemContextPropType = {
  projectItem: ProjectType | null;
  setProjectItem: React.Dispatch<React.SetStateAction<ProjectType | null>>;
};

export const ProjectItemContext = createContext<ProjectItemContextPropType>({
  projectItem: null,
  setProjectItem: () => {}
});
