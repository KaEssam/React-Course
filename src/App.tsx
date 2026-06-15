import { useState } from 'react';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import type { Theme, User } from './types';

function App() {
  const [user] = useState<User>({ id: 1, name: 'Karim Essam', role: 'Admin' });
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const logout = () => alert('Logged out');
  return (
    <Dashboard
      user={user}
      theme={theme}
      toggleTheme={toggleTheme}
      logout={logout}
    />
  );
}

export default App;
