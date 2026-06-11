import { useEffect, useState } from 'react';
import './App.css';
import { api } from './client';

type post = { id: number; title: string; body: string };
function App() {
  const [posts, setPosts] = useState<post[]>([]);

  useEffect(() => {
    api.get('/posts').then((res) => {
      setPosts(res.data);
    });
  },[]);
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
