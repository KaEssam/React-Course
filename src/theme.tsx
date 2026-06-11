import React, { createContext, useState } from 'react';

type Theme = 'light' | 'dark';
type ctx = { theme: Theme; toggle: () => void };

export const ThemeContext = createContext<ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const toggle = () => setTheme((t) => (t == 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export function useTheme() {
//   const ctx =
//   return ctx;
// }
