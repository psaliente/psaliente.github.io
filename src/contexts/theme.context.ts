import { createContext } from 'react';

export type ThemeType = 'light' | 'dark';

export type ThemeContextPropsType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextPropsType>({
  theme: 'light',
  toggleTheme: () => {}
});
