import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  FileText,
} from "@phosphor-icons/react";
import { SeoHead } from "@/components/seo-head";
import { MotionWrapper } from "@/components/motion-wrapper";
import { projectContent, projectSequence } from "@/data/projects";
import { isPendingContent } from "@/lib/utils";

// ─── TIPOS ────────────────────────────────────────────────────────────────────

type ProjectContext = "PERSONAL" | "PROFESIONAL" | "ACADÉMICO";
type DepthLevel = "CASO COMPLETO" | "CASO BREVE" | "ARCHIVO";
type BlockType =
  | "CONTEXTO"
  | "HIPÓTESIS"
  | "INSIGHT"
  | "INVESTIGACIÓN"
  | "PROCESO"
  | "ITERACIÓN"
  | "DECISIÓN"
  | "SISTEMA"
  | "RESULTADO"
  | "REFLEXIÓN";

type MediaItem =
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; poster?: string; caption?: string }
  | { type: "document"; title: string; description: string; pages?: number }
  | {
      type: "diagram";
      title: string;
      description: string;
      nodes?: string[];
    }
  | {
      type: "table";
      title: string;
      headers: string[];
      rows: string[][];
      caption?: string;
    };

type MediaLayout =
  | { layout: "single"; item: MediaItem }
  | {
      layout: "two-col";
      left: MediaItem;
      right: string;
      rightIsText: true;
      rightContent: string;
    }
  | { layout: "three-grid"; items: [MediaItem, MediaItem, MediaItem] }
  | { layout: "gallery"; items: MediaItem[]; caption?: string }
  | {
      layout: "comparison";
      before: MediaItem;
      after: MediaItem;
      label?: string;
    }
  | { layout: "wide"; item: MediaItem; annotation?: string };

type ProcessBlock = {
  type: BlockType;
  title?: string;
  body: string;
  annotation?: string;
  quote?: string;
  list?: string[];
};

export type CaseStudyData = {
  // ── Metadatos ──────────────────────────────────────────────────────────────
  slug: string;
  num: string;
  title: string;
  subtitle?: string;
  year: string;
  context: ProjectContext;
  depth: DepthLevel;
  role: string;
  tags: string[];
  coverImg?: string;

  // ── Introducción editorial ─────────────────────────────────────────────────
  opening: {
    headline: string; // frase de apertura editorial — lo que parecía / lo que era
    secondReading?: string; // la segunda lectura — hover / revela
    brief?: string; // el encargo (si lo había)
    objective?: string; // objetivo del trabajo
    target?: string;
    background?: string; // contexto adicional
  };

  // ── Bloques modulares de proceso ──────────────────────────────────────────
  blocks: ProcessBlock[];

  // ── Sección de evidencias / galería ───────────────────────────────────────
  evidencias?: {
    intro?: string;
    compositions: MediaLayout[];
  };

  // ── Reflexión final ───────────────────────────────────────────────────────
  reflexion?: {
    headline: string;
    body: string;
    learnings?: string[];
    annotation?: string;
  };

  // ── Navegación adyacente ──────────────────────────────────────────────────
  prevProject?: { slug: string; title: string; num: string };
  nextProject?: { slug: string; title: string; num: string };
};

// ─── DATOS DE EJEMPLO — sustituir por datos reales de cada proyecto ──────────
// Este objeto sirve como PLANTILLA. Lara lo adaptará proyecto a proyecto.

const DEMO_DATA: CaseStudyData = {
  slug: "demo",
  num: "00",
  title: "Nombre del Proyecto",
  subtitle: "Tagline editorial breve del proyecto",
  year: "2024",
  context: "ACADÉMICO",
  depth: "CASO COMPLETO",
  role: "Estrategia · Investigación · [Rol específico]",
  tags: ["Estrategia", "Investigación", "[Tag]"],
  coverImg: "/assets/iberia.png",

  opening: {
    headline: "Parecía un problema de [X].",
    secondReading: "Era un problema de [Y].",
    brief: "Descripción del encargo original o punto de partida.",
    objective:
      "Qué se buscaba conseguir con este trabajo. Cuál era el objetivo real.",
    background:
      "Contexto relevante: sector, marca, audiencia, momento. Sólo lo necesario.",
  },

  blocks: [
    {
      type: "CONTEXTO",
      title: "El punto de partida",
      body: "Descripción del estado inicial. Qué sabíamos, qué no sabíamos, qué se daba por supuesto. Escrito en primera persona o en tercera según encaje con el tono del proyecto.",
      annotation: "Dato o cifra relevante que sitúa el contexto",
    },
    {
      type: "HIPÓTESIS",
      title: "Lo que creíamos al empezar",
      body: "La hipótesis de trabajo inicial. No la solución — la pregunta.",
      quote: "¿La pregunta que guió el proceso?",
    },
    {
      type: "INVESTIGACIÓN",
      title: "Qué encontramos",
      body: "Hallazgos de investigación. Datos, observaciones, entrevistas, análisis. Sólo lo relevante para el razonamiento.",
      list: [
        "Hallazgo 1 — descripción breve",
        "Hallazgo 2 — descripción breve",
        "Hallazgo 3 — descripción breve",
      ],
    },
    {
      type: "INSIGHT",
      title: "Lo que cambió la dirección",
      body: "El insight central. Lo que reencuadró el problema.",
      quote: "Formulación del insight en una frase.",
      annotation: "Por qué esto cambia la estrategia",
    },
    {
      type: "DECISIÓN",
      title: "Qué elegimos y por qué",
      body: "La decisión estratégica central. No sólo qué se decidió, sino por qué se descartaron otras opciones.",
    },
    {
      type: "SISTEMA",
      title: "Cómo se construyó",
      body: "Si el proyecto generó un sistema, estructura, marco o modelo — aquí va la explicación de su lógica.",
    },
    {
      type: "RESULTADO",
      title: "Qué se produjo",
      body: "Los entregables concretos. El resultado del trabajo. Qué existe ahora que antes no existía.",
      list: ["Entregable 1", "Entregable 2", "Entregable 3"],
    },
  ],

  evidencias: {
    intro: "Documentación visual del proceso y los entregables.",
    compositions: [
      {
        layout: "single",
        item: {
          type: "image",
          src: "/assets/talixea.png",
          alt: "Imagen principal del proyecto",
          caption: "Descripción de la imagen principal",
        },
      },
      {
        layout: "two-col",
        left: {
          type: "image",
          src: "/assets/warriors-arena.png",
          alt: "Imagen secundaria",
        },
        right:
          "Texto de análisis o descripción que acompaña a la imagen. Puede ser una explicación del proceso, del razonamiento o del resultado visible en la imagen.",
        rightIsText: true,
        rightContent:
          "Texto de análisis o descripción que acompaña a la imagen. Puede ser una explicación del proceso, del razonamiento o del resultado visible en la imagen.",
      },
      {
        layout: "wide",
        item: {
          type: "diagram",
          title: "Diagrama o esquema del sistema",
          description: "Descripción de la lógica visual del diagrama",
          nodes: [
            "Nodo A — descripción",
            "Nodo B — descripción",
            "Nodo C — descripción",
            "Nodo D — descripción",
          ],
        },
        annotation: "Anotación editorial sobre el diagrama",
      },
      {
        layout: "three-grid",
        items: [
          {
            type: "image",
            src: "/assets/ryanair.png",
            alt: "Imagen 1 de galería",
            caption: "Descripción 1",
          },
          {
            type: "document",
            title: "Documento de trabajo",
            description: "Brief, estrategia o entregable en formato documento",
            pages: 12,
          },
          {
            type: "image",
            src: "/assets/iberia.png",
            alt: "Imagen 3 de galería",
            caption: "Descripción 3",
          },
        ],
      },
      {
        layout: "gallery",
        items: [
          {
            type: "table",
            title: "Tabla de análisis / KPIs",
            headers: ["Métrica", "Valor base", "Objetivo", "Resultado"],
            rows: [
              ["KPI 1", "—", "—", "—"],
              ["KPI 2", "—", "—", "—"],
              ["KPI 3", "—", "—", "—"],
            ],
            caption: "Tabla de resultados o análisis comparativo",
          },
        ],
      },
    ],
  },

  reflexion: {
    headline: "Lo que aprendí",
    body: "Reflexión honesta sobre el proceso. No una conclusión académica — una observación personal sobre qué funcionó, qué no, y qué haría diferente.",
    learnings: [
      "Aprendizaje 1 — descripción breve",
      "Aprendizaje 2 — descripción breve",
      "Aprendizaje 3 — descripción breve",
    ],
    annotation: "Si pudiera cambiar algo, sería esto.",
  },

  prevProject: {
    slug: "proyecto-anterior",
    title: "Proyecto Anterior",
    num: "00",
  },
  nextProject: {
    slug: "proyecto-siguiente",
    title: "Proyecto Siguiente",
    num: "00",
  },
};

