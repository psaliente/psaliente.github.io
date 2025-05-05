const useSystemConfig = () => {
  const getDarkModeConfig = window.matchMedia('(prefers-color-scheme: dark)');

  return {
    isDarkMode: getDarkModeConfig.matches
  };
};

export { useSystemConfig };
