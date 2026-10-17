// Estructura de un caso completo (cinturón negro) en la plantilla nueva.
export type CasoCompleto = {
  slug: string;
  titulo: string;
  /** Una frase de dos tiempos: lo que parecía y lo que era. */
  parecia: string;
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
  /** Demo interactiva propia del caso. */
  demo?: "talixea";
  /** Web propia que se puede usar dentro del caso. */
  laboratorio?: { src: string; titulo: string; texto: string };
  /** Las piezas se ven en un móvil, como un feed. */
  enMovil?: boolean;
  imagenes?: { titulo: string; texto?: string; vertical?: boolean; items: { src: string; alt: string; pie: string }[] };
  piezas?: {
    titulo: string;
    texto: string;
    videos: { src: string; titulo: string; red: string; original?: string }[];
    masEnlaces?: { red: string; enlaces: string[] }[];
  };
  /** Ukemi: dónde caí y cómo me levanté. */
  caidas?: { titulo: string; texto: string }[];
  /** Título e introducción alternativos para la sección sobre tatami. */
  tatami?: { titulo: string; termino: string; intro: string };
  cita?: { texto: string; autor: string; cargo: string };
  aprendizajes: string[];
  enLinkedIn?: { titulo: string; href: string }[];
  nota?: string;
};
