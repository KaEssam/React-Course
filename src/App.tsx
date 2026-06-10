import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `clicked ${count}`;
  //   }, [count]);

  //   return (
  //     <>
  //       <button onClick={() => setCount((c) => c + 1)}>Count :{count}</button>
  //     </>
  //   );
  // }

  ////////////////////////////////////

  const [sec, setSec] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <>
      <p>sec:{sec}</p>
    </>
  );
}

export default App;
