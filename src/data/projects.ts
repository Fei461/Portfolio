export type ProjectDepth = "CASO COMPLETO" | "CASO BREVE" | "ARCHIVO";
export type ProjectContext = "PERSONAL" | "PROFESIONAL" | "ACADÉMICO";

export type ProjectContent = {
  title: string;
  year: string;
  context: ProjectContext;
  depth: ProjectDepth;
  tags: string[];
  categories: string[];
  description: string;
  role: string;
  contribution: string;
  // Añade rutas dentro de /static/assets; el layout usa src cuando esté disponible.
  media: Array<{
    src?: string;
    alt: string;
    kind: "image" | "placeholder" | "video";
    layout?: "hero" | "standard" | "wide" | "gallery" | "vertical";
  }>;
};

const assetPath = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;

export const projectContent: Record<string, ProjectContent> = {
  talixea: {
    title: "Talixea", year: "En desarrollo", context: "PERSONAL", depth: "CASO COMPLETO",
    tags: ["Producto", "Estrategia", "Aprendizaje", "Idiomas"], categories: ["ESTRATEGIA", "CONTENIDO"],
    description: "Proyecto personal que conecta lectura y aprendizaje de idiomas a partir del Diglot Weave Method.",
    role: "Creado íntegramente por Lara", contribution: "Idea, identidad, producto, evolución y promoción.",
    media: [{ src: assetPath("talixea.png"), alt: "TODO: captura real de Talixea", kind: "image" }],
  },
  iberia: {
    title: "Iberia", year: "TODO: año", context: "ACADÉMICO", depth: "CASO COMPLETO",
    tags: ["Estrategia", "Credibilidad", "Sostenibilidad"], categories: ["ESTRATEGIA", "INVESTIGACIÓN"],
    description: "Trabajo en equipo sobre la brecha entre transición sostenible y percepción pública: el problema de comunicación era la credibilidad.",
    role: "TODO: mi papel en el equipo", contribution: "TODO: contribución individual.",
    media: [{ src: assetPath("iberia.png"), alt: "TODO: pieza de Iberia", kind: "image" }],
  },
  "warriors-arena": {
    title: "Warriors Arena", year: "TODO: año", context: "ACADÉMICO", depth: "CASO COMPLETO",
    tags: ["Contenido", "OTT", "Distribución", "Medios"], categories: ["CONTENIDO", "ESTRATEGIA", "MEDIOS"],
    description: "Trabajo en equipo para ordenar la distribución multicanal y comercial de un formato de entretenimiento de diez episodios.",
    role: "TODO: mi papel en el equipo", contribution: "TODO: contribución individual.",
    media: [{ src: assetPath("warriors-arena.png"), alt: "TODO: material de Warriors Arena", kind: "image" }],
  },
  bbva: { title: "BBVA", year: "TODO: año", context: "ACADÉMICO", depth: "CASO BREVE", tags: ["Estrategia", "Comportamiento", "Fraude digital"], categories: ["ESTRATEGIA", "INVESTIGACIÓN"], description: "Trabajo estratégico sobre fraude digital y la confianza excesiva ante amenazas en personas de 18 a 30 años.", role: "TODO: mi papel", contribution: "TODO: contribución individual.", media: [{ alt: "TODO: piezas BBVA", kind: "placeholder" }] },
  ryanair: { title: "Ryanair", year: "TODO: año", context: "ACADÉMICO", depth: "CASO BREVE", tags: ["Comunicación interna", "Stakeholders", "Onboarding"], categories: ["ESTRATEGIA", "CONTENIDO"], description: "Proyecto académico de comunicación interna centrado en experiencia del empleado, stakeholders, reconocimiento y onboarding.", role: "TODO: mi papel", contribution: "TODO: contribución individual.", media: [{ src: assetPath("ryanair.png"), alt: "TODO: material de Ryanair", kind: "image" }] },
  "bruja-roja": { title: "Bruja Roja", year: "TODO: año", context: "ACADÉMICO", depth: "CASO BREVE", tags: ["Branding", "Identidad", "Tono de voz"], categories: ["MARCA"], description: "Identidad para una marca de copa menstrual orientada a normalizar la menstruación y romper tabúes.", role: "TODO: mi papel", contribution: "TODO: contribución individual.", media: [{ alt: "TODO: identidad Bruja Roja", kind: "placeholder" }] },
  "stud-ia": { title: "Stud-IA", year: "TODO: fechas", context: "PROFESIONAL", depth: "CASO BREVE", tags: ["Estrategia", "Contenido", "Research"], categories: ["ESTRATEGIA", "CONTENIDO", "INVESTIGACIÓN"], description: "Experiencia profesional de marketing y comunicación: estrategia, gestión y creación de contenido, copy y trabajo para redes y plataformas.", role: "Prácticas en marketing y comunicación", contribution: "TODO: concretar responsabilidades y ejemplos publicables.", media: [{ alt: "TODO: calendarios, research o ejemplos autorizados", kind: "placeholder" }] },
  oreo: { title: "Oreo", year: "TODO: año", context: "ACADÉMICO", depth: "ARCHIVO", tags: ["Media planning", "Funnel", "KPIs"], categories: ["MEDIOS", "ESTRATEGIA"], description: "Plan de medios académico para público joven: situación, buyer persona, funnel, tácticas, KPIs y modelos de compra.", role: "TODO: mi papel", contribution: "TODO: contribución individual.", media: [{ alt: "TODO: plan de medios Oreo", kind: "placeholder" }] },
  "hermanos-chacon": { title: "Hermanos Chacón", year: "TODO: año", context: "ACADÉMICO", depth: "ARCHIVO", tags: ["Rebranding", "Digitalización", "Negocio local"], categories: ["MARCA", "ESTRATEGIA"], description: "Rebranding de un bar tradicional: modernizar su presencia sin perder la esencia ni el vínculo con el público habitual.", role: "TODO: mi papel", contribution: "TODO: contribución individual.", media: [{ alt: "TODO: identidad Hermanos Chacón", kind: "placeholder" }] },
  "investigacion-consumo": { title: "Investigación de conducta de consumo", year: "TODO: año", context: "ACADÉMICO", depth: "ARCHIVO", tags: ["Comportamiento", "Consumo", "Psicología"], categories: ["INVESTIGACIÓN"], description: "Investigación sobre gestión emocional, comportamiento alimentario y consumo. Metodología y hallazgos pendientes de documentar.", role: "TODO: mi papel", contribution: "TODO: pregunta, metodología, hallazgo e implicación.", media: [{ alt: "TODO: investigación de conducta", kind: "placeholder" }] },
  "tour-cdc-dana": { title: "Tour C de C / DANA", year: "TODO_LARA", context: "ACADÉMICO", depth: "ARCHIVO", tags: ["Comunicación", "Propuesta creativa"], categories: ["CONTENIDO", "ESTRATEGIA"], description: "TODO_LARA: descripción del trabajo y contexto.", role: "TODO_LARA", contribution: "TODO_LARA", media: [{ alt: "TODO_LARA: visual del proyecto", kind: "placeholder" }] },
};

export const projectSequence = ["talixea", "iberia", "warriors-arena", "bbva", "ryanair", "bruja-roja", "stud-ia", "oreo", "hermanos-chacon", "investigacion-consumo", "tour-cdc-dana"];
