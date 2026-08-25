import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "@phosphor-icons/react";
import { SeoHead } from "@/components/seo-head";
import { MotionWrapper } from "@/components/motion-wrapper";
import { projectContent, projectSequence } from "@/data/projects";
import { isPendingContent } from "@/lib/utils";

// ─── TIPOS ────────────────────────────────────────────────────────────────────
type DepthLevel = "CASO COMPLETO" | "CASO BREVE" | "ARCHIVO";
type ContextType = "PERSONAL" | "PROFESIONAL" | "ACADÉMICO";
type FilterKey =
  | "TODO"
  | "ESTRATEGIA"
  | "MARCA"
  | "CONTENIDO"
  | "INVESTIGACIÓN"
  | "MEDIOS";

type Project = {
  num: string;
  slug: string;
  title: string;
  year: string;
  context: ContextType;
  tags: string[];
  categories: FilterKey[];
  description: string;
  depth: DepthLevel;
  coverImg?: string;
  role?: string;
  challenge?: string;
  contribution?: string;
  evidence?: string;
};

type CapabilityGroup = {
  id: string;
  title: string;
  subtitle: string;
  projects: string[]; // slugs
};

// ─── DATOS DE PROYECTOS ──────────────────────────────────────────────────────
const PROJECTS_BASE: Project[] = [
  {
    num: "01",
    slug: "talixea",
    title: "Talixea",
    year: "En curso",
    context: "PERSONAL",
    tags: ["Producto", "Estrategia", "Aprendizaje"],
    categories: ["ESTRATEGIA", "CONTENIDO"],
    description:
      "Proyecto personal que conecta lectura y aprendizaje de idiomas. Nace al detectar una oportunidad para aplicar el Diglot Weave Method en español.",
    depth: "CASO COMPLETO",
    coverImg: "/assets/talixea.png",
    role: "Fundadora · Estrategia · Producto",
    challenge:
      "¿Cómo hacer que aprender un idioma se parezca más a leer que a estudiar?",
    contribution:
      "Ideación, posicionamiento, diseño de propuesta de valor, desarrollo del producto.",
    evidence: "Proyecto vivo; evidencias y evolución pendientes de actualizar.",
  },
  {
    num: "02",
    slug: "iberia",
    title: "Iberia",
    year: "2024",
    context: "ACADÉMICO",
    tags: ["Estrategia", "Comportamiento", "Campaña"],
    categories: ["ESTRATEGIA", "INVESTIGACIÓN"],
    description:
      "Campaña de reposicionamiento estratégico. El análisis mostró que el territorio de sostenibilidad era indefendible desde la percepción del consumidor. El verdadero problema era de credibilidad, no de mensaje.",
    depth: "CASO COMPLETO",
    coverImg: "/assets/iberia.png",
    role: "Estrategia · Investigación · Planificación",
    challenge:
      "¿Cómo posicionar la sostenibilidad de una aerolínea de forma creíble?",
    contribution:
      "Análisis de comportamiento del consumidor, detección del problema real, propuesta estratégica.",
    evidence: "Redirección del brief original basada en investigación.",
  },
  {
    num: "03",
    slug: "bruja-roja",
    title: "Bruja Roja",
    year: "2024",
    context: "ACADÉMICO",
    tags: ["Marca", "Identidad", "Tono"],
    categories: ["MARCA"],
    description:
      "Construcción de identidad para una marca con territorio creativo propio. Trabajo de posicionamiento verbal y visual desde cero, con especial atención al tono de comunicación y a la coherencia entre propuesta y contexto.",
    depth: "CASO BREVE",
    role: "Identidad · Posicionamiento · Narrativa de marca",
    challenge:
      "Construir una identidad diferenciadora con territorio verbal propio.",
    contribution:
      "Naming, territorio de comunicación, tono de voz, sistema de mensajes.",
    evidence:
      "Coherencia entre propuesta visual y verbal como criterio de evaluación.",
  },
  {
    num: "04",
    slug: "warriors-arena",
    title: "Warriors Arena",
    year: "2024",
    context: "ACADÉMICO",
    tags: ["Contenido", "OTT", "Distribución"],
    categories: ["CONTENIDO", "ESTRATEGIA", "MEDIOS"],
    description:
      "Estrategia de contenido end-to-end para plataforma OTT. La complejidad se resolvió construyendo un sistema de distribución multi-ventana, no produciendo más contenido.",
    depth: "CASO COMPLETO",
    coverImg: "/assets/warriors-arena.png",
    role: "Estrategia de contenido · Planificación de medios",
    challenge:
      "¿Cómo hacer crecer la audiencia de una plataforma con recursos limitados?",
    contribution:
      "Análisis de audiencia, mapa de territorios, sistema de distribución, KPIs.",
    evidence: "Evidencias y resultados pendientes de documentar.",
  },
  {
    num: "05",
    slug: "bbva",
    title: "BBVA",
    year: "2024",
    context: "ACADÉMICO",
    tags: ["Estrategia", "Comportamiento", "Fraude digital"],
    categories: ["ESTRATEGIA", "INVESTIGACIÓN"],
    description:
      "Estrategia de comunicación para reducir el fraude digital entre clientes. La investigación de comportamiento mostró que el problema no era de información sino de percepción de riesgo y sesgo de optimismo.",
    depth: "CASO BREVE",
    role: "Investigación · Estrategia · Comunicación",
    challenge:
      "¿Por qué los usuarios siguen cayendo en phishing sabiendo que existe?",
    contribution:
      "Diagnóstico conductual, marco estratégico, propuesta de comunicación.",
    evidence: "Aplicación de psicología del comportamiento al brief bancario.",
  },
  {
    num: "06",
    slug: "ryanair",
    title: "Ryanair",
    year: "2023",
    context: "ACADÉMICO",
    tags: ["Comunicación interna", "Stakeholders", "Onboarding"],
    categories: ["ESTRATEGIA", "CONTENIDO"],
    description:
      "Plan de comunicación interna orientado a mejorar el reconocimiento y la experiencia de los empleados. El análisis mostró que el problema era de cultura antes que de mensajes.",
    depth: "CASO BREVE",
    coverImg: "/assets/ryanair.png",
    role: "Comunicación interna · Planificación",
    challenge:
      "Mejorar el compromiso interno en una organización con alta rotación.",
    contribution:
      "Diagnóstico cultural, mapa de stakeholders, plan de comunicación interna.",
    evidence:
      "Marco de comunicación que distingue entre información y reconocimiento.",
  },
  {
    num: "07",
    slug: "stud-ia",
    title: "Stud-IA",
    year: "2024",
    context: "PROFESIONAL",
    tags: ["Research", "Estrategia", "Contenido"],
    categories: ["ESTRATEGIA", "CONTENIDO", "INVESTIGACIÓN"],
    description:
      "Experiencia profesional en estrategia, gestión de contenidos y trabajo analítico asociado a comunicación y marketing.",
    depth: "CASO BREVE",
    role: "Investigación · Estrategia · Producción de contenido",
    challenge:
      "¿Cómo se integra la IA en flujos de trabajo de comunicación reales?",
    contribution:
      "Investigación aplicada, análisis de herramientas, estrategia de implementación.",
    evidence: "Detalle de responsabilidades pendiente de confirmar.",
  },
  {
    num: "08",
    slug: "oreo",
    title: "Oreo",
    year: "2023",
    context: "ACADÉMICO",
    tags: ["Medios", "Funnel", "KPIs"],
    categories: ["MEDIOS", "ESTRATEGIA"],
    description:
      "Planificación de medios con construcción de funnel y definición de KPIs por etapa. Ejercicio de lógica de inversión y optimización de alcance con presupuesto definido.",
    depth: "ARCHIVO",
    role: "Planificación de medios",
    challenge:
      "Construir un plan de medios eficiente para una marca de gran consumo.",
    contribution:
      "Funnel de medios, mapa de canales, KPIs por fase, justificación de inversión.",
    evidence: "Coherencia entre objetivos de campaña y elecciones de medios.",
  },
  {
    num: "09",
    slug: "hermanos-chacon",
    title: "Hermanos Chacón",
    year: "2023",
    context: "ACADÉMICO",
    tags: ["Rebranding", "Negocio", "Digitalización"],
    categories: ["MARCA", "ESTRATEGIA"],
    description:
      "Proyecto de rebranding para negocio local con proceso de digitalización. El reto era actualizar la identidad sin perder el capital de marca existente entre clientes habituales.",
    depth: "ARCHIVO",
    role: "Branding · Estrategia · Comunicación",
    challenge: "Modernizar sin romper el vínculo con la audiencia histórica.",
    contribution:
      "Diagnóstico de marca, propuesta de identidad, plan de comunicación.",
    evidence: "Equilibrio entre evolución y continuidad como criterio central.",
  },
  {
    num: "10",
    slug: "investigacion-consumo",
    title: "Investigación de conducta de consumo",
    year: "2023",
    context: "ACADÉMICO",
    tags: ["Investigación", "Psicología", "Comportamiento"],
    categories: ["INVESTIGACIÓN"],
    description:
      "Investigación académica sobre patrones de comportamiento del consumidor. Revisión de literatura, análisis de casos y síntesis de implicaciones para la comunicación comercial.",
    depth: "ARCHIVO",
    role: "Investigación · Análisis · Síntesis",
    challenge:
      "¿Qué factores psicológicos condicionan realmente la decisión de compra?",
    contribution:
      "Revisión crítica, análisis cruzado, hallazgos aplicables a estrategia.",
    evidence: "Base teórica que sustenta el trabajo estratégico posterior.",
  },
  {
    num: "11",
    slug: "tour-cdc-dana",
    title: "Tour C de C / DANA",
    year: "2024",
    context: "ACADÉMICO",
    tags: ["Creatividad", "Comunicación"],
    categories: ["CONTENIDO", "ESTRATEGIA"],
    description:
      "Propuesta creativa desarrollada en contexto de competición. Ejercicio de pensamiento creativo bajo presión de tiempo y limitación de recursos, con criterios de evaluación del sector.",
    depth: "ARCHIVO",
    role: "Creatividad · Comunicación",
    challenge:
      "Desarrollar una propuesta coherente y diferenciadora en tiempo limitado.",
    contribution: "Concepto creativo, argumentación estratégica, presentación.",
    evidence:
      "Capacidad de trabajo creativo bajo condiciones de competición real.",
  },
];

