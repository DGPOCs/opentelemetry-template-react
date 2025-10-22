const creators = [
  {
    name: 'Daniel García García',
    role: 'Cloud & Observability Advocate',
    link: 'https://www.linkedin.com/in/daniel-garc%C3%ADa-garc%C3%ADa/',
  },
  {
    name: 'Gabriel Andújar',
    role: 'Solutions Architect',
    link: 'https://www.linkedin.com/in/gabrielandujar/',
  },
]

export function PageFooter() {
  return (
    <footer className="page-footer">
      <div>
        <h2>Creadores</h2>
        <p>Conecta con las mentes detrás de este laboratorio de observabilidad.</p>
      </div>
      <ul className="creators">
        {creators.map((creator) => (
          <li key={creator.name} className="creators__item">
            <h3>{creator.name}</h3>
            <p>{creator.role}</p>
            <a href={creator.link} target="_blank" rel="noreferrer" className="button button--link">
              LinkedIn
            </a>
          </li>
        ))}
      </ul>
      <p className="page-footer__note">
        Construido con React, Vite y mucho cariño por el ecosistema open source.
      </p>
    </footer>
  )
}
