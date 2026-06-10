import { useState } from 'react';
import './App.css';

const data = ['React', 'Next', 'Angular', 'NodeJs'];

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
function App() {
  const [q, setQ] = useState('');
  const filterList = data.filter((i) =>
    i.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <SearchInput value={q} onChange={setQ} />
      <List items={filterList} />
    </>
  );
}

export default App;
