import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  console.log('render => count = ', count);
  return (
    <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
  );
}
