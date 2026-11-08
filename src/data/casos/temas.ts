// La identidad de cada caso: su fondo, un color oscuro para las barras, un acento y un
// motivo dibujado que sale de la propia marca. Lo que no tiene tema usa el tatami.
export type Tema = {
  fondo: string;
  oscuro: string;
  acento: string;
  /** SVG del motivo (sin la etiqueta <svg>), en una tesela de tam × tam. */
  motivo: string;
  tam: number;
};

export const temas: Record<string, Tema> = {
  // Stud-IA: amarillo de la marca y cuadrícula de libreta.
  "stud-ia": {
    fondo: "#f3c623",
    oscuro: "#161616",
    acento: "#f3c623",
    tam: 28,
    motivo: '<path d="M0 .5H28M.5 0V28" stroke="#161616" stroke-opacity=".14" stroke-width="1"/>',
  },
  // TFG: azul BBVA y barras de encuesta.
  "tfg-bbva": {
    fondo: "#1973b8",
    oscuro: "#072146",
    acento: "#2dcccd",
    tam: 90,
    motivo:
      '<g fill="#fff" fill-opacity=".1"><rect x="10" y="40" width="10" height="40"/><rect x="24" y="22" width="10" height="58"/><rect x="55" y="52" width="10" height="28"/><rect x="69" y="30" width="10" height="50"/></g>',
  },
  // Talixea: índigo de la marca y el hilo que teje dos idiomas.
  talixea: {
    fondo: "#4f46e5",
    oscuro: "#1e1b4b",
    acento: "#fde68a",
    tam: 120,
    motivo:
      '<path d="M0 30 C30 10 60 50 90 30 S150 10 180 30 M-60 90 C-30 70 0 110 30 90 S90 70 120 90" fill="none" stroke="#fde68a" stroke-opacity=".28" stroke-width="2"/>',
  },
  // Ryanair: azul y amarillo de la aerolínea, con rutas de vuelo.
  ryanair: {
    fondo: "#073590",
    oscuro: "#04205a",
    acento: "#f1c933",
    tam: 140,
    motivo:
      '<path d="M10 120 Q70 20 130 60" fill="none" stroke="#f1c933" stroke-opacity=".3" stroke-width="2" stroke-dasharray="6 7"/><circle cx="10" cy="120" r="3.5" fill="#f1c933" fill-opacity=".35"/>',
  },
  // MagicAir: su propia paleta (azul, dorado y blanco roto) y estrellas de «volar es magia».
  magicair: {
    fondo: "#0a6499",
    oscuro: "#063f61",
    acento: "#efb810",
    tam: 110,
    motivo:
      '<path d="M30 20l3 9 9 3-9 3-3 9-3-9-9-3 9-3z M85 70l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#ffffd1" fill-opacity=".22"/>',
  },
  // Santander: rojo de la marca y la curva de la llama.
  santander: {
    fondo: "#ec0000",
    oscuro: "#7a0000",
    acento: "#ffffff",
    tam: 120,
    motivo:
      '<path d="M40 100 C20 70 55 55 45 25 C70 45 75 70 60 100 Z" fill="#fff" fill-opacity=".1"/>',
  },
  // Bruja Roja: burdeos, cobre y constelaciones.
  "bruja-roja": {
    fondo: "#6d1b2c",
    oscuro: "#3a0d17",
    acento: "#ce945c",
    tam: 130,
    motivo:
      '<g fill="#ce945c" fill-opacity=".45"><circle cx="20" cy="30" r="2.2"/><circle cx="58" cy="18" r="1.6"/><circle cx="90" cy="44" r="2.2"/><circle cx="40" cy="92" r="1.6"/><circle cx="104" cy="104" r="2"/></g><path d="M20 30 L58 18 L90 44 M40 92 L104 104" fill="none" stroke="#ce945c" stroke-opacity=".25" stroke-width="1"/><path d="M112 10 A11 11 0 1 0 122 26 A8.5 8.5 0 1 1 112 10 Z" fill="#ce945c" fill-opacity=".35"/>',
  },
  // Iberia: lienzo oscuro con las grietas doradas del kintsugi.
  iberia: {
    fondo: "#24201c",
    oscuro: "#000000",
    acento: "#d4a73b",
    tam: 180,
    motivo:
      '<path d="M0 40 L35 55 L60 38 L95 70 L130 60 L180 85 M60 38 L72 0 M95 70 L88 120 L120 150 L110 180 M120 150 L180 140" fill="none" stroke="#d4a73b" stroke-opacity=".45" stroke-width="2.2" stroke-linejoin="round"/>',
  },
  // Super Pop: rosa revista, lunares y estrellitas.
  "revista-super-pop": {
    fondo: "#ff5cb0",
    oscuro: "#5b1a8c",
    acento: "#ffe600",
    tam: 60,
    motivo:
      '<circle cx="15" cy="15" r="5" fill="#fff" fill-opacity=".35"/><path d="M45 38l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#ffe600" fill-opacity=".6"/>',
  },
  // Pluvielle: tierra de diatomita y gotas de lluvia.
  pluvielle: {
    fondo: "#bfae96",
    oscuro: "#4a3f35",
    acento: "#8a6f52",
    tam: 80,
    motivo:
      '<path d="M20 14 C14 24 12 28 12 32 a8 8 0 0 0 16 0 C28 28 26 24 20 14 Z M60 50 C55 58 54 61 54 64 a6 6 0 0 0 12 0 C66 61 65 58 60 50 Z" fill="#fff" fill-opacity=".28"/>',
  },
  // Tour C de C: el morado de visibilit(ad) y los corazones del «match».
  "tour-cdc-dana": {
    fondo: "#6a5cff",
    oscuro: "#241f4d",
    acento: "#ff4f7b",
    tam: 90,
    motivo:
      '<path d="M30 40 C30 30 18 28 16 36 C14 28 2 30 2 40 C2 50 16 56 16 60 C16 56 30 50 30 40 Z" transform="translate(10 0)" fill="#fff" fill-opacity=".18"/><path d="M30 40 C30 30 18 28 16 36 C14 28 2 30 2 40 C2 50 16 56 16 60 C16 56 30 50 30 40 Z" transform="translate(58 34) scale(.6)" fill="#ff4f7b" fill-opacity=".45"/>',
  },
};

export const motivo = (t: Tema) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${t.tam}" height="${t.tam}" viewBox="0 0 ${t.tam} ${t.tam}">${t.motivo}</svg>`,
  )}")`;