// ─── MAPA DE DATOS POR SLUG ───────────────────────────────────────────────────
// Lara añadirá aquí los datos reales de cada proyecto.
// Por ahora todos los slugs conocidos redirigen a la demo con sus metadatos.

const PROJECT_REGISTRY: Record<string, Partial<CaseStudyData>> = {
  talixea: {
    num: "01",
    title: "Talixea",
    subtitle: "Parecía un hobby de aprendizaje.",
    year: "2024",
    context: "PERSONAL",
    depth: "CASO COMPLETO",
    role: "Fundadora · Estrategia · Producto",
    tags: ["Producto", "Estrategia", "Aprendizaje"],
    coverImg: "/assets/talixea.png",
    opening: {
      headline: "Parecía un hobby de aprendizaje.",
      secondReading: "Era un vacío de mercado esperando solución.",
      objective:
        "Diseñar y construir una plataforma de aprendizaje de idiomas centrada en el vocabulario en contexto real.",
      background:
        "Proyecto personal iniciado durante la carrera. Sin brief externo, sin cliente — sólo una observación sobre cómo la gente aprende (o no aprende) idiomas.",
    },
    prevProject: undefined,
    nextProject: { slug: "iberia", title: "Iberia", num: "02" },
  },
  iberia: {
    num: "02",
    title: "Iberia",
    subtitle: "Parecía un problema de sostenibilidad.",
    year: "2024",
    context: "ACADÉMICO",
    depth: "CASO COMPLETO",
    role: "Estrategia · Investigación · Planificación",
    tags: ["Estrategia", "Comportamiento", "Campaña"],
    coverImg: "/assets/iberia.png",
    opening: {
      headline: "Parecía un problema de sostenibilidad.",
      secondReading: "Era un problema de credibilidad.",
      brief:
        "Desarrollar una campaña que posicionara a Iberia como aerolínea comprometida con la sostenibilidad.",
      objective:
        "Redefinir el territorio estratégico más allá de lo que el brief sugería, basándose en investigación de percepción del consumidor.",
      background:
        "La sostenibilidad en aviación es un territorio extremadamente difícil de defender. La investigación demostró que el problema no era de mensaje sino de credibilidad estructural.",
    },
    prevProject: { slug: "talixea", title: "Talixea", num: "01" },
    nextProject: { slug: "bruja-roja", title: "Bruja Roja", num: "03" },
  },
  "bruja-roja": {
    num: "03",
    title: "Bruja Roja",
    subtitle: "Parecía un encargo de identidad visual.",
    year: "2024",
    context: "ACADÉMICO",
    depth: "CASO BREVE",
    role: "Identidad · Posicionamiento · Narrativa de marca",
    tags: ["Marca", "Identidad", "Tono"],
    coverImg: "/assets/warriors-arena.png",
    opening: {
      headline: "Parecía un encargo de identidad visual.",
      secondReading: "Era una pregunta sobre qué quiere decir esta marca.",
      objective:
        "Construir una identidad de marca con territorio verbal y visual coherente y diferenciador.",
      background:
        "El reto no era sólo diseñar una identidad — era encontrar la pregunta correcta sobre qué quiere ser esta marca y para quién.",
    },
    prevProject: { slug: "iberia", title: "Iberia", num: "02" },
    nextProject: { slug: "warriors-arena", title: "Warriors Arena", num: "04" },
  },
  "warriors-arena": {
    num: "04",
    title: "Warriors Arena",
    subtitle: "Parecía un problema de alcance.",
    year: "2024",
    context: "ACADÉMICO",
    depth: "CASO COMPLETO",
    role: "Estrategia de contenido · Planificación de medios",
    tags: ["Contenido", "OTT", "Distribución"],
    coverImg: "/assets/warriors-arena.png",
    opening: {
      headline: "Parecía un problema de alcance.",
      secondReading: "Era un problema de sistema.",
      brief:
        "Desarrollar una estrategia de contenido para una plataforma OTT con recursos limitados.",
      objective:
        "Diseñar un sistema de distribución multi-ventana que maximizara el alcance sin aumentar el presupuesto de producción.",
      background:
        "La tentación inicial era producir más contenido. La investigación mostró que el problema no era la cantidad sino la arquitectura de distribución.",
    },
    prevProject: { slug: "bruja-roja", title: "Bruja Roja", num: "03" },
    nextProject: { slug: "bbva", title: "BBVA", num: "05" },
  },
  bbva: {
    num: "05",
    title: "BBVA",
    subtitle: "Parecía un problema de información.",
    year: "2024",
    context: "ACADÉMICO",
    depth: "CASO BREVE",
    role: "Investigación · Estrategia · Comunicación",
    tags: ["Estrategia", "Comportamiento", "Fraude digital"],
    coverImg: "/assets/ryanair.png",
    opening: {
      headline: "Parecía un problema de información.",
      secondReading: "Era un problema de percepción de riesgo.",
      brief:
        "Reducir los casos de fraude digital entre clientes mediante una campaña de comunicación.",
      objective:
        "Diseñar una estrategia de comunicación que actuara sobre los mecanismos cognitivos reales que llevan a los usuarios a caer en phishing.",
      background:
        "Los usuarios ya saben que el phishing existe. El problema no es la falta de información — es el sesgo de optimismo y la distancia psicológica ante el riesgo.",
    },
    prevProject: { slug: "warriors-arena", title: "Warriors Arena", num: "04" },
    nextProject: { slug: "ryanair", title: "Ryanair", num: "06" },
  },
  ryanair: {
    num: "06",
    title: "Ryanair",
    subtitle: "Parecía un problema de mensajes.",
    year: "2023",
    context: "ACADÉMICO",
    depth: "CASO BREVE",
    role: "Comunicación interna · Planificación",
    tags: ["Comunicación interna", "Stakeholders", "Onboarding"],
    coverImg: "/assets/ryanair.png",
    opening: {
      headline: "Parecía un problema de mensajes internos.",
      secondReading: "Era un problema de cultura.",
      brief:
        "Diseñar un plan de comunicación interna para mejorar el compromiso y la experiencia de los empleados.",
      objective:
        "Desarrollar un sistema de comunicación interna que distinguiera entre información y reconocimiento — y actuara sobre el vínculo cultural, no sólo sobre los mensajes.",
      background:
        "Ryanair tiene una reputación de cultura corporativa orientada a la eficiencia operativa. El análisis mostró que el problema de rotación no era salarial sino de percepción de pertenencia.",
    },
    prevProject: { slug: "bbva", title: "BBVA", num: "05" },
    nextProject: { slug: "stud-ia", title: "Stud-IA", num: "07" },
  },
};

