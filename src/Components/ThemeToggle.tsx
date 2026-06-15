import { useStore } from '../store/useStore';

export function ThemeToggle() {
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  return <button onClick={toggleTheme}>{theme}</button>;
}
