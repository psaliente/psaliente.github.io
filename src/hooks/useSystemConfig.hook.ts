import { ThemeType } from '../contexts/theme.context';

const useSystemConfig = () => {
  const getDarkModeConfig = window.matchMedia('(prefers-color-scheme: dark)');
  const defaultTheme: ThemeType = getDarkModeConfig.matches ? 'dark' : 'light';

  return {
    isDarkMode: getDarkModeConfig.matches,
    defaultTheme
  };
};

export { useSystemConfig };
