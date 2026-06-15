import type { User } from '../types';

interface Props {
  user: User;
  logout: () => void;
}

export function UserList({ user, logout }: Props) {
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
