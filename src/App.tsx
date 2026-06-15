import './App.css';
import { Dashboard } from './Components/Dashboard';
import { ThemeProvider } from './Context/ThemeContext';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
