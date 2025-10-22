import type { Cryptocurrency } from '../types/crypto';
import { CryptoCard } from './CryptoCard';

interface CryptoGridProps {
  assets: Cryptocurrency[];
}

export const CryptoGrid = ({ assets }: CryptoGridProps) => (
  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
    {assets.map((asset) => (
      <CryptoCard key={asset.id} asset={asset} />
    ))}
  </div>
);
