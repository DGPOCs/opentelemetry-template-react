import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Newspaper, Sparkles } from 'lucide-react';
import { SectionHeader } from './components/SectionHeader';
import { CryptoGrid } from './components/CryptoGrid';
import { NewsList } from './components/NewsList';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { useCryptocurrencies } from './hooks/useCryptocurrencies';
import { useNews } from './hooks/useNews';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const creators = [
  {
    name: 'Daniel García García',
    role: 'Cloud & Observability Specialist',
    linkedin: 'https://www.linkedin.com/in/daniel-garc%C3%ADa-garc%C3%ADa/'
  },
  {
    name: 'Gabriel Andújar',
    role: 'Software Architect & Developer Advocate',
    linkedin: 'https://www.linkedin.com/in/gabrielandujar/'
  }
];

function App() {
  const { data: cryptos, isLoading: cryptosLoading, isError: cryptosError, refetch: refetchCryptos } = useCryptocurrencies(5);
  const { data: articles, isLoading: newsLoading, isError: newsError, refetch: refetchNews } = useNews();

  const heroSubtitle = useMemo(
    () =>
      'Monitoriza tus criptomonedas favoritas y mantente al día con las últimas noticias tecnológicas de DEV.to. Todo en un único panel con estilo futurista.',
    []
  );

  return (
    <div className="min-h-screen bg-background/95 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-10 sm:px-8">
        <motion.header
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10 pb-14 shadow-2xl backdrop-blur"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/20" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/25 px-4 py-1 text-sm font-medium uppercase tracking-widest text-primary">
                <Sparkles className="h-4 w-4" />
                Observabilidad en acción
              </span>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                Panel en vivo de criptomonedas y noticias tecnológicas
              </h1>
              <p className="mt-4 text-lg text-slate-200">{heroSubtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                <a
                  href="https://github.com/DGPOCs/opentelemetry-template-nodejs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 font-medium text-secondary transition hover:bg-secondary/30"
                >
                  <Github className="h-4 w-4" />
                  Servicio de criptomonedas
                </a>
                <a
                  href="https://github.com/DGPOCs/opentelemetry-template-python"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-medium text-primary transition hover:bg-primary/30"
                >
                  <Github className="h-4 w-4" />
                  Servicio de noticias
                </a>
              </div>
            </div>
            <motion.div
              className="relative mx-auto mt-10 h-48 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-slate-200 shadow-lg sm:mt-0"
              variants={containerVariants}
            >
              <motion.div
                className="text-sm uppercase tracking-[0.35em] text-slate-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Salud de servicios
              </motion.div>
              <motion.div
                className="mt-4 flex flex-col gap-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <ServiceStatus name="Noticias" url="https://github.com/DGPOCs/opentelemetry-template-python" />
                <ServiceStatus name="Criptomonedas" url="https://github.com/DGPOCs/opentelemetry-template-nodejs" />
              </motion.div>
            </motion.div>
          </div>
        </motion.header>

        <main className="mt-16 flex flex-col gap-16">
          <section>
            <SectionHeader
              title="Top 5 Criptomonedas"
              subtitle="Consulta precios, variación en las últimas 24h y capitalización de mercado en tiempo real."
              action={
                <button
                  type="button"
                  onClick={() => refetchCryptos()}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-secondary/60 hover:text-secondary"
                >
                  Actualizar datos
                </button>
              }
            />
            {cryptosLoading ? <LoadingState message="Obteniendo cotizaciones..." /> : null}
            {cryptosError ? (
              <ErrorState
                message="No pudimos recuperar las cotizaciones. Intenta de nuevo."
                action={
                  <button
                    type="button"
                    onClick={() => refetchCryptos()}
                    className="rounded-full bg-secondary/20 px-4 py-2 font-medium text-secondary hover:bg-secondary/30"
                  >
                    Reintentar
                  </button>
                }
              />
            ) : null}
            {!cryptosLoading && !cryptosError && cryptos ? <CryptoGrid assets={cryptos} /> : null}
          </section>

          <section>
            <SectionHeader
              title="Últimas noticias de DEV.to"
              subtitle="Historias seleccionadas sobre tecnología, programación e inteligencia artificial."
              action={
                <a
                  href="https://dev.to/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-primary/60 hover:text-primary"
                >
                  <Newspaper className="h-4 w-4" />
                  Ir a DEV.to
                </a>
              }
            />
            {newsLoading ? <LoadingState message="Cargando noticias..." /> : null}
            {newsError ? (
              <ErrorState
                message="No pudimos recuperar las noticias. Intenta nuevamente."
                action={
                  <button
                    type="button"
                    onClick={() => refetchNews()}
                    className="rounded-full bg-primary/20 px-4 py-2 font-medium text-primary hover:bg-primary/30"
                  >
                    Reintentar
                  </button>
                }
              />
            ) : null}
            {!newsLoading && !newsError && articles ? <NewsList articles={articles} /> : null}
          </section>
        </main>

        <footer className="mt-20 rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-sm text-slate-300">
          <SectionHeader
            title="Creado por"
            subtitle="Conecta con las personas detrás de este laboratorio de observabilidad."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {creators.map((creator) => (
              <motion.a
                key={creator.linkedin}
                href={creator.linkedin}
                target="_blank"
                rel="noreferrer"
                className="gradient-border block rounded-2xl transition hover:-translate-y-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                variants={cardVariants}
              >
                <div className="rounded-2xl bg-slate-900/60 p-6 backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{creator.name}</p>
                      <p className="text-sm text-slate-400">{creator.role}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="h-4 w-4" />
            Proyecto demo React + OpenTelemetry · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

interface ServiceStatusProps {
  name: string;
  url: string;
}

const ServiceStatus = ({ name, url }: ServiceStatusProps) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/60 p-4 text-slate-200 transition hover:border-secondary/60 hover:text-secondary"
  >
    <div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-slate-400">Servicios monitorizados</p>
    </div>
    <span className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      Saludable
    </span>
  </a>
);

export default App;