// El diseño conserva sus metadatos visuales; el contenido editable vive en src/data/projects.ts.
const PROJECTS: Project[] = projectSequence.map((slug, index) => {
  const base = PROJECTS_BASE.find((project) => project.slug === slug);
  const content = projectContent[slug];

  if (!content) return base!;

  return {
    ...(base ?? {
      num: String(index + 1).padStart(2, "0"),
      slug,
    }),
    num: String(index + 1).padStart(2, "0"),
    title: content.title,
    year: isPendingContent(content.year) ? "" : content.year,
    context: content.context,
    tags: content.tags,
    categories: content.categories as FilterKey[],
    description: isPendingContent(content.description) ? "" : content.description,
    depth: content.depth,
    coverImg: content.media.find((media) => media.src)?.src,
    role: isPendingContent(content.role) ? undefined : content.role,
    challenge: isPendingContent(content.contribution) ? undefined : content.contribution,
    contribution: isPendingContent(content.contribution) ? undefined : content.contribution,
    evidence: isPendingContent(content.contribution) ? undefined : content.contribution,
  };
});

// ─── GRUPOS DE CAPACIDADES ────────────────────────────────────────────────────
const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: "detectar",
    title: "Detectar oportunidades",
    subtitle: "Ver lo que no se nombra todavía",
    projects: ["talixea", "iberia"],
  },
  {
    id: "entender",
    title: "Entender comportamientos",
    subtitle: "Ir más allá de lo declarado",
    projects: ["bbva", "investigacion-consumo", "iberia"],
  },
  {
    id: "construir-sistemas",
    title: "Construir sistemas",
    subtitle: "Convertir complejidad en estructura",
    projects: ["warriors-arena", "stud-ia", "oreo"],
  },
  {
    id: "dar-forma",
    title: "Dar forma a marcas",
    subtitle: "Posicionamiento, tono, coherencia",
    projects: ["bruja-roja", "hermanos-chacon"],
  },
  {
    id: "desde-dentro",
    title: "Pensar desde dentro",
    subtitle: "Comunicación interna y stakeholders",
    projects: ["ryanair", "stud-ia"],
  },
  {
    id: "estrategia-comunicacion",
    title: "Convertir estrategia en comunicación",
    subtitle: "Del insight a la pieza",
    projects: ["iberia", "bbva", "tour-cdc-dana"],
  },
];

