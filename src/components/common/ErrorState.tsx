import { ReactNode } from 'react';
import './ErrorState.css';

interface ErrorStateProps {
  title?: string;
  description: string;
  action?: ReactNode;
}

export function ErrorState({ title = 'Ups, algo salió mal', description, action }: ErrorStateProps) {
  return (
    <div className="error-state" role="alert">
      <div className="error-state__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {action ? <div className="error-state__action">{action}</div> : null}
    </div>
  );
}
