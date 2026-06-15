import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Theme } from '../types';

//1
interface ThemeCTX {
  theme: Theme;
  toggleTheme: () => void;
}

//2
const ThemeContext = createContext<ThemeCTX | null>(null);

//3
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used');

  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
