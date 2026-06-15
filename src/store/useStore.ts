import { create } from 'zustand';
import type { Theme, User } from '../types';

interface AppState {
  user: User;
  theme: Theme;
  toggleTheme: () => void;
  logout: () => void;
}
// user = { id: 1, name: 'Karim Essam', role: 'Admin' },
// theme = "light",

//STORE = STATE + ACTION
export const useStore = create<AppState>()((set) => ({
  user: { id: 1, name: 'Karim Essam', role: 'Admin' },
  theme: 'light',

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
  logout: () =>
    set(() => ({
      user: { id: 0, name: 'GUEST', role: '' },
    })),
}));
