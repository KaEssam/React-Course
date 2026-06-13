import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// any featch method
async function addPost(title: string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}
export function AddList() {
  const [title, setTitle] = useState('');
  const qc = useQueryClient();

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => mutation.mutate(title)}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Adding...' : 'Add'}
      </button>
    </>
  );
}
