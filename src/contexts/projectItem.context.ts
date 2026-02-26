import React, { createContext } from 'react';
import { ProjectItemType } from '../types/Project.Type';

export type ProjectItemContextPropType = {
  projectItem: ProjectItemType | null;
  setProjectItem: React.Dispatch<React.SetStateAction<ProjectItemType | null>>;
};

export const ProjectItemContext = createContext<ProjectItemContextPropType>({
  projectItem: null,
  setProjectItem: () => {}
});
