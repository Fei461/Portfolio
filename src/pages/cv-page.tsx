import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  DownloadSimple,
  CaretDown,
  Envelope,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { SeoHead } from "@/components/seo-head";
import { MotionWrapper } from "@/components/motion-wrapper";
import { formatDateRange } from "@/lib/utils";
import { isPendingContent } from "@/lib/utils";
import { profile } from "@/data/profile";
import type { ExperienceRecord, EducationRecord } from "@/types";

// ─── STATIC EDITORIAL DATA ────────────────────────────────────────────────────

const AWARDS = [
  {
    title: "Stud-IA",
    org: "Experiencia profesional",
    note: "Estrategia, gestión de contenidos y trabajo analítico asociado a comunicación y marketing.",
    year: "TODO: fechas",
  },
];

const LANGUAGES = profile.languages.map((language) => ({
  lang: language.label,
  code: language.code,
  level: "Nivel pendiente de confirmar",
  detail: "Interés y aprendizaje confirmados; falta indicar nivel.",
}));

const SOFTWARE = [
  {
    category: "Estrategia y planificación",
    tools: ["TODO: herramientas verificadas"],
  },
  {
    category: "Diseño y producción visual",
    tools: ["TODO: herramientas verificadas"],
  },
  {
    category: "Datos y análisis",
    tools: ["TODO: herramientas verificadas"],
  },
  {
    category: "Comunicación y gestión",
    tools: ["TODO: herramientas verificadas"],
  },
];

const INTERESTS = profile.interests;

const REFERENCES = [
  {
    name: "TODO: referencias",
    role: "",
    org: "Pendiente de confirmar",
    note: "Añadir sólo con autorización de las personas implicadas.",
  },
];

// ─── COLLAPSIBLE SECTION ──────────────────────────────────────────────────────

type SectionProps = {
  id: string;
  num: string;
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  dark?: boolean;
};