// La fuente activa de contenido es src/data/projects.ts; este registro se conserva
// únicamente como referencia de estructura para futuras ampliaciones editoriales.
void PROJECT_REGISTRY;

// Narrativas verificadas a partir de los entregables académicos originales.
const CASE_NARRATIVES: Record<
  string,
  Pick<CaseStudyData, "opening" | "blocks" | "evidencias" | "reflexion">
> = {
  iberia: {
    opening: {
      headline: "Parecía un problema de sostenibilidad.",
      secondReading: "Era un problema de credibilidad.",
      brief: "Construir una campaña para comunicar la transición sostenible de Iberia.",
      objective: "Evitar el greenwashing y explicar un proceso real, lento y todavía incompleto.",
      target: "Viajeros jóvenes preocupados por el impacto climático y escépticos ante los mensajes verdes.",
      background: "La propuesta parte de la brecha entre las acciones de la aerolínea y la desconfianza del público ante los mensajes verdes.",
    },
    blocks: [
      { type: "CONTEXTO", title: "El problema no era decir más", body: "La aviación carga con una huella difícil de defender. Por eso, prometer vuelos verdes habría aumentado la distancia entre marca y audiencia." },
      { type: "INSIGHT", title: "La incomodidad de volar", body: "El punto de partida fue el flight shaming: hay personas que sienten contradicción al viajar en avión porque asocian el acto con contaminación.", quote: "No se trataba de ocultar el daño, sino de hacerlo visible para poder hablar de transformación." },
      { type: "DECISIÓN", title: "Una restauración que no termina", body: "La campaña usa la restauración de una obra deteriorada como metáfora de la transición: reconocer el daño, mostrar las acciones y no fingir que el proceso está acabado." },
      { type: "RESULTADO", title: "Un sistema de soportes coherente", body: "La idea se trasladó a spot, experiencia en aeropuerto, email y prensa: cada formato hace tangible la limpieza gradual sin convertirla en una promesa absoluta." },
    ],
    evidencias: { intro: "La campaña hace visible el proceso en lugar de esconderlo detrás de un mensaje verde.", compositions: [{ layout: "three-grid", items: [{ type: "document", title: "Spot: restauración", description: "Una obra deteriorada abre la conversación sobre daño, transición y responsabilidad." }, { type: "document", title: "Aeropuerto: intervención", description: "Una experiencia participativa lleva el gesto de restaurar al espacio de viaje." }, { type: "document", title: "Email y prensa", description: "Piezas que sostienen el mismo tono: acciones concretas, sin prometer una solución total." }] }, { layout: "wide", item: { type: "diagram", title: "De la huella a la transición", description: "El sistema conecta el reconocimiento del problema con acciones verificables.", nodes: ["Huella reconocida", "Acciones en curso", "Proceso visible", "Confianza"] }, annotation: "La restauración queda deliberadamente inacabada." }] },
    reflexion: { headline: "La sostenibilidad exige precisión", body: "Aprendimos que, en territorios con tanta desconfianza, una marca gana más credibilidad al explicar límites y proceso que al intentar parecer resuelta.", learnings: ["Reformular el brief cuando la percepción pública revela otro problema.", "Usar una idea creativa como prueba de coherencia, no como decoración."], annotation: "Proyecto académico en equipo." },
  },
  "el-regalo-no-deseado": {
    opening: { headline: "Parecía un turrón difícil de hacer relevante.", secondReading: "Era una historia sobre lo que juzgamos antes de descubrir.", brief: "Acercar la gama Sinergia de Torrons Vicens a una audiencia joven.", objective: "Convertir tradición e innovación en una experiencia con una lectura cultural propia.", target: "Generación Z que valora la autenticidad, la experiencia y los productos con historia.", background: "El producto reunía técnica turronera y colaboración gastronómica; el reto era que eso tuviera significado para Generación Z." },
    blocks: [
      { type: "INSIGHT", title: "No todo lo valioso entra por los ojos", body: "La propuesta parte del prejuicio superficial: tanto las personas como los productos pueden ser descartados antes de que alguien descubra su interior.", quote: "El regalo no deseado." },
      { type: "DECISIÓN", title: "Convertir el trampantojo en relato", body: "El concepto toma prestada la lógica del trampantojo: un envoltorio inesperado cambia de sentido cuando se descubre lo que contiene." },
      { type: "SISTEMA", title: "De la marquesina al metro", body: "La idea se tradujo en exterior holográfico, una intervención de metro y piezas digitales. Cada soporte plantea un cambio de perspectiva, no una repetición del mismo mensaje." },
    ],
    evidencias: { intro: "El trampantojo se convierte en un mecanismo que se experimenta en cada soporte.", compositions: [{ layout: "three-grid", items: [{ type: "document", title: "Marquesina holográfica", description: "Una pieza exterior que cambia según el punto de vista del espectador." }, { type: "document", title: "Metro intervenido", description: "Un recorrido físico que convierte el descubrimiento en experiencia compartida." }, { type: "document", title: "Vídeo y redes", description: "Una narrativa breve que revela el producto cuando la expectativa cambia." }] }, { layout: "wide", item: { type: "diagram", title: "Un regalo que cambia de sentido", description: "El recorrido lleva de la primera impresión al valor que estaba oculto.", nodes: ["Envoltorio", "Curiosidad", "Descubrimiento", "Revalorizar"] }, annotation: "El soporte no ilustra la idea: la hace ocurrir." }] },
    reflexion: { headline: "Una idea puede unir producto y conversación", body: "El proyecto demostró que una campaña de producto gana interés cuando el mecanismo creativo nace de una tensión que la audiencia reconoce.", learnings: ["Hacer que el soporte participe en la idea.", "Traducir un valor de marca en una experiencia concreta."], annotation: "Proyecto académico en equipo." },
  },
  ryanair: {
    opening: { headline: "Parecía un problema de mensajes internos.", secondReading: "Era un problema de pertenencia.", brief: "Proponer acciones de comunicación interna para mejorar la experiencia de empleado.", objective: "Distinguir información, acogida y reconocimiento para construir un plan que responda a distintos públicos internos.", target: "Empleados de Ryanair, con foco en nuevas incorporaciones y equipos con alta exposición operativa.", background: "La propuesta se apoya en un mapa de stakeholders y prioriza las relaciones con mayor urgencia, legitimidad y poder." },
    blocks: [
      { type: "INVESTIGACIÓN", title: "Primero, ordenar las relaciones", body: "El mapa de stakeholders permitió evitar una solución única: sindicatos, empleados, reguladores y dirección tienen expectativas y capacidad de influencia distintas." },
      { type: "DECISIÓN", title: "La cultura se trabaja en momentos", body: "En lugar de limitarse a comunicaciones descendentes, el plan prioriza momentos de vínculo: premios, bienvenida, mentoría y contenido compartido." },
      { type: "SISTEMA", title: "Una acogida que continúa", body: "Cabin Crew Awards, buddy program, welcome kit e intranet forman un sistema de reconocimiento, integración y circulación de historias internas." },
    ],
    evidencias: { intro: "Tres intervenciones construyen una misma experiencia de pertenencia.", compositions: [{ layout: "three-grid", items: [{ type: "document", title: "Cabin Crew Awards", description: "Un ritual de reconocimiento para hacer visibles los logros de los equipos." }, { type: "document", title: "Buddy Program", description: "Un sistema de mentoría que acompaña las primeras semanas de incorporación." }, { type: "document", title: "Historias con altura", description: "Contenido interno para compartir experiencia, conocimiento y cultura." }] }, { layout: "wide", item: { type: "diagram", title: "De la acogida al reconocimiento", description: "La propuesta no trata cada acción como un evento aislado: crea un recorrido de pertenencia.", nodes: ["Entrada", "Acompañamiento", "Conexión", "Reconocimiento"] }, annotation: "El empleado deja de ser solo receptor de información." }] },
    reflexion: { headline: "La comunicación interna no es solo informar", body: "El valor del trabajo está en tratar la cultura como una experiencia que se diseña, especialmente al entrar, colaborar y ser reconocido.", learnings: ["Priorizar públicos antes de elegir canales.", "Diferenciar comunicación operativa de pertenencia."], annotation: "Proyecto académico en equipo." },
  },
  "warriors-arena": {
    opening: { headline: "Parecía un formato que necesitaba más alcance.", secondReading: "Necesitaba una arquitectura de distribución.", brief: "Diseñar el plan de distribución de un concurso físico pensado para una audiencia internacional.", objective: "Definir compradores, ventanas, derechos y métricas para que el formato pueda escalar en distintos territorios.", target: "Plataformas, cadenas y audiencias globales afines a la competición y el entretenimiento físico.", background: "Warriors Arena combina espectáculo físico, competición y adaptabilidad cultural en diez episodios de 75 minutos." },
    blocks: [
      { type: "CONTEXTO", title: "Un formato que viaja", body: "La ausencia de dependencia lingüística y la posibilidad de adaptar pruebas convierten el formato en una propiedad con potencial global." },
      { type: "DECISIÓN", title: "Vender por ventanas, no de una vez", body: "La estrategia combina una primera ventana OTT global, una segunda en televisión y una tercera AVOD o de nicho cuando se liberan los derechos." },
      { type: "SISTEMA", title: "Un plan comercial que se puede medir", body: "Se definieron clientes prioritarios, mercados profesionales y un calendario de lanzamiento que conecta teasers, ferias, promoción social, venta y seguimiento de KPIs." },
    ],
    evidencias: { intro: "El caso se cuenta desde tres decisiones de negocio, no desde una presentación de producción.", compositions: [{ layout: "three-grid", items: [{ type: "document", title: "Compradores prioritarios", description: "OTT globales y compradores de formato seleccionados por alcance, catálogo y capacidad de adaptación." }, { type: "document", title: "Ventanas de derechos", description: "Primera ventana OTT, segunda televisión y tercera AVOD o nicho para prolongar valor." }, { type: "document", title: "Ruta de lanzamiento", description: "Teasers, mercados profesionales, campaña social y KPIs para sostener la comercialización." }] }, { layout: "wide", item: { type: "diagram", title: "Arquitectura de distribución", description: "Las ventanas amplían audiencia e ingresos sin diluir el formato.", nodes: ["OTT global", "Televisión", "AVOD", "Adaptaciones"] }, annotation: "Los derechos se liberan cuando abren una nueva oportunidad." }] },
    reflexion: { headline: "El contenido también necesita modelo de negocio", body: "Este proyecto convirtió una idea de entretenimiento en una propuesta comercial: pensar dónde se estrena, quién la compra y cómo prolonga su valor.", learnings: ["Traducir una audiencia en una estrategia de ventanas.", "Plantear KPIs antes de la distribución."], annotation: "Proyecto académico individual." },
  },
  "bruja-roja": {
    opening: { headline: "Parecía un manual de identidad.", secondReading: "Era una forma de abrir conversación.", brief: "Crear una identidad para una marca de copa menstrual.", objective: "Normalizar la menstruación con una voz y un universo visual reconocibles.", target: "Personas jóvenes que buscan alternativas reutilizables y una conversación menos estigmatizada.", background: "La propuesta articula logotipo, paleta, tipografías, aplicaciones y recursos gráficos bajo una estética de misterio, cuidado y poder personal." },
    blocks: [
      { type: "DECISIÓN", title: "Dar a la marca un territorio propio", body: "Bruja Roja usa el imaginario esotérico sin convertirlo en disfraz: funciona como una forma de hablar de ciclos, conocimiento y autonomía." },
      { type: "SISTEMA", title: "Una identidad que se reconoce antes de leer", body: "El manual define la relación entre símbolo, color, tipografía y patrones para que cada aplicación mantenga coherencia sin perder expresividad." },
      { type: "RESULTADO", title: "Del logotipo a las aplicaciones", body: "El resultado es un sistema preparado para publicaciones, productos y piezas de comunicación, no solo una marca presentada en una portada." },
    ],
    evidencias: { intro: "La marca se plantea como un código vivo que puede sostenerse en distintos soportes.", compositions: [{ layout: "three-grid", items: [{ type: "document", title: "Nombre y símbolo", description: "Un territorio verbal que asocia ciclo, autonomía y una conversación sin tabúes." }, { type: "document", title: "Código visual", description: "Paleta, tipografías y recursos que equilibran misterio, cuidado y presencia." }, { type: "document", title: "Aplicaciones", description: "Reglas para producto, publicaciones y comunicación sin perder reconocimiento." }] }, { layout: "wide", item: { type: "diagram", title: "Código visual de Bruja Roja", description: "Cada decisión visual refuerza una misma posición de marca.", nodes: ["Símbolo", "Paleta", "Tipografía", "Aplicaciones"] }, annotation: "La coherencia permite que la marca sea expresiva sin perderse." }] },
    reflexion: { headline: "La identidad empieza por el significado", body: "El proyecto refuerza que un sistema visual funciona mejor cuando cada decisión responde a una postura de marca y no solo a una estética.", learnings: ["Construir consistencia entre discurso y forma.", "Diseñar reglas que permitan aplicar la marca."], annotation: "Proyecto académico en equipo." },
  },
};

