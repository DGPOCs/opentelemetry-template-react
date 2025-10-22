import { PropsWithChildren, ReactNode } from 'react';
import './Section.css';

interface SectionProps extends PropsWithChildren {
  title: string;
  description?: string;
  actionSlot?: ReactNode;
}

export function Section({ title, description, actionSlot, children }: SectionProps) {
  return (
    <section className="section">
      <header className="section__header">
        <div>
          <h2>{title}</h2>
          {description ? <p className="section__description">{description}</p> : null}
        </div>
        {actionSlot ? <div className="section__actions">{actionSlot}</div> : null}
      </header>
      <div className="section__content">{children}</div>
    </section>
  );
}
