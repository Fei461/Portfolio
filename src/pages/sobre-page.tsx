import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { SeoHead } from "@/components/seo-head";
import { MotionWrapper } from "@/components/motion-wrapper";
import { profile } from "@/data/profile";

// ─── DATOS EDITORIALES ───────────────────────────────────────────────────────
// Lara puede actualizar estos bloques independientemente.

const PRINCIPLES = [
  {
    id: "P1",
    title: "La segunda lectura",
    body: "La primera respuesta rara vez es la más interesante. Me tomo el tiempo de volver a mirar antes de dar algo por entendido.",
    annotation: "→ observación antes de conclusión",
  },
  {
    id: "P2",
    title: "Estructura antes de crear",
    body: "Organizar el pensamiento no frena la creatividad — la hace posible. Sin estructura, la mejor idea se pierde en el ruido.",
    annotation: "→ sistema antes que ocurrencia",
  },
  {
    id: "P3",
    title: "Construir lo que no existe",
    body: "Si la herramienta que necesito no existe, la construyo. Si el formato no encaja, lo rediseño. La autonomía es una forma de responsabilidad.",
    annotation: "→ talixea, como ejemplo",
  },
  {
    id: "P4",
    title: "La pregunta correcta",
    body: "Dedicar tiempo a formular bien el problema es la mitad del trabajo. La solución correcta a la pregunta equivocada no sirve de nada.",
    annotation: "→ diagnóstico antes de prescripción",
  },
];

type TimelineType = "edu" | "award" | "pro" | "personal" | "now";

const TIMELINE_FRAGMENTS: Array<{
  year: string;
  label: string;
  text: string;
  type: TimelineType;
}> = [
  {
    year: "",
    label: "Formación",
    text: "Grado en Publicidad y RRPP finalizado. Nota media 8,62.",
    type: "edu",
  },
  {
    year: "",
    label: "Experiencia profesional",
    text: "Stud-IA: estrategia, gestión de contenidos y trabajo analítico asociado a comunicación y marketing.",
    type: "pro",
  },
  {
    year: "",
    label: "El producto",
    text: "Talixea nace al conectar lectura, aprendizaje de idiomas y una oportunidad detectada en español.",
    type: "personal",
  },
  {
    year: "AHORA",
    label: "Máster",
    text: "Iniciando un máster en Comunicación Publicitaria. Centro y fechas pendientes de añadir.",
    type: "now",
  },
];

const INTERESTS = [
  {
    label: "Comportamiento del consumidor",
    note: "lo que dice vs. lo que hace",
  },
  { label: "Diseño de sistemas", note: "cómo se sostiene la complejidad" },
  { label: "Aprendizaje autónomo", note: "métodos, no cursos" },
  {
    label: "Lectura en idiomas",
    note: "contexto real sobre vocabulario abstracto",
  },
  { label: "Escritura editorial", note: "el tono que genera confianza" },
  { label: "Psicología de decisiones", note: "sesgos, heurísticas, límites" },
];

const CURRENTLY = [
  {
    label: "Explorando",
    items: [
      "Comportamiento, comunicación y contexto",
      "Sistemas de aprendizaje y lectura en idiomas",
      "Lecturas y referencias en actualización",
    ],
  },
];

const LANGUAGES = profile.languages.map((language) => ({
  lang: language.label,
  level: "Nivel pendiente de confirmar",
  code: language.code,
  width: "0%",
}));

const TYPE_STYLES: Record<
  "edu" | "award" | "pro" | "personal" | "now",
  { dot: string; label: string; labelColor: string }
> = {
  edu: {
    dot: "hsl(24 18% 10% / 0.25)",
    label: "Formación",
    labelColor: "hsl(24 18% 10% / 0.42)",
  },
  award: {
    dot: "hsl(44 95% 48%)",
    label: "Reconocimiento",
    labelColor: "hsl(44 95% 30%)",
  },
  pro: {
    dot: "hsl(24 18% 10% / 0.55)",
    label: "Profesional",
    labelColor: "hsl(24 18% 10% / 0.55)",
  },
  personal: {
    dot: "hsl(44 95% 48%)",
    label: "Personal",
    labelColor: "hsl(44 95% 30%)",
  },
  now: {
    dot: "hsl(152 55% 35%)",
    label: "Ahora",
    labelColor: "hsl(152 55% 30%)",
  },
};