// ─── FUNCIÓN: obtener datos completos del proyecto ────────────────────────────
function getProjectData(slug: string): CaseStudyData {
  const project = projectContent[slug];
  if (!project) {
    return { ...DEMO_DATA, slug };
  }

  const index = projectSequence.indexOf(slug);
  const previousSlug = projectSequence[index - 1];
  const nextSlug = projectSequence[index + 1];

  const narrative = CASE_NARRATIVES[slug];
  return {
    ...DEMO_DATA,
    slug,
    num: String(index + 1).padStart(2, "0"),
    title: project.title,
    subtitle: isPendingContent(project.description) ? undefined : project.description,
    year: isPendingContent(project.year) ? "" : project.year,
    context: project.context,
    depth: project.depth,
    role: isPendingContent(project.role) ? "" : project.role,
    tags: project.tags,
    coverImg: project.media.find((media) => media.src)?.src,
    opening: narrative?.opening ?? {
      headline: isPendingContent(project.description) ? project.title : project.description,
      objective: undefined,
      background: `Contexto: ${project.context.toLowerCase()}.`,
    },
    blocks: narrative?.blocks ?? [
      {
        type: "CONTEXTO",
        title: "Contexto",
        body: isPendingContent(project.description) ? "" : project.description,
      },
      {
        type: "PROCESO",
        title: "Mi papel",
        body: isPendingContent(project.role) ? "" : project.role,
        annotation: isPendingContent(project.contribution) ? undefined : project.contribution,
      },
    ].filter((block) => Boolean(block.body || block.annotation)),
    evidencias: narrative?.evidencias ?? (project.media.some((media) => media.src)
      ? {
          compositions: [
            {
              layout: "gallery",
              items: project.media
                .filter((media) => media.src && !isPendingContent(media.alt))
                .map((media) => ({
                  type: "image" as const,
                  src: media.src!,
                  alt: media.alt,
                })),
            },
          ],
        }
      : undefined),
    reflexion: narrative?.reflexion,
    prevProject: previousSlug
      ? { slug: previousSlug, title: projectContent[previousSlug].title, num: String(index).padStart(2, "0") }
      : undefined,
    nextProject: nextSlug
      ? { slug: nextSlug, title: projectContent[nextSlug].title, num: String(index + 2).padStart(2, "0") }
      : undefined,
  };
}

