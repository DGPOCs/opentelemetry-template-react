import type { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  actionSlot?: React.ReactNode;
}

export function Section({ title, subtitle, actionSlot, children }: SectionProps) {
  return (
    <section className="section">
      <header className="section__header">
        <div>
          <h2 className="section__title">{title}</h2>
          {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
        </div>
        {actionSlot ? <div className="section__actions">{actionSlot}</div> : null}
      </header>
      <div className="section__content">{children}</div>
    </section>
  );
}
