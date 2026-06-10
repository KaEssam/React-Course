import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  console.log('render', count);
  function handelClick() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function handelLeftClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handelClick}>+3</button>
      <button onClick={handelLeftClick}>+3</button>
    </>
  );
}

export default App;
