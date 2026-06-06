const data = [
  { id: 1, title: 'task1', status: 'active' },
  { id: 2, title: 'task2', status: 'inactive' },
  { id: 3, title: 'task2', status: 'inactive' },
];

const loading = false;

export function List() {
  if (loading) return <p>Loading....</p>;
  return (
    // <>
    //   {data.length === 0 ? (
    //     <p>No Data yet</p>
    //   ) : (
    //     <ul>
    //       {data.map((i) => (
    //         <li key={i.id}>
    //           <p>{i.id}</p>
    //           <p>{i.title}</p>
    //           <p>{i.status}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </>

    // doaa way XD
    <>
      {data.length && (
        <ul>
          {data.map((i) => (
            <li key={i.id}>
              <p>{i.id}</p>
              <p>{i.title}</p>
              <p>{i.status}</p>
            </li>
          ))}
        </ul>
      )}

      {!data.length && <p>No Data yet</p>}
    </>
  );
}
