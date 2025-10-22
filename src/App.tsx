import { CryptoSection } from './components/CryptoSection.tsx';
import { NewsSection } from './components/NewsSection.tsx';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__badge">OpenTelemetry Showcase</div>
        <h1>
          Tech Pulse Dashboard
          <span>Monitorea criptomonedas y descubre lo último en tecnología</span>
        </h1>
        <p>
          Este panel combina métricas financieras con tendencias tecnológicas usando servicios
          instrumentados con OpenTelemetry. Toda la información llega en tiempo real desde APIs
          construidas con Node.js y Python.
        </p>
      </header>

      <main className="content">
        <CryptoSection />
        <NewsSection />
      </main>

      <footer className="creators" aria-labelledby="creators-heading">
        <h2 id="creators-heading">Creado por</h2>
        <p>
          <a href="https://www.linkedin.com/in/daniel-garc%C3%ADa-garc%C3%ADa/" target="_blank" rel="noreferrer">
            Daniel García García
          </a>
          ·
          <a href="https://www.linkedin.com/in/gabrielandujar/" target="_blank" rel="noreferrer">
            Gabriel Andújar
          </a>
        </p>
        <span>
          Proyecto demostrativo de observabilidad con React 18, Vite y OpenTelemetry. Inspirado en datos
          reales de las comunidades DEV.to y Coinlore.
        </span>
      </footer>
    </div>
  );
}

export default App;
