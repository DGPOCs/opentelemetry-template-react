import { NEWS_API_BASE_URL } from '../config/env';
import { fetchJson } from './apiClient';
import type { NewsResponse } from '../types/news';

export async function getLatestNews() {
  const url = `${NEWS_API_BASE_URL}/news`;
  const response = await fetchJson<NewsResponse>(url);
  return response.articles;
}
