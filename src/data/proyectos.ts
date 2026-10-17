// Fuente única de los proyectos: la portada y la página de Trabajo leen de aquí.
// El orden de cada cinturón es el orden en que se muestran.

export type Cinturon = "negro" | "marron" | "blanco";

export type Proyecto = {
  slug: string;
  titulo: string;
  cinturon: Cinturon;
  /** Contexto breve: dónde, cuándo y con quién. */
  tipo: string;
  resumen: string;
  /**
   * «nuevo»: caso con la plantilla nueva (src/data/casos).
   * «antiguo»: todavía se muestra con la página anterior.
   * Sin valor: no tiene página propia.
   */
  pagina?: "nuevo" | "antiguo";
  fuera?: { href: string; label: string };
};

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;

export const proyectos: Proyecto[] = [
  // ── Cinturón negro: casos completos, en el orden de una entrevista ──
  {
    slug: "stud-ia",
    titulo: "Stud-IA",
    cinturon: "negro",
    tipo: "Prácticas en marketing, enero a mayo de 2026",
    resumen:
      "Cinco meses en una startup de IA para estudiantes con 80.000 usuarios al mes. Contenido, comunidad, campañas B2C y B2B, y X, Threads y Bluesky a mi cargo.",
    pagina: "nuevo",
  },
  {
    slug: "talixea",
    titulo: "Talixea",
    cinturon: "negro",
    tipo: "Proyecto propio, en marcha",
    resumen:
      "Buscaba una app para aprender idiomas leyendo, en español y gratis. No existía, así que la hice sin saber programar: 40 libros y seis idiomas.",
    fuera: { href: "https://talixea.es", label: "Visitar talixea.es" },
  },
  {
    slug: "santander",
    titulo: "Santander",
    cinturon: "negro",
    tipo: "Máster UC3M, web y encuesta hechas por mí",
    resumen:
      "Un laboratorio web para evaluar el logo del banco con once criterios y una encuesta propia a 31 personas. Lo que la marca dice frente a lo que la gente percibe.",
    fuera: { href: "https://fei461.github.io/santander/", label: "Abrir el laboratorio" },
  },
  {
    slug: "iberia",
    titulo: "Iberia",
    cinturon: "negro",
    tipo: "Grado URJC, en equipo",
    resumen:
      "Parecía un problema de sostenibilidad. Era de credibilidad: una campaña que reconoce la huella en vez de prometer vuelos verdes.",
    pagina: "antiguo",
  },
  {
    slug: "bruja-roja",
    titulo: "Bruja Roja",
    cinturon: "negro",
    tipo: "Grado URJC, en equipo",
    resumen:
      "Identidad corporativa completa para una copa menstrual que habla como esa amiga que te dice lo que nadie se atreve.",
    pagina: "antiguo",
  },
  {
    slug: "warriors-arena",
    titulo: "Warriors Arena",
    cinturon: "negro",
    tipo: "Curso de RTVE, individual",
    resumen:
      "Plan de distribución para un formato de competición física de diez episodios: ventanas, plataformas y venta internacional.",
    pagina: "antiguo",
  },

  // ── Cinturón marrón: casos breves ──
  {
    slug: "ryanair",
    titulo: "Ryanair",
    cinturon: "marron",
    tipo: "Grado URJC, en equipo",
    resumen: "Comunicación interna para que la plantilla se sienta parte.",
    pagina: "antiguo",
  },
  {
    slug: "el-regalo-no-deseado",
    titulo: "Torrons Vicens",
    cinturon: "marron",
    tipo: "Grado URJC, en equipo",
    resumen: "Una campaña que convierte el prejuicio sobre lo aparente en una experiencia de descubrimiento.",
    pagina: "antiguo",
  },
  {
    slug: "m-and-ms",
    titulo: "M&M's Premium",
    cinturon: "marron",
    tipo: "Grado URJC, en equipo",
    resumen: "Lanzamiento en España como agencia, del contrabriefing a los medios.",
  },
  {
    slug: "tour-cdc-dana",
    titulo: "Tour C de C",
    cinturon: "marron",
    tipo: "Pieza en vídeo",
    resumen: "Un Tinder publicitario, contado en vídeo.",
    fuera: { href: asset("casos/tour-cdc/tinder-publicitario.mp4"), label: "Ver el vídeo" },
  },
  {
    slug: "revista-super-pop",
    titulo: "Revista Super Pop",
    cinturon: "marron",
    tipo: "Máster UC3M, en equipo",
    resumen: "Liderazgo explicado con Mean Girls y maquetado como una revista juvenil.",
  },
  {
    slug: "bbva",
    titulo: "BBVA",
    cinturon: "marron",
    tipo: "Grado URJC, en equipo",
    resumen: "Fraude digital y jóvenes que se creen a salvo.",
  },
  {
    slug: "oreo",
    titulo: "Oreo",
    cinturon: "marron",
    tipo: "Grado URJC, en equipo",
    resumen: "Plan de medios para un público que vive en redes.",
  },

  // ── Cinturón blanco: donde empecé ──
  {
    slug: "matutano-mix",
    titulo: "Matutano MIX",
    cinturon: "blanco",
    tipo: "Grado URJC, en equipo",
    resumen: "Campaña para la marca de snacks favorita frente a Pringles y las marcas blancas.",
  },
  {
    slug: "brekkies",
    titulo: "Brekkies Excel Deli Sauce",
    cinturon: "blanco",
    tipo: "Grado URJC, en equipo",
    resumen: "«Para chuparse las patas»: una salsa que los perros no pueden dejar.",
  },
  {
    slug: "fnac",
    titulo: "FNAC",
    cinturon: "blanco",
    tipo: "Grado URJC, en equipo",
    resumen: "Street marketing en el Barrio de las Letras para volver a los clásicos.",
  },
  {
    slug: "generacion-z",
    titulo: "Generación Z",
    cinturon: "blanco",
    tipo: "Grado URJC, en equipo",
    resumen: "Cómo nos ven y cómo nos vemos, convertido en estrategia y en podcast.",
  },
  {
    slug: "hermanos-chacon",
    titulo: "Hermanos Chacón",
    cinturon: "blanco",
    tipo: "Grado URJC, en equipo",
    resumen: "Rebranding de un bar de toda la vida para atraer a universitarios sin perder a los de siempre.",
  },
  {
    slug: "sra-rushmore",
    titulo: "Sra. Rushmore",
    cinturon: "blanco",
    tipo: "Grado URJC, individual",
    resumen: "Análisis de la agencia: quién es, cómo piensa y para quién trabaja.",
  },
  {
    slug: "respeto-futbol",
    titulo: "El respeto en el fútbol",
    cinturon: "blanco",
    tipo: "Grado URJC, en equipo",
    resumen: "Campaña para la afición que oye los insultos homófobos y no hace nada.",
  },
];

export const porCinturon = (cinturon: Cinturon) =>
  proyectos.filter((p) => p.cinturon === cinturon);

export const cinturones: Record<Cinturon, { nombre: string; nota: string }> = {
  negro: {
    nombre: "Cinturón negro",
    nota: "Casos completos, con el razonamiento entero.",
  },
  marron: {
    nombre: "Cinturón marrón",
    nota: "Casos breves: el reto, lo que aporté y una pieza.",
  },
  blanco: {
    nombre: "Cinturón blanco",
    nota: "Donde empecé. Trabajos de la carrera que me enseñaron el oficio.",
  },
};
