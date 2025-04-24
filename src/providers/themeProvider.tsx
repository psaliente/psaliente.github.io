import { useState } from 'react';
import { ThemeContext } from '../contexts';
import { ThemeType } from '../contexts/theme.context';

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
