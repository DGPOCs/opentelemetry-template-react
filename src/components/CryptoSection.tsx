import { useEffect, useMemo, useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { fetchCryptocurrencies } from '../api/crypto.ts';
import type { Cryptocurrency } from '../types/crypto.ts';
import { Section } from './common/Section.tsx';
import { LoadingState } from './common/LoadingState.tsx';
import { ErrorState } from './common/ErrorState.tsx';
import { CryptoCard } from './CryptoCard.tsx';
import './CryptoSection.css';

export function CryptoSection() {
  const [cryptos, setCryptos] = useState<Cryptocurrency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadCryptos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchCryptocurrencies(5);
      setCryptos(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error inesperado al cargar criptomonedas');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCryptos().catch(() => {
      // manejado en loadCryptos
    });
    const intervalId = window.setInterval(() => {
      loadCryptos().catch(() => undefined);
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  const subtitle = useMemo(() => {
    if (lastUpdated) {
      const minutes = Math.round((lastUpdated.getTime() - Date.now()) / 60000);
      return `Actualizado ${new Intl.RelativeTimeFormat('es', { numeric: 'auto' }).format(minutes, 'minute')}`;
    }

    return 'Consulta las criptomonedas más populares en tiempo real';
  }, [lastUpdated]);

  const actionSlot = (
    <button type="button" className="icon-button" onClick={() => loadCryptos()} title="Actualizar listado">
      <FiRefreshCw aria-hidden="true" />
      <span>Actualizar</span>
    </button>
  );

  return (
    <Section title="Top Criptomonedas" description={subtitle} actionSlot={actionSlot}>
      {isLoading ? (
        <LoadingState message="Obteniendo las últimas cotizaciones..." />
      ) : error ? (
        <ErrorState
          description={error}
          action={
            <button type="button" onClick={() => loadCryptos()}>
              Reintentar
            </button>
          }
        />
      ) : (
        <div className="crypto-grid">
          {cryptos.map((asset, index) => (
            <CryptoCard key={asset.id} asset={asset} index={index} />
          ))}
        </div>
      )}
    </Section>
  );
}
