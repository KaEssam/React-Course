import { useEffect, useState } from 'react';
import './App.css';

type post = { id: number; title: string };
function App() {
  const [posts, setPosts] = useState<post[]>([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((r) => r.json())
  //     .then(setPosts);
  // }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then(setPosts)
      .catch((e) => {
        if (e.name !== 'AbortError') console.error(e);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
