// Fuente única de los datos personales (Sobre mí y CV). Origen: el CV de Lara (octubre de 2026), mejorado.
// Sin teléfono ni fecha de nacimiento. El correo de la universidad solo sale en el CV.

/** Una línea del CV: «Lugar | Puesto», con sus fechas y, si hace falta, una nota. */
export type Hito = {
  lugar: string;
  titulo: string;
  periodo: string;
  nota?: string;
  puntos?: string[];
};

export const perfil = {
  nombre: "Lara Feijóo",
  titular: "RRPP, reputación y comunicación · Máster UC3M",
  resumen:
    "Graduada en Publicidad y RRPP. Me mueve entender a la gente: cómo se percibe una marca, dentro y fuera, y por qué. Disfruto tanto proponiendo ideas como analizando qué ha funcionado, y me interesan especialmente la reputación, las relaciones públicas y la comunicación corporativa e interna.",
  busco: "Prácticas a tiempo completo a partir de abril de 2027.",
  lugar: "Galapagar, Madrid",
  email: "lara.feijoo@gmail.com",
  /** Solo en el CV: lo piden en las candidaturas de prácticas. */
  emailUni: "100605478@alumnos.uc3m.es",
  linkedin: "https://www.linkedin.com/in/lara-feijoo",
  portfolio: "https://fei461.github.io/Portfolio/",

  experiencia: [
    {
      lugar: "Stud-IA",
      titulo: "Prácticas en el departamento de Marketing",
      periodo: "Enero 2026 – mayo 2026",
      nota: "Cinco meses en el equipo de marketing de una startup EdTech: estrategia de campañas, contenido para redes, gestión de la comunidad y de la reputación, y análisis de mercado y de la competencia. Con carta de recomendación de su cofundador y CMO.",
    },
    {
      lugar: "Talixea",
      titulo: "Proyecto propio: una app para aprender idiomas leyendo",
      periodo: "Febrero 2026 – actualidad",
      nota: "La he hecho de principio a fin: el método, el catálogo, la marca y el lanzamiento, en octubre de 2026.",
    },
    {
      lugar: "Guerreros Galapagar",
      titulo: "Profesora de artes marciales y monitora de campamento",
      periodo: "Junio 2021 – agosto 2025",
    },
  ] satisfies Hito[],

  formacion: [
    {
      lugar: "Universidad Carlos III de Madrid",
      titulo: "Máster en Comunicación Publicitaria",
      periodo: "Septiembre 2026 – actualidad",
    },
    {
      lugar: "Universidad Rey Juan Carlos",
      titulo: "Grado en Publicidad y RRPP",
      periodo: "Septiembre 2022 – junio 2026",
      nota: "Nota media de 8,62 y seis matrículas de honor.",
    },
    {
      lugar: "IES Diego Velázquez",
      titulo: "Bachillerato de Excelencia",
      periodo: "Septiembre 2019 – mayo 2021",
    },
    {
      lugar: "PEAC Madrid Oeste",
      titulo: "Programa de Enriquecimiento Educativo para Alumnos con Altas Capacidades (PEAC)",
      periodo: "Septiembre 2012 – junio 2021 | Alumni en la actualidad",
    },
  ] satisfies Hito[],

  cursos: [
    {
      lugar: "RTVE",
      titulo: "Producción y estrategia de contenidos para plataformas OTT",
      periodo: "Junio – octubre 2025",
    },
    {
      lugar: "Ayuntamiento de Galapagar",
      titulo: "Comunicación, Marketing e Imagen corporativa",
      periodo: "Octubre 2024 – agosto 2025",
    },
    {
      lugar: "RTVE",
      titulo: "Inteligencia artificial en medios de comunicación",
      periodo: "Octubre – noviembre 2024",
    },
  ] satisfies Hito[],

  premios: ["Primer premio de categoría en el Ideathon de Innovación (URJC, 2024)"],

  idiomas: [
    { idioma: "Español", nivel: "Nativa" },
    { idioma: "Inglés", nivel: "Nivel C1" },
    { idioma: "Catalán", nivel: "Nivel B2" },
    { idioma: "Francés", nivel: "Nivel B1" },
  ],

  /** Lo que sabe hacer, sacado de sus prácticas y sus trabajos. */
  competencias: [
    "Gestión de redes y comunidad",
    "Estrategia de contenidos y campañas",
    "Análisis de reputación y competencia",
    "Investigación con encuestas y entrevistas",
    "Redacción",
    "Guion, grabación y edición de vídeo",
  ],

  herramientas: [
    "Excel",
    "Canva",
    "Photoshop",
    "Figma",
    "CapCut",
    "Meta Business Suite",
    "Metricool",
    "YouTube Studio",
    "Google Analytics",
    "Notion",
    "ChatGPT, Claude y Gemini",
  ],

  /** Todos los idiomas extranjeros, con título oficial. */
  idiomasNota: "Inglés, catalán y francés con título oficial. Un curso escolar en Irlanda (2018–2019).",

  /** Como en Sobre mí. */
  tatami: "Cinturón marrón de judo y azul de taekwondo.",
};
