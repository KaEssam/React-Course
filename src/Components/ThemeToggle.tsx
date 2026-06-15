import type { Theme } from '../types';

interface Prop {
  theme: Theme;
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: Prop) {
  return <button onClick={toggleTheme}>Switch Theme</button>;
}
