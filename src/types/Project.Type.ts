export type ProjectType = {
  Title: string;
  Description: string;
  Type?: 'console' | 'cross-platform' | 'desktop' | 'generic' | 'mobile' | 'web';
  DevType?: 'fe' | 'be' | 'data' | 'full';
  Link?: string;
  Role: string[];
  Languages: string[];
  Libraries?: string[];
  Frameworks?: string[];
  Tools?: string[];
  Platforms?: string[];
};
