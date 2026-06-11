import { useQuery } from '@tanstack/react-query';
import './App.css';

type post = { id: number; title: string };

async function fetchData(): Promise<post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}
function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{(error as Error).message}</p>;
  return (
    <>
      <ul>
        {data!.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
