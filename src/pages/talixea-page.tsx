import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Circle,
  CheckCircle,
} from "@phosphor-icons/react";
import { SeoHead } from "@/components/seo-head";
import { MotionWrapper } from "@/components/motion-wrapper";

// ─── DATOS DEL PROYECTO ───────────────────────────────────────────────────────

const PROJECT = {
  num: "01",
  title: "Talixea",
  year: "En curso",
  context: "PERSONAL" as const,
  depth: "CASO COMPLETO",
  role: "Iniciativa personal · Estrategia · Producto",
  tags: ["Producto", "Estrategia", "Idiomas", "Aprendizaje"],
  status: "En curso",
  version: "Proyecto vivo",
  headline: "Una curiosidad se convirtió en oportunidad.",
  subheadline: "La oportunidad se convirtió en producto.",
  opening: "Parecía un hobby de aprendizaje.",
  secondReading: "Era un vacío de mercado esperando solución.",
};

// ─── HOVER REVEAL — segunda lectura interactiva ───────────────────────────────
function SecondReadingHero() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="mt-4 cursor-default select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setHovered((value) => !value);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={hovered}
    >
      <div className="relative overflow-hidden" style={{ minHeight: "1.6rem" }}>
        <p
          className="font-mono text-xs transition-all duration-300"
          style={{
            color: hovered ? "transparent" : "hsl(24 18% 10% / 0.45)",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {PROJECT.opening}
        </p>
        {hovered && (
          <p
            className="absolute inset-0 font-mono text-xs font-medium pl-3"
            style={{
              color: "hsl(24 18% 10%)",
              borderLeft: "2px solid hsl(44 95% 48%)",
            }}
          >
            {PROJECT.secondReading}
          </p>
        )}
      </div>
      <p
        className="mt-0.5 font-mono text-[9px] opacity-0 transition-opacity duration-300"
        style={{
          color: "hsl(44 95% 38%)",
          opacity: !hovered ? 1 : 0,
          fontSize: "9px",
        }}
      >
        toca o pasa el cursor
      </p>
    </div>
  );
}

// ─── TARJETA DE DECISIÓN ──────────────────────────────────────────────────────
function DecisionCard({
  num,
  question,
  answer,
  annotation,
  delay = 0,
}: {
  num: string;
  question: string;
  answer: string;
  annotation?: string;
  delay?: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <MotionWrapper delay={delay}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left transition-all duration-200 group"
        style={{
          background: open ? "hsl(40 20% 97%)" : "hsl(38 22% 93%)",
          border: `1px solid ${open ? "hsl(44 95% 48% / 0.35)" : "hsl(24 18% 10% / 0.10)"}`,
          borderLeft: `3px solid ${open ? "hsl(44 95% 48%)" : "hsl(24 18% 10% / 0.18)"}`,
          padding: "1.25rem 1.5rem",
        }}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span
              className="font-mono text-[9px] font-bold mt-[2px] shrink-0"
              style={{
                color: open ? "hsl(44 95% 38%)" : "hsl(24 18% 10% / 0.30)",
              }}
            >
              {num}
            </span>
            <p
              className="font-serif text-sm font-medium leading-snug"
              style={{ color: "hsl(24 18% 10% / 0.85)" }}
            >
              {question}
            </p>
          </div>
          <span
            className="font-mono text-base shrink-0 transition-transform duration-200"
            style={{
              color: "hsl(44 95% 38%)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              lineHeight: 1,
            }}
          >
            +
          </span>
        </div>

        {open && (
          <div className="mt-4 ml-6">
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "hsl(24 18% 10% / 0.65)" }}
            >
              {answer}
            </p>
            {annotation && (
              <p
                className="mt-3 font-mono text-[9px] italic"
                style={{ color: "hsl(24 18% 10% / 0.38)" }}
              >
                {annotation}
              </p>
            )}
          </div>
        )}
      </button>
    </MotionWrapper>
  );
}

