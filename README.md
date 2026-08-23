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

## Editing the portfolio

### Cambiar información personal

`src/data/profile.ts` → perfil, formación, idiomas, intereses y enlaces profesionales.

### Cambiar CV

`src/pages/cv-page.tsx` → bloques de experiencia, formación, herramientas y contacto.

### Añadir/modificar proyecto

`src/data/projects.ts` → `projectContent`: título, contexto, tags, descripción, estado y `media`.

### Cambiar proyectos destacados de Home

`src/pages/home-page.tsx` → `PROJECTS`.

### Añadir una nota

`src/data/notes.ts` → `notes`.

### Añadir imágenes

`static/assets/` → añade el archivo y usa su ruta `/assets/nombre-del-asset.ext` en `src/data/projects.ts`.

### Cambiar navegación

`src/data/projects.ts` → `projectSequence`; rutas generales en `src/app.tsx`.

### Cambiar colores/tipografía

`src/index.css` → variables de `:root`.

### Cambiar animaciones

`src/components/motion-wrapper.tsx` y `src/index.css`.

### Probar localmente

```bash
npm install
npm run dev
```

### Validar antes de publicar

```bash
npm run build
```
