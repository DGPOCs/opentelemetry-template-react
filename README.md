# OpenTelemetry React Dashboard

Panel web creado con React y Vite que consume los servicios de noticias tecnológicas y cotizaciones de
criptomonedas expuestos en los proyectos hermanos:

- [opentelemetry-template-python](https://github.com/DGPOCs/opentelemetry-template-python)
- [opentelemetry-template-nodejs](https://github.com/DGPOCs/opentelemetry-template-nodejs)

El frontal muestra un hero introductorio, las cinco criptomonedas más populares (con cambio porcentual y
capitalización de mercado) y un bloque con los últimos artículos de DEV.to.

## Requisitos

- Node.js >= 20
- npm >= 10

## Variables de entorno

El proyecto usa las siguientes variables de entorno de Vite (archivo `.env`):

```ini
VITE_CRYPTO_API_BASE_URL=http://localhost:3000
VITE_NEWS_API_BASE_URL=http://localhost:8000
VITE_API_TIMEOUT=15000
```

Ajusta las URL según dónde estén desplegados los microservicios de criptomonedas y noticias.

## Scripts disponibles

- `npm install` – instala las dependencias.
- `npm run dev` – levanta el entorno de desarrollo en `http://localhost:5173`.
- `npm run build` – genera la versión productiva.
- `npm run preview` – sirve la build productiva de forma local.

## Estructura principal

```
src/
├── components/      # Componentes reutilizables (layout, tarjetas, listas)
├── config/          # Configuración de URLs y timeouts
├── hooks/           # Hooks personalizados para manejo de datos remotos
├── services/        # Clientes para los servicios externos
├── types/           # Definiciones TypeScript compartidas
└── utils/           # Funciones de formato y utilidades
```

## Créditos

El pie de página incluye enlaces a los creadores del proyecto, Daniel García García y Gabriel Andújar.
