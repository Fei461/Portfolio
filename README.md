# Portfolio de Lara Feijoo

Portfolio editorial construido con React, TypeScript, Vite y Tailwind CSS.

## Desarrollo

Requiere Node.js 18 o posterior.

```bash
npm install
npm run dev
```

El entorno de desarrollo se sirve en `http://localhost:5173/`.

## Produccion

```bash
npm run build
```

Las imagenes del portfolio se sirven desde `static/assets`, por lo que la aplicacion no depende de Anima ni de su CDN.

El contenido editable se concentra principalmente en `src/lib/content.ts` y en los datos de cada pagina de proyecto.
