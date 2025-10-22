import { useCallback } from 'react'
import { useAsyncData } from './useAsyncData'
import { getTopCryptocurrencies } from '../services/cryptoService'
import type { CryptoResponse } from '../types/crypto'

export function useCryptocurrencies(limit?: number) {
  const fetcher = useCallback(
    (signal: AbortSignal) => getTopCryptocurrencies(limit, signal),
    [limit],
  )

  return useAsyncData<CryptoResponse>({ fetcher })
}
