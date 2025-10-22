import { useEffect, useState } from 'react';
import { fetchNews } from '../api/news.ts';
import type { NewsArticle } from '../types/news.ts';
import { Section } from './common/Section.tsx';
import { LoadingState } from './common/LoadingState.tsx';
import { ErrorState } from './common/ErrorState.tsx';
import { NewsCard } from './NewsCard.tsx';
import './NewsSection.css';

export function NewsSection() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadNews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchNews();
      setArticles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado al cargar noticias');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNews().catch(() => {
      // manejado arriba
    });
  }, []);

  return (
    <Section
      title="Noticias Destacadas de DEV.to"
      description="Lo último en inteligencia artificial, programación y tecnología"
    >
      {isLoading ? (
        <LoadingState message="Buscando noticias recientes..." />
      ) : error ? (
        <ErrorState
          description={error}
          action={
            <button type="button" onClick={() => loadNews()}>
              Reintentar
            </button>
          }
        />
      ) : (
        <div className="news-list">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </Section>
  );
}
