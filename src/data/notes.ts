export type NoteCategory =
  | "Estrategia"
  | "Comportamiento"
  | "Marcas"
  | "Medios & Cultura"
  | "Aprendizaje";

export type NoteSize = "featured" | "large" | "medium" | "small";

export type Note = {
  id: string;
  date: string;
  category: NoteCategory;
  title: string;
  excerpt: string;
  annotation: string;
  readingTime: number;
  size: NoteSize;
  featured?: boolean;
  related?: string[];
  tags?: string[];
};

// Los títulos entre corchetes son placeholders de publicaciones reales.
export const notes: Note[] = [
  {
    id: "ikea",
    date: "TODO: fecha",
    category: "Marcas",
    title: "[Análisis de IKEA]",
    excerpt: "TODO: añadir extracto de la publicación real.",
    annotation: "análisis de campaña",
    readingTime: 0,
    size: "featured",
    featured: true,
    related: ["mediamarkt", "kfc"],
    tags: ["marcas", "estrategia"],
  },
  {
    id: "mediamarkt",
    date: "TODO: fecha",
    category: "Estrategia",
    title: "[Análisis de MediaMarkt]",
    excerpt: "TODO: añadir extracto de la publicación real.",
    annotation: "marca y comunicación",
    readingTime: 0,
    size: "large",
    tags: ["marcas", "estrategia"],
  },
  {
    id: "kfc",
    date: "TODO: fecha",
    category: "Marcas",
    title: "[Análisis de KFC]",
    excerpt: "TODO: añadir extracto de la publicación real.",
    annotation: "observación de campaña",
    readingTime: 0,
    size: "large",
    tags: ["marcas", "estrategia"],
  },
  {
    id: "consumo-emociones",
    date: "TODO: fecha",
    category: "Comportamiento",
    title: "[Consumo, emociones y alimentación]",
    excerpt: "TODO: añadir extracto de la publicación real.",
    annotation: "comportamiento y consumo",
    readingTime: 0,
    size: "medium",
    tags: ["consumo", "emociones", "alimentación"],
  },
  {
    id: "copy-formulas",
    date: "TODO: fecha",
    category: "Aprendizaje",
    title: "[Fórmulas de copy que merece la pena tener cerca]",
    excerpt: "TODO: añadir extracto de la publicación real.",
    annotation: "recurso de trabajo",
    readingTime: 0,
    size: "small",
    tags: ["copywriting", "estrategia"],
  },
];

export const noteCategories: NoteCategory[] = [
  "Estrategia",
  "Comportamiento",
  "Marcas",
  "Medios & Cultura",
  "Aprendizaje",
];
