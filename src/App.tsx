import './App.css';
import { useToggle } from './useToggle';

function App() {
  const { on, toggle } = useToggle();

  return (
    <>
      <button onClick={toggle}>{on ? 'Hide' : 'show'}</button>
      {on && <p>Hi</p>}

      <button onClick={toggle}>{on ? 'Hide' : 'show'}</button>
      {on && <p>Hi</p>}

      <button onClick={toggle}>{on ? 'Hide' : 'show'}</button>
      {on && <p>Hi</p>}
    </>
  );
}

export default App;