// ─── COLORES POR CONTEXTO ─────────────────────────────────────────────────────
const CONTEXT_COLORS: Record<ProjectContext, string> = {
  PERSONAL: "hsl(44 95% 30%)",
  PROFESIONAL: "hsl(24 18% 10% / 0.68)",
  ACADÉMICO: "hsl(24 18% 10% / 0.44)",
};

const BLOCK_ACCENTS: Record<BlockType, { color: string; label: string }> = {
  CONTEXTO: { color: "hsl(24 18% 10% / 0.45)", label: "Contexto" },
  HIPÓTESIS: { color: "hsl(44 95% 38%)", label: "Hipótesis" },
  INVESTIGACIÓN: { color: "hsl(24 18% 10% / 0.55)", label: "Investigación" },
  INSIGHT: { color: "hsl(44 95% 32%)", label: "Insight" },
  PROCESO: { color: "hsl(24 18% 10% / 0.48)", label: "Proceso" },
  ITERACIÓN: { color: "hsl(24 18% 10% / 0.40)", label: "Iteración" },
  DECISIÓN: { color: "hsl(44 95% 38%)", label: "Decisión" },
  SISTEMA: { color: "hsl(24 18% 10% / 0.52)", label: "Sistema" },
  RESULTADO: { color: "hsl(24 18% 10% / 0.60)", label: "Resultado" },
  REFLEXIÓN: { color: "hsl(44 95% 32%)", label: "Reflexión" },
};

// ─── SUB-COMPONENTES ──────────────────────────────────────────────────────────

/** Segunda lectura — tagline con hover reveal */
function SecondReading({ first, second }: { first: string; second?: string }) {
  const [hovered, setHovered] = useState(false);

  if (!second) {
    return (
      <p
        className="font-mono text-xs mt-2"
        style={{ color: "hsl(24 18% 10% / 0.45)" }}
      >
        {first}
      </p>
    );
  }

  return (
    <div
      className="mt-3 cursor-default select-none min-h-[1.4rem]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <p
          className="font-mono text-xs transition-all duration-200"
          style={{ color: "hsl(24 18% 10% / 0.48)" }}
        >
          {first}
        </p>
      ) : (
        <p
          className="font-mono text-xs font-medium pl-3 transition-all duration-200"
          style={{
            color: "hsl(24 18% 10%)",
            borderLeft: "2px solid hsl(44 95% 48%)",
          }}
        >
          {second}
        </p>
      )}
    </div>
  );
}

