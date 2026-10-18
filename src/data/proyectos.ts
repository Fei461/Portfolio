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
  /** Imagen fija para las tarjetas con vídeo, mientras no se reproduce. */
  poster?: string;
  /** Archivo: si es un trabajo escrito o una campaña. */
  grupo?: "escrito" | "campana";
  /** Archivo: lo que se cuenta al desplegar la ficha. */
  detalle?: string[];
  /** Fuera de la selección: no sale en listas, pero su página sigue existiendo. */
  oculto?: boolean;
};

const caso = (file: string) => `${import.meta.env.BASE_URL}assets/casos/${file}`;

export const proyectos: Proyecto[] = [
  // ── Cinturón negro: seis casos completos, en el orden de una entrevista ──
  {
    slug: "stud-ia",
    video: caso("stud-ia/youtube-36k.mp4"),
    poster: caso("stud-ia/poster.jpg"),
    titulo: "Stud-IA",
    cinturon: "negro",
    tipo: "Prácticas en marketing, enero a mayo de 2026",
    resumen:
      "Cinco meses en una startup de IA para estudiantes con 80.000 usuarios al mes. Contenido, comunidad, campañas B2C y B2B, y X, Threads y Bluesky a mi cargo.",
    pagina: "nuevo",
  },
  {
    slug: "tfg-bbva",
    portada: caso("tfg-bbva/nube.jpg"),
    titulo: "BBVA tras 2008",
    cinturon: "negro",
    tipo: "TFG, individual",
    resumen:
      "¿Se ha cerrado la herida de 2008? Dos encuestas, dentro y fuera del banco, 248 respuestas y una entrevista a su responsable de marca para medir la brecha de reputación.",
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
    slug: "ryanair",
    portada: caso("ryanair/podcast.jpg"),
    titulo: "Ryanair",
    cinturon: "negro",
    tipo: "Grado URJC, en equipo, 2025",
    resumen:
      "Reputación interna: entrevistas a la plantilla, análisis de brecha y un plan de comunicación interna para que quien vuela con la marca se sienta parte.",
    pagina: "nuevo",
  },
  {
    slug: "magicair",
    portada: caso("magicair/stakeholders.jpg"),
    titulo: "MagicAir",
    cinturon: "negro",
    tipo: "Grado URJC, en equipo, 2025",
    resumen:
      "Una aerolínea inventada, una norma europea y una crisis de reputación: el plan para anunciarla y la respuesta cuando estalla, con la SCCT.",
    pagina: "nuevo",
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

  // ── Cinturón verde: cuatro casos breves ──
  {
    slug: "bruja-roja",
    portada: caso("bruja-roja/productos.jpg"),
    titulo: "Bruja Roja",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen:
      "Cuatro meses en X y una identidad completa para una copa menstrual que habla como esa amiga que te dice lo que nadie se atreve.",
    pagina: "nuevo",
  },
  {
    slug: "iberia",
    portada: caso("iberia/cine.png"),
    titulo: "Iberia",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen:
      "Una aerolínea que reconoce su huella en lugar de prometer vuelos verdes, contada como la restauración de un cuadro.",
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
    slug: "tour-cdc-dana",
    video: caso("tour-cdc/tinder-publicitario.mp4"),
    poster: caso("tour-cdc/poster.jpg"),
    titulo: "Tour C de C",
    cinturon: "verde",
    tipo: "Tour c de c 2025, individual",
    resumen: "Un Tinder publicitario para conectar a la industria con los creativos afectados por la DANA.",
    pagina: "nuevo",
  },

  // ── Archivo: trabajos de la carrera ──
  {
    slug: "generacion-z",
    titulo: "Generación Z",
    cinturon: "archivo",
    grupo: "escrito",
    tipo: "Técnicas y Recursos de las RRPP, Grado URJC, 2024, en equipo",
    resumen: "Cómo nos ven y cómo nos vemos, convertido en una estrategia de relaciones públicas y en un podcast.",
    detalle: [
      "Objetivo: invertir en dos años el 15 % de las actitudes negativas de las generaciones X e Y hacia la Z.",
      "Análisis de campos de fuerzas, PERT y Gantt, y dieciocho técnicas: de la auditoría de imagen y la formación de portavoces a un podcast, una maleta pedagógica o una performance.",
    ],
  },
  {
    slug: "entrevista-dircom",
    titulo: "Entrevista a un DirCom",
    cinturon: "archivo",
    grupo: "escrito",
    tipo: "Dirección de Comunicación, Grado URJC, 2024, en equipo",
    resumen: "Preparar, conseguir y contar una entrevista con el director de comunicación de la URJC.",
    detalle: [
      "Del correo de contacto, con su consentimiento informado, a un guion por bloques: motivación, día a día, crisis y consejos para quien empieza.",
      "Lo que más nos sorprendió: que medir el éxito de la comunicación institucional sigue siendo bastante rudimentario.",
    ],
  },
  {
    slug: "sra-rushmore",
    titulo: "Sra. Rushmore",
    cinturon: "archivo",
    grupo: "escrito",
    tipo: "Grado URJC, individual",
    resumen: "Análisis de la agencia que nació con «Un añito en el infierno» para el Atleti: quién es, cómo piensa y para quién trabaja.",
    detalle: [
      "Historia, filosofía, estructura y clientes, con iniciativas propias como El Balcón de la Sra. Rushmore.",
    ],
  },
  {
    slug: "seat-ibiza",
    titulo: "SEAT Ibiza frente a Ford Fiesta",
    cinturon: "archivo",
    grupo: "campana",
    tipo: "Redacción Publicitaria, Grado URJC, 2025, en pareja",
    resumen: "Un guion de spot y dos anuncios de prensa comparativos.",
    detalle: [
      "Un spot en tono noir: un póster de Ford Fiesta con el sello de «cancelado», pisado en un callejón. «Apostar por lo de siempre… a veces sale caro».",
      "Dos versiones para prensa: periódico y revista especializada.",
    ],
  },
  {
    slug: "hermanos-chacon",
    titulo: "Hermanos Chacón",
    cinturon: "archivo",
    grupo: "campana",
    tipo: "Grado URJC, en equipo",
    resumen: "Rebranding de un bar de toda la vida para atraer a universitarios sin perder a los de siempre.",
    detalle: [
      "Objetivo: modernizar la marca en dos años sin perder su esencia.",
      "Nueva identidad visual, web y redes, un espacio más atractivo y una carta adaptada. Tono: «Sabor a bar de toda la vida».",
    ],
  },

  // ── Fuera de la selección (menos es más). Para recuperar uno, quítale «oculto». ──
  {
    slug: "el-regalo-no-deseado",
    portada: caso("torrons/marquesina.png"),
    titulo: "Torrons Vicens",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Una campaña que convierte el prejuicio sobre lo aparente en una experiencia de descubrimiento.",
    pagina: "nuevo",
    oculto: true,
  },
  {
    slug: "m-and-ms",
    portada: caso("m-and-ms/cartel.jpg"),
    titulo: "M&M's Premium",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Lanzamiento en España como agencia, del contrabriefing a los medios.",
    pagina: "nuevo",
    oculto: true,
  },
  {
    slug: "bbva",
    portada: caso("bbva/sagrada-privacidad.jpg"),
    titulo: "BBVA",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Fraude digital y jóvenes que se creen a salvo.",
    pagina: "nuevo",
    oculto: true,
  },
  {
    slug: "oreo",
    portada: caso("oreo/grafica.jpg"),
    titulo: "Oreo",
    cinturon: "verde",
    tipo: "Grado URJC, en equipo",
    resumen: "Plan de medios para un público que vive en redes.",
    pagina: "nuevo",
    oculto: true,
  },
  {
    slug: "pluvielle",
    portada: caso("pluvielle/alfombra.jpg"),
    titulo: "Pluvielle",
    cinturon: "verde",
    tipo: "Máster UC3M, en equipo",
    resumen: "Una marca de lujo que convierte una alfombrilla de baño en arte que se colecciona.",
    pagina: "nuevo",
    oculto: true,
  },
  {
    slug: "warriors-arena",
    titulo: "Warriors Arena",
    cinturon: "verde",
    tipo: "Curso de RTVE, individual",
    resumen:
      "Plan de distribución para un formato de competición física de diez episodios: ventanas, plataformas y venta internacional.",
    portada: caso("warriors-arena/portada.jpg"),
    pagina: "nuevo",
    oculto: true,
  },
  {
    slug: "reciclaje-vidrio",
    titulo: "Reciclaje de vidrio",
    cinturon: "archivo",
    grupo: "escrito",
    tipo: "Técnicas y Recursos de las RRPP, Grado URJC, 2024, en equipo",
    resumen: "Planificación estratégica de relaciones públicas para implantar el reciclaje de vidrio.",
    detalle: [
      "De la investigación de la situación a un mapa de públicos jerarquizado, con la teoría situacional de los públicos de Grunig.",
    ],
    oculto: true,
  },
  {
    slug: "club-de-creativos",
    titulo: "Club de Creativos",
    cinturon: "archivo",
    grupo: "escrito",
    tipo: "Fundamentos de las RRPP, Grado URJC, 2023, en equipo",
    resumen: "Cómo han evolucionado los modelos de relaciones públicas que usa el c de c.",
    detalle: [
      "De los cuatro modelos de Grunig a la teoría de la excelencia, aplicados a acciones reales del club como el Día E, UnaDeDos u OVER.",
    ],
    oculto: true,
  },
  {
    slug: "fnac",
    titulo: "FNAC",
    cinturon: "archivo",
    grupo: "campana",
    tipo: "Grado URJC, en equipo",
    resumen: "Street marketing en el Barrio de las Letras para volver a los clásicos.",
    detalle: [
      "Stands con preguntas de cultura general: si aciertas, descuento en el clásico de la colección.",
      "El momento wow: encontrarte por la calle a los personajes de los libros.",
    ],
    oculto: true,
  },
  {
    slug: "matutano-mix",
    titulo: "Matutano MIX",
    cinturon: "archivo",
    grupo: "campana",
    tipo: "Grado URJC, en equipo",
    resumen: "Campaña para la marca de snacks favorita frente a Pringles y las marcas blancas.",
    detalle: [
      "Análisis de mercado y competencia, insights del público, eje de comunicación, acciones y medios.",
    ],
    oculto: true,
  },
  {
    slug: "brekkies",
    titulo: "Brekkies Excel Deli Sauce",
    cinturon: "archivo",
    grupo: "campana",
    tipo: "Grado URJC, en equipo",
    resumen: "«Para chuparse las patas»: una salsa que los perros no pueden dejar.",
    detalle: [
      "Concepto: el sabor que deja huella.",
      "Mupis cerca de grandes parques, veterinarias y tiendas de animales, donde el dueño ya está pensando en su perro.",
    ],
    oculto: true,
  },
];

export const porCinturon = (cinturon: Cinturon) =>
  proyectos.filter((p) => p.cinturon === cinturon && !p.oculto);

export const cinturones: Record<Cinturon, { nombre: string; nota: string }> = {
  negro: {
    nombre: "Cinturón negro",
    nota: "Los casos completos: qué me pedían, qué hice y qué me llevé.",
  },
  verde: {
    nombre: "Cinturón verde",
    nota: "Casos más cortos: el reto, la idea y alguna pieza. Salvo que se indique, son del grado en la URJC.",
  },
  archivo: {
    nombre: "Archivo",
    nota: "Trabajos de la carrera: unos por escrito, otros de campaña. Toca uno para ver de qué va.",
  },
};
