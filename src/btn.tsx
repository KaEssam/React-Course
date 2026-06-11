// import { useTheme } from './theme';

import { useContext } from 'react';
import { ThemeContext } from './theme';

export function BTN() {
  const { theme, toggle } = useContext(ThemeContext)!;
  return <button onClick={toggle}>{theme}</button>;
}
