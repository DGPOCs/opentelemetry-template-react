const creators = [
  {
    name: 'Daniel García García',
    role: 'Arquitecto de Software',
    url: 'https://www.linkedin.com/in/daniel-garc%C3%ADa-garc%C3%ADa/',
  },
  {
    name: 'Gabriel Andújar',
    role: 'Ingeniero de Software',
    url: 'https://www.linkedin.com/in/gabrielandujar/',
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <h2>Creadores</h2>
        <p>
          Este panel fue creado por un equipo apasionado por la observabilidad y las interfaces modernas.
          Síguelos en LinkedIn.
        </p>
        <ul className="site-footer__creators">
          {creators.map((creator) => (
            <li key={creator.url}>
              <a href={creator.url} target="_blank" rel="noopener noreferrer">
                <span className="site-footer__name">{creator.name}</span>
                <span className="site-footer__role">{creator.role}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
