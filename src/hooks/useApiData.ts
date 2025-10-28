import { useCallback, useEffect, useState } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

export function useApiData<T>(loader: () => Promise<T>, deps: unknown[] = []): ApiState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  const refresh = useCallback(() => setReloadToken((value) => value + 1), []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    loader()
      .then((result) => {
        if (!isMounted) return;
        setData(result);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : 'Unexpected error');
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [...deps, loader, reloadToken]);

  return { data, loading, error, refresh };
}
