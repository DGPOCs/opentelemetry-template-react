import { useCallback } from 'react'
import { useAsyncData } from './useAsyncData'
import { getLatestNews } from '../services/newsService'
import type { NewsResponse } from '../types/news'

export function useNews() {
  const fetcher = useCallback((signal: AbortSignal) => getLatestNews(signal), [])
  return useAsyncData<NewsResponse>({ fetcher })
}
