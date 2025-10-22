import { useCallback, useEffect, useState } from 'react'

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error'

interface Options<T> {
  fetcher: (signal: AbortSignal) => Promise<T>
  immediate?: boolean
}

export interface AsyncResult<T> {
  data: T | null
  status: AsyncStatus
  error: string | null
  refetch: () => void
}

export function useAsyncData<T>({ fetcher, immediate = true }: Options<T>): AsyncResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<AsyncStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const [counter, setCounter] = useState(0)

  const refetch = useCallback(() => {
    setCounter((value) => value + 1)
  }, [])

  useEffect(() => {
    if (!immediate && counter === 0) {
      return
    }

    const abortController = new AbortController()

    const load = async () => {
      setStatus('loading')
      setError(null)

      try {
        const result = await fetcher(abortController.signal)
        setData(result)
        setStatus('success')
      } catch (err) {
        if (abortController.signal.aborted) {
          return
        }
        const message = err instanceof Error ? err.message : 'Error desconocido'
        setError(message)
        setStatus('error')
      }
    }

    void load()

    return () => {
      abortController.abort()
    }
  }, [fetcher, counter, immediate])

  return { data, status, error, refetch }
}