const FILTERS: FilterKey[] = [
  "TODO",
  "ESTRATEGIA",
  "MARCA",
  "CONTENIDO",
  "INVESTIGACIÓN",
  "MEDIOS",
];

const DEPTH_COLORS: Record<
  DepthLevel,
  { bg: string; text: string; border: string }
> = {
  "CASO COMPLETO": {
    bg: "hsl(44 95% 48% / 0.12)",
    text: "hsl(44 95% 30%)",
    border: "hsl(44 95% 48% / 0.35)",
  },
  "CASO BREVE": {
    bg: "hsl(24 18% 10% / 0.06)",
    text: "hsl(24 18% 10% / 0.60)",
    border: "hsl(24 18% 10% / 0.20)",
  },
  ARCHIVO: {
    bg: "transparent",
    text: "hsl(24 18% 10% / 0.38)",
    border: "hsl(24 18% 10% / 0.14)",
  },
};

const CONTEXT_COLORS: Record<ContextType, string> = {
  PERSONAL: "hsl(44 95% 30%)",
  PROFESIONAL: "hsl(24 18% 10% / 0.65)",
  ACADÉMICO: "hsl(24 18% 10% / 0.42)",
};

// ─── MODAL DE PROFUNDIDAD ARCHIVO ─────────────────────────────────────────────
function ArchiveModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "hsl(24 18% 10% / 0.55)",
          backdropFilter: "blur(2px)",
        }}
      />
      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg p-8 sm:p-10"
        style={{
          background: "hsl(40 20% 97%)",
          border: "1px solid hsl(24 18% 10% / 0.14)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="font-mono text-[9px]"
                style={{ color: "hsl(24 18% 10% / 0.35)" }}
              >
                {project.num}
              </span>
              <span
                className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
                style={{
                  border: "1px solid hsl(24 18% 10% / 0.16)",
                  color: "hsl(24 18% 10% / 0.40)",
                }}
              >
                {project.depth}
              </span>
              <span
                className="font-mono text-[9px] uppercase tracking-widest"
                style={{ color: CONTEXT_COLORS[project.context] }}
              >
                {project.context}
              </span>
            </div>
            <h3
              className="font-serif text-2xl font-medium"
              style={{ color: "hsl(24 18% 10%)" }}
            >
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 transition-colors hover:opacity-70"
            style={{ color: "hsl(24 18% 10% / 0.45)" }}
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Contenido */}
        <div className="space-y-5">
          {project.challenge && (
            <div
              className="pl-4"
              style={{ borderLeft: "2px solid hsl(44 95% 48% / 0.50)" }}
            >
              <p
                className="font-mono text-[9px] uppercase tracking-widest mb-1"
                style={{ color: "hsl(44 95% 38%)" }}
              >
                Reto
              </p>
              <p
                className="font-serif text-sm font-medium leading-snug"
                style={{ color: "hsl(24 18% 10% / 0.85)" }}
              >
                {project.challenge}
              </p>
            </div>
          )}

          {project.contribution && (
            <div>
              <p
                className="font-mono text-[9px] uppercase tracking-widest mb-1.5"
                style={{ color: "hsl(24 18% 10% / 0.42)" }}
              >
                Qué hice
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "hsl(24 18% 10% / 0.68)" }}
              >
                {project.contribution}
              </p>
            </div>
          )}

          {project.evidence && (
            <div>
              <p
                className="font-mono text-[9px] uppercase tracking-widest mb-1.5"
                style={{ color: "hsl(24 18% 10% / 0.42)" }}
              >
                Qué demuestra
              </p>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "hsl(24 18% 10% / 0.68)" }}
              >
                {project.evidence}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                style={{
                  border: "1px solid hsl(24 18% 10% / 0.14)",
                  color: "hsl(24 18% 10% / 0.45)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TARJETA DE PROYECTO COMPLETA / BREVE ────────────────────────────────────
function ProjectCard({
  project,
  index,
  onOpenArchive,
}: {
  project: Project;
  index: number;
  onOpenArchive: (p: Project) => void;
}) {
  const depthColors = DEPTH_COLORS[project.depth];
  const isFullCase = project.depth === "CASO COMPLETO";
  const isArchive = project.depth === "ARCHIVO";

  // Alternating light/dark para casos completos
  const isDark = isFullCase && index % 2 === 1;

  if (isArchive) {
    return (
      <Link
        to={`/trabajo/${project.slug}`}
        className="w-full text-left group py-4 grid grid-cols-[3rem_1fr_auto] items-start gap-4 transition-colors hover:bg-[hsl(44_95%_48%_/_0.04)]"
        style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.10)" }}
      >
        <span
          className="font-mono text-[10px] pt-0.5"
          style={{ color: "hsl(24 18% 10% / 0.28)" }}
        >
          {project.num}
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className="font-serif text-base font-medium group-hover:underline decoration-1 underline-offset-2"
              style={{ color: "hsl(24 18% 10%)" }}
            >
              {project.title}
            </span>
            <span
              className="font-mono text-[9px] uppercase tracking-widest"
              style={{ color: CONTEXT_COLORS[project.context] }}
            >
              {project.context}
            </span>
          </div>
          <p
            className="font-sans text-xs leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.55)" }}
          >
            {project.description.slice(0, 110)}…
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-widest"
                style={{ color: "hsl(24 18% 10% / 0.35)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-end gap-2">
          <span
            className="font-mono text-[9px]"
            style={{ color: "hsl(24 18% 10% / 0.30)" }}
          >
            {project.year}
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
            style={{
              background: depthColors.bg,
              color: depthColors.text,
              border: `1px solid ${depthColors.border}`,
            }}
          >
            {project.depth}
          </span>
          <span
            className="font-mono text-[9px] opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "hsl(44 95% 38%)" }}
          >
            Ver →
          </span>
        </div>
      </Link>
    );
  }

  if (isFullCase) {
    return (
      <Link
        to={`/trabajo/${project.slug}`}
        className="group relative overflow-hidden transition-shadow hover:shadow-md"
        style={{
          background: isDark ? "hsl(25 20% 10%)" : "hsl(40 20% 97%)",
          border: `1px solid ${isDark ? "hsl(0 0% 100% / 0.08)" : "hsl(24 18% 10% / 0.12)"}`,
        }}
      >
        {/* Imagen si existe */}
        {project.coverImg && (
          <div className="relative overflow-hidden" style={{ height: "200px" }}>
            <img
              src={project.coverImg}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0"
              style={{
                background: isDark
                  ? "hsl(25 20% 10% / 0.45)"
                  : "hsl(24 18% 10% / 0.15)",
              }}
            />
            <span
              className="absolute left-4 top-4 font-mono text-[10px] tracking-widest"
              style={{ color: "hsl(0 0% 100% / 0.60)" }}
            >
              {project.num}
            </span>
          </div>
        )}

        <div className="p-7 lg:p-8">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {!project.coverImg && (
              <span
                className="font-mono text-[9px]"
                style={{
                  color: isDark
                    ? "hsl(0 0% 100% / 0.25)"
                    : "hsl(24 18% 10% / 0.28)",
                }}
              >
                {project.num}
              </span>
            )}
            <span
              className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
              style={{
                background: depthColors.bg,
                color: isDark ? "hsl(44 95% 68%)" : depthColors.text,
                border: `1px solid ${isDark ? "hsl(44 95% 48% / 0.30)" : depthColors.border}`,
              }}
            >
              {project.depth}
            </span>
            <span
              className="font-mono text-[9px] uppercase tracking-widest"
              style={{
                color: isDark
                  ? "hsl(0 0% 100% / 0.38)"
                  : CONTEXT_COLORS[project.context],
              }}
            >
              {project.context}
            </span>
            <span
              className="ml-auto font-mono text-[9px]"
              style={{
                color: isDark
                  ? "hsl(0 0% 100% / 0.28)"
                  : "hsl(24 18% 10% / 0.32)",
              }}
            >
              {project.year}
            </span>
          </div>

          <h3
            className="font-serif font-medium leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
              color: isDark ? "hsl(36 18% 92%)" : "hsl(24 18% 10%)",
            }}
          >
            {project.title}
          </h3>

          {project.role && (
            <p
              className="mt-1.5 font-mono text-[10px] uppercase tracking-wider"
              style={{
                color: isDark
                  ? "hsl(0 0% 100% / 0.32)"
                  : "hsl(24 18% 10% / 0.40)",
              }}
            >
              {project.role}
            </p>
          )}

          <p
            className="mt-4 font-sans text-sm leading-relaxed"
            style={{
              color: isDark
                ? "hsl(0 0% 100% / 0.55)"
                : "hsl(24 18% 10% / 0.62)",
            }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
                style={{
                  border: `1px solid ${isDark ? "hsl(0 0% 100% / 0.12)" : "hsl(24 18% 10% / 0.16)"}`,
                  color: isDark
                    ? "hsl(0 0% 100% / 0.38)"
                    : "hsl(24 18% 10% / 0.45)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span
              className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity"
              style={{ color: isDark ? "hsl(0 0% 100%)" : "hsl(44 95% 38%)" }}
            >
              Ver caso <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // CASO BREVE
  return (
    <Link
      to={`/trabajo/${project.slug}`}
      className="group flex flex-col justify-between p-6 lg:p-7 transition-shadow hover:shadow-sm"
      style={{
        background: "hsl(40 20% 97%)",
        border: "1px solid hsl(24 18% 10% / 0.12)",
        minHeight: "260px",
      }}
    >
      {/* Meta */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="font-mono text-[9px]"
            style={{ color: "hsl(24 18% 10% / 0.28)" }}
          >
            {project.num}
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
            style={{
              background: depthColors.bg,
              color: depthColors.text,
              border: `1px solid ${depthColors.border}`,
            }}
          >
            {project.depth}
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{ color: CONTEXT_COLORS[project.context] }}
          >
            {project.context}
          </span>
          <span
            className="ml-auto font-mono text-[9px]"
            style={{ color: "hsl(24 18% 10% / 0.30)" }}
          >
            {project.year}
          </span>
        </div>

        <h3
          className="font-serif text-xl font-medium leading-tight"
          style={{ color: "hsl(24 18% 10%)" }}
        >
          {project.title}
        </h3>

        {project.role && (
          <p
            className="mt-1 font-mono text-[9px] uppercase tracking-wider"
            style={{ color: "hsl(24 18% 10% / 0.38)" }}
          >
            {project.role}
          </p>
        )}

        <p
          className="mt-3 font-sans text-sm leading-relaxed"
          style={{ color: "hsl(24 18% 10% / 0.60)" }}
        >
          {project.description}
        </p>

        {project.challenge && (
          <div
            className="mt-4 pl-3"
            style={{ borderLeft: "2px solid hsl(44 95% 48% / 0.40)" }}
          >
            <p
              className="font-serif text-xs font-medium italic"
              style={{ color: "hsl(24 18% 10% / 0.60)" }}
            >
              {project.challenge}
            </p>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
              style={{
                border: "1px solid hsl(24 18% 10% / 0.14)",
                color: "hsl(24 18% 10% / 0.40)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className="font-mono text-[9px] uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: "hsl(44 95% 38%)" }}
        >
          Ver caso <ArrowRight size={10} />
        </span>
      </div>
    </Link>
  );
}

// ─── VISTA B: POR LO QUE HICE ────────────────────────────────────────────────
function CapabilityView({ projects }: { projects: Project[] }) {
  const getProjectsBySlug = (slugs: string[]) =>
    slugs
      .map((slug) => projects.find((p) => p.slug === slug))
      .filter(Boolean) as Project[];

  return (
    <div className="space-y-12">
      {CAPABILITY_GROUPS.map((group, gi) => {
        const groupProjects = getProjectsBySlug(group.projects);
        return (
          <MotionWrapper key={group.id} delay={gi * 0.06}>
            <div>
              {/* Cabecera del grupo */}
              <div
                className="flex items-baseline gap-4 pb-4 mb-6"
                style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.12)" }}
              >
                <span
                  className="font-mono text-[10px] font-bold shrink-0"
                  style={{ color: "hsl(44 95% 38%)" }}
                >
                  0{gi + 1}
                </span>
                <div>
                  <h3
                    className="font-serif text-xl font-medium"
                    style={{ color: "hsl(24 18% 10%)" }}
                  >
                    {group.title}
                  </h3>
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest mt-0.5"
                    style={{ color: "hsl(24 18% 10% / 0.42)" }}
                  >
                    {group.subtitle}
                  </p>
                </div>
              </div>

              {/* Proyectos del grupo */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {groupProjects.map((project) => (
                  <Link
                    to={`/trabajo/${project.slug}`}
                    key={project.slug}
                    className="group p-5 transition-all hover:shadow-sm"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: "1px solid hsl(24 18% 10% / 0.10)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span
                        className="font-mono text-[9px]"
                        style={{ color: "hsl(24 18% 10% / 0.28)" }}
                      >
                        {project.num}
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
                        style={{
                          border: "1px solid hsl(24 18% 10% / 0.14)",
                          color: CONTEXT_COLORS[project.context],
                        }}
                      >
                        {project.context}
                      </span>
                    </div>

                    <h4
                      className="font-serif text-base font-medium leading-snug"
                      style={{ color: "hsl(24 18% 10%)" }}
                    >
                      {project.title}
                    </h4>

                    {project.evidence && (
                      <p
                        className="mt-2 font-sans text-xs leading-relaxed"
                        style={{ color: "hsl(24 18% 10% / 0.55)" }}
                      >
                        {project.evidence}
                      </p>
                    )}

                    <div className="mt-3 flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] tracking-widest"
                          style={{ color: "hsl(24 18% 10% / 0.32)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Acento amarillo en hover */}
                    <div
                      className="mt-3 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: "hsl(44 95% 48% / 0.50)" }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </MotionWrapper>
        );
      })}

      {/* Nota explicativa */}
      <MotionWrapper delay={0.15}>
        <div
          className="p-5 mt-4"
          style={{
            background: "hsl(44 95% 48% / 0.06)",
            border: "1px solid hsl(44 95% 48% / 0.20)",
          }}
        >
          <p
            className="font-mono text-[9px] uppercase tracking-widest mb-1"
            style={{ color: "hsl(44 95% 32%)" }}
          >
            Nota
          </p>
          <p
            className="font-sans text-xs leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.62)" }}
          >
            Un proyecto puede aparecer en más de un grupo. No es redundancia —
            es evidencia de que el mismo trabajo desarrolla capacidades
            distintas.
          </p>
        </div>
      </MotionWrapper>
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export function TrabajoPage() {
  const [view, setView] = useState<"proyecto" | "habilidad">("proyecto");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("TODO");
  const [archiveProject, setArchiveProject] = useState<Project | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const filteredProjects =
    activeFilter === "TODO"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeFilter));

  const fullCases = filteredProjects.filter((p) => p.depth === "CASO COMPLETO");
  const briefCases = filteredProjects.filter((p) => p.depth === "CASO BREVE");
  const archiveCases = filteredProjects.filter((p) => p.depth === "ARCHIVO");

  const totalVisible = filteredProjects.length;

  return (
    <>
      <SeoHead
        meta={{
          title: "Trabajo | Lara Feijóo",
          description:
            "Archivo completo de proyectos de Lara Feijóo — estrategia, marca, contenido, investigación y medios. Once proyectos en tres niveles de profundidad.",
          canonical: `${window.location.origin}/trabajo`,
        }}
      />

      <main ref={topRef}>
        {/* ══════════════════════════════════════════════════════
            HEADER EDITORIAL
        ══════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "hsl(36 28% 91%)" }}
          aria-label="Cabecera de trabajo"
        >
          {/* Acento radial */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 50% 60% at 100% 100%, hsl(50 90% 80% / 0.38) 0%, transparent 60%)",
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

          {/* Barra de sección */}
          <div
            className="relative z-10 border-b px-8 py-2.5"
            style={{ borderColor: "hsl(24 18% 10% / 0.16)" }}
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(44 95% 38%)" }}
              >
                Trabajo
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(24 18% 10% / 0.38)" }}
              >
                {PROJECTS.length} proyectos · 3 niveles de profundidad
              </span>
            </div>
          </div>

          {/* Contenido del header */}
          <div className="relative z-10 px-8 py-14 md:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-end">
                <MotionWrapper>
                  <h1
                    className="font-serif font-medium leading-[1.05]"
                    style={{
                      fontSize: "clamp(3rem, 7vw, 5.5rem)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Cuatro años
                    <br />
                    <span className="relative inline-block">
                      dan para unas
                      <br />
                      cuantas cosas.
                      <span
                        className="absolute left-0 -bottom-1 h-[3px]"
                        style={{ width: "40%", background: "hsl(44 95% 48%)" }}
                        aria-hidden="true"
                      />
                    </span>
                  </h1>
                  <p
                    className="mt-8 max-w-lg font-sans text-base leading-relaxed"
                    style={{ color: "hsl(24 18% 10% / 0.62)" }}
                  >
                    Algunas merecen una historia completa. Otras, simplemente
                    estar aquí. Hay más de una forma de leer lo que he hecho.
                  </p>
                </MotionWrapper>

                {/* Leyenda de profundidad */}
                <MotionWrapper delay={0.1}>
                  <div
                    className="space-y-3 p-6"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: "1px solid hsl(24 18% 10% / 0.12)",
                    }}
                  >
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-4"
                      style={{ color: "hsl(24 18% 10% / 0.40)" }}
                    >
                      Profundidad
                    </p>
                    {(
                      Object.entries(DEPTH_COLORS) as [
                        DepthLevel,
                        (typeof DEPTH_COLORS)[DepthLevel],
                      ][]
                    ).map(([level, colors]) => (
                      <div key={level} className="flex items-center gap-2.5">
                        <span
                          className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 shrink-0"
                          style={{
                            background: colors.bg,
                            color: colors.text,
                            border: `1px solid ${colors.border}`,
                          }}
                        >
                          {level}
                        </span>
                        <span
                          className="font-mono text-[9px]"
                          style={{ color: "hsl(24 18% 10% / 0.38)" }}
                        >
                          {level === "CASO COMPLETO" && "Narrativa completa"}
                          {level === "CASO BREVE" && "Descripción + contexto"}
                          {level === "ARCHIVO" &&
                            "Reto · Aportación · Evidencia"}
                        </span>
                      </div>
                    ))}
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CONTROLES: VISTA + FILTROS
        ══════════════════════════════════════════════════════ */}
        <div
          className="sticky top-14 z-40 px-8 py-3"
          style={{
            background: "hsl(38 22% 95% / 0.97)",
            borderBottom: "1px solid hsl(24 18% 10% / 0.12)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="mx-auto max-w-7xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Switch de vista */}
            <div
              className="flex items-center gap-0 shrink-0"
              style={{ border: "1px solid hsl(24 18% 10% / 0.18)" }}
              role="tablist"
              aria-label="Cambiar vista del archivo"
            >
              {[
                { key: "proyecto" as const, label: "POR PROYECTO" },
                { key: "habilidad" as const, label: "POR LO QUE HAGO" },
              ].map((v) => (
                <button
                  key={v.key}
                  role="tab"
                  aria-selected={view === v.key}
                  onClick={() => setView(v.key)}
                  className="px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all"
                  style={{
                    background:
                      view === v.key ? "hsl(44 95% 48%)" : "transparent",
                    color:
                      view === v.key
                        ? "hsl(24 18% 10%)"
                        : "hsl(24 18% 10% / 0.52)",
                    fontWeight: view === v.key ? 600 : 400,
                  }}
                >
                  {v.label}
                </button>
              ))}
            </div>

            {/* Filtros de categoría (solo visible en vista proyecto) */}
            {view === "proyecto" && (
              <div
                className="flex flex-wrap gap-1.5"
                role="toolbar"
                aria-label="Filtros de categoría"
              >
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="px-3 py-1 font-mono text-[9px] uppercase tracking-widest transition-all"
                    style={{
                      background:
                        activeFilter === f ? "hsl(44 95% 48%)" : "transparent",
                      color:
                        activeFilter === f
                          ? "hsl(24 18% 10%)"
                          : "hsl(24 18% 10% / 0.48)",
                      border:
                        activeFilter === f
                          ? "1px solid hsl(44 95% 48%)"
                          : "1px solid hsl(24 18% 10% / 0.18)",
                      fontWeight: activeFilter === f ? 600 : 400,
                    }}
                  >
                    {f}
                  </button>
                ))}
                <span
                  className="px-3 py-1 font-mono text-[9px]"
                  style={{ color: "hsl(24 18% 10% / 0.30)" }}
                >
                  {totalVisible} {totalVisible === 1 ? "proyecto" : "proyectos"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            CONTENIDO PRINCIPAL
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-12 md:py-16"
          style={{ background: "hsl(38 22% 95%)" }}
          aria-label={
            view === "proyecto"
              ? "Proyectos por categoría"
              : "Trabajo por capacidad"
          }
        >
          <div className="mx-auto max-w-7xl">
            {/* ── VISTA A: POR PROYECTO ── */}
            {view === "proyecto" && (
              <div>
                {/* CASOS COMPLETOS */}
                {fullCases.length > 0 && (
                  <div className="mb-12">
                    <MotionWrapper>
                      <div
                        className="flex items-baseline gap-3 mb-6 pb-3"
                        style={{
                          borderBottom: "1px solid hsl(24 18% 10% / 0.12)",
                        }}
                      >
                        <div
                          className="h-[2px] w-8"
                          style={{ background: "hsl(44 95% 48%)" }}
                          aria-hidden="true"
                        />
                        <span
                          className="font-mono text-[9px] uppercase tracking-widest"
                          style={{ color: "hsl(44 95% 32%)" }}
                        >
                          Caso completo
                        </span>
                        <span
                          className="font-mono text-[9px]"
                          style={{ color: "hsl(24 18% 10% / 0.30)" }}
                        >
                          — {fullCases.length}
                        </span>
                      </div>
                    </MotionWrapper>
                    <div
                      className="grid gap-px sm:grid-cols-2 lg:grid-cols-3"
                      style={{ background: "hsl(34 16% 82%)" }}
                    >
                      {fullCases.map((project, i) => (
                        <MotionWrapper key={project.slug} delay={i * 0.06}>
                          <ProjectCard
                            project={project}
                            index={i}
                            onOpenArchive={setArchiveProject}
                          />
                        </MotionWrapper>
                      ))}
                    </div>
                  </div>
                )}

                {/* CASOS BREVES */}
                {briefCases.length > 0 && (
                  <div className="mb-12">
                    <MotionWrapper>
                      <div
                        className="flex items-baseline gap-3 mb-6 pb-3"
                        style={{
                          borderBottom: "1px solid hsl(24 18% 10% / 0.12)",
                        }}
                      >
                        <div
                          className="h-[2px] w-8"
                          style={{ background: "hsl(24 18% 10% / 0.25)" }}
                          aria-hidden="true"
                        />
                        <span
                          className="font-mono text-[9px] uppercase tracking-widest"
                          style={{ color: "hsl(24 18% 10% / 0.52)" }}
                        >
                          Caso breve
                        </span>
                        <span
                          className="font-mono text-[9px]"
                          style={{ color: "hsl(24 18% 10% / 0.28)" }}
                        >
                          — {briefCases.length}
                        </span>
                      </div>
                    </MotionWrapper>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {briefCases.map((project, i) => (
                        <MotionWrapper key={project.slug} delay={i * 0.05}>
                          <ProjectCard
                            project={project}
                            index={i}
                            onOpenArchive={setArchiveProject}
                          />
                        </MotionWrapper>
                      ))}
                    </div>
                  </div>
                )}

                {/* ARCHIVO */}
                {archiveCases.length > 0 && (
                  <div>
                    <MotionWrapper>
                      <div
                        className="flex items-baseline gap-3 mb-4 pb-3"
                        style={{
                          borderBottom: "1px solid hsl(24 18% 10% / 0.12)",
                        }}
                      >
                        <div
                          className="h-[2px] w-8"
                          style={{ background: "hsl(24 18% 10% / 0.12)" }}
                          aria-hidden="true"
                        />
                        <span
                          className="font-mono text-[9px] uppercase tracking-widest"
                          style={{ color: "hsl(24 18% 10% / 0.38)" }}
                        >
                          Archivo
                        </span>
                        <span
                          className="font-mono text-[9px]"
                          style={{ color: "hsl(24 18% 10% / 0.25)" }}
                        >
                          — {archiveCases.length} · haz clic para ver el
                          contexto
                        </span>
                      </div>
                    </MotionWrapper>
                    <div
                      className="divide-y"
                      style={{ borderTop: "1px solid hsl(24 18% 10% / 0.10)" }}
                    >
                      {archiveCases.map((project, i) => (
                        <MotionWrapper key={project.slug} delay={i * 0.04}>
                          <ProjectCard
                            project={project}
                            index={i}
                            onOpenArchive={setArchiveProject}
                          />
                        </MotionWrapper>
                      ))}
                    </div>
                  </div>
                )}

                {/* Estado vacío con filtro activo */}
                {filteredProjects.length === 0 && (
                  <MotionWrapper>
                    <div className="py-16 text-center">
                      <p
                        className="font-serif text-lg font-medium"
                        style={{ color: "hsl(24 18% 10% / 0.45)" }}
                      >
                        No hay proyectos en esta categoría todavía.
                      </p>
                      <button
                        onClick={() => setActiveFilter("TODO")}
                        className="mt-4 font-mono text-[10px] uppercase tracking-widest"
                        style={{ color: "hsl(44 95% 38%)" }}
                      >
                        Ver todos →
                      </button>
                    </div>
                  </MotionWrapper>
                )}
              </div>
            )}

            {/* ── VISTA B: POR LO QUE HICE ── */}
            {view === "habilidad" && (
              <div>
                <MotionWrapper>
                  <div
                    className="mb-10 p-5"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: "1px solid hsl(24 18% 10% / 0.10)",
                    }}
                  >
                    <p
                      className="font-serif text-sm font-medium"
                      style={{ color: "hsl(24 18% 10% / 0.70)" }}
                    >
                      Los mismos proyectos, leídos de otra manera.
                    </p>
                    <p
                      className="mt-1 font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "hsl(24 18% 10% / 0.38)" }}
                    >
                      Organizado por capacidad → evidenciado con trabajo real
                    </p>
                  </div>
                </MotionWrapper>
                <CapabilityView projects={PROJECTS} />
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SEPARADOR EDITORIAL — DARK
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-12 md:py-14"
          style={{ background: "hsl(25 20% 10%)" }}
          aria-label="Invitación"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-center">
              <MotionWrapper>
                <h2
                  className="font-serif font-medium leading-snug"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    color: "hsl(36 18% 92%)",
                  }}
                >
                  ¿Quieres ver el razonamiento
                  <br />
                  <span
                    style={{
                      color: "hsl(36 18% 92% / 0.42)",
                      fontStyle: "italic",
                    }}
                  >
                    detrás de cada proyecto?
                  </span>
                </h2>
                <p
                  className="mt-4 font-sans text-sm leading-relaxed max-w-md"
                  style={{ color: "hsl(0 0% 100% / 0.48)" }}
                >
                  Los casos completos se irán añadiendo progresivamente. Si
                  tienes interés concreto en algún proyecto, escríbeme
                  directamente.
                </p>
              </MotionWrapper>
              <MotionWrapper delay={0.08}>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 font-sans text-sm font-medium transition-all hover:opacity-90"
                    style={{
                      background: "hsl(44 95% 48%)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Escribir <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 font-sans text-sm font-medium transition-colors hover:text-white"
                    style={{
                      border: "1px solid hsl(0 0% 100% / 0.18)",
                      color: "hsl(0 0% 100% / 0.52)",
                    }}
                  >
                    Volver al inicio
                  </Link>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de archivo */}
      {archiveProject && (
        <ArchiveModal
          project={archiveProject}
          onClose={() => setArchiveProject(null)}
        />
      )}
    </>
  );
}
