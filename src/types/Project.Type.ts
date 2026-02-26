export type ProjectType = 'console' | 'cross-platform' | 'desktop' | 'generic' | 'mobile' | 'web';

export type ProjectItemType = {
  Title: string;
  Description: string;
  Type?: ProjectType;
  DevType?: 'fe' | 'be' | 'data' | 'full';
  Link?: string;
  Role: string[];
  Languages: string[];
  Libraries?: string[];
  Frameworks?: string[];
  Tools?: string[];
  Platforms?: string[];
};
