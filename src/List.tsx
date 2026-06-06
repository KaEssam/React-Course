const data = [
  { id: 1, title: 'task1', status: 'active' },
  { id: 2, title: 'task2', status: 'inactive' },
  { id: 3, title: 'task2', status: 'inactive' },
];

export function List() {
  return (
    <ul>
      {data.map((i) => (
        <li key={i.id}>
          <p>{i.id}</p>
          <p>{i.title}</p>
          <p>{i.status}</p>
        </li>
      ))}
    </ul>
  );
}
