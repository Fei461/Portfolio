// Fuente única de los proyectos: la portada y la página de Trabajo leen de aquí.
// El orden de cada cinturón es el orden en que se muestran.

export type Cinturon = "negro" | "verde" | "archivo";

export type Proyecto = {
  slug: string;
  titulo: string;
  cinturon: Cinturon;
  /** Contexto breve: dónde, cuándo y con quién. */
  tipo: string;
  resumen: string;
  /**
   * «nuevo»: caso con la plantilla nueva (src/data/casos).
   * Sin valor: no tiene página propia.
   */
  pagina?: "nuevo";
  fuera?: { href: string; label: string };
  /** Imagen o vídeo de la tarjeta, dentro de /assets/casos. */
  portada?: string;
  video?: string;
};

const caso = (file: string) => `${import.meta.env.BASE_URL}assets/casos/${file}`;

export const proyectos: Proyecto[] = [
  // ── Cinturón negro: casos completos, en el orden de una entrevista ──
  {
    slug: "stud-ia",
    video: caso("stud-ia/youtube-36k.mp4"),
    titulo: "Stud-IA",
    cinturon: "negro",
    tipo: "Prácticas en marketing, enero a mayo de 2026",
    resumen:
      "Cinco meses en una startup de IA para estudiantes con 80.000 usuarios al mes. Contenido, comunidad, campañas B2C y B2B, y X, Threads y Bluesky a mi cargo.",
    pagina: "nuevo",
  },
  {
    slug: "talixea",
    portada: caso("talixea/portada.png"),
    titulo: "Talixea",
    cinturon: "negro",
    tipo: "Proyecto propio, desde febrero de 2026",
    resumen:
      "Buscaba una app para aprender idiomas leyendo, en español y gratis. No existía, así que la hice sin saber programar: 40 libros y seis idiomas.",
    pagina: "nuevo",
    fuera: { href: "https://talixea.es", label: "Visitar talixea.es" },
  },
  {
    slug: "santander",
    portada: caso("santander/laboratorio.png"),
    titulo: "Santander",
    cinturon: "negro",
    tipo: "Máster UC3M, web y encuesta hechas por mí",
    resumen:
      "Un laboratorio web para evaluar el logo del banco con once criterios y una encuesta propia a 31 personas. Lo que la marca dice frente a lo que la gente percibe.",
    pagina: "nuevo",
    fuera: { href: "https://fei461.github.io/santander/", label: "Abrir el laboratorio" },
  },
  {
    slug: "iberia",
    portada: caso("iberia/cine.png"),
    titulo: "Iberia",
    cinturon: "negro",
    tipo: "Grado URJC, en equipo",
    resumen:
      "Una aerolínea que reconoce su huella en lugar de prometer vuelos verdes, contada como la restauración de un cuadro.",
    pagina: "nuevo",
  },
  {
    slug: "bruja-roja",
    portada: caso("bruja-roja/productos.jpg"),
    titulo: "Bruja Roja",
    cinturon: "negro",
    tipo: "Grado URJC, en equipo",
    resumen:
      "Cuatro meses en X y una identidad completa para una copa menstrual que habla como esa amiga que te dice lo que nadie se atreve.",
    pagina: "nuevo",
  },
  {
    slug: "warriors-arena",
    titulo: "Warriors Arena",
    cinturon: "negro",
    tipo: "Curso de RTVE, individual",
    resumen:
      "Plan de distribución para un formato de competición física de diez episodios: ventanas, plataformas y venta internacional.",
    pagina: "nuevo",
  },

  // ── Cinturón verde: casos a medias, el reto y la idea ──
  {
    slug: "ryanair",
    portada: caso("ryanair/premios.jpg"),
    titulo: "Ryanair",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Comunicación interna para que la plantilla se sienta parte.",
    pagina: "nuevo",
  },
  {
    slug: "el-regalo-no-deseado",
    portada: caso("torrons/marquesina.png"),
    titulo: "Torrons Vicens",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Una campaña que convierte el prejuicio sobre lo aparente en una experiencia de descubrimiento.",
    pagina: "nuevo",
  },
  {
    slug: "m-and-ms",
    portada: caso("m-and-ms/cartel.jpg"),
    titulo: "M&M's Premium",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Lanzamiento en España como agencia, del contrabriefing a los medios.",
    pagina: "nuevo",
  },
  {
    slug: "tour-cdc-dana",
    video: caso("tour-cdc/tinder-publicitario.mp4"),
    titulo: "Tour C de C",
    cinturon: "verde",
    tipo: "Tour c de c 2025, individual",
    resumen: "Un Tinder publicitario para conectar a la industria con los creativos afectados por la DANA.",
    pagina: "nuevo",
  },
  {
    slug: "revista-super-pop",
    portada: caso("revista-super-pop/portada.jpg"),
    titulo: "Revista Super Pop",
    cinturon: "verde",
    tipo: "Máster UC3M, en equipo",
    resumen: "Liderazgo explicado con Mean Girls y maquetado como una revista juvenil.",
    pagina: "nuevo",
  },
  {
    slug: "bbva",
    portada: caso("bbva/sagrada-privacidad.jpg"),
    titulo: "BBVA",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Fraude digital y jóvenes que se creen a salvo.",
    pagina: "nuevo",
  },
  {
    slug: "oreo",
    portada: caso("oreo/grafica.jpg"),
    titulo: "Oreo",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Plan de medios para un público que vive en redes.",
    pagina: "nuevo",
  },

  // ── Archivo: trabajos de la carrera ──
  {
    slug: "matutano-mix",
    titulo: "Matutano MIX",
    cinturon: "archivo",
    tipo: "Grado URJC, en equipo",
    resumen: "Campaña para la marca de snacks favorita frente a Pringles y las marcas blancas.",
  },
  {
    slug: "brekkies",
    titulo: "Brekkies Excel Deli Sauce",
    cinturon: "archivo",
    tipo: "Grado URJC, en equipo",
    resumen: "«Para chuparse las patas»: una salsa que los perros no pueden dejar.",
  },
  {
    slug: "fnac",
    titulo: "FNAC",
    cinturon: "archivo",
    tipo: "Grado URJC, en equipo",
    resumen: "Street marketing en el Barrio de las Letras para volver a los clásicos.",
  },
  {
    slug: "generacion-z",
    titulo: "Generación Z",
    cinturon: "archivo",
    tipo: "Grado URJC, en equipo",
    resumen: "Cómo nos ven y cómo nos vemos, convertido en estrategia y en podcast.",
  },
  {
    slug: "hermanos-chacon",
    titulo: "Hermanos Chacón",
    cinturon: "archivo",
    tipo: "Grado URJC, en equipo",
    resumen: "Rebranding de un bar de toda la vida para atraer a universitarios sin perder a los de siempre.",
  },
  {
    slug: "sra-rushmore",
    titulo: "Sra. Rushmore",
    cinturon: "archivo",
    tipo: "Grado URJC, individual",
    resumen: "Análisis de la agencia: quién es, cómo piensa y para quién trabaja.",
  },
  {
    slug: "respeto-futbol",
    titulo: "El respeto en el fútbol",
    cinturon: "archivo",
    tipo: "Grado URJC, en equipo",
    resumen: "Campaña para la afición que oye los insultos homófobos y no hace nada.",
  },
];

export const porCinturon = (cinturon: Cinturon) =>
  proyectos.filter((p) => p.cinturon === cinturon);

export const cinturones: Record<Cinturon, { nombre: string; nota: string }> = {
  negro: {
    nombre: "Cinturón negro",
    nota: "Los casos completos: qué me pedían, qué hice y qué me llevé.",
  },
  verde: {
    nombre: "Cinturón verde",
    nota: "Casos más cortos: el reto, la idea y alguna pieza.",
  },
  archivo: {
    nombre: "Archivo",
    nota: "Trabajos de la carrera que me enseñaron el oficio y a perderle el miedo a proponer.",
  },
};
