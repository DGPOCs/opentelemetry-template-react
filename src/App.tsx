import { useCallback } from 'react';
import './App.css';
import { PageLayout } from './components/layout/PageLayout';
import { SiteFooter } from './components/layout/SiteFooter';
import { CryptoList } from './components/crypto/CryptoList';
import { NewsList } from './components/news/NewsList';
import { Section } from './components/shared/Section';
import { LoadingState } from './components/shared/LoadingState';
import { ErrorState } from './components/shared/ErrorState';
import { useApiData } from './hooks/useApiData';
import { getTopCryptocurrencies } from './services/cryptoService';
import { getLatestNews } from './services/newsService';

function App() {
  const loadCryptos = useCallback(() => getTopCryptocurrencies(5), []);
  const loadNews = useCallback(() => getLatestNews(), []);

  const {
    data: cryptos,
    loading: cryptosLoading,
    error: cryptosError,
    refresh: refreshCryptos,
  } = useApiData(loadCryptos, []);

  const {
    data: news,
    loading: newsLoading,
    error: newsError,
    refresh: refreshNews,
  } = useApiData(loadNews, []);

  return (
    <PageLayout>
      <main className="app">
        <header className="hero">
          <div className="hero__content">
            <span className="hero__badge">Observabilidad en acción</span>
            <h1>Panel tecnológico en tiempo real</h1>
            <p>
              Consulta las criptomonedas más relevantes del mercado y mantente al día con las últimas
              noticias tecnológicas de DEV.to, todo en un mismo lugar.
            </p>
          </div>
          <div className="hero__glow" aria-hidden />
        </header>

        <Section
          title="Top 5 criptomonedas"
          subtitle="Seguimiento diario de las criptomonedas más populares"
          actionSlot={
            <button type="button" className="button button--ghost" onClick={refreshCryptos}>
              Actualizar
            </button>
          }
        >
          {cryptosLoading && <LoadingState message="Cargando cotizaciones..." />}
          {cryptosError && !cryptosLoading && (
            <ErrorState message={cryptosError} onRetry={refreshCryptos} />
          )}
          {cryptos && !cryptosError && !cryptosLoading && <CryptoList items={cryptos} />}
        </Section>

        <Section
          title="Noticias tecnológicas"
          subtitle="Artículos recientes desde DEV.to"
          actionSlot={
            <button type="button" className="button button--ghost" onClick={refreshNews}>
              Actualizar
            </button>
          }
        >
          {newsLoading && <LoadingState message="Buscando noticias..." />}
          {newsError && !newsLoading && <ErrorState message={newsError} onRetry={refreshNews} />}
          {news && !newsError && !newsLoading && <NewsList items={news} />}
        </Section>
      </main>
      <SiteFooter />
    </PageLayout>
  );
}

export default App;
