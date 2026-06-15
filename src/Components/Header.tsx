import type { User } from '../types';
import { UserList } from './UserList';

interface Props {
  user: User;
  logout: () => void;
}

export function Header({ user, logout }: Props) {
  return (
    <header>
      <h1>Team Dashboard</h1>
      <UserList user={user} logout={logout} />
    </header>
  );
}
