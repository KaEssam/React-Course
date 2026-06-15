import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User } from '../types';

interface UserCtx {
  user: User;
  logout: () => void;
}

const UserContext = createContext<UserCtx | null>(null);

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useTheme must be used');

  return ctx;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User>({ id: 1, name: 'Karim Essam', role: 'Admin' });

  const logout = () => alert('Logged out');

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
}
