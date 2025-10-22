import { useMemo } from 'react';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { Cryptocurrency } from '../types/crypto.ts';
import './CryptoCard.css';

interface CryptoCardProps {
  asset: Cryptocurrency;
  index: number;
}

export function CryptoCard({ asset, index }: CryptoCardProps) {
  const { price_usd, percent_change_24h } = asset;
  const chartData = useMemo(() => {
    const previousPrice = price_usd / (1 + percent_change_24h / 100);
    return [
      { label: '24h', price: Number(previousPrice.toFixed(2)) },
      { label: 'Ahora', price: Number(price_usd.toFixed(2)) }
    ];
  }, [percent_change_24h, price_usd]);

  const isPositive = percent_change_24h >= 0;

  return (
    <article className="crypto-card">
      <header className="crypto-card__header">
        <span className="crypto-card__rank">#{index + 1}</span>
        <div>
          <h3>
            {asset.name}
            <span className="crypto-card__symbol">{asset.symbol}</span>
          </h3>
          <p className="crypto-card__market-cap">
            Capitalización:{' '}
            {Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(asset.market_cap_usd)}
          </p>
        </div>
      </header>

      <div className="crypto-card__price">
        <p className="crypto-card__current">
          {Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(price_usd)}
        </p>
        <span className={`crypto-card__change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <FiTrendingUp aria-hidden="true" /> : <FiTrendingDown aria-hidden="true" />}
          {percent_change_24h.toFixed(2)}%
        </span>
      </div>

      <div className="crypto-card__chart" role="img" aria-label={`Variación de ${asset.name} en las últimas 24 horas`}>
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={chartData}>
            <XAxis dataKey="label" hide />
            <YAxis hide domain={['auto', 'auto']} />
            <Tooltip
              formatter={(value: number) =>
                Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(value)
              }
              labelStyle={{ color: '#94a3b8' }}
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                color: '#e2e8f0'
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={isPositive ? '#34d399' : '#f87171'}
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 0, fill: '#38bdf8' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
