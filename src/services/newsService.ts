import { NEWS_SERVICE_URL } from '../config'
import { fetchJson } from './httpClient'
import type { NewsResponse } from '../types/news'

export async function getLatestNews(signal?: AbortSignal): Promise<NewsResponse> {
  const url = new URL('/news', NEWS_SERVICE_URL)
  return fetchJson<NewsResponse>(url, { signal })
}
