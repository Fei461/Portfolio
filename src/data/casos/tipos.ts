// Estructura de un caso completo (cinturón negro) en la plantilla nueva.
export type CasoCompleto = {
  slug: string;
  titulo: string;
  /** Una frase de dos tiempos: lo que parecía y lo que era. */
  parecia: string;
  era: string;
  ficha: { etiqueta: string; valor: string }[];
  /** Cifras reales del proyecto, en el marcador. */
  marcador?: { cifra: string; texto: string }[];
  contexto: { titulo: string; parrafos: string[] };
  /** Lo que hice, agrupado por terreno. */
  bloques: { titulo: string; resumen: string; puntos: string[] }[];
  piezas?: {
    titulo: string;
    texto: string;
    videos: { src: string; titulo: string; red: string; original?: string }[];
    masEnlaces?: { red: string; enlaces: string[] }[];
  };
  /** Ukemi: dónde caí y cómo me levanté. */
  caidas?: { titulo: string; texto: string }[];
  cita?: { texto: string; autor: string; cargo: string };
  aprendizajes: string[];
  enLinkedIn?: { titulo: string; href: string }[];
  nota?: string;
};
