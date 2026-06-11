import { useState } from 'react';

export function useToggle(init = false) {
  const [on, setOn] = useState(init);
  const toggle = () => setOn((v) => !v);

  return { on, toggle } as const;
}
