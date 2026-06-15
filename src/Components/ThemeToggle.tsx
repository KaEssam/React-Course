import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { toggle } from '../store/themeSlice';

export function ThemeToggle() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(toggle())}>{theme}</button>;
}
