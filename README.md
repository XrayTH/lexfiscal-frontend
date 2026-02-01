# LexFiscal ⚖️🇨🇴

**LexFiscal** es una interfaz ligera y bien diseñada para consultar fichas técnicas de tributos nacionales en Colombia. Aunque el proyecto es intencionalmente sencillo, está pensado como una herramienta práctica, directa y extensible: ideal como punto de partida para investigación, enseñanza o integración con servicios legales y tributarios.

---

## Contenido (rápido)

- Información clara y estructurada por tributo (definición, hecho generador, sujetos, base gravable, tarifa).
- Interacción con una API REST (endpoints para tributos y salud del servicio).
- UI accesible y moderna construida con **Next.js**, **Chakra UI**, **Emotion** y **Framer Motion**.

---

## Características principales ✅

- Navegación por tributos con páginas estáticas/SSR según la configuración de Next.js.
- Componentes reutilizables (`TributeCard`, `TributeDetail`) para una presentación homogénea.
- Comprobación de salud del backend para mostrar estado del servicio.
- Diseño pensado para ser ampliado y adaptado rápidamente.

---

## Tecnologías 🔧

- Next.js 16 (app router)
- React 19
- Chakra UI + Emotion (estilos y sistema de diseño)
- Framer Motion (animaciones suaves)

---

## Requisitos previos 💡

- Node.js (recomendado >= 18)
- NPM o Yarn

---

## Instalación y ejecución 🚀

1. Clona el repositorio:

```bash
git clone <repo-url>
cd lexfiscal-frontend
```

2. Instala dependencias:

```bash
npm install
# o
# yarn install
```

3. Levanta la aplicación en modo desarrollo:

```bash
npm run dev
```

4. Para producción:

```bash
npm run build
npm run start
```

5. Linter:

```bash
npm run lint
```

---

## Variables de entorno ⚙️

- `NEXT_PUBLIC_API_BASE_URL` : URL base de la API. Por defecto: `http://localhost:3001/api/v1`.

Ejemplo en `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1
```

---

## API (consumida por el frontend) 🔁

El frontend asume que la API expone los siguientes endpoints (métodos GET):

- `/health` → estado del servicio
- `/tributes` → listado de tributos
- `/tributes/:slug` → detalle por slug
- `/framework` → datos adicionales (si aplica)

> Nota: El comportamiento por defecto y las rutas pueden modificarse en `src/lib/constants.js`.

---

## Estructura del proyecto 🗂️

- `src/app/` → rutas y páginas (app router)
- `src/components/` → componentes UI reutilizables
- `src/lib/` → llamadas a la API y constantes
- `src/theme/` → configuración de Chakra / Emotion
- `public/` → activos estáticos

---

## Licencia

MIT

---
