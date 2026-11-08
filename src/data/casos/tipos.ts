// Estructura de un caso completo (cinturón negro) en la plantilla nueva.
export type CasoCompleto = {
  slug: string;
  titulo: string;
  /** Lo que parecía (opcional) y lo que era: la frase que resume el caso. */
  parecia?: string;
  era: string;
  ficha: { etiqueta: string; valor: string }[];
  /** Enlaces destacados en la cabecera (producto en vivo, web del proyecto…). */
  enlaces?: { href: string; label: string }[];
  /** Cifras reales del proyecto, en el marcador. */
  marcador?: { cifra: string; texto: string }[];
  contexto: { titulo: string; parrafos: string[] };
  /** Lo que hice, agrupado por terreno. */
  bloques: { titulo: string; resumen: string; puntos: string[] }[];
  /** Línea de tiempo en meses (ventanas, fases…). */
  cronograma?: {
    titulo: string;
    intro: string;
    meses: number;
    tramos: { nombre: string; desde: number; hasta: number; texto: string; abierto?: boolean }[];
  };
  /** Reparto en porcentajes de un total. */
  reparto?: { titulo: string; intro: string; total: string; partes: { nombre: string; pct: number }[] };
  /** Brecha entre dos públicos que puntúan lo mismo (de 1 a 5). */
  brecha?: {
    titulo: string;
    intro: string;
    dentro: string;
    fuera: string;
    items: { atributo: string; dentro: number; fuera: number; porQue: string }[];
  };
  /** Mapa de públicos según poder, legitimidad y urgencia (Mitchell, Agle y Wood). */
  mapa?: {
    titulo: string;
    intro: string;
    grupos: {
      tipo: string;
      atributos: ("poder" | "legitimidad" | "urgencia")[];
      miembros: { nombre: string; texto: string }[];
    }[];
  };
  /** Lo que la marca dice frente a lo que se vive, punto por punto. */
  contraste?: {
    titulo: string;
    intro: string;
    dice: string;
    vive: string;
    filas: { dice: string; vive: string; brecha: string }[];
    cierre?: string;
  };
  /** Fragmento de un guion, escena a escena. */
  guion?: {
    titulo: string;
    intro: string;
    escenas: { tiempo: string; imagen: string; texto: string }[];
    nota?: string;
  };
  /** Demo interactiva propia del caso. */
  demo?: "talixea";
  /** Web propia que se puede usar dentro del caso. */
  laboratorio?: { src: string; titulo: string; texto: string };
  /** Las piezas se ven en un móvil, como un feed. */
  enMovil?: boolean;
  imagenes?: { titulo: string; texto?: string; vertical?: boolean; oscuro?: boolean; items: { src: string; alt: string; pie: string }[] };
  piezas?: {
    titulo: string;
    texto: string;
    videos: { src: string; titulo: string; red: string; original?: string; horizontal?: boolean; poster?: string }[];
    /** Otras publicaciones mías que no están descargadas, con lo que dice cada una. */
    masEnlaces?: { red: string; href: string; titulo: string }[];
  };
  /** Caídas (ukemi): dónde caí y cómo me levanté. */
  caidas?: { titulo: string; texto: string }[];
  /** Título e introducción alternativos para la sección sobre tatami. */
  tatami?: { titulo: string; termino: string; intro: string };
  cita?: { texto: string; autor: string; cargo: string };
  /** La cita va en la ficha, a la vista desde el principio. */
  citaEnFicha?: boolean;
  aprendizajes: string[];
  enLinkedIn?: { titulo: string; href: string }[];
  nota?: string;
};
