import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface MiniTrendChartProps {
  price: number;
  percentChange: number;
}

const buildSeries = (price: number, percentChange: number) => {
  const points = 8;
  const delta = percentChange / 100;
  const denominator = 1 + delta;
  const startPrice = denominator === 0 ? price * 0.5 : price / denominator;

  return Array.from({ length: points }, (_, index) => {
    const progress = index / (points - 1);
    const value = startPrice * (1 + delta * progress);
    return { name: index, value: Number(value.toFixed(2)) };
  });
};

export const MiniTrendChart = ({ price, percentChange }: MiniTrendChartProps) => {
  const data = buildSeries(price, percentChange);
  const isPositive = percentChange >= 0;

  return (
    <ResponsiveContainer width="100%" height={72}>
      <AreaChart data={data} margin={{ top: 12, bottom: 0, left: 0, right: 0 }}>
        <defs>
          <linearGradient id={`trend-${isPositive ? 'up' : 'down'}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isPositive ? '#22D3EE' : '#F87171'} stopOpacity={0.9} />
            <stop offset="100%" stopColor={isPositive ? '#22D3EE' : '#F87171'} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke={isPositive ? '#22D3EE' : '#F87171'}
          strokeWidth={2}
          fill={`url(#trend-${isPositive ? 'up' : 'down'})`}
          isAnimationActive
          animationDuration={700}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
