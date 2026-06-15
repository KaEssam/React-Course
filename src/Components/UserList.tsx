import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { logout } from '../store/userSlice';

export function UserList() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
