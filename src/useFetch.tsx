import { useEffect, useState } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then(setData)
      .catch((e) => {
        if (e.name !== 'AbortError') console.error(e);
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
