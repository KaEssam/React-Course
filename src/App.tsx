import './App.css';
import { BTN } from './btn';
import { ThemeProvider } from './theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <BTN></BTN>
      </ThemeProvider>
    </>
  );
}

export default App;