/** Bloque de proceso modular */
function ProcessBlock({
  block,
  index,
}: {
  block: ProcessBlock;
  index: number;
}) {
  const accent = BLOCK_ACCENTS[block.type];
  const isHighlight =
    block.type === "INSIGHT" ||
    block.type === "DECISIÓN" ||
    block.type === "HIPÓTESIS";
  const isDark = block.type === "INSIGHT" || block.type === "DECISIÓN";

  return (
    <MotionWrapper delay={index * 0.05}>
      <div
        className="relative"
        style={{
          background: isDark ? "hsl(25 20% 10%)" : "hsl(40 20% 97%)",
          border: `1px solid ${isDark ? "hsl(0 0% 100% / 0.08)" : "hsl(24 18% 10% / 0.10)"}`,
          padding: isHighlight ? "2rem 2.5rem" : "1.5rem 2rem",
        }}
      >
        {/* Acento lateral amarillo en bloques clave */}
        {isHighlight && (
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ background: "hsl(44 95% 48%)" }}
            aria-hidden="true"
          />
        )}

        {/* Cabecera del bloque */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 shrink-0"
              style={{
                background: isHighlight
                  ? isDark
                    ? "hsl(44 95% 48% / 0.18)"
                    : "hsl(44 95% 48% / 0.12)"
                  : "transparent",
                color: isDark ? "hsl(44 95% 65%)" : accent.color,
                border: `1px solid ${isHighlight ? (isDark ? "hsl(44 95% 48% / 0.30)" : "hsl(44 95% 48% / 0.30)") : isDark ? "hsl(0 0% 100% / 0.12)" : "hsl(24 18% 10% / 0.14)"}`,
              }}
            >
              {block.type}
            </span>
            {block.title && (
              <h3
                className="font-serif text-base font-medium leading-snug"
                style={{
                  color: isDark ? "hsl(36 18% 92%)" : "hsl(24 18% 10%)",
                }}
              >
                {block.title}
              </h3>
            )}
          </div>
          <span
            className="font-mono text-[9px] shrink-0"
            style={{
              color: isDark
                ? "hsl(0 0% 100% / 0.22)"
                : "hsl(24 18% 10% / 0.22)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Cita / pregunta */}
        {block.quote && (
          <blockquote
            className="mb-4 pl-4"
            style={{
              borderLeft: "2px solid hsl(44 95% 48% / 0.55)",
            }}
          >
            <p
              className="font-serif text-sm font-medium italic leading-relaxed"
              style={{
                color: isDark
                  ? "hsl(36 18% 92% / 0.85)"
                  : "hsl(24 18% 10% / 0.80)",
              }}
            >
              {block.quote}
            </p>
          </blockquote>
        )}

        {/* Cuerpo */}
        <p
          className="font-sans text-sm leading-relaxed"
          style={{
            color: isDark ? "hsl(0 0% 100% / 0.62)" : "hsl(24 18% 10% / 0.68)",
          }}
        >
          {block.body}
        </p>

        {/* Lista */}
        {block.list && block.list.length > 0 && (
          <ul className="mt-4 space-y-2">
            {block.list.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-[3px] shrink-0 font-mono text-[10px] font-bold"
                  style={{ color: "hsl(44 95% 48%)" }}
                >
                  →
                </span>
                <span
                  className="font-sans text-sm leading-snug"
                  style={{
                    color: isDark
                      ? "hsl(0 0% 100% / 0.58)"
                      : "hsl(24 18% 10% / 0.65)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Anotación marginal */}
        {block.annotation && (
          <div className="mt-4 flex items-center gap-2">
            <div
              className="h-px flex-1"
              style={{
                background: isDark
                  ? "hsl(0 0% 100% / 0.08)"
                  : "hsl(24 18% 10% / 0.08)",
              }}
            />
            <p
              className="font-mono text-[9px] italic"
              style={{
                color: isDark
                  ? "hsl(0 0% 100% / 0.35)"
                  : "hsl(24 18% 10% / 0.38)",
              }}
            >
              {block.annotation}
            </p>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}

/** Renderiza un MediaItem individual */
function MediaItemRender({
  item,
  compact = false,
}: {
  item: MediaItem;
  compact?: boolean;
}) {
  if (item.type === "image") {
    return (
      <div className="group relative overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${compact ? "aspect-square" : "aspect-[4/3]"}`}
        />
        {item.caption && (
          <p
            className="mt-2 font-mono text-[9px] leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.42)" }}
          >
            {item.caption}
          </p>
        )}
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          background: "hsl(25 20% 10%)",
          aspectRatio: "16/9",
        }}
      >
        {item.poster && (
          <img
            src={item.poster}
            alt="Vista previa del video"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        )}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              background: "hsl(44 95% 48%)",
              color: "hsl(24 18% 10%)",
            }}
          >
            <Play size={22} weight="fill" />
          </div>
          <p
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "hsl(0 0% 100% / 0.55)" }}
          >
            Video
          </p>
        </div>
        {item.caption && (
          <p
            className="absolute bottom-3 left-3 font-mono text-[9px]"
            style={{ color: "hsl(0 0% 100% / 0.42)" }}
          >
            {item.caption}
          </p>
        )}
      </div>
    );
  }

  if (item.type === "document") {
    return (
      <div
        className="flex flex-col justify-between p-5"
        style={{
          background: "hsl(40 20% 97%)",
          border: "1px solid hsl(24 18% 10% / 0.12)",
          minHeight: compact ? "160px" : "220px",
        }}
      >
        <div>
          <div
            className="mb-3 flex h-10 w-10 items-center justify-center"
            style={{ background: "hsl(44 95% 48% / 0.12)" }}
          >
            <FileText size={20} style={{ color: "hsl(44 95% 38%)" }} />
          </div>
          <p
            className="font-serif text-sm font-medium leading-snug"
            style={{ color: "hsl(24 18% 10%)" }}
          >
            {item.title}
          </p>
          <p
            className="mt-1.5 font-sans text-xs leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.58)" }}
          >
            {item.description}
          </p>
        </div>
        {item.pages && (
          <p
            className="mt-4 font-mono text-[9px] uppercase tracking-widest"
            style={{ color: "hsl(24 18% 10% / 0.32)" }}
          >
            {item.pages} páginas
          </p>
        )}
      </div>
    );
  }

  if (item.type === "diagram") {
    return (
      <div
        className="p-5"
        style={{
          background: "hsl(38 22% 93%)",
          border: "1px solid hsl(24 18% 10% / 0.10)",
          minHeight: compact ? "160px" : "240px",
        }}
      >
        <p
          className="font-mono text-[9px] uppercase tracking-widest mb-4"
          style={{ color: "hsl(44 95% 38%)" }}
        >
          Diagrama
        </p>
        <p
          className="font-serif text-sm font-medium mb-4"
          style={{ color: "hsl(24 18% 10%)" }}
        >
          {item.title}
        </p>
        {item.nodes && (
          <div className="flex flex-wrap gap-2">
            {item.nodes.map((node, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="font-mono text-[9px] px-2 py-1"
                  style={{
                    background: "hsl(40 20% 97%)",
                    border: "1px solid hsl(24 18% 10% / 0.14)",
                    color: "hsl(24 18% 10% / 0.70)",
                  }}
                >
                  {node}
                </span>
                {i < item.nodes!.length - 1 && (
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: "hsl(44 95% 48%)" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
        <p
          className="mt-4 font-sans text-xs leading-relaxed"
          style={{ color: "hsl(24 18% 10% / 0.52)" }}
        >
          {item.description}
        </p>
      </div>
    );
  }

  if (item.type === "table") {
    return (
      <div className="overflow-x-auto">
        <p
          className="font-mono text-[9px] uppercase tracking-widest mb-3"
          style={{ color: "hsl(44 95% 38%)" }}
        >
          {item.title}
        </p>
        <table className="w-full text-left">
          <thead>
            <tr style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.14)" }}>
              {item.headers.map((h) => (
                <th
                  key={h}
                  className="pb-2 font-mono text-[9px] uppercase tracking-widest pr-6"
                  style={{ color: "hsl(24 18% 10% / 0.45)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows.map((row, ri) => (
              <tr
                key={ri}
                style={{
                  borderBottom: "1px solid hsl(24 18% 10% / 0.07)",
                }}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="py-2.5 font-sans text-xs pr-6"
                    style={{ color: "hsl(24 18% 10% / 0.65)" }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {item.caption && (
          <p
            className="mt-3 font-mono text-[9px] italic"
            style={{ color: "hsl(24 18% 10% / 0.35)" }}
          >
            {item.caption}
          </p>
        )}
      </div>
    );
  }

  return null;
}

/** Composición de media */
function MediaComposition({ comp }: { comp: MediaLayout }) {
  if (comp.layout === "single") {
    return (
      <div className="w-full">
        <MediaItemRender item={comp.item} />
      </div>
    );
  }

  if (comp.layout === "two-col") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-start">
        <MediaItemRender item={comp.left} />
        <div className="flex flex-col justify-center">
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.68)" }}
          >
            {comp.rightContent}
          </p>
        </div>
      </div>
    );
  }

  if (comp.layout === "three-grid") {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {comp.items.map((item, i) => (
          <MediaItemRender key={i} item={item} compact />
        ))}
      </div>
    );
  }

  if (comp.layout === "wide") {
    return (
      <div className="relative">
        <MediaItemRender item={comp.item} />
        {comp.annotation && (
          <div
            className="mt-3 pl-3"
            style={{ borderLeft: "2px solid hsl(44 95% 48% / 0.45)" }}
          >
            <p
              className="font-mono text-[9px] italic"
              style={{ color: "hsl(24 18% 10% / 0.42)" }}
            >
              {comp.annotation}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (comp.layout === "comparison") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p
            className="font-mono text-[9px] uppercase tracking-widest mb-2"
            style={{ color: "hsl(24 18% 10% / 0.38)" }}
          >
            Antes
          </p>
          <MediaItemRender item={comp.before} compact />
        </div>
        <div>
          <p
            className="font-mono text-[9px] uppercase tracking-widest mb-2"
            style={{ color: "hsl(44 95% 38%)" }}
          >
            {comp.label ?? "Después"}
          </p>
          <MediaItemRender item={comp.after} compact />
        </div>
      </div>
    );
  }

  if (comp.layout === "gallery") {
    return (
      <div className="space-y-4">
        {comp.items.map((item, i) => (
          <MediaItemRender key={i} item={item} />
        ))}
        {comp.caption && (
          <p
            className="font-mono text-[9px] italic"
            style={{ color: "hsl(24 18% 10% / 0.35)" }}
          >
            {comp.caption}
          </p>
        )}
      </div>
    );
  }

  return null;
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = getProjectData(slug ?? "demo");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.title,
    description: data.opening.headline,
    author: {
      "@type": "Person",
      name: "Lara Feijóo",
    },
  };

  return (
    <>
      <SeoHead
        meta={{
          title: `${data.title} | Lara Feijóo`,
          description:
            `${data.opening.headline} ${data.opening.objective ?? ""}`.trim(),
          canonical: `${window.location.origin}/trabajo/${data.slug}`,
        }}
        schema={schema}
      />

      <main>
        {/* ══════════════════════════════════════════════════════
            00 — HERO EDITORIAL
            Compacto. No un banner gigante.
        ══════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "hsl(36 28% 91%)" }}
          aria-label={`Caso de estudio: ${data.title}`}
        >
          {/* Acento radial */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 45% 55% at 100% 100%, hsl(50 90% 80% / 0.35) 0%, transparent 65%)",
            }}
          />

          {/* Grid sutil */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(24 18% 10%) 1px, transparent 1px), linear-gradient(90deg, hsl(24 18% 10%) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Barra breadcrumb */}
          <div
            className="relative z-10 border-b px-8 py-2.5"
            style={{ borderColor: "hsl(24 18% 10% / 0.15)" }}
          >
            <div className="mx-auto flex max-w-7xl items-center gap-3">
              <Link
                to="/trabajo"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-opacity hover:opacity-70"
                style={{ color: "hsl(24 18% 10% / 0.48)" }}
              >
                <ArrowLeft size={11} /> Trabajo
              </Link>
              <span
                className="font-mono text-[10px]"
                style={{ color: "hsl(24 18% 10% / 0.25)" }}
              >
                /
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "hsl(44 95% 38%)" }}
              >
                {data.title}
              </span>
            </div>
          </div>

          {/* Contenido del hero */}
          <div className="relative z-10 px-8 py-12 md:py-16">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] items-start">
                {/* Columna izquierda — título + segunda lectura */}
                <MotionWrapper>
                  {/* Metadata row */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{ color: "hsl(44 95% 38%)" }}
                    >
                      {data.num}
                    </span>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                      style={{
                        border: "1px solid hsl(24 18% 10% / 0.20)",
                        color: CONTEXT_COLORS[data.context],
                      }}
                    >
                      {data.context}
                    </span>
                    <span
                      className="font-mono text-[9px]"
                      style={{ color: "hsl(24 18% 10% / 0.35)" }}
                    >
                      {data.year}
                    </span>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                      style={{
                        background: "hsl(44 95% 48% / 0.10)",
                        border: "1px solid hsl(44 95% 48% / 0.28)",
                        color: "hsl(44 95% 30%)",
                      }}
                    >
                      {data.depth}
                    </span>
                  </div>

                  {/* Título */}
                  <h1
                    className="font-serif font-medium leading-[1.05]"
                    style={{
                      fontSize: "clamp(2.8rem, 6vw, 5rem)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    {data.title}
                  </h1>

                  {/* Segunda lectura — tagline interactivo */}
                  <SecondReading
                    first={data.opening.headline}
                    second={data.opening.secondReading}
                  />

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {data.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                        style={{
                          border: "1px solid hsl(24 18% 10% / 0.16)",
                          color: "hsl(24 18% 10% / 0.48)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </MotionWrapper>

                {/* Columna derecha — ficha de metadatos */}
                <MotionWrapper delay={0.1}>
                  <div
                    className="w-full min-w-[220px] lg:w-[260px] space-y-4 p-6"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: "1px solid hsl(24 18% 10% / 0.12)",
                    }}
                  >
                    {[
                      { label: "Año", value: data.year },
                      { label: "Contexto", value: data.context },
                      {
                        label: "Profundidad",
                        value: data.depth,
                      },
                      { label: "Rol", value: data.role },
                    ].filter(({ value }) => !isPendingContent(value)).map(({ label, value }) => (
                      <div
                        key={label}
                        className="pb-3"
                        style={{
                          borderBottom: "1px solid hsl(24 18% 10% / 0.08)",
                        }}
                      >
                        <p
                          className="font-mono text-[9px] uppercase tracking-widest mb-0.5"
                          style={{ color: "hsl(24 18% 10% / 0.38)" }}
                        >
                          {label}
                        </p>
                        <p
                          className="font-sans text-sm font-medium"
                          style={{ color: "hsl(24 18% 10% / 0.80)" }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>

          {/* Imagen de portada — si existe */}
          {data.coverImg && (
            <div
              className="relative overflow-hidden"
              style={{ height: "clamp(220px, 38vw, 460px)" }}
            >
              <img
                src={data.coverImg}
                alt={`${data.title} — imagen de portada`}
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(36 28% 91% / 0) 0%, hsl(36 28% 91% / 0.10) 100%)",
                }}
              />
            </div>
          )}
        </section>

        {/* ══════════════════════════════════════════════════════
            01 — CONTEXTO
            Módulo de partida: brief, objetivo, background.
        ══════════════════════════════════════════════════════ */}
        {(data.opening.brief ||
          data.opening.objective ||
          data.opening.target ||
          data.opening.background) && (
          <section
            className="px-8 py-14 md:py-18"
            style={{ background: "hsl(38 22% 95%)" }}
            aria-label="Contexto del proyecto"
          >
            <div className="mx-auto max-w-7xl">
              <MotionWrapper>
                <div
                  className="mb-8 flex items-baseline gap-4 pb-5"
                  style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.14)" }}
                >
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: "hsl(44 95% 38%)" }}
                  >
                    01
                  </span>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: "hsl(24 18% 10% / 0.50)" }}
                  >
                    Contexto
                  </p>
                </div>
              </MotionWrapper>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {data.opening.brief && (
                  <MotionWrapper delay={0.04}>
                    <div
                      className="p-6"
                      style={{
                        background: "hsl(40 20% 97%)",
                        border: "1px solid hsl(24 18% 10% / 0.10)",
                        borderTop: "3px solid hsl(24 18% 10% / 0.25)",
                      }}
                    >
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mb-3"
                        style={{ color: "hsl(24 18% 10% / 0.42)" }}
                      >
                        El encargo
                      </p>
                      <p
                        className="font-serif text-sm font-medium leading-relaxed"
                        style={{ color: "hsl(24 18% 10% / 0.82)" }}
                      >
                        {data.opening.brief}
                      </p>
                    </div>
                  </MotionWrapper>
                )}

                {data.opening.objective && (
                  <MotionWrapper delay={0.08}>
                    <div
                      className="p-6"
                      style={{
                        background: "hsl(40 20% 97%)",
                        border: "1px solid hsl(24 18% 10% / 0.10)",
                        borderTop: "3px solid hsl(44 95% 48%)",
                      }}
                    >
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mb-3"
                        style={{ color: "hsl(44 95% 38%)" }}
                      >
                        El objetivo real
                      </p>
                      <p
                        className="font-serif text-sm font-medium leading-relaxed"
                        style={{ color: "hsl(24 18% 10% / 0.82)" }}
                      >
                        {data.opening.objective}
                      </p>
                    </div>
                  </MotionWrapper>
                )}

                {data.opening.background && (
                  <MotionWrapper delay={0.12}>
                    <div
                      className="p-6"
                      style={{
                        background: "hsl(40 20% 97%)",
                        border: "1px solid hsl(24 18% 10% / 0.10)",
                        borderTop: "3px solid hsl(24 18% 10% / 0.12)",
                      }}
                    >
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mb-3"
                        style={{ color: "hsl(24 18% 10% / 0.38)" }}
                      >
                        El contexto
                      </p>
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: "hsl(24 18% 10% / 0.62)" }}
                      >
                        {data.opening.background}
                      </p>
                    </div>
                  </MotionWrapper>
                )}
                {data.opening.target && (
                  <MotionWrapper delay={0.16}>
                    <div
                      className="p-6"
                      style={{
                        background: "hsl(25 20% 10%)",
                        borderTop: "3px solid hsl(44 95% 48%)",
                      }}
                    >
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mb-3"
                        style={{ color: "hsl(44 95% 58%)" }}
                      >
                        El público
                      </p>
                      <p
                        className="font-serif text-sm font-medium leading-relaxed"
                        style={{ color: "hsl(36 18% 92%)" }}
                      >
                        {data.opening.target}
                      </p>
                    </div>
                  </MotionWrapper>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            02 — PROCESO
            Bloques modulares reordenables.
            Cada proyecto usa combinaciones distintas.
        ══════════════════════════════════════════════════════ */}
        {data.blocks.length > 0 && (
          <section
            className="px-8 py-14 md:py-18"
            style={{ background: "hsl(40 20% 97%)" }}
            aria-label="Proceso"
          >
            <div className="mx-auto max-w-7xl">
              <MotionWrapper>
                <div
                  className="mb-10 flex items-baseline gap-4 pb-5"
                  style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.14)" }}
                >
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: "hsl(44 95% 38%)" }}
                  >
                    02
                  </span>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: "hsl(24 18% 10% / 0.50)" }}
                  >
                    Proceso
                  </p>
                  <p
                    className="ml-auto font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "hsl(24 18% 10% / 0.28)" }}
                  >
                    {data.blocks.length} bloques
                  </p>
                </div>
              </MotionWrapper>

              {/* Layout asimétrico: bloques en grid editorial */}
              <div className="grid gap-4 lg:grid-cols-2">
                {data.blocks.map((block, i) => {
                  // Bloques de insight/decisión ocupan toda la anchura
                  const isFullWidth =
                    block.type === "INSIGHT" || block.type === "SISTEMA";
                  if (isFullWidth) {
                    return (
                      <div key={i} className="lg:col-span-2">
                        <ProcessBlock block={block} index={i} />
                      </div>
                    );
                  }
                  return <ProcessBlock key={i} block={block} index={i} />;
                })}
              </div>

              {/* Nota de metodología */}
              <MotionWrapper delay={0.18}>
                <div
                  className="mt-8 flex items-center gap-3 py-4"
                  style={{
                    borderTop: "1px solid hsl(24 18% 10% / 0.10)",
                  }}
                >
                  <div
                    className="h-[1.5px] w-8"
                    style={{ background: "hsl(44 95% 48%)" }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-mono text-[9px] italic"
                    style={{ color: "hsl(24 18% 10% / 0.35)" }}
                  >
                    El orden de estos bloques refleja el razonamiento real del
                    proyecto, no una estructura académica estándar.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            03 — EVIDENCIAS
            Galería editorial con composiciones variadas.
        ══════════════════════════════════════════════════════ */}
        {data.evidencias && data.evidencias.compositions.length > 0 && (
          <section
            className="px-8 py-14 md:py-18"
            style={{ background: "hsl(36 22% 92%)" }}
            aria-label="Evidencias"
          >
            <div className="mx-auto max-w-7xl">
              <MotionWrapper>
                <div
                  className="mb-10 flex items-baseline justify-between pb-5"
                  style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.14)" }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{ color: "hsl(44 95% 38%)" }}
                    >
                      03
                    </span>
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.22em]"
                      style={{ color: "hsl(24 18% 10% / 0.50)" }}
                    >
                      Evidencias
                    </p>
                  </div>
                  {data.evidencias.intro && (
                    <p
                      className="hidden font-mono text-[9px] italic md:block"
                      style={{ color: "hsl(24 18% 10% / 0.38)" }}
                    >
                      {data.evidencias.intro}
                    </p>
                  )}
                </div>
              </MotionWrapper>

              {/* Composiciones de media */}
              <div className="space-y-10">
                {data.evidencias.compositions.map((comp, i) => (
                  <MotionWrapper key={i} delay={i * 0.06}>
                    <div
                      className={`${comp.layout === "wide" || comp.layout === "single" ? "" : ""}`}
                    >
                      <MediaComposition comp={comp} />
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            04 — REFLEXIÓN
            Final compacto. Honesto, no conclusivo.
        ══════════════════════════════════════════════════════ */}
        {data.reflexion && (
          <section
            className="px-8 py-14 md:py-18"
            style={{ background: "hsl(25 20% 10%)" }}
            aria-label="Reflexión"
          >
            <div className="mx-auto max-w-7xl">
              <MotionWrapper>
                <div
                  className="mb-8 flex items-baseline gap-4 pb-5"
                  style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.10)" }}
                >
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: "hsl(44 95% 48%)" }}
                  >
                    04
                  </span>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: "hsl(0 0% 100% / 0.55)" }}
                  >
                    Reflexión
                  </p>
                </div>
              </MotionWrapper>

              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
                {/* Texto principal */}
                <MotionWrapper>
                  <h2
                    className="font-serif font-medium leading-snug"
                    style={{
                      fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                      color: "hsl(36 18% 92%)",
                    }}
                  >
                    {data.reflexion.headline}
                  </h2>
                  <p
                    className="mt-5 font-sans text-sm leading-relaxed max-w-lg"
                    style={{ color: "hsl(0 0% 100% / 0.58)" }}
                  >
                    {data.reflexion.body}
                  </p>

                  {data.reflexion.annotation && (
                    <div
                      className="mt-6 pl-4"
                      style={{
                        borderLeft: "2px solid hsl(44 95% 48% / 0.45)",
                      }}
                    >
                      <p
                        className="font-mono text-[9px] italic"
                        style={{ color: "hsl(0 0% 100% / 0.38)" }}
                      >
                        {data.reflexion.annotation}
                      </p>
                    </div>
                  )}
                </MotionWrapper>

                {/* Lista de aprendizajes */}
                {data.reflexion.learnings &&
                  data.reflexion.learnings.length > 0 && (
                    <MotionWrapper delay={0.08}>
                      <div
                        className="space-y-0"
                        style={{
                          borderTop: "1px solid hsl(0 0% 100% / 0.08)",
                        }}
                      >
                        {data.reflexion.learnings.map((l, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-4 py-4"
                            style={{
                              borderBottom: "1px solid hsl(0 0% 100% / 0.08)",
                            }}
                          >
                            <span
                              className="shrink-0 font-mono text-[10px] font-bold pt-0.5"
                              style={{ color: "hsl(44 95% 48%)" }}
                            >
                              →
                            </span>
                            <p
                              className="font-sans text-sm leading-relaxed"
                              style={{ color: "hsl(0 0% 100% / 0.62)" }}
                            >
                              {l}
                            </p>
                          </div>
                        ))}
                      </div>
                    </MotionWrapper>
                  )}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            05 — NAVEGACIÓN: anterior / archivo / siguiente
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-10"
          style={{
            background: "hsl(38 22% 95%)",
            borderTop: "1px solid hsl(24 18% 10% / 0.12)",
          }}
          aria-label="Navegación entre proyectos"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-3 items-center gap-4">
              {/* Anterior */}
              <div>
                {data.prevProject ? (
                  <Link
                    to={`/trabajo/${data.prevProject.slug}`}
                    className="group inline-flex flex-col gap-1 transition-opacity hover:opacity-70"
                  >
                    <span
                      className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "hsl(24 18% 10% / 0.38)" }}
                    >
                      <ArrowLeft size={10} /> Anterior
                    </span>
                    <span
                      className="font-serif text-sm font-medium group-hover:underline decoration-1 underline-offset-2"
                      style={{ color: "hsl(24 18% 10% / 0.72)" }}
                    >
                      {data.prevProject.num} — {data.prevProject.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* Centro — volver al archivo */}
              <div className="flex justify-center">
                <Link
                  to="/trabajo"
                  className="inline-flex flex-col items-center gap-1.5 transition-opacity hover:opacity-70"
                >
                  <div
                    className="h-[1.5px] w-6"
                    style={{ background: "hsl(44 95% 48%)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "hsl(24 18% 10% / 0.42)" }}
                  >
                    Volver al archivo
                  </span>
                  <div
                    className="h-[1.5px] w-6"
                    style={{ background: "hsl(44 95% 48%)" }}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Siguiente */}
              <div className="flex justify-end">
                {data.nextProject ? (
                  <Link
                    to={`/trabajo/${data.nextProject.slug}`}
                    className="group inline-flex flex-col items-end gap-1 transition-opacity hover:opacity-70"
                  >
                    <span
                      className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "hsl(24 18% 10% / 0.38)" }}
                    >
                      Siguiente <ArrowRight size={10} />
                    </span>
                    <span
                      className="font-serif text-sm font-medium group-hover:underline decoration-1 underline-offset-2 text-right"
                      style={{ color: "hsl(24 18% 10% / 0.72)" }}
                    >
                      {data.nextProject.num} — {data.nextProject.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
