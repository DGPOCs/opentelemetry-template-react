import { CRYPTO_LIMIT, CRYPTO_SERVICE_URL } from '../config'
import { fetchJson } from './httpClient'
import type { CryptoResponse } from '../types/crypto'

export async function getTopCryptocurrencies(
  limit = CRYPTO_LIMIT,
  signal?: AbortSignal,
): Promise<CryptoResponse> {
  const url = new URL('/api/cryptocurrencies', CRYPTO_SERVICE_URL)
  url.searchParams.set('limit', String(limit))
  return fetchJson<CryptoResponse>(url, { signal })
}
