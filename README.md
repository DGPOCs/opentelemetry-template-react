# Radar tecnológico

Frontend en React + Vite que consume los servicios de referencia del ecosistema OpenTelemetry
para mostrar en tiempo real:

- Las últimas cotizaciones de criptomonedas expuestas por
  [`opentelemetry-template-nodejs`](https://github.com/DGPOCs/opentelemetry-template-nodejs).
- Las noticias tecnológicas más recientes de DEV.to proporcionadas por
  [`opentelemetry-template-python`](https://github.com/DGPOCs/opentelemetry-template-python).

## Requisitos

- Node.js 18 o superior (se recomienda la versión 20 LTS).
- npm 9+ o pnpm/yarn si prefieres otro gestor.

## Configuración

El proyecto utiliza variables de entorno para definir los endpoints de los servicios externos. Crea un
archivo `.env` en la raíz con los valores apropiados para tu entorno local o de despliegue:

```bash
VITE_CRYPTO_SERVICE_URL=http://localhost:3000
VITE_NEWS_SERVICE_URL=http://localhost:8000
# Opcional: cantidad de criptomonedas a solicitar
VITE_CRYPTO_LIMIT=5
```

Por defecto, si no se especifican las variables, se utilizarán `http://localhost:3000` y
`http://localhost:8000`, solicitando cinco criptomonedas.

## Scripts disponibles

```bash
npm install      # Instala las dependencias
npm run dev      # Levanta el servidor de desarrollo con Vite
npm run build    # Genera la build de producción
npm run preview  # Sirve la build generada en modo preview
npm run lint     # Ejecuta ESLint
```

## Arquitectura

- **Hooks reutilizables**: `useCryptocurrencies` y `useNews` encapsulan la lógica de consumo de APIs y
  gestión de estados (`idle`, `loading`, `success`, `error`).
- **Servicios**: `cryptoService` y `newsService` centralizan las llamadas HTTP y su tipado.
- **Componentes reutilizables**: se separaron tarjetas, secciones y elementos de UI (estados vacíos,
  errores, botones) para mantener el código legible.
- **Diseño moderno**: se utiliza CSS puro con gradientes, tarjetas glassmorphism y animaciones suaves
  para ofrecer una experiencia visual atractiva y ligera.

## Créditos

- Noticias obtenidas desde DEV.to a través del microservicio Python.
- Cotizaciones provistas por Coinlore mediante el microservicio Node.js.
- Creado por [Daniel García García](https://www.linkedin.com/in/daniel-garc%C3%ADa-garc%C3%ADa/) y
  [Gabriel Andújar](https://www.linkedin.com/in/gabrielandujar/).
