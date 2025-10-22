const DEFAULT_NEWS_API = 'http://localhost:8000';
const DEFAULT_CRYPTO_API = 'http://localhost:3000';

export const endpoints = {
  news: `${import.meta.env.VITE_NEWS_API_URL ?? DEFAULT_NEWS_API}`,
  crypto: `${import.meta.env.VITE_CRYPTO_API_URL ?? DEFAULT_CRYPTO_API}`
} as const;

export const routes = {
  health: '/health',
  news: '/news',
  cryptocurrencies: '/api/cryptocurrencies'
} as const;

export const requestTimeout = 12000;
