import { API_ENDPOINTS } from '../config/api.ts';
import type { CryptoApiResponse, Cryptocurrency } from '../types/crypto.ts';

export async function fetchCryptocurrencies(limit = 5): Promise<Cryptocurrency[]> {
  const url = new URL(API_ENDPOINTS.crypto);
  url.searchParams.set('limit', String(limit));

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('No se pudo recuperar la información de criptomonedas');
  }

  const payload: CryptoApiResponse = await response.json();
  return payload.data;
}
