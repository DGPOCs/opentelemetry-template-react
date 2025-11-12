
import { useComponentTracer } from '../../hooks/useTracer';
import type { Cryptocurrency } from '../../types/crypto';
import { CryptoCard } from './CryptoCard';

interface CryptoListProps {
  items: Cryptocurrency[];
}

export function CryptoList({ items }: CryptoListProps) {
  useComponentTracer('CryptoList');
  return (
    <div className="crypto-grid">
      {items.map((crypto, index) => (
        <CryptoCard key={crypto.id} crypto={crypto} highlight={index === 0} />
      ))}
    </div>
  );
}
