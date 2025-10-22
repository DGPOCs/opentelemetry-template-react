import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface CardProps extends PropsWithChildren {
  variant?: 'default' | 'highlight';
}

export function Card({ children, variant = 'default' }: CardProps) {
  return <div className={clsx('card', variant === 'highlight' && 'card--highlight')}>{children}</div>;
}
