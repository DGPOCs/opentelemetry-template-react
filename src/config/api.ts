const cryptoBaseUrl = import.meta.env.VITE_CRYPTO_API_BASE_URL ?? 'http://localhost:3000';
const newsBaseUrl = import.meta.env.VITE_NEWS_API_BASE_URL ?? 'http://localhost:8000';

export const API_ENDPOINTS = {
  crypto: `${cryptoBaseUrl}/api/cryptocurrencies`,
  news: `${newsBaseUrl}/news`
};
