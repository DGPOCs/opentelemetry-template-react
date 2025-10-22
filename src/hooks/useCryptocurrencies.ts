import { useQuery } from '@tanstack/react-query';
import { endpoints, requestTimeout, routes } from '../config/api';
import type { CryptoResponse, Cryptocurrency } from '../types/crypto';

const fetchCryptocurrencies = async (limit = 5): Promise<Cryptocurrency[]> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeout);

  try {
    const response = await fetch(`${endpoints.crypto}${routes.cryptocurrencies}?limit=${limit}`, {
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error('No se pudieron obtener las cotizaciones');
    }

    const data = (await response.json()) as CryptoResponse;
    return data.data;
  } finally {
    clearTimeout(timeout);
  }
};

export const useCryptocurrencies = (limit = 5) =>
  useQuery({
    queryKey: ['cryptocurrencies', limit],
    queryFn: () => fetchCryptocurrencies(limit),
    staleTime: 1000 * 60,
    retry: 1
  });
