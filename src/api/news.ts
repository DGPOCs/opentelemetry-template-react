import { API_ENDPOINTS } from '../config/api.ts';
import type { NewsArticle, NewsResponse } from '../types/news.ts';

export async function fetchNews(): Promise<NewsArticle[]> {
  const response = await fetch(API_ENDPOINTS.news);

  if (!response.ok) {
    throw new Error('No se pudieron obtener las noticias tecnológicas');
  }

  const payload: NewsResponse = await response.json();
  return payload.articles;
}
