export const profile = {
  name: "Lara Feijóo",
  title: "Estrategia · Comunicación · Insights",
  tagline:
    "La primera respuesta rara vez es la más interesante. Suelo mirar dos veces.",
  about:
    "No suelo ser la persona con la primera idea. Suelo ser la persona que quiere entender por qué esa idea debería funcionar. Me interesa lo que pasa detrás de lo que se ve: los mecanismos que mueven el comportamiento, los sistemas que sostienen la comunicación, los vacíos que nadie ha rellenado todavía.",
  snapshot:
    "Aprendo de forma autónoma, organizo antes de actuar y me tomo el tiempo de formular bien la pregunta. A veces eso es más valioso que tener la respuesta rápida.",
  services: [
    {
      title: "Estrategia de Campaña",
      description:
        "Del brief al insight. Construcción del razonamiento estratégico que sostiene una idea antes de que tenga forma.",
    },
    {
      title: "Planificación de Contenido",
      description:
        "Pilares, territorios, canales. Sistemas narrativos coherentes adaptados al comportamiento real de la audiencia.",
    },
    {
      title: "Investigación y Análisis",
      description:
        "Detección de tensiones culturales, análisis de comportamiento y síntesis de insight accionable.",
    },
    {
      title: "Comunicación de Marca",
      description:
        "Posicionamiento, mensajes y territorios creativos para marcas que quieren ser más que visibles.",
    },
  ],
  skills: {
    Estrategia: [
      "Planificación de Campaña",
      "Análisis de Audiencia",
      "Investigación de Marca",
      "Detección de Insight",
    ],
    Comunicación: [
      "Copywriting Estratégico",
      "Narrativa de Marca",
      "Presentaciones Creativas",
      "Relaciones Públicas",
    ],
    Herramientas: [
      "Figma",
      "Adobe Photoshop",
      "Canva",
      "Google Analytics",
      "Meta Business Suite",
      "Notion",
    ],
    Idiomas: ["Español (nativo)", "Inglés (avanzado)", "Gallego (nativo)"],
  },
  certifications: [
    "Beca de Excelencia Académica",
    "Premio Ideathon",
    "Stud-IA — IA aplicada a la comunicación",
    "Formación RTVE",
    "Google Analytics Fundamentals",
  ],
  socials: [
    { label: "Email", href: "mailto:lara.feijoo@example.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
  ],
  heroChips: [
    "Estrategia",
    "Insights",
    "Planificación",
    "Comunicación",
    "Investigación",
  ],
  microcopy: [
    "→ mira otra vez",
    "→ no exactamente",
    "→ aquí cambia todo",
    "→ ¿por qué?",
    "→ sigue el razonamiento",
  ],
};

// Project narratives for the "SEGUNDA LECTURA" concept
export const projectMeta = {
  talixea: {
    num: "01",
    chain: [
      "CURIOSIDAD",
      "DESCUBRIMIENTO",
      "VACÍO",
      "OPORTUNIDAD",
      "CONSTRUIR",
    ],
  },
  iberia: {
    num: "02",
    chain: [
      "BRIEF",
      "PROBLEMA APARENTE",
      "OBSERVACIÓN",
      "PROBLEMA REAL",
      "INSIGHT",
      "ESTRATEGIA",
      "IDEA",
    ],
  },
  warriors: {
    num: "03",
    chain: [
      "CONTENIDO",
      "AUDIENCIA",
      "TERRITORIOS",
      "VENTANAS",
      "PLATAFORMAS",
      "MONETIZACIÓN",
      "KPIs",
    ],
  },
  ryanair: {
    num: "04",
    chain: [
      "EMPLEADOS",
      "EXPERIENCIA",
      "RECONOCIMIENTO",
      "ONBOARDING",
      "COMUNICACIÓN INTERNA",
    ],
  },
};

// Notes / NOTAS content — archivo editorial intelectual
export type NoteSize = "featured" | "large" | "medium" | "small";

export type Note = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  annotation: string;
  readingTime: number; // minutos
  size: NoteSize;
  featured?: boolean;
  related?: string[]; // ids de notas relacionadas
  tags?: string[];
};

