export const NEWS_SERVICE_URL =
  import.meta.env.VITE_NEWS_SERVICE_URL ?? 'http://localhost:8000'

export const CRYPTO_SERVICE_URL =
  import.meta.env.VITE_CRYPTO_SERVICE_URL ?? 'http://localhost:3000'

export const CRYPTO_LIMIT = Number.parseInt(
  import.meta.env.VITE_CRYPTO_LIMIT ?? '5',
  10,
)

export const APP_TITLE = 'Radar tecnológico'
