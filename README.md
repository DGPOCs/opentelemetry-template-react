# Tech Pulse Dashboard

Frontend moderno construido con React 18 + Vite para mostrar, en un solo panel, las últimas
cotizaciones de criptomonedas provenientes del servicio Node.js y las noticias tecnológicas
recogidas por el servicio Python.

## Requisitos previos

- Node.js 18 o superior
- PNPM, npm o Yarn (ejemplos usando `npm`)

## Configuración

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env` (opcional) en la raíz del proyecto para configurar los endpoints si
   difieren de los valores por defecto:

   ```env
   VITE_CRYPTO_API_BASE_URL=http://localhost:3000
   VITE_NEWS_API_BASE_URL=http://localhost:8000
   ```

   - El servicio Node.js expone `/api/cryptocurrencies` y acepta el parámetro `limit`.
   - El servicio Python expone `/news` con las últimas noticias de DEV.to.

## Scripts disponibles

- `npm run dev`: levanta el servidor de desarrollo con Vite.
- `npm run build`: genera la versión optimizada para producción.
- `npm run preview`: sirve la build de producción.
- `npm run lint`: ejecuta ESLint con la configuración del proyecto.

## Arquitectura de la interfaz

El panel está compuesto por dos secciones reutilizables, cada una basada en el componente genérico
`Section`:

- **Top Criptomonedas**: muestra las 5 primeras monedas solicitando `limit=5` al servicio Node.js.
  Incluye tarjetas con gráficas dinámicas creadas con `recharts` y estados de carga/error.
- **Noticias Destacadas**: lista las noticias recientes de DEV.to obtenidas desde el servicio Python,
  resaltando autor, fecha relativa y etiquetas.

Al final de la página se presenta un bloque con la autoría y enlaces a los perfiles de LinkedIn de
Daniel García García y Gabriel Andújar.

## Licencia

[MIT](LICENSE)
