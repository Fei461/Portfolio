// Fuente única de los datos personales (Sobre mí y CV). Origen: el CV de Lara (octubre de 2026), mejorado.
// Sin teléfono ni fecha de nacimiento. El correo de la universidad solo sale en el CV.

/** Una línea del CV: «Lugar | Puesto», con sus fechas y, si hace falta, una nota. */
export type Hito = {
  lugar: string;
  titulo: string;
  periodo: string;
  nota?: string;
  /** Una línea propia, en negrita: lo que más pesa de esa experiencia. */
  destacado?: string;
  /** Si el destacado se puede comprobar en algún sitio, el enlace. */
  destacadoEnlace?: string;
  puntos?: string[];
};

export const perfil = {
  nombre: "Lara Feijóo",
  /** En el CV va con los dos apellidos. */
  nombreCompleto: "Lara Feijóo Vázquez",
  resumen:
    "Graduada en Publicidad y RRPP y estudiante del Máster en Comunicación Publicitaria (UC3M). Me mueve entender a la gente: cómo se percibe una marca, dentro y fuera, y por qué. Disfruto tanto proponiendo ideas como analizando qué ha funcionado. Me interesan especialmente la reputación, las relaciones públicas y la comunicación interna y la corporativa.",
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
      nota: "Cinco meses en el equipo de marketing de una startup EdTech: estrategia de campañas, contenido para redes, gestión de la comunidad y de la reputación, y análisis de mercado y de la competencia.",
      destacado: "Carta de recomendación de Diego López de Aragón, cofundador y CMO",
      destacadoEnlace: "https://fei461.github.io/Portfolio/?ref=cv#/trabajo/stud-ia",
    },
    {
      lugar: "Talixea",
      titulo: "Proyecto propio: plataforma para aprender idiomas leyendo",
      periodo: "Febrero 2026 – actualidad",
      nota: "Creado desde mi cama a partir de un hueco en el mercado. Publicado en octubre de 2026, pero trabajado en las sombras desde febrero.",
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
      lugar: "IES Diego Velázquez y PEAC Madrid Oeste",
      titulo: "Bachillerato de Excelencia y Programa para Altas Capacidades",
      periodo: "2012 – 2021",
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
    "Redacción para redes sociales y email",
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
