# OpenTelemetry React Dashboard

Interfaz moderna en React para visualizar las métricas publicadas por los microservicios de noticias tecnológicas (Python) y cotizaciones de criptomonedas (Node.js) del ecosistema DGPOCs.

## Características

- React 19 + Vite + TypeScript.
- Consultas de datos centralizadas con React Query.
- Tailwind CSS y framer-motion para un diseño futurista con animaciones.
- Componentes reutilizables para métricas de criptomonedas y artículos de DEV.to.
- Integración lista para conectar con OpenTelemetry.

## Requisitos

- Node.js 20+
- npm 10+

## Configuración

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Configura las variables de entorno si los servicios corren en hosts diferentes:
   ```bash
   cp .env.example .env
   ```
   Edita `VITE_NEWS_API_URL` y `VITE_CRYPTO_API_URL` según tus endpoints.
3. Inicia el modo desarrollo:
   ```bash
   npm run dev
   ```

## Scripts

| Comando       | Descripción                           |
| ------------- | ------------------------------------- |
| `npm run dev` | Ejecuta el servidor de desarrollo.    |
| `npm run build` | Genera la build de producción.     |
| `npm run preview` | Sirve la build generada.         |

## Licencia

MIT
