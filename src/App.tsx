import { useReducer } from 'react';
import './App.css';

type state = { count: number };
type action = { type: 'inc' } | { type: 'dec' };

function reducer(state: state, action: action) {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <p>Items: {state.count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
    </>
  );
}

export default App;