function CvSection({
  id,
  num,
  title,
  subtitle,
  defaultOpen = false,
  children,
  dark = false,
}: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const fg = dark ? "hsl(36 18% 92%)" : "hsl(24 18% 10%)";
  const fgMuted = dark ? "hsl(0 0% 100% / 0.38)" : "hsl(24 18% 10% / 0.38)";
  const borderColor = dark ? "hsl(0 0% 100% / 0.09)" : "hsl(24 18% 10% / 0.10)";
  const hoverBg = dark ? "hsl(0 0% 100% / 0.04)" : "hsl(44 95% 48% / 0.04)";

  return (
    <div id={id} style={{ borderBottom: `1px solid ${borderColor}` }}>
      {/* Header — click to toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group transition-colors duration-150"
        style={{
          padding: "1.25rem 0",
          background: "transparent",
        }}
        aria-expanded={open}
        aria-controls={`cv-section-body-${id}`}
      >
        <div
          className="flex items-center justify-between gap-4 px-1 py-1 rounded-sm transition-colors duration-150"
          style={{ background: open ? "transparent" : "transparent" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.background = hoverBg)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.background =
              "transparent")
          }
        >
          <div className="flex items-baseline gap-4">
            <span
              className="font-mono text-[10px] font-bold w-6 shrink-0"
              style={{ color: "hsl(44 95% 48%)" }}
            >
              {num}
            </span>
            <div>
              <h2
                className="font-serif font-medium leading-tight"
                style={{
                  fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                  color: fg,
                  transition: "color 0.15s",
                }}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className="mt-0.5 font-mono text-[9px] uppercase tracking-widest"
                  style={{ color: fgMuted }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <span
            className="shrink-0 transition-transform duration-300"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              color: fgMuted,
            }}
          >
            <CaretDown size={14} weight="bold" />
          </span>
        </div>
      </button>

      {/* Collapsible body */}
      <div
        id={`cv-section-body-${id}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? "9999px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pb-8 pt-1">{children}</div>
      </div>
    </div>
  );
}

// ─── ENTRY ROW — reutilizable para experiencia y formación ───────────────────

function EntryRow({
  date,
  title,
  subtitle,
  detail,
  tags,
}: {
  date: string;
  title: string;
  subtitle?: string;
  detail?: string;
  tags?: string[];
}) {
  return (
    <div
      className="grid gap-2 py-5"
      style={{
        gridTemplateColumns: "140px 1fr",
        borderBottom: "1px solid hsl(24 18% 10% / 0.07)",
      }}
    >
      {/* Date column */}
      <div className="pt-0.5">
        <p
          className="font-mono text-[9px] uppercase tracking-widest leading-relaxed"
          style={{ color: "hsl(24 18% 10% / 0.38)" }}
        >
          {date}
        </p>
      </div>
      {/* Content column */}
      <div>
        <h3
          className="font-serif font-medium leading-tight"
          style={{
            fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
            color: "hsl(24 18% 10%)",
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className="mt-0.5 font-sans text-sm font-normal"
            style={{ color: "hsl(24 18% 10% / 0.55)" }}
          >
            {subtitle}
          </p>
        )}
        {detail && (
          <p
            className="mt-2 font-sans text-sm leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.60)", maxWidth: "640px" }}
          >
            {detail}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                style={{
                  border: "1px solid hsl(24 18% 10% / 0.14)",
                  color: "hsl(24 18% 10% / 0.42)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export function CvPage() {
  // These collections remain local until final CV data is available.
  const experiences: ExperienceRecord[] = [];
  const education: EducationRecord[] = [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <SeoHead
        meta={{
          title: "CV | Lara Feijóo",
          description:
            "Currículum de Lara Feijóo — estrategia, comunicación, research e insights.",
          canonical: `${window.location.origin}/cv`,
        }}
      />

      <main>
        {/* ════════════════════════════════════════════════════
            00 — CABECERA
            Nombre grande + datos de identidad + print CTA
        ════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "hsl(36 28% 91%)" }}
          aria-label="Cabecera del CV"
        >
          {/* Acento radial */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 55% 65% at 100% 0%, hsl(50 90% 80% / 0.38) 0%, hsl(44 75% 88% / 0.14) 50%, transparent 70%)",
            }}
          />

          {/* Eyebrow */}
          <div
            className="relative z-10 border-b px-8 py-2.5"
            style={{ borderColor: "hsl(24 18% 10% / 0.12)" }}
          >
            <div className="mx-auto max-w-5xl flex items-center justify-between">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(44 95% 36%)" }}
              >
                Currículum Vitæ
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(24 18% 10% / 0.28)" }}
              >
                Dossier editorial · 2025
              </span>
            </div>
          </div>

          <div className="relative z-10 px-8 py-12 md:py-16">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-end">
                {/* Identidad */}
                <MotionWrapper>
                  <div>
                    <h1
                      className="font-serif font-medium leading-[1.02] tracking-tight"
                      style={{
                        fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                        color: "hsl(24 18% 10%)",
                      }}
                    >
                      Lara Feijóo
                    </h1>
                    <p
                      className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: "hsl(24 18% 10% / 0.45)" }}
                    >
                      Estrategia · Comunicación · Creatividad
                    </p>

                    {/* Fila de datos rápidos */}
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                      {[
                        { label: "Titulación", val: "Publicidad y RRPP" },
                        { label: "Nota media", val: "8,62" },
                        { label: "Idiomas", val: "ES · GL · EN" },
                        { label: "Proyecto", val: "Talixea (activo)" },
                      ].map(({ label, val }) => (
                        <div key={label} className="flex items-baseline gap-2">
                          <span
                            className="font-mono text-[9px] uppercase tracking-widest"
                            style={{ color: "hsl(24 18% 10% / 0.35)" }}
                          >
                            {label}
                          </span>
                          <span
                            className="font-sans text-xs font-semibold"
                            style={{ color: "hsl(24 18% 10% / 0.72)" }}
                          >
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Frase de posición */}
                    <div
                      className="mt-7 pl-4 max-w-xl"
                      style={{
                        borderLeft: "2px solid hsl(44 95% 48% / 0.55)",
                      }}
                    >
                      <p
                        className="font-serif text-base italic leading-relaxed"
                        style={{ color: "hsl(24 18% 10% / 0.58)" }}
                      >
                        La primera respuesta rara vez es la más interesante.
                        Suelo mirar dos veces.
                      </p>
                    </div>
                  </div>
                </MotionWrapper>

                {/* Acciones */}
                <MotionWrapper delay={0.1}>
                  <div className="flex flex-col gap-3 items-end lg:items-end">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 font-sans text-xs font-medium transition-opacity hover:opacity-80"
                      style={{
                        background: "hsl(24 18% 10%)",
                        color: "hsl(36 18% 92%)",
                      }}
                    >
                      <DownloadSimple size={13} />
                      Imprimir / Guardar PDF
                    </button>
                    <Link
                      to="/sobre-mi"
                      className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest transition-opacity hover:opacity-70"
                      style={{ color: "hsl(24 18% 10% / 0.45)" }}
                    >
                      Ver perfil completo <ArrowRight size={10} />
                    </Link>
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            01–08 — SECCIONES COLAPSABLES
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-4 md:py-6"
          style={{ background: "hsl(40 20% 98%)" }}
          aria-label="Secciones del CV"
        >
          <div className="mx-auto max-w-5xl">
            {/* ── 01 EXPERIENCIA ──────────────────────────────── */}
            <CvSection
              id="experiencia"
              num="01"
              title="Experiencia"
              subtitle="Trayectoria profesional y práctica"
              defaultOpen={true}
            >
              {experiences.length === 0 ? (
                <ExperienceEmpty />
              ) : (
                <div>
                  {(experiences as ExperienceRecord[]).map((item) => (
                    <EntryRow
                      key={item.id}
                      date={formatDateRange(item.startDate, item.endDate)}
                      title={item.position}
                      subtitle={item.company}
                      detail={item.description}
                    />
                  ))}
                </div>
              )}
            </CvSection>

            {/* ── 02 FORMACIÓN ────────────────────────────────── */}
            <CvSection
              id="formacion"
              num="02"
              title="Formación"
              subtitle="Educación académica y titulaciones"
              defaultOpen={true}
            >
              {education.length === 0 ? (
                <EducationEmpty />
              ) : (
                <div>
                  {(education as EducationRecord[]).map((item) => (
                    <EntryRow
                      key={item.id}
                      date={formatDateRange(item.startDate, item.endDate)}
                      title={item.degree}
                      subtitle={item.institution}
                    />
                  ))}
                </div>
              )}
            </CvSection>

            {/* ── 03 RECONOCIMIENTOS ──────────────────────────── */}
            <CvSection
              id="reconocimientos"
              num="03"
              title="Reconocimientos"
              subtitle="Premios, becas y formación especializada"
              defaultOpen={true}
            >
              <div>
                {AWARDS.map((award) => (
                  <EntryRow
                    key={award.title}
                    date={award.year}
                    title={award.title}
                    subtitle={award.org}
                    detail={award.note}
                  />
                ))}
              </div>
            </CvSection>

            {/* ── 04 IDIOMAS ──────────────────────────────────── */}
            <CvSection
              id="idiomas"
              num="04"
              title="Idiomas"
              subtitle="Competencia lingüística"
              defaultOpen={false}
            >
              <div>
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.lang}
                    className="grid gap-2 py-5"
                    style={{
                      gridTemplateColumns: "140px 1fr",
                      borderBottom: "1px solid hsl(24 18% 10% / 0.07)",
                    }}
                  >
                    <div className="flex items-start gap-2 pt-0.5">
                      <span
                        className="font-mono text-[9px] font-bold px-1.5 py-0.5 shrink-0"
                        style={{
                          background: "hsl(44 95% 48% / 0.10)",
                          border: "1px solid hsl(44 95% 48% / 0.28)",
                          color: "hsl(44 95% 30%)",
                        }}
                      >
                        {lang.code}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3
                          className="font-serif font-medium"
                          style={{
                            fontSize: "1.05rem",
                            color: "hsl(24 18% 10%)",
                          }}
                        >
                          {lang.lang}
                        </h3>
                        <span
                          className="font-mono text-[9px] uppercase tracking-widest"
                          style={{ color: "hsl(24 18% 10% / 0.38)" }}
                        >
                          {lang.level}
                        </span>
                      </div>
                      <p
                        className="mt-1 font-sans text-sm leading-relaxed"
                        style={{
                          color: "hsl(24 18% 10% / 0.58)",
                          maxWidth: "540px",
                        }}
                      >
                        {lang.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CvSection>

            {/* ── 05 SOFTWARE Y HERRAMIENTAS ──────────────────── */}
            <CvSection
              id="software"
              num="05"
              title="Herramientas"
              subtitle="Software y plataformas de trabajo"
              defaultOpen={false}
            >
              <div className="grid gap-6 sm:grid-cols-2 pt-2">
                {SOFTWARE.map((group) => (
                  <div key={group.category}>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-3"
                      style={{ color: "hsl(24 18% 10% / 0.35)" }}
                    >
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-sans text-xs px-2.5 py-1"
                          style={{
                            border: "1px solid hsl(24 18% 10% / 0.14)",
                            color: "hsl(24 18% 10% / 0.68)",
                            background: "hsl(40 18% 97%)",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Nota sobre herramientas */}
              <div
                className="mt-6 p-4"
                style={{
                  background: "hsl(44 95% 48% / 0.05)",
                  border: "1px solid hsl(44 95% 48% / 0.18)",
                  borderLeft: "2px solid hsl(44 95% 48% / 0.55)",
                }}
              >
                <p
                  className="font-mono text-[9px] italic"
                  style={{ color: "hsl(24 18% 10% / 0.42)" }}
                >
                  Las herramientas son medios, no competencias. Lo que importa
                  es lo que se construye con ellas.
                </p>
              </div>
            </CvSection>

            {/* ── 06 INTERESES ────────────────────────────────── */}
            <CvSection
              id="intereses"
              num="06"
              title="Intereses"
              subtitle="Áreas de curiosidad intelectual y práctica"
              defaultOpen={false}
            >
              <div className="grid gap-0 pt-1">
                {INTERESTS.map((interest, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-3.5"
                    style={{
                      borderBottom: "1px solid hsl(24 18% 10% / 0.07)",
                    }}
                  >
                    <span
                      className="font-mono text-[10px] font-bold pt-0.5 shrink-0"
                      style={{ color: "hsl(44 95% 48%)" }}
                    >
                      →
                    </span>
                    <p
                      className="font-sans text-sm"
                      style={{ color: "hsl(24 18% 10% / 0.72)" }}
                    >
                      {interest}
                    </p>
                  </div>
                ))}
              </div>
            </CvSection>

            {/* ── 07 REFERENCIAS ──────────────────────────────── */}
            <CvSection
              id="referencias"
              num="07"
              title="Referencias"
              subtitle="Disponibles bajo solicitud"
              defaultOpen={false}
            >
              <div className="grid gap-0 pt-1">
                {REFERENCES.map((ref, i) => (
                  <div
                    key={i}
                    className="grid gap-2 py-5"
                    style={{
                      gridTemplateColumns: "140px 1fr",
                      borderBottom: "1px solid hsl(24 18% 10% / 0.07)",
                    }}
                  >
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest pt-0.5"
                      style={{ color: "hsl(24 18% 10% / 0.32)" }}
                    >
                      Ref. 0{i + 1}
                    </p>
                    <div>
                      <h3
                        className="font-serif font-medium"
                        style={{
                          fontSize: "1rem",
                          color: "hsl(24 18% 10% / 0.55)",
                          fontStyle: "italic",
                        }}
                      >
                        {ref.name}
                      </h3>
                      <p
                        className="mt-0.5 font-mono text-[9px] uppercase tracking-widest"
                        style={{ color: "hsl(24 18% 10% / 0.30)" }}
                      >
                        {ref.org}
                      </p>
                      <p
                        className="mt-2 font-sans text-sm"
                        style={{ color: "hsl(24 18% 10% / 0.48)" }}
                      >
                        {ref.note}
                      </p>
                    </div>
                  </div>
                ))}

                {/* CTA de contacto para referencias */}
                <div
                  className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4"
                  style={{ borderTop: "1px solid hsl(24 18% 10% / 0.08)" }}
                >
                  <p
                    className="font-sans text-sm"
                    style={{ color: "hsl(24 18% 10% / 0.55)" }}
                  >
                    Para solicitar referencias, escribe directamente.
                  </p>
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 px-4 py-2 font-sans text-xs font-medium transition-opacity hover:opacity-80"
                    style={{
                      border: "1px solid hsl(24 18% 10% / 0.22)",
                      color: "hsl(24 18% 10% / 0.65)",
                    }}
                  >
                    Contactar <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </CvSection>

            {/* ── 08 CONTACTO ─────────────────────────────────── */}
            <CvSection
              id="contacto"
              num="08"
              title="Contacto"
              subtitle="Proyectos y colaboraciones"
              defaultOpen={false}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                {[
                  {
                    icon: <Envelope size={14} />,
                    label: "Email",
                    value: "TODO: email profesional",
                    href: "#contacto",
                  },
                  {
                    icon: <LinkedinLogo size={14} />,
                    label: "LinkedIn",
                    value: "TODO: perfil profesional",
                    href: "#contacto",
                  },
                  {
                    icon: <ArrowUpRight size={14} />,
                    label: "Portfolio",
                    value: "larafeijoo.com",
                    href: "/trabajo",
                    internal: true,
                  },
                ].filter((contact) => contact.internal || !isPendingContent(contact.value)).map((contact) => (
                  <div
                    key={contact.label}
                    className="p-4 group"
                    style={{
                      border: "1px solid hsl(24 18% 10% / 0.10)",
                      background: "hsl(40 20% 98%)",
                    }}
                  >
                    <div
                      className="flex items-center gap-2 mb-2"
                      style={{ color: "hsl(24 18% 10% / 0.35)" }}
                    >
                      {contact.icon}
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest"
                        style={{ color: "hsl(24 18% 10% / 0.35)" }}
                      >
                        {contact.label}
                      </span>
                    </div>
                    {contact.internal ? (
                      <Link
                        to={contact.href}
                        className="font-sans text-sm font-medium transition-colors hover:opacity-70 flex items-center gap-1"
                        style={{ color: "hsl(24 18% 10% / 0.75)" }}
                      >
                        {contact.value}
                      </Link>
                    ) : (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm font-medium transition-opacity hover:opacity-70 flex items-center gap-1"
                        style={{ color: "hsl(24 18% 10% / 0.75)" }}
                      >
                        {contact.value}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CvSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            FOOTER DEL CV — Descarga + navegación
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-10 md:py-12"
          style={{
            background: "hsl(25 20% 10%)",
          }}
          aria-label="Acciones del CV"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-center">
              <MotionWrapper>
                <div>
                  <p
                    className="font-serif font-medium italic leading-snug"
                    style={{
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                      color: "hsl(36 18% 92% / 0.65)",
                    }}
                  >
                    "El trabajo habla por sí solo.{" "}
                    <span style={{ color: "hsl(36 18% 92%)" }}>
                      El CV es solo el índice.
                    </span>
                    "
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to="/trabajo"
                      className="inline-flex items-center gap-2 px-4 py-2.5 font-sans text-xs font-medium transition-opacity hover:opacity-80"
                      style={{
                        background: "hsl(44 95% 48%)",
                        color: "hsl(24 18% 10%)",
                      }}
                    >
                      Ver el trabajo <ArrowRight size={12} />
                    </Link>
                    <Link
                      to="/#contacto"
                      className="inline-flex items-center gap-2 px-4 py-2.5 font-sans text-xs font-medium transition-colors"
                      style={{
                        border: "1px solid hsl(0 0% 100% / 0.18)",
                        color: "hsl(36 18% 92% / 0.60)",
                      }}
                    >
                      Escribir
                    </Link>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.08}>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-5 py-3 font-sans text-xs font-medium transition-opacity hover:opacity-80"
                  style={{
                    border: "1px solid hsl(0 0% 100% / 0.18)",
                    color: "hsl(36 18% 92% / 0.55)",
                  }}
                >
                  <DownloadSimple size={13} />
                  Guardar como PDF
                </button>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ─── EMPTY STATES ─────────────────────────────────────────────────────────────

function ExperienceEmpty() {
  return (
    <div className="py-6 grid gap-0">
      {[
        {
          date: "En curso",
          title: "Talixea",
          subtitle: "Proyecto personal",
          detail:
            "Proyecto vivo que une lectura y aprendizaje de idiomas; detalle de responsabilidades editable.",
          tags: ["Producto", "Estrategia"],
        },
        {
          date: "TODO: fechas",
          title: "Stud-IA",
          subtitle: "Experiencia profesional",
          detail:
            "Estrategia, gestión de contenidos y trabajo analítico asociado a comunicación y marketing.",
          tags: ["Estrategia", "Contenido", "Research"],
        },
      ].map((item, i) => (
        <EntryRow
          key={i}
          date={item.date}
          title={item.title}
          subtitle={item.subtitle}
          detail={item.detail}
          tags={item.tags}
        />
      ))}
      <div
        className="mt-4 px-4 py-3"
        style={{
          background: "hsl(44 95% 48% / 0.05)",
          border: "1px dashed hsl(44 95% 48% / 0.30)",
        }}
      >
        <p
          className="font-mono text-[9px] italic"
          style={{ color: "hsl(24 18% 10% / 0.38)" }}
        >
          Datos de experiencia real pendientes de añadir desde el panel de
          administración.
        </p>
      </div>
    </div>
  );
}

function EducationEmpty() {
  return (
    <div className="py-2 grid gap-0">
      {[
        {
          date: "Finalizado",
          title: "Grado en Publicidad y Relaciones Públicas",
          subtitle: "TODO: institución por confirmar",
          detail:
            "Nota media 8,62.",
          tags: ["Nota 8,62"],
        },
      ].map((item, i) => (
        <EntryRow
          key={i}
          date={item.date}
          title={item.title}
          subtitle={item.subtitle}
          detail={item.detail}
          tags={item.tags}
        />
      ))}
      <div
        className="mt-4 px-4 py-3"
        style={{
          background: "hsl(44 95% 48% / 0.05)",
          border: "1px dashed hsl(44 95% 48% / 0.30)",
        }}
      >
        <p
          className="font-mono text-[9px] italic"
          style={{ color: "hsl(24 18% 10% / 0.38)" }}
        >
          Formación adicional pendiente de añadir desde el panel de
          administración.
        </p>
      </div>
    </div>
  );
}
