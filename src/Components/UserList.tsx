import { useUser } from '../Context/UserContext';

export function UserList() {
  const { user, logout } = useUser();
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
