export const NEWS_API_BASE_URL =
  import.meta.env.VITE_NEWS_API_BASE_URL ?? 'http://localhost:8000';

export const CRYPTO_API_BASE_URL =
  import.meta.env.VITE_CRYPTO_API_BASE_URL ?? 'http://localhost:3000';

export const DEFAULT_REQUEST_TIMEOUT = Number(
  import.meta.env.VITE_API_TIMEOUT ?? 15000,
);