// ─── BLOQUE DE FASE — sección Construir ──────────────────────────────────────
function BuildPhase({
  num,
  label,
  title,
  body,
  annotation,
  isDark = false,
  delay = 0,
}: {
  num: string;
  label: string;
  title: string;
  body: string;
  annotation?: string;
  isDark?: boolean;
  delay?: number;
}) {
  return (
    <MotionWrapper delay={delay}>
      <div
        className="relative p-6 md:p-8"
        style={{
          background: isDark ? "hsl(25 20% 10%)" : "hsl(40 20% 97%)",
          border: `1px solid ${isDark ? "hsl(0 0% 100% / 0.07)" : "hsl(24 18% 10% / 0.10)"}`,
        }}
      >
        {/* Número de fase */}
        <div
          className="absolute top-0 right-0 px-3 py-1.5"
          style={{
            background: isDark
              ? "hsl(0 0% 100% / 0.04)"
              : "hsl(24 18% 10% / 0.04)",
          }}
        >
          <span
            className="font-mono text-[9px] font-bold"
            style={{
              color: isDark
                ? "hsl(0 0% 100% / 0.20)"
                : "hsl(24 18% 10% / 0.20)",
            }}
          >
            {num}
          </span>
        </div>

        {/* Label de tipo */}
        <span
          className="inline-block font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 mb-4"
          style={{
            background: isDark
              ? "hsl(44 95% 48% / 0.12)"
              : "hsl(44 95% 48% / 0.10)",
            border: "1px solid hsl(44 95% 48% / 0.28)",
            color: isDark ? "hsl(44 95% 62%)" : "hsl(44 95% 30%)",
          }}
        >
          {label}
        </span>

        <h3
          className="font-serif text-base font-medium leading-snug mb-3"
          style={{ color: isDark ? "hsl(36 18% 92%)" : "hsl(24 18% 10%)" }}
        >
          {title}
        </h3>

        <p
          className="font-sans text-sm leading-relaxed"
          style={{
            color: isDark ? "hsl(0 0% 100% / 0.58)" : "hsl(24 18% 10% / 0.65)",
          }}
        >
          {body}
        </p>

        {annotation && (
          <div
            className="mt-4 pt-4"
            style={{
              borderTop: `1px solid ${isDark ? "hsl(0 0% 100% / 0.06)" : "hsl(24 18% 10% / 0.08)"}`,
            }}
          >
            <p
              className="font-mono text-[9px] italic"
              style={{
                color: isDark
                  ? "hsl(0 0% 100% / 0.30)"
                  : "hsl(24 18% 10% / 0.35)",
              }}
            >
              {annotation}
            </p>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}

// ─── INSIGHT EDITORIAL (bloque grande de ancho completo) ─────────────────────
function InsightBlock({
  body,
  attribution,
}: {
  body: string;
  attribution?: string;
}) {
  return (
    <MotionWrapper>
      <div
        className="relative px-8 py-10 md:px-12 md:py-14 overflow-hidden"
        style={{ background: "hsl(25 20% 10%)" }}
      >
        {/* Acento izquierdo */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[4px]"
          style={{ background: "hsl(44 95% 48%)" }}
          aria-hidden="true"
        />
        {/* Grano sutil */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, hsl(50 90% 80%) 0%, transparent 55%)",
          }}
        />
        <p
          className="font-mono text-[9px] uppercase tracking-widest mb-5"
          style={{ color: "hsl(44 95% 48% / 0.65)" }}
        >
          Insight central
        </p>
        <blockquote>
          <p
            className="font-serif font-medium italic leading-relaxed"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
              color: "hsl(36 18% 92%)",
            }}
          >
            "{body}"
          </p>
          {attribution && (
            <footer
              className="mt-4 font-mono text-[9px]"
              style={{ color: "hsl(0 0% 100% / 0.35)" }}
            >
              — {attribution}
            </footer>
          )}
        </blockquote>
      </div>
    </MotionWrapper>
  );
}

// ─── COMPARATIVA EDITORIAL ────────────────────────────────────────────────────
function ComparisonRow({
  label,
  theirs,
  mine,
  delay = 0,
}: {
  label: string;
  theirs: string;
  mine: string;
  delay?: number;
}) {
  return (
    <MotionWrapper delay={delay}>
      <div
        className="grid grid-cols-[1fr_1fr] gap-0"
        aria-label={label}
        style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.08)" }}
      >
        {/* Columna ellos */}
        <div
          className="px-5 py-4"
          style={{ borderRight: "1px solid hsl(24 18% 10% / 0.08)" }}
        >
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.50)" }}
          >
            {theirs}
          </p>
        </div>
        {/* Columna Talixea */}
        <div className="px-5 py-4 relative">
          <div
            className="absolute left-0 top-3 bottom-3 w-[2px]"
            style={{ background: "hsl(44 95% 48% / 0.45)" }}
            aria-hidden="true"
          />
          <p
            className="font-sans text-sm leading-relaxed font-medium"
            style={{ color: "hsl(24 18% 10% / 0.80)" }}
          >
            {mine}
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}

// ─── FEATURE CARD — El producto ──────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  body,
  note,
  delay = 0,
}: {
  icon: string;
  title: string;
  body: string;
  note?: string;
  delay?: number;
}) {
  return (
    <MotionWrapper delay={delay}>
      <div
        className="p-5 h-full"
        style={{
          background: "hsl(40 20% 97%)",
          border: "1px solid hsl(24 18% 10% / 0.10)",
          borderTop: "2px solid hsl(44 95% 48% / 0.35)",
        }}
      >
        <span className="text-xl mb-3 block">{icon}</span>
        <h4
          className="font-serif text-sm font-medium mb-2"
          style={{ color: "hsl(24 18% 10%)" }}
        >
          {title}
        </h4>
        <p
          className="font-sans text-xs leading-relaxed"
          style={{ color: "hsl(24 18% 10% / 0.60)" }}
        >
          {body}
        </p>
        {note && (
          <p
            className="mt-3 font-mono text-[8px] italic"
            style={{ color: "hsl(24 18% 10% / 0.35)" }}
          >
            {note}
          </p>
        )}
      </div>
    </MotionWrapper>
  );
}

