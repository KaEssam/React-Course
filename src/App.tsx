import { startTransition, useOptimistic, useState } from 'react';
import './App.css';

async function saveLike(next: number) {
  await new Promise((r) => setTimeout(r, 1000));
  return next;
}

function App() {
  const [like, setLike] = useState(0);
  console.log('db value', like);
  const [optimstic, addOptmistic] = useOptimistic(
    like,
    (_current, next: number) => next,
  );
  console.log('ui value', optimstic);

  function HandelLike() {
    startTransition(async () => {
      addOptmistic(optimstic + 1);
      const save = await saveLike(optimstic + 1);
      setLike(save);
    });
  }
  return (
    <>
      <button onClick={HandelLike}>{optimstic}</button>
    </>
  );
}

export default App;
