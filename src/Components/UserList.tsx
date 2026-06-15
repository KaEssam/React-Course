import { useStore } from '../store/useStore';

export function UserList() {
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
