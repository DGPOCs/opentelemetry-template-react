import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp } from 'lucide-react';
import type { Cryptocurrency } from '../types/crypto';
import { MiniTrendChart } from './MiniTrendChart';

interface CryptoCardProps {
  asset: Cryptocurrency;
}

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

export const CryptoCard = ({ asset }: CryptoCardProps) => {
  const isPositive = asset.percent_change_24h >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <motion.article
      className="gradient-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      variants={cardVariants}
    >
      <div className="h-full rounded-2xl bg-slate-900/60 p-6 backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wider text-slate-400">#{asset.rank}</p>
            <h3 className="mt-1 text-2xl font-semibold text-white">{asset.name}</h3>
            <p className="text-sm text-slate-300">{asset.symbol}</p>
          </div>
          <span
            className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${isPositive ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'}`}
          >
            <TrendIcon className="h-4 w-4" />
            {asset.percent_change_24h.toFixed(2)}%
          </span>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="text-3xl font-semibold text-white">
            {asset.price_usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </div>
          <p className="text-sm text-slate-400">
            Capitalización de mercado:{' '}
            <span className="font-medium text-slate-200">
              {asset.market_cap_usd.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
              })}
            </span>
          </p>
        </div>

        <div className="mt-6 h-20">
          <MiniTrendChart price={asset.price_usd} percentChange={asset.percent_change_24h} />
        </div>
      </div>
    </motion.article>
  );
};
