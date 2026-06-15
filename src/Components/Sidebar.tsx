import type { Theme } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface Prop {
  theme: Theme;
  toggleTheme: () => void;
}

export function Sidebar({ theme, toggleTheme }: Prop) {
  return (
    <aside>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </aside>
  );
}
