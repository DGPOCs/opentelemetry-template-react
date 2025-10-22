import { useQuery } from '@tanstack/react-query';
import { endpoints, requestTimeout, routes } from '../config/api';
import type { DevToArticle, NewsResponse } from '../types/news';

const fetchNews = async (): Promise<DevToArticle[]> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeout);

  try {
    const response = await fetch(`${endpoints.news}${routes.news}`, {
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error('No se pudieron obtener las noticias');
    }

    const data = (await response.json()) as NewsResponse;
    return data.articles;
  } finally {
    clearTimeout(timeout);
  }
};

export const useNews = () =>
  useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 10,
    retry: 1
  });
