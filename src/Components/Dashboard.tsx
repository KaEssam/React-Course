import type { Theme, User } from '../types';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface Props {
  user: User;
  theme: Theme;
  toggleTheme: () => void;
  logout: () => void;
}

export function Dashboard({ user, theme, toggleTheme, logout }: Props) {
  return (
    <>
      <Header user={user} logout={logout} />
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
