import type { PropsWithChildren, ReactNode } from 'react'

interface SectionProps extends PropsWithChildren {
  title: string
  description?: ReactNode
  action?: ReactNode
}

export function Section({ title, description, action, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section__header">
        <div>
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__description">{description}</p>}
        </div>
        {action && <div className="section__action">{action}</div>}
      </div>
      <div className="section__content">{children}</div>
    </section>
  )
}