// ─── ROADMAP ITEM ─────────────────────────────────────────────────────────────
function RoadmapItem({
  status,
  text,
  note,
}: {
  status: "done" | "in-progress" | "planned";
  text: string;
  note?: string;
}) {
  const colors = {
    done: "hsl(152 55% 35%)",
    "in-progress": "hsl(44 95% 38%)",
    planned: "hsl(24 18% 10% / 0.30)",
  };
  const labels = {
    done: "Listo",
    "in-progress": "En curso",
    planned: "Planeado",
  };

  return (
    <div
      className="flex items-start gap-4 py-3"
      style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.07)" }}
    >
      <div className="mt-1 shrink-0">
        {status === "done" && (
          <CheckCircle size={14} style={{ color: colors.done }} weight="fill" />
        )}
        {status === "in-progress" && (
          <Circle
            size={14}
            style={{ color: colors["in-progress"] }}
            weight="duotone"
          />
        )}
        {status === "planned" && (
          <Circle
            size={14}
            style={{ color: colors.planned }}
            weight="regular"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="font-sans text-sm"
          style={{
            color:
              status === "planned"
                ? "hsl(24 18% 10% / 0.45)"
                : "hsl(24 18% 10% / 0.78)",
          }}
        >
          {text}
        </p>
        {note && (
          <p
            className="font-mono text-[9px] mt-0.5"
            style={{ color: "hsl(24 18% 10% / 0.32)" }}
          >
            {note}
          </p>
        )}
      </div>
      <span
        className="font-mono text-[8px] uppercase tracking-widest shrink-0"
        style={{ color: colors[status] }}
      >
        {labels[status]}
      </span>
    </div>
  );
}

// ─── SECCIÓN HEADER ───────────────────────────────────────────────────────────
function SectionHeader({
  num,
  title,
  subtitle,
  dark = false,
}: {
  num: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <MotionWrapper>
      <div
        className="mb-10 flex items-baseline gap-4 pb-5"
        style={{
          borderBottom: `1px solid ${dark ? "hsl(0 0% 100% / 0.10)" : "hsl(24 18% 10% / 0.14)"}`,
        }}
      >
        <span
          className="font-mono text-[10px] font-bold"
          style={{ color: "hsl(44 95% 48%)" }}
        >
          {num}
        </span>
        <p
          className="font-mono text-[10px] uppercase tracking-[0.22em]"
          style={{
            color: dark ? "hsl(0 0% 100% / 0.55)" : "hsl(24 18% 10% / 0.50)",
          }}
        >
          {title}
        </p>
        {subtitle && (
          <p
            className="ml-auto font-mono text-[9px] italic hidden md:block"
            style={{
              color: dark ? "hsl(0 0% 100% / 0.28)" : "hsl(24 18% 10% / 0.28)",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </MotionWrapper>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export function TalixeaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Talixea",
    description:
      "Plataforma personal de aprendizaje de idiomas construida desde cero por Lara Feijóo.",
    author: { "@type": "Person", name: "Lara Feijóo" },
  };

  return (
    <>
      <SeoHead
        meta={{
          title: "Talixea | Lara Feijóo",
          description:
            "Una curiosidad se convirtió en oportunidad. La oportunidad se convirtió en producto. Caso de estudio personal de Lara Feijóo.",
          canonical: `${window.location.origin}/trabajo/talixea`,
        }}
        schema={schema}
      />

      <main>
        {/* ════════════════════════════════════════════════════
            00 — HERO
            Compacto. Editorial. Con la segunda lectura.
        ════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "hsl(36 28% 91%)" }}
          aria-label="Talixea — caso de estudio"
        >
          {/* Acento radial amarillo — más presente que en home */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 55% 60% at 95% 95%, hsl(50 90% 80% / 0.50) 0%, hsl(44 75% 88% / 0.22) 40%, transparent 68%)",
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

          {/* Breadcrumb */}
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
                Talixea
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="relative z-10 px-8 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[1fr_300px] items-start">
                {/* Col izquierda */}
                <MotionWrapper>
                  {/* Meta chips */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{ color: "hsl(44 95% 38%)" }}
                    >
                      {PROJECT.num}
                    </span>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                      style={{
                        border: "1px solid hsl(44 95% 48% / 0.45)",
                        color: "hsl(44 95% 30%)",
                        background: "hsl(44 95% 48% / 0.08)",
                      }}
                    >
                      {PROJECT.context}
                    </span>
                    <span
                      className="font-mono text-[9px]"
                      style={{ color: "hsl(24 18% 10% / 0.35)" }}
                    >
                      {PROJECT.year}
                    </span>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                      style={{
                        background: "hsl(44 95% 48% / 0.10)",
                        border: "1px solid hsl(44 95% 48% / 0.30)",
                        color: "hsl(44 95% 30%)",
                      }}
                    >
                      {PROJECT.depth}
                    </span>
                    {/* Status en vivo */}
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                      style={{
                        background: "hsl(152 55% 35% / 0.10)",
                        border: "1px solid hsl(152 55% 35% / 0.30)",
                        color: "hsl(152 55% 32%)",
                      }}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                          style={{ background: "hsl(152 55% 40%)" }}
                        />
                        <span
                          className="relative inline-flex rounded-full h-1.5 w-1.5"
                          style={{ background: "hsl(152 55% 35%)" }}
                        />
                      </span>
                      {PROJECT.status} · {PROJECT.version}
                    </span>
                  </div>

                  {/* Título */}
                  <h1
                    className="font-serif font-medium leading-[1.04]"
                    style={{
                      fontSize: "clamp(3rem, 7vw, 5.5rem)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Talixea
                  </h1>

                  {/* Headline editorial */}
                  <p
                    className="mt-5 font-serif italic leading-snug"
                    style={{
                      fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                      color: "hsl(24 18% 10% / 0.62)",
                      maxWidth: "560px",
                    }}
                  >
                    {PROJECT.headline}
                    <br />
                    {PROJECT.subheadline}
                  </p>

                  {/* Segunda lectura interactiva */}
                  <SecondReadingHero />

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {PROJECT.tags.map((tag) => (
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

                {/* Col derecha — ficha */}
                <MotionWrapper delay={0.12}>
                  <div
                    className="p-6 space-y-4"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: "1px solid hsl(24 18% 10% / 0.12)",
                    }}
                  >
                    {[
                      { label: "Año", value: PROJECT.year },
                      {
                        label: "Contexto",
                        value: "Proyecto personal — sin brief externo",
                      },
                      { label: "Rol", value: PROJECT.role },
                      { label: "Estado", value: `Activo · ${PROJECT.version}` },
                    ].map(({ label, value }) => (
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
                    {/* CTA */}
                    <a
                      href="https://talixea.es"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[9px] uppercase tracking-widest transition-opacity hover:opacity-70"
                      style={{ color: "hsl(44 95% 30%)" }}
                    >
                      Visitar talixea.es →
                    </a>
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>

          {/* Separador de sección */}
          <div
            className="relative h-[1px] mx-8"
            style={{ background: "hsl(24 18% 10% / 0.12)" }}
            aria-hidden="true"
          />
          {/* Imagen hero / mockup */}
          <div
            className="relative overflow-hidden mx-8 mb-0"
            style={{ height: "clamp(200px, 35vw, 440px)", marginTop: "1px" }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "hsl(36 22% 88%)" }}
            >
              {/* Placeholder editorial — Lara sustituirá con imagen real */}
              <div className="text-center">
                <p
                  className="font-mono text-[9px] uppercase tracking-widest mb-2"
                  style={{ color: "hsl(24 18% 10% / 0.30)" }}
                >
                  Imagen principal del producto
                </p>
                <p
                  className="font-serif italic text-sm"
                  style={{ color: "hsl(24 18% 10% / 0.22)" }}
                >
                  Lara añadirá una captura de pantalla real aquí
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            01 — EL ORIGEN
            De dónde vino la idea. No cómo se construyó.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(38 22% 95%)" }}
          aria-label="El origen de Talixea"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              num="01"
              title="El origen"
              subtitle="De dónde viene la idea"
            />

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-start">
              {/* Columna narrativa */}
              <MotionWrapper>
                <div className="space-y-6">
                  <div
                    className="p-6"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: "1px solid hsl(24 18% 10% / 0.10)",
                      borderTop: "3px solid hsl(24 18% 10% / 0.22)",
                    }}
                  >
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-3"
                      style={{ color: "hsl(24 18% 10% / 0.40)" }}
                    >
                      La curiosidad inicial
                    </p>
                    <p
                      className="font-serif text-sm font-medium leading-relaxed"
                      style={{ color: "hsl(24 18% 10% / 0.82)" }}
                    >
                      Aprender vocabulario en un idioma nuevo siempre fue
                      frustrante de la misma manera: las palabras que más
                      necesitaba no estaban en las listas que me daban. Las
                      listas que me daban no tenían nada que ver con los textos
                      que leía.
                    </p>
                  </div>

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
                      El problema detectado
                    </p>
                    <p
                      className="font-serif text-sm font-medium leading-relaxed"
                      style={{ color: "hsl(24 18% 10% / 0.82)" }}
                    >
                      Las herramientas existentes enseñan vocabulario
                      descontextualizado o contexto sin vocabulario
                      personalizado. Nadie conectaba las dos cosas de forma
                      flexible.
                    </p>
                  </div>
                </div>
              </MotionWrapper>

              {/* Columna de anotaciones marginales */}
              <MotionWrapper delay={0.08}>
                <div className="space-y-5">
                  {/* Línea de tiempo compacta del origen */}
                  {[
                    {
                      moment: "La observación",
                      text: "Estudiando para un examen, detecté que el vocabulario que me faltaba no coincidía con ningún mazo de Anki, ninguna lista de Duolingo, ningún nivel de curso.",
                      isYellow: false,
                    },
                    {
                      moment: "La pregunta",
                      text: "¿Y si el vocabulario que aprendo lo genera el propio texto que estoy leyendo?",
                      isYellow: true,
                    },
                    {
                      moment: "La oportunidad",
                      text: "La respuesta estaba en conectar lectura real + vocabulario personalizado + repetición espaciada. Esa conexión no existía en ninguna herramienta de forma integrada.",
                      isYellow: false,
                    },
                  ].map(({ moment, text, isYellow }, i) => (
                    <div
                      key={i}
                      className="flex gap-4"
                      style={{ paddingLeft: isYellow ? "0" : "0" }}
                    >
                      <div className="flex flex-col items-center gap-0 pt-1">
                        <div
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{
                            background: isYellow
                              ? "hsl(44 95% 48%)"
                              : "hsl(24 18% 10% / 0.22)",
                          }}
                        />
                        {i < 2 && (
                          <div
                            className="w-px flex-1 mt-1"
                            style={{
                              background: "hsl(24 18% 10% / 0.10)",
                              minHeight: "24px",
                            }}
                          />
                        )}
                      </div>
                      <div className="pb-4">
                        <p
                          className="font-mono text-[9px] uppercase tracking-widest mb-1.5"
                          style={{
                            color: isYellow
                              ? "hsl(44 95% 38%)"
                              : "hsl(24 18% 10% / 0.38)",
                          }}
                        >
                          {moment}
                        </p>
                        <p
                          className="font-sans text-sm leading-relaxed"
                          style={{ color: "hsl(24 18% 10% / 0.65)" }}
                        >
                          {text}
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
            02 — EL DESCUBRIMIENTO
            Por qué Talixea merece existir. Con datos.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(40 20% 97%)" }}
          aria-label="El descubrimiento de mercado"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              num="02"
              title="El descubrimiento"
              subtitle="Por qué existe un hueco"
            />

            {/* Insight grande */}
            <InsightBlock
              body="Las personas que aprenden idiomas de forma autónoma no tienen problema de motivación. Tienen problema de contexto: aprenden vocabulario que no necesitan, con textos que no les interesan."
              attribution="Observación propia, contrastada con revisión de herramientas existentes"
            />

            {/* Tabla comparativa editorial */}
            <MotionWrapper delay={0.08}>
              <div
                className="mt-10"
                style={{ border: "1px solid hsl(24 18% 10% / 0.10)" }}
              >
                {/* Cabecera de la tabla */}
                <div
                  className="grid grid-cols-[1fr_1fr] gap-0 px-5 py-3"
                  style={{
                    background: "hsl(36 22% 90%)",
                    borderBottom: "1px solid hsl(24 18% 10% / 0.10)",
                  }}
                >
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "hsl(24 18% 10% / 0.45)" }}
                  >
                    Lo que ofrecen las herramientas actuales
                  </p>
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest pl-5"
                    style={{
                      color: "hsl(44 95% 38%)",
                      borderLeft: "1px solid hsl(24 18% 10% / 0.08)",
                    }}
                  >
                    Lo que hace Talixea
                  </p>
                </div>

                {/* Filas de comparación */}
                <ComparisonRow
                  label="vocabulario"
                  theirs="Listas predefinidas por nivel o tema. Independientes de lo que lees."
                  mine="Vocabulario extraído del texto que tú eliges leer. Siempre en contexto."
                  delay={0.04}
                />
                <ComparisonRow
                  label="repetición"
                  theirs="Repetición espaciada estándar, igual para todos."
                  mine="Repetición adaptada a tu historial de lectura y frecuencia real de uso."
                  delay={0.06}
                />
                <ComparisonRow
                  label="contenido"
                  theirs="Textos diseñados para enseñar (artificiales, graduados)."
                  mine="Textos reales que el usuario quiere leer. Dificultad real, no simulada."
                  delay={0.08}
                />
                <ComparisonRow
                  label="integración"
                  theirs="Lector y flashcards son herramientas separadas."
                  mine="El lector genera las flashcards. La biblioteca alimenta el sistema."
                  delay={0.1}
                />
              </div>
            </MotionWrapper>

            {/* Anotación al pie */}
            <MotionWrapper delay={0.14}>
              <div
                className="mt-6 flex items-start gap-3 px-4 py-3"
                style={{
                  background: "hsl(44 95% 48% / 0.06)",
                  border: "1px solid hsl(44 95% 48% / 0.18)",
                }}
              >
                <span
                  className="font-mono text-[10px] font-bold mt-0.5 shrink-0"
                  style={{ color: "hsl(44 95% 38%)" }}
                >
                  →
                </span>
                <p
                  className="font-mono text-[9px] leading-relaxed"
                  style={{ color: "hsl(24 18% 10% / 0.55)" }}
                >
                  Esta observación no parte de un estudio de mercado formal.
                  Parte de usar las herramientas existentes durante años y
                  detectar la misma fricción de forma repetida. El hueco estaba
                  ahí. La pregunta era si merecía la pena construir algo al
                  respecto.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            03 — CONSTRUIR
            Evolución del proyecto. Fases modulares.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(38 22% 93%)" }}
          aria-label="Proceso de construcción"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              num="03"
              title="Construir"
              subtitle="Cómo evolucionó el proyecto"
            />

            {/* Grid de fases — alternando light/dark */}
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              <BuildPhase
                num="A"
                label="Idea"
                title="Antes de que hubiera código"
                body="Todo empezó como una hipótesis: ¿se puede aprender vocabulario directamente desde los textos que lees? La primera versión no tenía ni interfaz. Era un documento con la lógica escrita a mano."
                annotation="La claridad del concepto no dependía de saber si era técnicamente posible."
                delay={0.04}
              />
              <BuildPhase
                num="B"
                label="Decisión"
                title="Qué merecía construirse primero"
                body="El lector integrado era el núcleo. Sin un lector donde marcar palabras en contexto, el resto del sistema no tenía sentido. La biblioteca y las flashcards vendrían después."
                annotation="Priorizar el lector fue la decisión más importante del proyecto."
                isDark
                delay={0.06}
              />
              <BuildPhase
                num="C"
                label="Prototipo"
                title="La primera versión funcional"
                body="El primer prototipo era deliberadamente feo. Sólo probaba si la mecánica central funcionaba: leer → marcar → recordar. Funcionó. Eso fue suficiente para continuar."
                annotation="Un prototipo feo que responde la pregunta correcta vale más que una interfaz bonita que evita la pregunta."
                delay={0.08}
              />
              <BuildPhase
                num="D"
                label="Identidad"
                title="El nombre y la forma"
                body="Talixea nace de TALE, LEXIS y WEAVE: historia, palabra y tejer. La identidad busca unir literatura, aprendizaje y tecnología con un tono adulto y sereno."
                isDark
                delay={0.1}
              />
              <BuildPhase
                num="E"
                label="Arquitectura"
                title="Tres piezas que se necesitan"
                body="Biblioteca · Lector · Flashcards. Cada parte tiene sentido sola pero funciona mejor cuando las tres se conectan. La biblioteca alimenta al lector. El lector genera las tarjetas. Las tarjetas refuerzan la biblioteca."
                annotation="El sistema circular era la idea. No tres funciones — un ciclo."
                delay={0.12}
              />
              <BuildPhase
                num="F"
                label="Iteración"
                title="Lo que cambió de la versión inicial"
                body="La primera versión tenía demasiadas opciones de configuración. Los usuarios (incluyéndome a mí) querían empezar a leer rápido. Simplificar la entrada al sistema fue la iteración más importante hasta ahora."
                annotation="Quitar fricción al principio no significa quitar profundidad al final."
                isDark
                delay={0.14}
              />
            </div>

            {/* Nota editorial al pie */}
            <MotionWrapper delay={0.18}>
              <div
                className="mt-8 flex items-center gap-3 py-4"
                style={{ borderTop: "1px solid hsl(24 18% 10% / 0.10)" }}
              >
                <div
                  className="h-[1.5px] w-8 shrink-0"
                  style={{ background: "hsl(44 95% 48%)" }}
                  aria-hidden="true"
                />
                <p
                  className="font-mono text-[9px] italic"
                  style={{ color: "hsl(24 18% 10% / 0.35)" }}
                >
                  Este no es el orden cronológico exacto. Es el orden en que las
                  decisiones tuvieron sentido.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            04 — EL PRODUCTO
            Qué es Talixea hoy. Funcionalidades reales.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(40 20% 97%)" }}
          aria-label="El producto Talixea"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              num="04"
              title="El producto"
              subtitle="Qué existe hoy"
            />

            {/* Tres pantallas / módulos en composición editorial */}
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] items-start mb-10">
              {/* Panel principal — lector */}
              <MotionWrapper>
                <div
                  className="relative overflow-hidden"
                  style={{
                    background: "hsl(25 20% 10%)",
                    border: "1px solid hsl(0 0% 100% / 0.06)",
                    minHeight: "280px",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 px-5 py-3 flex items-center gap-2"
                    style={{
                      borderBottom: "1px solid hsl(0 0% 100% / 0.06)",
                      background: "hsl(0 0% 100% / 0.03)",
                    }}
                  >
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "hsl(44 95% 48%)" }}
                    >
                      Lector
                    </span>
                    <span
                      className="font-mono text-[9px]"
                      style={{ color: "hsl(0 0% 100% / 0.22)" }}
                    >
                      — módulo central
                    </span>
                  </div>
                  <div className="px-6 pt-14 pb-8">
                    <p
                      className="font-serif text-sm leading-loose"
                      style={{ color: "hsl(0 0% 100% / 0.65)" }}
                    >
                      El texto que el usuario importa aparece aquí, formateado
                      para la lectura. Cada palabra es seleccionable.{" "}
                      <span
                        className="px-0.5 cursor-pointer"
                        style={{
                          background: "hsl(44 95% 48% / 0.22)",
                          color: "hsl(44 95% 72%)",
                          borderBottom: "1px solid hsl(44 95% 48% / 0.60)",
                        }}
                        title="Palabra marcada"
                      >
                        Al marcar una palabra
                      </span>
                      , el sistema la registra con su contexto de aparición y la
                      añade automáticamente al mazo de revisión.
                    </p>
                    <p
                      className="font-serif text-sm leading-loose mt-4"
                      style={{ color: "hsl(0 0% 100% / 0.35)" }}
                    >
                      La palabra marcada{" "}
                      <span
                        className="px-0.5"
                        style={{
                          background: "hsl(44 95% 48% / 0.12)",
                          color: "hsl(0 0% 100% / 0.45)",
                          borderBottom: "1px solid hsl(44 95% 48% / 0.25)",
                        }}
                      >
                        aparece resaltada
                      </span>{" "}
                      en lecturas futuras hasta que el sistema considera que
                      está consolidada.
                    </p>
                  </div>
                  {/* Anotación marginal */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center gap-2"
                    style={{
                      borderTop: "1px solid hsl(0 0% 100% / 0.05)",
                      background: "hsl(0 0% 100% / 0.02)",
                    }}
                  >
                  </div>
                </div>
              </MotionWrapper>

              {/* Panel derecho — stats del lector */}
              <MotionWrapper delay={0.08}>
                <div className="space-y-3">
                  {[
                    {
                      label: "Palabras marcadas",
                      value: "—",
                      note: "sesión activa",
                    },
                    {
                      label: "Textos en biblioteca",
                      value: "—",
                      note: "importados",
                    },
                    {
                      label: "Tarjetas generadas",
                      value: "—",
                      note: "en revisión",
                    },
                    {
                      label: "Idiomas activos",
                      value: "—",
                      note: "configurados",
                    },
                  ].map(({ label, value, note }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between px-4 py-3"
                      style={{
                        background: "hsl(38 22% 93%)",
                        border: "1px solid hsl(24 18% 10% / 0.08)",
                      }}
                    >
                      <div>
                        <p
                          className="font-mono text-[9px] uppercase tracking-widest"
                          style={{ color: "hsl(24 18% 10% / 0.40)" }}
                        >
                          {label}
                        </p>
                        <p
                          className="font-mono text-[9px] italic mt-0.5"
                          style={{ color: "hsl(24 18% 10% / 0.28)" }}
                        >
                          {note}
                        </p>
                      </div>
                      <span
                        className="font-serif text-xl font-medium"
                        style={{ color: "hsl(44 95% 38%)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            {/* Feature cards — los tres módulos */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon="📚"
                title="Biblioteca personal"
                body="El usuario importa los textos que quiere leer. Artículos, libros, documentos. La biblioteca no dicta qué leer — organiza lo que ya eliges leer."
                note="Texto plano, PDF, URL — pendiente de ampliar formatos"
                delay={0.04}
              />
              <FeatureCard
                icon="🔖"
                title="Lector con vocabulario activo"
                body="Cada texto se convierte en una experiencia de lectura donde el vocabulario desconocido se puede marcar, guardar y revisar sin salir del texto."
                note="El núcleo del producto. Aquí ocurre la detección."
                delay={0.07}
              />
              <FeatureCard
                icon="🃏"
                title="Flashcards desde contexto"
                body="Las tarjetas se generan con la frase original como contexto, no con una traducción aislada. El cerebro recuerda mejor en contexto que de forma abstracta."
                note="Sistema SRS básico — iteración activa"
                delay={0.1}
              />
            </div>

            {/* Nota editorial */}
            <MotionWrapper delay={0.14}>
              <div
                className="mt-6 p-5"
                style={{
                  background: "hsl(44 95% 48% / 0.06)",
                  border: "1px solid hsl(44 95% 48% / 0.18)",
                  borderLeft: "3px solid hsl(44 95% 48%)",
                }}
              >
                <p
                  className="font-mono text-[9px] uppercase tracking-widest mb-2"
                  style={{ color: "hsl(44 95% 38%)" }}
                >
                  Nota sobre las capturas de pantalla
                </p>
                <p
                  className="font-sans text-xs leading-relaxed"
                  style={{ color: "hsl(24 18% 10% / 0.58)" }}
                >
                  Esta página está diseñada para ser rellenada con las imágenes
                  y vídeos reales del producto. Los bloques de media están
                  listos. Las capturas de pantalla se añadirán en la siguiente
                  iteración editorial.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            05 — DECISIONES
            No features. Por qué se decidió cada cosa.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(36 22% 91%)" }}
          aria-label="Decisiones de diseño y estrategia"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              num="05"
              title="Decisiones"
              subtitle="Por qué se eligió cada cosa"
            />

            <MotionWrapper>
              <p
                className="mb-8 font-sans text-sm leading-relaxed max-w-2xl"
                style={{ color: "hsl(24 18% 10% / 0.58)" }}
              >
                Mostrar funcionalidades es fácil. Mostrar el razonamiento detrás
                de cada decisión es lo que distingue un proyecto pensado de uno
                ejecutado. Estas son las preguntas que definieron Talixea.
              </p>
            </MotionWrapper>

            <div className="space-y-2">
              <DecisionCard
                num="D1"
                question="¿Por qué este nombre?"
                answer="Talixea une tres territorios que explican el proyecto: TALE, historia; LEXIS, palabra y vocabulario; y WEAVE, tejer. El nombre conecta literatura, aprendizaje y tecnología sin convertir la experiencia en una app educativa infantil o estridente."
                delay={0.04}
              />
              <DecisionCard
                num="D2"
                question="¿Por qué comenzar por el lector y no por las flashcards?"
                answer="Porque el lector es el punto de origen del vocabulario. Una flashcard sin contexto de aparición es una abstracción — útil, pero menos poderosa. El lector garantiza que cada tarjeta nace en una frase real, en un texto que el usuario eligió leer. Ese contexto es lo que hace que la palabra se quede."
                annotation="Esta decisión determinó toda la arquitectura del producto."
                delay={0.06}
              />
              <DecisionCard
                num="D3"
                question="¿Por qué un sistema SRS propio y no integrar Anki?"
                answer="Anki es una herramienta excelente pero genérica. Para integrarla habría que llevar al usuario fuera de Talixea — y la fricción de cambiar de contexto rompe el flujo de aprendizaje. El objetivo era que el ciclo completo (leer · marcar · revisar) ocurriera en el mismo espacio. Eso requería construir el sistema internamente, aunque en esta fase sea más básico."
                annotation="La integración perfecta con herramientas externas puede ser una iteración futura."
                delay={0.08}
              />
              <DecisionCard
                num="D4"
                question="¿Por qué el modelo de importación libre en vez de contenido curado?"
                answer="Porque el vocabulario que necesitas aprender depende de lo que lees, y lo que lees depende de tus intereses, tu nivel y tus objetivos. Un catálogo curado presupone que el equipo sabe mejor que el usuario qué textos son relevantes para él. No lo sabe. La libertad de importar cualquier texto es una decisión pedagógica, no técnica."
                delay={0.1}
              />
              <DecisionCard
                num="D5"
                question="¿Por qué no incluir IA generativa para traducir o explicar palabras?"
                answer="Podría haberlo hecho. Decidí no hacerlo en esta fase por una razón concreta: la IA produce explicaciones que suenan bien pero no siempre son precisas con vocabulario especializado o dialectal. Prefiero un sistema que haga menos cosas pero las haga de forma confiable. La IA como capa de apoyo es una iteración futura — cuando tenga más control sobre cuándo y cómo aparece."
                annotation="La decisión de qué no incluir fue tan importante como la de qué incluir."
                delay={0.12}
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            06 — ESTADO ACTUAL
            Talixea está vivo. No es un proyecto archivado.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(25 20% 10%)" }}
          aria-label="Estado actual del proyecto"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader num="06" title="Estado actual" dark />

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
              {/* Columna izquierda — versión y contexto */}
              <MotionWrapper>
                <div
                  className="inline-flex items-center gap-3 mb-6 px-4 py-2.5"
                  style={{
                    background: "hsl(44 95% 48% / 0.10)",
                    border: "1px solid hsl(44 95% 48% / 0.25)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: "hsl(44 95% 48%)" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "hsl(44 95% 48%)" }}
                    />
                  </span>
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "hsl(44 95% 62%)" }}
                  >
                    Activo — versión 1.2 · {PROJECT.year}
                  </span>
                </div>

                <h2
                  className="font-serif font-medium leading-snug mb-5"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    color: "hsl(36 18% 92%)",
                  }}
                >
                  Talixea no está terminado.
                  <br />
                  <span style={{ color: "hsl(0 0% 100% / 0.45)" }}>
                    Ningún producto lo está.
                  </span>
                </h2>

                <p
                  className="font-sans text-sm leading-relaxed max-w-md"
                  style={{ color: "hsl(0 0% 100% / 0.55)" }}
                >
                  La versión actual es funcional y se usa. Las próximas
                  iteraciones están definidas. Lo que importa es que el ciclo
                  central (leer · marcar · revisar) ya funciona de la forma en
                  que debía funcionar cuando empezó el proyecto.
                </p>

                <div
                  className="mt-6 p-5"
                  style={{
                    background: "hsl(0 0% 100% / 0.04)",
                    border: "1px solid hsl(0 0% 100% / 0.08)",
                    borderLeft: "3px solid hsl(44 95% 48%)",
                  }}
                >
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest mb-2"
                    style={{ color: "hsl(44 95% 48%)" }}
                  >
                    Lo que funciona hoy
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "hsl(0 0% 100% / 0.55)" }}
                  >
                    Importar textos · Leer con marcado de vocabulario · Generar
                    flashcards en contexto · Revisar con repetición espaciada
                    básica · Gestionar biblioteca personal
                  </p>
                </div>
              </MotionWrapper>

              {/* Columna derecha — roadmap */}
              <MotionWrapper delay={0.08}>
                <p
                  className="font-mono text-[9px] uppercase tracking-widest mb-5"
                  style={{ color: "hsl(0 0% 100% / 0.30)" }}
                >
                  Roadmap activo
                </p>
                <div>
                  <RoadmapItem
                    status="done"
                    text="Lector con marcado de vocabulario"
                    note="Módulo central del producto"
                  />
                  <RoadmapItem
                    status="done"
                    text="Generación de flashcards desde contexto"
                    note="Con frase de aparición original"
                  />
                  <RoadmapItem
                    status="done"
                    text="Sistema SRS básico"
                    note="Repetición espaciada funcional"
                  />
                  <RoadmapItem
                    status="done"
                    text="Biblioteca de textos importados"
                    note="Texto plano y PDF"
                  />
                  <RoadmapItem
                    status="in-progress"
                    text="Mejoras en el motor de repetición"
                    note="Algoritmo más adaptativo"
                  />
                  <RoadmapItem
                    status="in-progress"
                    text="Soporte para más formatos de importación"
                    note="URL, ePub"
                  />
                  <RoadmapItem
                    status="planned"
                    text="Estadísticas de progreso personal"
                    note="Vocabulario activo por idioma"
                  />
                  <RoadmapItem
                    status="planned"
                    text="Capa de pronunciación"
                    note="Audio en contexto de frase"
                  />
                  <RoadmapItem
                    status="planned"
                    text="Versión mobile nativa"
                    note="iOS y Android"
                  />
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            07 — APRENDIZAJES
            Reflexión compacta. Honesta. No motivacional.
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(38 22% 95%)" }}
          aria-label="Aprendizajes del proyecto"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              num="07"
              title="Aprendizajes"
              subtitle="Lo que cambia la perspectiva"
            />

            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
              {/* Titular */}
              <MotionWrapper>
                <h2
                  className="font-serif font-medium leading-snug"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    color: "hsl(24 18% 10%)",
                  }}
                >
                  Construir algo desde cero
                  <br />
                  <span style={{ color: "hsl(24 18% 10% / 0.45)" }}>
                    enseña cosas que no están en ningún libro.
                  </span>
                </h2>

                <p
                  className="mt-5 font-sans text-sm leading-relaxed max-w-md"
                  style={{ color: "hsl(24 18% 10% / 0.62)" }}
                >
                  Talixea no es el resultado de un proceso de aprendizaje — es
                  el proceso en sí. Cada decisión que se describe en este
                  documento fue también un aprendizaje. No todas fueron
                  acertadas. Algunas tardaron en verse.
                </p>

                <div
                  className="mt-6 pl-4"
                  style={{ borderLeft: "2px solid hsl(44 95% 48% / 0.45)" }}
                >
                  <p
                    className="font-mono text-[9px] italic"
                    style={{ color: "hsl(24 18% 10% / 0.38)" }}
                  >
                    Si pudiera cambiar algo, empezaría antes — no mejor
                    preparada, sino antes.
                  </p>
                </div>
              </MotionWrapper>

              {/* Lista de aprendizajes */}
              <MotionWrapper delay={0.08}>
                <div style={{ borderTop: "1px solid hsl(24 18% 10% / 0.10)" }}>
                  {[
                    {
                      text: "La claridad del concepto importa más que la calidad de la ejecución inicial. Un prototipo que responde la pregunta correcta es más útil que un prototipo impecable que responde la pregunta equivocada.",
                    },
                    {
                      text: "Las decisiones de qué NO hacer son más difíciles — y más importantes — que las decisiones de qué hacer. El alcance no acotado es el mayor riesgo en un proyecto personal.",
                    },
                    {
                      text: "Construir algo que usas tú misma tiene una ventaja enorme: sabes exactamente cuándo algo no funciona. No necesitas feedback externo para detectar fricción real.",
                    },
                    {
                      text: "El nombre, la identidad y la voz del producto importan desde el primer día, incluso antes de tener usuarios. La coherencia desde el origen evita retrabajos costosos más adelante.",
                    },
                  ].map((l, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 py-4"
                      style={{
                        borderBottom: "1px solid hsl(24 18% 10% / 0.08)",
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
                        style={{ color: "hsl(24 18% 10% / 0.65)" }}
                      >
                        {l.text}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            08 — NAVEGACIÓN: anterior / archivo / siguiente
        ════════════════════════════════════════════════════ */}
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
              {/* Anterior — no hay proyecto anterior */}
              <div />

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

              {/* Siguiente — Iberia */}
              <div className="flex justify-end">
                <Link
                  to="/trabajo/iberia"
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
                    02 — Iberia
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