export const notes: Note[] = [
  {
    id: "n01",
    date: "2025-11",
    category: "Marca",
    title: "Por qué las marcas que prometen demasiado acaban prometiendo nada",
    excerpt:
      "Hay un umbral a partir del cual el exceso de beneficios en un mensaje lo vacía de credibilidad. El problema no es el producto. Es la distancia entre lo que se dice y lo que el receptor puede creer.",
    annotation: "→ credibilidad antes que alcance",
    readingTime: 4,
    size: "featured",
    featured: true,
    related: ["n05", "n04"],
    tags: ["mensaje", "credibilidad", "promesa"],
  },
  {
    id: "n02",
    date: "2025-10",
    category: "Comportamiento",
    title:
      "Lo que la gente dice que hace y lo que realmente hace son dos datos distintos",
    excerpt:
      "En investigación cualitativa, la respuesta más honesta raramente es la primera. La primera es la que el entrevistado cree que debes escuchar. Escuchar la segunda requiere crear el espacio adecuado.",
    annotation: "→ el gap declarativo-conductual",
    readingTime: 5,
    size: "large",
    related: ["n07", "n05"],
    tags: ["investigación", "insight", "gap"],
  },
  {
    id: "n03",
    date: "2025-09",
    category: "Medios",
    title: "El algoritmo no crea tendencias. Amplifica lo que ya existe.",
    excerpt:
      "Atribuir el éxito de un contenido al algoritmo es confundir la palanca con la fuerza. El algoritmo detecta señales de interés. La pregunta estratégica es qué interés preexistente estás activando.",
    annotation: "→ causa vs. amplificador",
    readingTime: 3,
    size: "medium",
    related: ["n06", "n08"],
    tags: ["algoritmo", "contenido", "tendencias"],
  },
  {
    id: "n04",
    date: "2025-08",
    category: "Creatividad",
    title:
      "La idea más obvia es la que todo el mundo descarta demasiado rápido",
    excerpt:
      "Existe una tendencia en los briefings creativos a rechazar la solución más directa por miedo a parecer poco originales. A veces lo más simple es lo más honesto. Y lo honesto, en comunicación, suele ganar.",
    annotation: "→ segunda lectura de lo evidente",
    readingTime: 3,
    size: "medium",
    related: ["n01", "n05"],
    tags: ["creatividad", "brief", "honestidad"],
  },
  {
    id: "n05",
    date: "2025-07",
    category: "Estrategia",
    title: "Definir bien el problema ya es parte de la solución",
    excerpt:
      "La mayoría de los briefs describen síntomas. El trabajo estratégico consiste en encontrar el problema real debajo del aparente. Una vez que lo tienes, la dirección creativa casi se escribe sola.",
    annotation: "→ diagnóstico antes de prescripción",
    readingTime: 4,
    size: "large",
    related: ["n02", "n01"],
    tags: ["brief", "diagnóstico", "insight"],
  },
  {
    id: "n06",
    date: "2025-06",
    category: "Medios",
    title: "La atención no se capta. Se merece.",
    excerpt:
      "Hablar de 'captar la atención' es un error de marco. La atención se da a cambio de algo: valor, novedad, emoción, utilidad. El contenido que trata la atención como recurso extractivo acaba destruyendo la relación que pretende construir.",
    annotation: "→ dar antes de pedir",
    readingTime: 3,
    size: "small",
    related: ["n03", "n08"],
    tags: ["atención", "valor", "contenido"],
  },
  {
    id: "n07",
    date: "2025-05",
    category: "Comportamiento",
    title:
      "Los sesgos no son errores. Son atajos que funcionan la mayoría de las veces.",
    excerpt:
      "Llamar sesgo a algo implica que es incorrecto. Pero la mayoría de los atajos cognitivos que usamos son soluciones eficientes a problemas de información incompleta. El diseño de comunicación que los ignora está mal calibrado.",
    annotation: "→ heurísticas como herramienta, no como defecto",
    readingTime: 5,
    size: "medium",
    related: ["n02", "n09"],
    tags: ["sesgos", "heurísticas", "cognición"],
  },
  {
    id: "n08",
    date: "2025-04",
    category: "Cultura",
    title:
      "Por qué los memes son una unidad de análisis legítima para la estrategia cultural",
    excerpt:
      "Un meme es la destilación de una tensión cultural compartida en su forma más transmisible. Ignorarlos como material de análisis es como ignorar los titulares de prensa. Son síntomas del estado del ecosistema comunicativo.",
    annotation: "→ señal débil amplificada",
    readingTime: 6,
    size: "large",
    related: ["n03", "n06"],
    tags: ["cultura", "memes", "tendencias"],
  },
  {
    id: "n09",
    date: "2025-03",
    category: "Aprendizaje",
    title:
      "Aprender algo bien la primera vez es más eficiente que corregirlo después",
    excerpt:
      "La repetición espaciada, los sistemas de notas, la escritura como procesamiento — son todos mecanismos para reducir el coste de aprender. Lo que parece lento al principio suele ser lo más rápido a largo plazo.",
    annotation: "→ inversión en comprensión profunda",
    readingTime: 4,
    size: "small",
    related: ["n07", "n10"],
    tags: ["aprendizaje", "memoria", "sistemas"],
  },
  {
    id: "n10",
    date: "2025-02",
    category: "Estrategia",
    title: "La coherencia de marca es aburrida. Y por eso funciona.",
    excerpt:
      "Las marcas que buscan constantemente lo nuevo para mantener la atención erosionan lo único que no se puede comprar: la familiaridad. La coherencia no es falta de creatividad — es la forma más sutil de construir confianza.",
    annotation: "→ presencia persistente vs. impacto puntual",
    readingTime: 4,
    size: "small",
    related: ["n01", "n05"],
    tags: ["marca", "coherencia", "confianza"],
  },
  {
    id: "n11",
    date: "2025-01",
    category: "Creatividad",
    title: "El brief que nadie hace: escribir para un solo lector",
    excerpt:
      "La comunicación masiva lleva décadas intentando hablar a millones como si fueran uno. La paradoja es que el contenido que se siente personal — escrito para alguien concreto — es el que funciona a escala.",
    annotation: "→ especificidad como estrategia de alcance",
    readingTime: 3,
    size: "small",
    related: ["n04", "n01"],
    tags: ["escritura", "audiencia", "personalización"],
  },
  {
    id: "n12",
    date: "2024-12",
    category: "Aprendizaje",
    title: "Lo que Duolingo hace bien y lo que no puede hacer",
    excerpt:
      "Duolingo resolvió el problema de la consistencia en el aprendizaje de idiomas con mecánicas de juego brillantemente diseñadas. Pero la gamificación tiene un límite: no puede sustituir la exposición real a la lengua en contexto significativo.",
    annotation: "→ motivación vs. adquisición",
    readingTime: 5,
    size: "medium",
    related: ["n09", "n07"],
    tags: ["idiomas", "gamificación", "Duolingo"],
  },
];
