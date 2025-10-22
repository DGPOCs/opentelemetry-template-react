import { CRYPTO_API_BASE_URL } from '../config/env';
import { fetchJson } from './apiClient';
import type { CryptoResponse } from '../types/crypto';

export async function getTopCryptocurrencies(limit = 5) {
  const params = new URLSearchParams({ limit: String(limit) });
  const url = `${CRYPTO_API_BASE_URL}/api/cryptocurrencies?${params.toString()}`;
  const response = await fetchJson<CryptoResponse>(url);
  return response.data;
}