// ─── SUBCOMPONENTES ───────────────────────────────────────────────────────────

function SectionLabel({
  num,
  title,
  dark = false,
}: {
  num: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div
      className="flex items-baseline gap-3 mb-10 pb-4"
      style={{
        borderBottom: `1px solid ${dark ? "hsl(0 0% 100% / 0.10)" : "hsl(24 18% 10% / 0.12)"}`,
      }}
    >
      <span
        className="font-mono text-[10px] font-bold"
        style={{ color: "hsl(44 95% 48%)" }}
      >
        {num}
      </span>
      <span
        className="font-mono text-[10px] uppercase tracking-[0.22em]"
        style={{
          color: dark ? "hsl(0 0% 100% / 0.45)" : "hsl(24 18% 10% / 0.45)",
        }}
      >
        {title}
      </span>
    </div>
  );
}

function PrincipleCard({
  principle,
  delay = 0,
}: {
  principle: (typeof PRINCIPLES)[0];
  delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <MotionWrapper delay={delay}>
      <div
        className="relative p-6 h-full transition-all duration-200 cursor-default"
        style={{
          background: hovered ? "hsl(44 95% 48% / 0.06)" : "hsl(40 20% 97%)",
          border: `1px solid ${hovered ? "hsl(44 95% 48% / 0.35)" : "hsl(24 18% 10% / 0.10)"}`,
          borderLeft: `3px solid ${hovered ? "hsl(44 95% 48%)" : "hsl(24 18% 10% / 0.18)"}`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="font-mono text-[9px] font-bold mb-3 block"
          style={{
            color: hovered ? "hsl(44 95% 38%)" : "hsl(24 18% 10% / 0.28)",
          }}
        >
          {principle.id}
        </span>
        <h3
          className="font-serif text-base font-medium leading-snug mb-3"
          style={{ color: "hsl(24 18% 10%)" }}
        >
          {principle.title}
        </h3>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: "hsl(24 18% 10% / 0.62)" }}
        >
          {principle.body}
        </p>
        <p
          className="mt-4 font-mono text-[9px] italic transition-opacity duration-200"
          style={{
            color: "hsl(24 18% 10% / 0.32)",
            opacity: hovered ? 1 : 0.4,
          }}
        >
          {principle.annotation}
        </p>
      </div>
    </MotionWrapper>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export function SobrePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <SeoHead
        meta={{
          title: "Sobre mí | Lara Feijóo",
          description:
            "Perfil editorial de Lara Feijóo — estrategia, comunicación, curiosidad y autonomía. Más que un CV.",
          canonical: `${window.location.origin}/sobre-mi`,
        }}
      />

      <main>
        {/* ════════════════════════════════════════════════════
            00 — HERO / APERTURA EDITORIAL
            Titular grande + frase corta + contexto actual
        ════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "hsl(36 28% 91%)" }}
          aria-label="Presentación de Lara Feijóo"
        >
          {/* Acento radial cálido */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 70% at 100% 100%, hsl(50 90% 80% / 0.45) 0%, hsl(44 75% 88% / 0.18) 45%, transparent 70%)",
            }}
          />
          {/* Grid sutil */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(24 18% 10%) 1px, transparent 1px), linear-gradient(90deg, hsl(24 18% 10%) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Eyebrow de página */}
          <div
            className="relative z-10 border-b px-8 py-2.5"
            style={{ borderColor: "hsl(24 18% 10% / 0.14)" }}
          >
            <div className="mx-auto max-w-7xl flex items-center justify-between">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(44 95% 38%)" }}
              >
                Sobre mí
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(24 18% 10% / 0.32)" }}
              >
                Perfil editorial
              </span>
            </div>
          </div>

          <div className="relative z-10 px-8 py-14 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
                {/* Columna izquierda — texto */}
                <MotionWrapper>
                  <h1
                    className="font-serif font-medium leading-[1.04]"
                    style={{
                      fontSize: "clamp(2.8rem, 7vw, 5rem)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    No suelo ser
                    <br />
                    <span
                      style={{
                        color: "hsl(24 18% 10% / 0.40)",
                        fontStyle: "italic",
                      }}
                    >
                      la persona con
                    </span>
                    <br />
                    la primera idea.
                  </h1>

                  <p
                    className="mt-7 font-sans text-base leading-relaxed max-w-[480px]"
                    style={{ color: "hsl(24 18% 10% / 0.64)" }}
                  >
                    Suelo ser la persona que quiere entender{" "}
                    <span
                      className="font-semibold"
                      style={{ color: "hsl(24 18% 10%)" }}
                    >
                      por qué esa idea debería funcionar.
                    </span>{" "}
                    Me interesa lo que hay detrás de lo que se ve: los
                    mecanismos que mueven el comportamiento, los sistemas que
                    sostienen la comunicación, los vacíos que nadie ha rellenado
                    todavía.
                  </p>

                  {/* Chips de identidad */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Estrategia",
                      "Comunicación",
                      "Insights",
                      "Aprendizaje autónomo",
                      "Sistemas",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1"
                        style={{
                          border: "1px solid hsl(24 18% 10% / 0.18)",
                          color: "hsl(24 18% 10% / 0.52)",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Anotación marginal */}
                  <div
                    className="mt-8 pl-4 max-w-xs"
                    style={{ borderLeft: "2px solid hsl(44 95% 48% / 0.50)" }}
                  >
                    <p
                      className="font-mono text-[9px] leading-relaxed italic"
                      style={{ color: "hsl(24 18% 10% / 0.38)" }}
                    >
                      La primera respuesta rara vez es la más interesante. Suelo
                      mirar dos veces.
                    </p>
                  </div>
                </MotionWrapper>

                {/* Columna derecha — imagen + ficha */}
                <MotionWrapper delay={0.1}>
                  <div className="sticky top-24 space-y-4">
                    {/* Sustituir por una fotografía real antes de publicar. */}
                    <div
                      className="relative flex min-h-[320px] items-end overflow-hidden p-6"
                      aria-label="Placeholder para retrato de Lara Feijóo"
                      style={{
                        background:
                          "linear-gradient(145deg, hsl(36 26% 86%), hsl(40 18% 96%))",
                        border: "1px dashed hsl(24 18% 10% / 0.20)",
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 93%, 96% 100%, 0 100%)",
                      }}
                    >
                      <span
                        className="font-mono text-[10px] uppercase tracking-[0.18em]"
                        style={{ color: "hsl(24 18% 10% / 0.48)" }}
                      >
                        Retrato en preparación
                      </span>
                    </div>

                    {/* Ficha compacta */}
                    <div
                      className="p-5 space-y-3"
                      style={{
                        background: "hsl(40 20% 97%)",
                        border: "1px solid hsl(24 18% 10% / 0.10)",
                      }}
                    >
                      {[
                        {
                          label: "Formación",
                          value: "Publicidad y RRPP",
                        },
                        {
                          label: "Nota media",
                          value: "8,62",
                        },
                        { label: "Idiomas", value: "En el perfil" },
                        { label: "Proyecto activo", value: "Talixea · proyecto vivo" },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="flex items-start justify-between gap-4 pb-3"
                          style={{
                            borderBottom: "1px solid hsl(24 18% 10% / 0.07)",
                          }}
                        >
                          <span
                            className="font-mono text-[9px] uppercase tracking-widest shrink-0"
                            style={{ color: "hsl(24 18% 10% / 0.38)" }}
                          >
                            {label}
                          </span>
                          <span
                            className="font-sans text-xs font-medium text-right"
                            style={{ color: "hsl(24 18% 10% / 0.75)" }}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            01 — CITA / POSICIÓN EDITORIAL
            Una frase que resume el enfoque. Sin lista.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-14 md:py-18"
          style={{ background: "hsl(25 20% 10%)" }}
          aria-label="Posición editorial"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr] items-center">
              <MotionWrapper>
                <div>
                  <div
                    className="w-8 h-[2px] mb-6"
                    style={{ background: "hsl(44 95% 48%)" }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "hsl(0 0% 100% / 0.28)" }}
                  >
                    La idea que lo resume
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.08}>
                <blockquote>
                  <p
                    className="font-serif font-medium italic leading-relaxed"
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                      color: "hsl(36 18% 92%)",
                    }}
                  >
                    "Aprendo de forma autónoma, organizo antes de actuar y me
                    tomo el tiempo de formular bien la pregunta. A veces eso es{" "}
                    <span style={{ color: "hsl(44 95% 62%)" }}>
                      más valioso que tener la respuesta rápida.
                    </span>
                    "
                  </p>
                </blockquote>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            02 — PRINCIPIOS
            4 bloques interactivos, hover revela anotación
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(38 22% 95%)" }}
          aria-label="Principios de trabajo"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel num="01" title="Principios" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PRINCIPLES.map((p, i) => (
                <PrincipleCard key={p.id} principle={p} delay={i * 0.06} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            03 — FRAGMENTOS DE TRAYECTORIA
            Timeline minimalista, no cronológico estricto
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(40 20% 97%)" }}
          aria-label="Fragmentos de trayectoria"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel num="02" title="Fragmentos" />

            <div className="grid gap-12 lg:grid-cols-[280px_1fr] items-start">
              {/* Nota editorial lateral */}
              <MotionWrapper>
                <div>
                  <p
                    className="font-serif text-lg font-medium leading-snug mb-4"
                    style={{ color: "hsl(24 18% 10%)" }}
                  >
                    Una trayectoria no es una lista de fechas.
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "hsl(24 18% 10% / 0.55)" }}
                  >
                    Son los momentos que cambian la dirección, las decisiones
                    que definen el enfoque. Esta es una selección, no un CV.
                  </p>
                  <div
                    className="mt-6 p-4"
                    style={{
                      background: "hsl(44 95% 48% / 0.07)",
                      border: "1px solid hsl(44 95% 48% / 0.22)",
                      borderLeft: "3px solid hsl(44 95% 48%)",
                    }}
                  >
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-1"
                      style={{ color: "hsl(44 95% 32%)" }}
                    >
                      Para el CV completo
                    </p>
                    <Link
                      to="/cv"
                      className="font-sans text-xs font-medium flex items-center gap-1.5 transition-opacity hover:opacity-70"
                      style={{ color: "hsl(44 95% 30%)" }}
                    >
                      Ver CV detallado <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </MotionWrapper>

              {/* Timeline */}
              <MotionWrapper delay={0.06}>
                <div className="relative">
                  {/* Línea vertical */}
                  <div
                    className="absolute left-[5px] top-2 bottom-2 w-px"
                    style={{ background: "hsl(24 18% 10% / 0.10)" }}
                    aria-hidden="true"
                  />

                  <div className="space-y-0">
                    {TIMELINE_FRAGMENTS.map((fragment, i) => {
                      const style = TYPE_STYLES[fragment.type];
                      return (
                        <div key={i} className="flex gap-6 pb-7 relative">
                          {/* Dot */}
                          <div className="relative z-10 mt-1 shrink-0">
                            <div
                              className="h-[11px] w-[11px] rounded-full border-2"
                              style={{
                                background:
                                  fragment.type === "now" ||
                                  fragment.type === "award" ||
                                  fragment.type === "personal"
                                    ? style.dot
                                    : "hsl(40 20% 97%)",
                                borderColor: style.dot,
                              }}
                            />
                          </div>

                          {/* Contenido */}
                          <div className="flex-1 pt-0">
                            <div className="flex items-center gap-3 mb-1.5">
                              <span
                                className="font-mono text-[9px] font-bold"
                                style={{ color: style.labelColor }}
                              >
                                {fragment.year}
                              </span>
                              <span
                                className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5"
                                style={{
                                  background:
                                    fragment.type === "now"
                                      ? "hsl(152 55% 35% / 0.10)"
                                      : fragment.type === "award" ||
                                          fragment.type === "personal"
                                        ? "hsl(44 95% 48% / 0.10)"
                                        : "hsl(24 18% 10% / 0.05)",
                                  border: `1px solid ${
                                    fragment.type === "now"
                                      ? "hsl(152 55% 35% / 0.28)"
                                      : fragment.type === "award" ||
                                          fragment.type === "personal"
                                        ? "hsl(44 95% 48% / 0.28)"
                                        : "hsl(24 18% 10% / 0.14)"
                                  }`,
                                  color: style.labelColor,
                                }}
                              >
                                {style.label}
                              </span>
                              <span
                                className="font-sans text-xs font-semibold"
                                style={{ color: "hsl(24 18% 10% / 0.80)" }}
                              >
                                {fragment.label}
                              </span>
                            </div>
                            <p
                              className="font-sans text-sm leading-relaxed"
                              style={{ color: "hsl(24 18% 10% / 0.58)" }}
                            >
                              {fragment.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            04 — INTERESES + IDIOMAS (banda oscura)
            Composición en dos columnas con ritmo visual
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(25 20% 10%)" }}
          aria-label="Intereses y idiomas"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel num="03" title="Intereses" dark />

            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Intereses */}
              <MotionWrapper>
                <p
                  className="font-serif text-base font-medium mb-6 leading-snug"
                  style={{ color: "hsl(36 18% 92% / 0.65)" }}
                >
                  Las cosas que me hacen preguntar.
                </p>
                <div className="space-y-0">
                  {INTERESTS.map((interest, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-6 py-3.5 group"
                      style={{
                        borderBottom: "1px solid hsl(0 0% 100% / 0.07)",
                      }}
                    >
                      <span
                        className="font-sans text-sm font-medium"
                        style={{ color: "hsl(36 18% 92% / 0.80)" }}
                      >
                        {interest.label}
                      </span>
                      <span
                        className="font-mono text-[9px] italic shrink-0"
                        style={{ color: "hsl(44 95% 48% / 0.55)" }}
                      >
                        {interest.note}
                      </span>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              {/* Idiomas + En curso */}
              <MotionWrapper delay={0.08}>
                <div className="space-y-10">
                  {/* Idiomas */}
                  <div>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-6"
                      style={{ color: "hsl(0 0% 100% / 0.28)" }}
                    >
                      Idiomas
                    </p>
                    <div className="space-y-5">
                      {LANGUAGES.map((l) => (
                        <div key={l.lang}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span
                                className="font-mono text-[8px] font-bold px-1.5 py-0.5"
                                style={{
                                  background: "hsl(44 95% 48% / 0.12)",
                                  border: "1px solid hsl(44 95% 48% / 0.25)",
                                  color: "hsl(44 95% 60%)",
                                }}
                              >
                                {l.code}
                              </span>
                              <span
                                className="font-sans text-sm"
                                style={{ color: "hsl(36 18% 92% / 0.78)" }}
                              >
                                {l.lang}
                              </span>
                            </div>
                            <span
                              className="font-mono text-[9px]"
                              style={{ color: "hsl(0 0% 100% / 0.32)" }}
                            >
                              {l.level}
                            </span>
                          </div>
                          {/* Barra de nivel */}
                          <div
                            className="h-[2px] w-full"
                            style={{ background: "hsl(0 0% 100% / 0.08)" }}
                          >
                            <div
                              className="h-full"
                              style={{
                                width: l.width,
                                background:
                                  l.width === "100%"
                                    ? "hsl(44 95% 48%)"
                                    : "hsl(44 95% 48% / 0.65)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actualmente explorando */}
                  <div>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-5"
                      style={{ color: "hsl(0 0% 100% / 0.28)" }}
                    >
                      Actualmente
                    </p>
                    <div className="space-y-5">
                      {CURRENTLY.map((block) => (
                        <div key={block.label}>
                          <p
                            className="font-mono text-[9px] uppercase tracking-widest mb-3"
                            style={{ color: "hsl(44 95% 48% / 0.65)" }}
                          >
                            {block.label}
                          </p>
                          <ul className="space-y-2">
                            {block.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span
                                  className="font-mono text-[10px] mt-0.5 shrink-0"
                                  style={{ color: "hsl(44 95% 48% / 0.45)" }}
                                >
                                  →
                                </span>
                                <span
                                  className="font-sans text-xs leading-relaxed"
                                  style={{ color: "hsl(0 0% 100% / 0.50)" }}
                                >
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            05 — FORMA DE TRABAJAR
            Editorial compacto. 3 columnas con hover activo.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(38 22% 93%)" }}
          aria-label="Forma de trabajar"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel num="04" title="Forma de trabajar" />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  step: "MIRO",
                  title: "Primero observo",
                  body: "Antes de producir soluciones, necesito entender el contexto completo. Los detalles que parecen irrelevantes suelen ser los más informativos.",
                  example:
                    "En Iberia, el problema declarado no era el problema real.",
                },
                {
                  step: "PREGUNTO",
                  title: "Luego cuestiono",
                  body: "¿Por qué se hace así? ¿Qué se da por supuesto? Las mejores ideas nacen de poner en duda lo que nadie discute.",
                  example:
                    "En BBVA, la pregunta correcta cambió todo el enfoque.",
                },
                {
                  step: "ORDENO",
                  title: "Organizo lo que encuentro",
                  body: "La información en bruto no es útil. Ordenar, clasificar y estructurar es lo que convierte un insight en una decisión.",
                  example:
                    "En Warriors Arena, la complejidad se resolvió con estructura.",
                },
                {
                  step: "CONECTO",
                  title: "Relaciono lo que separan",
                  body: "El trabajo estratégico vive entre disciplinas. Psicología del comportamiento, diseño, narrativa — ninguna herramienta funciona sola.",
                  example: "Talixea conecta lectura, vocabulario y repetición.",
                },
                {
                  step: "HAGO",
                  title: "Después ejecuto",
                  body: "Pensar sin construir es indulgente. En algún momento hay que tomar decisiones con información incompleta y asumir el resultado.",
                  example:
                    "Cada proyecto tiene al menos una decisión incómoda.",
                },
              ].map((item, i) => (
                <MotionWrapper key={item.step} delay={i * 0.06}>
                  <WorkstyleCard item={item} />
                </MotionWrapper>
              ))}

              {/* Nota al pie */}
              <MotionWrapper delay={0.32}>
                <div
                  className="flex items-center gap-3 p-5 h-full"
                  style={{
                    background: "transparent",
                    border: "1px solid hsl(24 18% 10% / 0.10)",
                    borderStyle: "dashed",
                  }}
                >
                  <p
                    className="font-mono text-[9px] italic leading-relaxed"
                    style={{ color: "hsl(24 18% 10% / 0.35)" }}
                  >
                    No siempre en este orden. A veces se hace al revés y
                    funciona igualmente.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            06 — OBJETIVOS
            Compacto. Orientado al futuro. Sin grandilocuencia.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(40 20% 97%)" }}
          aria-label="Objetivos y próximos pasos"
        >
          <div className="mx-auto max-w-7xl">
            <SectionLabel num="05" title="Próximamente" />

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
              <MotionWrapper>
                <h2
                  className="font-serif font-medium leading-snug"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "hsl(24 18% 10%)",
                  }}
                >
                  Lo que viene después
                  <br />
                  <span
                    style={{
                      color: "hsl(24 18% 10% / 0.38)",
                      fontStyle: "italic",
                    }}
                  >
                    del grado, del portfolio, de ahora.
                  </span>
                </h2>

                <p
                  className="mt-5 font-sans text-sm leading-relaxed max-w-md"
                  style={{ color: "hsl(24 18% 10% / 0.60)" }}
                >
                  Busco contextos donde el trabajo estratégico tenga peso real.
                  Donde las decisiones importen y las preguntas sean
                  bienvenidas. No el título del proyecto — la calidad del
                  razonamiento detrás.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/trabajo"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-sans text-sm font-medium transition-all hover:opacity-85"
                    style={{
                      background: "hsl(44 95% 48%)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Ver el trabajo <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-sans text-sm font-medium transition-colors hover:text-foreground"
                    style={{
                      border: "1px solid hsl(24 18% 10% / 0.22)",
                      color: "hsl(24 18% 10% / 0.58)",
                    }}
                  >
                    Escribir
                  </Link>
                </div>
              </MotionWrapper>

              {/* Lista de aspiraciones */}
              <MotionWrapper delay={0.08}>
                <div style={{ borderTop: "1px solid hsl(24 18% 10% / 0.10)" }}>
                  {[
                    {
                      idea: "Trabajar en estrategia con criterio editorial",
                      note: "En agencia, consultora o equipo interno",
                    },
                    {
                      idea: "Seguir construyendo Talixea",
                      note: "El producto tiene vida propia ya",
                    },
                    {
                      idea: "Aplicar comportamiento del consumidor a decisiones reales",
                      note: "No como teoría — como herramienta",
                    },
                    {
                      idea: "Escribir más sobre lo que observo",
                      note: "Pensar en público es una forma de aprender",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-4"
                      style={{
                        borderBottom: "1px solid hsl(24 18% 10% / 0.08)",
                      }}
                    >
                      <span
                        className="font-mono text-[10px] font-bold pt-0.5 shrink-0"
                        style={{ color: "hsl(44 95% 48%)" }}
                      >
                        →
                      </span>
                      <div>
                        <p
                          className="font-sans text-sm font-medium leading-snug"
                          style={{ color: "hsl(24 18% 10% / 0.80)" }}
                        >
                          {item.idea}
                        </p>
                        <p
                          className="mt-0.5 font-mono text-[9px] italic"
                          style={{ color: "hsl(24 18% 10% / 0.35)" }}
                        >
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            07 — NOTA PERSONAL
            Una sola observación. No motivacional.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-12 md:py-14"
          style={{
            background: "hsl(38 22% 95%)",
            borderTop: "1px solid hsl(24 18% 10% / 0.10)",
          }}
          aria-label="Nota personal"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[280px_1fr] items-center">
              <MotionWrapper>
                <p
                  className="font-mono text-[9px] uppercase tracking-widest"
                  style={{ color: "hsl(24 18% 10% / 0.32)" }}
                >
                  Una nota antes de irse
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.06}>
                <p
                  className="font-serif font-medium italic leading-relaxed"
                  style={{
                    fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                    color: "hsl(24 18% 10% / 0.62)",
                    maxWidth: "680px",
                  }}
                >
                  "Si algo en este portfolio te generó una pregunta — sobre el
                  trabajo, sobre el razonamiento, sobre Talixea — me interesa
                  escucharla.{" "}
                  <span style={{ color: "hsl(24 18% 10%)" }}>
                    Las conversaciones buenas empiezan así.
                  </span>
                  "
                </p>
                <div className="mt-5">
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest transition-opacity hover:opacity-70"
                    style={{ color: "hsl(44 95% 30%)" }}
                  >
                    Escribir <ArrowRight size={10} />
                  </Link>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ─── WORKSTYLE CARD (componente local con hover) ──────────────────────────────
function WorkstyleCard({
  item,
}: {
  item: {
    step: string;
    title: string;
    body: string;
    example: string;
  };
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative p-6 h-full cursor-default transition-all duration-200"
      style={{
        background: hovered ? "hsl(25 20% 10%)" : "hsl(40 20% 97%)",
        border: `1px solid ${hovered ? "hsl(0 0% 100% / 0.06)" : "hsl(24 18% 10% / 0.10)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="font-mono text-[9px] font-bold tracking-widest mb-3 block"
        style={{
          color: hovered ? "hsl(44 95% 48%)" : "hsl(24 18% 10% / 0.28)",
        }}
      >
        {item.step}
      </span>
      <h3
        className="font-serif text-base font-medium leading-snug mb-2.5"
        style={{
          color: hovered ? "hsl(36 18% 92%)" : "hsl(24 18% 10%)",
        }}
      >
        {item.title}
      </h3>
      <p
        className="font-sans text-sm leading-relaxed"
        style={{
          color: hovered ? "hsl(0 0% 100% / 0.55)" : "hsl(24 18% 10% / 0.60)",
        }}
      >
        {item.body}
      </p>
      {/* Ejemplo concreto — aparece en hover */}
      <div
        className="mt-4 pt-3 transition-all duration-200"
        style={{
          borderTop: `1px solid ${hovered ? "hsl(0 0% 100% / 0.07)" : "hsl(24 18% 10% / 0.08)"}`,
          opacity: hovered ? 1 : 0.4,
        }}
      >
        <p
          className="font-mono text-[9px] italic"
          style={{
            color: hovered
              ? "hsl(44 95% 48% / 0.80)"
              : "hsl(24 18% 10% / 0.32)",
          }}
        >
          {item.example}
        </p>
      </div>
    </div>
  );
}
