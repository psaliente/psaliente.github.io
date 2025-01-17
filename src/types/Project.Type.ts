export type ProjectType = {
  Title: string;
  Description: string;
  Type?: 'console' | 'cross-platform' | 'desktop' | 'generic' | 'mobile' | 'web';
  Link?: string;
  Role: string[];
  Languages: string[];
};
