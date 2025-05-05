import { useState } from 'react';
import { ThemeContext } from '../contexts';
import { ThemeType } from '../contexts/theme.context';
import { useSystemConfig } from '../hooks/useSystemConfig.hook';

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const { defaultTheme } = useSystemConfig();
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
