import { useState } from 'react';
import './App.css';
import { useFetch } from './useFetch';

type post = { id: number; title: string };
function App() {
  const [posts, setPosts] = useState<post[]>([]);

  const { data, loading, error } = useFetch<post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <ul>
        {data?.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
