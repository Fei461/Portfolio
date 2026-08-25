import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { SeoHead } from "@/components/seo-head";
import { MotionWrapper } from "@/components/motion-wrapper";
import { notes } from "@/data/notes";
import { profile } from "@/data/profile";
import { isPendingContent } from "@/lib/utils";

// ─── pequeña utilidad cx ──────────────────────────────────────────────────────
function cx(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── PROCESS STEPS ───────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    num: "01",
    verb: "MIRO",
    question: "¿Qué está pasando realmente?",
    example:
      "En análisis de campañas o comportamiento del consumidor, el primer dato visible raramente es el relevante.",
  },
  {
    num: "02",
    verb: "PREGUNTO",
    question: "¿Por qué ocurre? ¿Qué falta?",
    example:
      "En investigación cualitativa, la respuesta honesta raramente es la primera. La primera es la que el entrevistado cree que debes escuchar.",
  },
  {
    num: "03",
    verb: "ORDENO",
    question: "Datos · personas · contexto · límites",
    example:
      "Estrategia de medios, planificación, research estructurado. Cuando hay demasiadas variables, necesito un sistema.",
  },
  {
    num: "04",
    verb: "CONECTO",
    question: "¿Qué relación no era evidente al principio?",
    example:
      "Lectura + aprendizaje de idiomas → vacío de mercado. Cultura + comunicación + datos → comportamiento.",
  },
  {
    num: "05",
    verb: "HAGO",
    question: "Estrategia · pieza · sistema · proyecto",
    example:
      "No me gusta dejar una idea en 'estaría bien hacer esto'. Talixea, análisis de LinkedIn, estrategias, planes de contenido.",
  },
];

// ─── DATOS EDITORIALES ───────────────────────────────────────────────────────

const PROJECTS = [
  {
    num: "01",
    slug: "talixea",
    title: "Talixea",
    discipline: "Proyecto personal",
    territory: "Producto · Aprendizaje · Plataforma",
    year: "2024",
    tagline: "Parecía un hobby de aprendizaje.",
    taglineHover: "Era un vacío de mercado esperando solución.",
    chain: ["LEER", "APRENDER", "VACÍO", "OPORTUNIDAD", "CONSTRUIR"],
    description:
      "Plataforma de aprendizaje de idiomas construida desde cero. Idea propia, diseño propio, arquitectura propia.",
    coverImg: "/assets/talixea.png",
    dark: false,
    featured: true,
  },
  {
    num: "02",
    slug: "iberia",
    title: "Iberia",
    discipline: "Estrategia publicitaria",
    territory: "Sostenibilidad · Credibilidad · Reposicionamiento",
    year: "2024",
    tagline: "Parecía un problema de sostenibilidad.",
    taglineHover: "Era un problema de credibilidad.",
    chain: [
      "BRIEF",
      "PROBLEMA APARENTE",
      "PROBLEMA REAL",
      "INSIGHT",
      "ESTRATEGIA",
    ],
    description:
      "Campaña de reposicionamiento. El análisis mostró que el territorio de sostenibilidad era indefendible — la credibilidad era el problema real.",
    coverImg: "/assets/iberia.png",
    dark: true,
    featured: false,
  },
  {
    num: "03",
    slug: "warriors-arena",
    title: "Warriors Arena",
    discipline: "Estrategia de contenido",
    territory: "OTT · Distribución · Sistema",
    year: "2024",
    tagline: "Parecía un problema de alcance.",
    taglineHover: "Era un problema de sistema.",
    chain: ["AUDIENCIA", "TERRITORIOS", "VENTANAS", "PLATAFORMAS", "SISTEMA"],
    description:
      "Estrategia de contenido end-to-end. La complejidad se resolvió creando un sistema, no más contenido.",
    coverImg: "/assets/warriors-arena.png",
    dark: false,
    featured: false,
  },
  {
    num: "04",
    slug: "ryanair",
    title: "Ryanair",
    discipline: "Comunicación interna",
    territory: "Stakeholders · Empleados · Onboarding",
    year: "2023",
    tagline: "Parecía un problema de mensajes.",
    taglineHover: "Era un problema de cultura.",
    chain: [
      "EMPLEADOS",
      "EXPERIENCIA",
      "RECONOCIMIENTO",
      "ONBOARDING",
      "COMUNICACIÓN",
    ],
    description:
      "Plan de comunicación interna orientado a mejorar el reconocimiento y la experiencia de los empleados.",
    coverImg: "/assets/ryanair.png",
    dark: false,
    featured: false,
  },
  {
    num: "05",
    slug: "bruja-roja",
    title: "Bruja Roja",
    discipline: "Branding · Identidad · Tono de voz",
    territory: "Normalización · Tabúes · Alternativa sostenible",
    year: "TODO: año",
    tagline: "Parecía una identidad visual.",
    taglineHover: "Era una posición clara ante un tabú.",
    chain: [
      "ANÁLISIS",
      "POSICIONAMIENTO",
      "TERRITORIO",
      "NARRATIVA",
      "IDENTIDAD",
    ],
    description:
      "Proyecto académico de identidad para una marca de copa menstrual, desde el territorio de marca hasta sus aplicaciones visuales.",
    dark: true,
    featured: false,
  },
];

// Notas con categorías del sistema definido
const HOME_NOTE = notes.find((note) => note.featuredOnHome) ?? notes[0];
const HOME_NOTES = notes.slice(0, 3);

const CREDENTIALS = [
  {
    type: "EDU",
    org: "TODO: institución por confirmar",
    role: "Máster en Comunicación Publicitaria",
    period: "En inicio",
    note: "Dato verificable; centro y fechas pendientes",
  },
  {
    type: "EDU",
    org: "TODO: institución por confirmar",
    role: "Grado en Publicidad y RRPP",
    period: "Finalizado",
    note: "Nota media 8,62",
  },
  {
    type: "EXP",
    org: "Stud-IA",
    role: "Experiencia profesional",
    period: "TODO: fechas",
    note: "Estrategia, gestión de contenidos y trabajo analítico",
  },
];

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lara Feijóo",
    jobTitle: "Comunicación Publicitaria · Estrategia",
    url: window.location.href,
  };

  return (
    <>
      <SeoHead
        meta={{
          title: "Lara Feijóo | Estrategia y Comunicación",
          description:
            "Portfolio de Lara Feijóo — estrategia, comunicación publicitaria e investigación. Máster en Comunicación Publicitaria.",
          canonical: `${window.location.origin}/`,
        }}
        schema={schema}
      />

      <main>
        {/* ══════════════════════════════════════════════════════
            00 — INICIO / HERO
            Estructura editorial en dos columnas.
            Fondo: papel cálido distinguible del blanco.
        ══════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "hsl(36 28% 89%)" }}
          aria-label="Introducción"
        >
          {/* Acento radial LF — esquina inferior derecha */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 50% 55% at 100% 100%, hsl(50 90% 80% / 0.40) 0%, transparent 60%)",
            }}
          />

          {/* Grid estructural sutil */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(24 18% 10%) 1px, transparent 1px), linear-gradient(90deg, hsl(24 18% 10%) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Barra de sección */}
          <div
            className="relative z-10 border-b px-8 py-2.5"
            style={{
              borderColor: "hsl(24 18% 10% / 0.18)",
              background: "hsl(44 95% 48% / 0.07)",
            }}
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em] font-semibold"
                style={{ color: "hsl(44 95% 34%)" }}
              >
                00 — Inicio
              </span>
              <span
                className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(24 18% 10% / 0.52)" }}
              >
                {profile.home.topLine}
              </span>
            </div>
          </div>

          {/* Cuerpo del hero */}
          <div className="relative z-10 px-8 pb-0 pt-14 md:pt-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-0 lg:grid-cols-[3fr_2fr]">
                {/* Columna A — nombre + texto principal */}
                <div
                  className="min-w-0 pb-14 pr-0 lg:border-r lg:pb-16 lg:pr-14"
                  style={{ borderColor: "hsl(24 18% 10% / 0.12)" }}
                >
                  <MotionWrapper>
                    {/* Disciplina */}
                    <p
                      className="max-w-full break-words font-mono text-xs uppercase tracking-[0.18em] sm:tracking-[0.24em] mb-6"
                      style={{ color: "hsl(24 18% 10% / 0.80)" }}
                    >
                      {profile.home.territory}
                    </p>

                    {/* Nombre */}
                    <h1
                      className="font-serif font-medium leading-[1.0] tracking-tight"
                      style={{
                        fontSize: "clamp(3.8rem, 9.5vw, 7.5rem)",
                        color: "hsl(24 18% 10%)",
                      }}
                    >
                      Lara
                      <br />
                      <span className="relative inline-block">
                        Feijóo
                        <span
                          className="absolute left-0 -bottom-1 h-[3px] w-full"
                          style={{ background: "hsl(44 95% 48%)" }}
                          aria-hidden="true"
                        />
                      </span>
                    </h1>

                    {/* Texto introductorio */}
                    <div className="mt-9 max-w-lg min-w-0 space-y-4">
                      <p
                        className="break-words text-xl font-serif font-medium leading-relaxed md:text-2xl"
                        style={{ color: "hsl(24 18% 10%)" }}
                      >
                        {profile.home.introduction}
                      </p>
                      <p
                        className="break-words text-base font-sans leading-relaxed"
                        style={{ color: "hsl(24 18% 10% / 0.82)" }}
                      >
                        {profile.home.summary}
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-wrap gap-3">
                      <Link
                        to="/trabajo"
                        className="inline-flex items-center gap-2 px-7 py-3 font-sans text-sm font-semibold transition-colors"
                        style={{
                          background: "hsl(44 95% 48%)",
                          color: "hsl(24 18% 10%)",
                        }}
                      >
                        Ver proyectos <ArrowRight size={15} />
                      </Link>
                      <Link
                        to="/sobre-mi"
                        className="inline-flex items-center gap-2 px-7 py-3 font-sans text-sm font-medium transition-colors"
                        style={{
                          border: "1px solid hsl(24 18% 10% / 0.42)",
                          color: "hsl(24 18% 10%)",
                        }}
                      >
                        Sobre mí
                      </Link>
                    </div>
                  </MotionWrapper>
                </div>

                {/* Columna B — módulos de información contextual */}
                <MotionWrapper
                  delay={0.1}
                  className="mt-10 lg:mt-0 lg:pl-12 pb-14 lg:pb-16"
                >
                  {/* AHORA */}
                  <div className="mb-7">
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.24em] mb-3 pb-2 font-semibold"
                      style={{
                        color: "hsl(44 95% 38%)",
                        borderBottom: "1px solid hsl(44 95% 48% / 0.30)",
                      }}
                    >
                      Ahora
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "Máster en Comunicación Publicitaria",
                        "Construyendo Talixea",
                        "Escribiendo sobre comunicación",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            className="mt-[2px] shrink-0 font-mono text-xs font-bold"
                            style={{ color: "hsl(44 95% 48%)" }}
                          >
                            →
                          </span>
                          <span
                            className="font-sans text-sm leading-snug"
                            style={{ color: "hsl(24 18% 10% / 0.82)" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divisor */}
                  <div
                    className="mb-7"
                    style={{ borderTop: "1px solid hsl(24 18% 10% / 0.14)" }}
                  />

                  {/* IDIOMAS — sin emojis, sistema editorial de texto */}
                  <div className="mb-7">
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.24em] mb-3 pb-2 font-semibold"
                      style={{
                        color: "hsl(44 95% 38%)",
                        borderBottom: "1px solid hsl(44 95% 48% / 0.30)",
                      }}
                    >
                      Idiomas
                    </p>
                    <ul className="space-y-2.5">
                      {profile.languages.map((l) => (
                        <li key={l.code} className="flex items-center gap-2.5">
                          <span
                            className="shrink-0 font-mono text-[10px] font-bold w-7 text-center py-0.5"
                            style={{
                              background: "hsl(44 95% 48% / 0.15)",
                              color: "hsl(44 95% 32%)",
                              border: "1px solid hsl(44 95% 48% / 0.30)",
                            }}
                          >
                            {l.code}
                          </span>
                          <span
                            className="font-sans text-sm font-medium"
                            style={{ color: "hsl(24 18% 10% / 0.85)" }}
                          >
                            {l.label}
                          </span>
                          <span
                            className="ml-auto font-mono text-[9px] uppercase tracking-widest"
                            style={{ color: "hsl(24 18% 10% / 0.50)" }}
                          >
                            {l.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divisor */}
                  <div
                    className="mb-7"
                    style={{ borderTop: "1px solid hsl(24 18% 10% / 0.14)" }}
                  />

                  {/* ÚLTIMA NOTA */}
                  <div>
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.24em] mb-3 pb-2 font-semibold"
                      style={{
                        color: "hsl(44 95% 38%)",
                        borderBottom: "1px solid hsl(44 95% 48% / 0.30)",
                      }}
                    >
                      Última nota
                    </p>
                    <Link to="/notas" className="group block">
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 inline-block mb-2"
                        style={{
                          background: "hsl(44 95% 48% / 0.12)",
                          border: "1px solid hsl(44 95% 48% / 0.35)",
                          color: "hsl(44 95% 32%)",
                        }}
                      >
                        {HOME_NOTE.category}
                      </span>
                      <p
                        className="font-serif text-sm font-medium leading-snug group-hover:underline decoration-primary underline-offset-2 transition-colors"
                        style={{ color: "hsl(24 18% 10% / 0.88)" }}
                      >
                        {HOME_NOTE.title}
                      </p>
                      {HOME_NOTE.date && (
                      <p
                        className="mt-1 font-mono text-[9px] uppercase tracking-wider"
                        style={{ color: "hsl(24 18% 10% / 0.48)" }}
                      >
                        {HOME_NOTE.date}
                      </p>
                      )}
                    </Link>
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div
            className="overflow-hidden py-3"
            style={{
              borderTop: "1px solid hsl(24 22% 9% / 0.14)",
              background: "hsl(34 24% 83%)",
            }}
          >
            <div className="animate-marquee flex whitespace-nowrap">
              {[
                ...profile.certifications,
                ...profile.heroChips,
                "MÁSTER EN COMUNICACIÓN PUBLICITARIA",
                "STUD-IA · EXPERIENCIA PROFESIONAL",
                ...profile.certifications,
                ...profile.heroChips,
              ].map((item, i) => (
                <span
                  key={i}
                  className="mx-6 font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: "hsl(24 18% 10% / 0.42)" }}
                >
                  ✦ {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            01 — SOBRE MÍ
            Directamente después del hero.
            Layout: texto izquierda · imagen placeholder derecha.
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(40 18% 96%)" }}
          aria-label="Sobre mí"
        >
          <div className="mx-auto max-w-7xl">
            <MotionWrapper>
              <div
                className="mb-10 flex items-baseline gap-4 pb-5"
                style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.16)" }}
              >
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: "hsl(44 95% 38%)" }}
                >
                  01
                </span>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: "hsl(24 18% 10% / 0.60)" }}
                >
                  Sobre mí
                </p>
              </div>
            </MotionWrapper>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
              {/* Texto */}
              <MotionWrapper>
                <div>
                  <h2
                    className="font-serif text-3xl font-medium leading-snug md:text-4xl"
                    style={{ color: "hsl(24 18% 10%)" }}
                  >
                    No suelo ser la persona
                    <br />
                    con la primera idea.
                  </h2>
                  <p
                    className="mt-5 font-sans text-base leading-relaxed"
                    style={{ color: "hsl(24 18% 10% / 0.72)" }}
                  >
                    Suelo ser la persona que quiere entender{" "}
                    <span
                      className="font-medium"
                      style={{
                        color: "hsl(24 18% 10%)",
                        borderBottom: "2px solid hsl(44 95% 48% / 0.65)",
                      }}
                    >
                      por qué esa idea debería funcionar.
                    </span>
                  </p>
                  <p
                    className="mt-5 font-sans text-base leading-relaxed"
                    style={{ color: "hsl(24 18% 10% / 0.82)" }}
                  >
                    Me interesa lo que pasa detrás de lo que se ve: los
                    mecanismos que mueven el comportamiento, los sistemas que
                    sostienen la comunicación, los vacíos que nadie ha rellenado
                    todavía.
                  </p>
                  <p
                    className="mt-4 font-sans text-sm leading-relaxed"
                    style={{ color: "hsl(24 18% 10% / 0.72)" }}
                  >
                    Aprendo de forma autónoma, organizo antes de actuar y me
                    tomo el tiempo de formular bien la pregunta. A veces eso es
                    más valioso que tener la respuesta rápida.
                  </p>
                  <Link
                    to="/sobre"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:opacity-80"
                    style={{ color: "hsl(44 95% 38%)" }}
                  >
                    Leer más <ArrowRight size={11} />
                  </Link>
                </div>
              </MotionWrapper>

              {/* Imagen — placeholder para reemplazar con foto real */}
              <MotionWrapper delay={0.08}>
                <div
                  className="relative aspect-[4/5] w-full max-w-sm overflow-hidden"
                  style={{ background: "hsl(34 16% 84%)" }}
                >
                  <div
                    className="relative overflow-hidden h-full"
                    style={{ minHeight: "300px" }}
                  >
                    <img
                      src={PROJECTS[0].coverImg}
                      alt="Talixea — plataforma de aprendizaje de idiomas"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      style={{ minHeight: "300px" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "hsl(24 22% 9% / 0.15)" }}
                    />
                  </div>
                  {/* Badge estado actual */}
                  <div
                    className="absolute bottom-0 right-0 px-5 py-4"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: "1px solid hsl(24 18% 10% / 0.14)",
                    }}
                  >
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "hsl(24 18% 10% / 0.40)" }}
                    >
                      Estado actual
                    </p>
                    <p
                      className="mt-0.5 font-sans text-sm font-medium"
                      style={{ color: "hsl(24 18% 10%)" }}
                    >
                      Máster en Comunicación Publicitaria
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            02 — FORMA DE TRABAJAR
            Bloque oscuro: proceso visual en 5 pasos.
            Interacción: hover revela ejemplo concreto.
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(24 22% 9%)" }}
          aria-label="Forma de trabajar"
        >
          <div className="mx-auto max-w-7xl">
            <MotionWrapper>
              <div
                className="mb-10 flex items-baseline justify-between pb-5"
                style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.10)" }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: "hsl(44 95% 48%)" }}
                  >
                    02
                  </span>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: "hsl(0 0% 100% / 0.55)" }}
                  >
                    Forma de trabajar
                  </p>
                </div>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: "hsl(0 0% 100% / 0.28)" }}
                >
                  Cómo suelo llegar hasta una respuesta
                </p>
              </div>
            </MotionWrapper>

            {/* Proceso de 5 pasos */}
            <div className="space-y-0">
              {PROCESS_STEPS.map((step, i) => (
                <ProcessStep
                  key={step.verb}
                  step={step}
                  index={i}
                  total={PROCESS_STEPS.length}
                />
              ))}
            </div>

            {/* Nota sutil al pie */}
            <MotionWrapper delay={0.3}>
              <p
                className="mt-8 font-mono text-[9px] uppercase tracking-widest text-right"
                style={{ color: "hsl(0 0% 100% / 0.22)" }}
              >
                No siempre ocurre en este orden.
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            03 — TRABAJO SELECCIONADO
            1 proyecto destacado grande + 2×2 en grid
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(38 22% 93%)" }}
          id="trabajo-preview"
          aria-label="Trabajo seleccionado"
        >
          <div className="mx-auto max-w-7xl">
            <MotionWrapper>
              <div
                className="mb-12 flex items-baseline justify-between pb-5"
                style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.14)" }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "hsl(24 18% 10% / 0.30)" }}
                  >
                    03
                  </span>
                  <h2
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: "hsl(24 18% 10% / 0.50)" }}
                  >
                    Trabajo seleccionado
                  </h2>
                </div>
                <Link
                  to="/trabajo"
                  className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest underline-offset-4 transition-colors hover:text-foreground md:flex"
                  style={{ color: "hsl(24 18% 10% / 0.45)" }}
                >
                  Ver todos <ArrowUpRight size={13} />
                </Link>
              </div>
            </MotionWrapper>

            {/* Section indicator with yellow */}
            <MotionWrapper>
              <div
                className="mb-1 h-[3px] w-12"
                style={{ background: "hsl(44 95% 48%)" }}
                aria-hidden="true"
              />
            </MotionWrapper>

            {/* ── 01 TALIXEA — proyecto destacado, composición grande ── */}
            <MotionWrapper>
              <div
                className="mb-px grid overflow-hidden transition-all hover:shadow-md lg:grid-cols-[1fr_1.2fr]"
                style={{ border: "1px solid hsl(24 18% 10% / 0.14)" }}
              >
                {/* Imagen */}
                <div
                  className="relative overflow-hidden"
                  style={{ minHeight: "300px" }}
                >
                  <img
                    src={PROJECTS[0].coverImg}
                    alt="Talixea — plataforma de aprendizaje de idiomas"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    style={{ minHeight: "300px" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "hsl(24 18% 10% / 0.12)" }}
                  />
                  <span
                    className="absolute left-4 top-4 font-mono text-[10px] tracking-widest"
                    style={{ color: "hsl(0 0% 100% / 0.65)" }}
                  >
                    01
                  </span>
                </div>

                {/* Contenido */}
                <div
                  className="flex flex-col justify-between p-8 lg:p-10"
                  style={{ background: "hsl(40 18% 96%)" }}
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                        style={{
                          border: "1px solid hsl(24 18% 10% / 0.22)",
                          color: "hsl(24 18% 10% / 0.55)",
                        }}
                      >
                        {PROJECTS[0].discipline}
                      </span>
                      <span
                        className="font-mono text-[9px]"
                        style={{ color: "hsl(24 18% 10% / 0.32)" }}
                      >
                        {PROJECTS[0].year}
                      </span>
                    </div>

                    <h3
                      className="font-serif font-medium leading-tight"
                      style={{
                        fontSize: "clamp(2.2rem,4vw,3rem)",
                        color: "hsl(24 18% 10%)",
                      }}
                    >
                      {PROJECTS[0].title}
                    </h3>

                    <SecondReading
                      first={PROJECTS[0].tagline}
                      second={PROJECTS[0].taglineHover}
                      dark={false}
                    />

                    <p
                      className="mt-4 font-sans text-sm leading-relaxed"
                      style={{ color: "hsl(24 22% 9% / 0.68)" }}
                    >
                      {PROJECTS[0].description}
                    </p>

                    {/* Territorio */}
                    <p
                      className="mt-3 font-mono text-[9px] uppercase tracking-wide"
                      style={{ color: "hsl(24 18% 10% / 0.35)" }}
                    >
                      {PROJECTS[0].territory}
                    </p>

                    {/* Cadena */}
                    <div className="mt-4 flex flex-wrap items-center gap-0">
                      {PROJECTS[0].chain.map((step, i) => (
                        <span key={step} className="flex items-center">
                          <span
                            className="font-mono text-[9px] uppercase tracking-wider"
                            style={{ color: "hsl(24 18% 10% / 0.38)" }}
                          >
                            {step}
                          </span>
                          {i < PROJECTS[0].chain.length - 1 && (
                            <span
                              className="mx-1.5 font-mono text-[9px] font-bold"
                              style={{ color: "hsl(44 95% 48%)" }}
                            >
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      to="/trabajo"
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-foreground"
                      style={{ color: "hsl(24 18% 10% / 0.50)" }}
                    >
                      Ver proyecto <ArrowRight size={12} />
                    </Link>
                    <div
                      className="h-px flex-1"
                      style={{ background: "hsl(24 18% 10% / 0.10)" }}
                    />
                    <span
                      style={{ color: "hsl(44 95% 48%)" }}
                      className="font-mono text-xs"
                    >
                      ✦
                    </span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* ── Fila 1: IBERIA + WARRIORS ARENA ── */}
            <div
              className="grid gap-px sm:grid-cols-2 mb-px"
              style={{ background: "hsl(34 16% 82%)" }}
            >
              {/* 02 IBERIA — oscuro */}
              <MotionWrapper delay={0.05}>
                <div
                  className="group relative flex flex-col justify-between overflow-hidden p-8 transition-colors"
                  style={{ background: "hsl(24 22% 9%)", minHeight: "340px" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-18"
                    style={{
                      backgroundImage: `url(${PROJECTS[1].coverImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className="font-mono text-[9px] tracking-widest"
                        style={{ color: "hsl(0 0% 100% / 0.28)" }}
                      >
                        02
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                        style={{
                          border: "1px solid hsl(0 0% 100% / 0.14)",
                          color: "hsl(0 0% 100% / 0.42)",
                        }}
                      >
                        {PROJECTS[1].discipline}
                      </span>
                      <span
                        className="font-mono text-[9px] ml-auto"
                        style={{ color: "hsl(0 0% 100% / 0.28)" }}
                      >
                        {PROJECTS[1].year}
                      </span>
                    </div>
                    <h3
                      className="font-serif font-medium leading-tight"
                      style={{
                        fontSize: "clamp(1.8rem,3vw,2.4rem)",
                        color: "hsl(36 18% 92%)",
                      }}
                    >
                      {PROJECTS[1].title}
                    </h3>
                    <SecondReading
                      first={PROJECTS[1].tagline}
                      second={PROJECTS[1].taglineHover}
                      dark={true}
                    />
                    <p
                      className="mt-4 font-sans text-sm leading-relaxed"
                      style={{ color: "hsl(0 0% 100% / 0.48)" }}
                    >
                      {PROJECTS[1].description}
                    </p>
                    <p
                      className="mt-3 font-mono text-[9px] uppercase tracking-wide"
                      style={{ color: "hsl(0 0% 100% / 0.25)" }}
                    >
                      {PROJECTS[1].territory}
                    </p>
                  </div>
                  <Link
                    to="/trabajo"
                    className="relative z-10 mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-white"
                    style={{ color: "hsl(0 0% 100% / 0.38)" }}
                  >
                    Ver proyecto <ArrowRight size={12} />
                  </Link>
                </div>
              </MotionWrapper>

              {/* 03 WARRIORS ARENA — claro con imagen superior */}
              <MotionWrapper delay={0.1}>
                <div
                  className="group flex flex-col overflow-hidden"
                  style={{ background: "hsl(40 18% 96%)", minHeight: "340px" }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "150px" }}
                  >
                    <img
                      src={PROJECTS[2].coverImg}
                      alt="Warriors Arena"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "hsl(24 22% 9% / 0.20)" }}
                    />
                    <span
                      className="absolute left-4 top-4 font-mono text-[10px] tracking-widest"
                      style={{ color: "hsl(0 0% 100% / 0.65)" }}
                    >
                      03
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span
                          className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                          style={{
                            border: "1px solid hsl(24 18% 10% / 0.22)",
                            color: "hsl(24 18% 10% / 0.52)",
                          }}
                        >
                          {PROJECTS[2].discipline}
                        </span>
                        <span
                          className="font-mono text-[9px]"
                          style={{ color: "hsl(24 18% 10% / 0.32)" }}
                        >
                          {PROJECTS[2].year}
                        </span>
                      </div>
                      <h3
                        className="font-serif text-2xl font-medium leading-tight md:text-3xl"
                        style={{ color: "hsl(24 18% 10%)" }}
                      >
                        {PROJECTS[2].title}
                      </h3>
                      <SecondReading
                        first={PROJECTS[2].tagline}
                        second={PROJECTS[2].taglineHover}
                        dark={false}
                      />
                      <p
                        className="mt-2 font-mono text-[9px] uppercase tracking-wide"
                        style={{ color: "hsl(24 18% 10% / 0.32)" }}
                      >
                        {PROJECTS[2].territory}
                      </p>
                    </div>
                    <Link
                      to="/trabajo"
                      className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-foreground"
                      style={{ color: "hsl(24 18% 10% / 0.42)" }}
                    >
                      Ver proyecto <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            {/* ── Fila 2: RYANAIR + PROYECTO DE MARCA ── */}
            <div
              className="grid gap-px sm:grid-cols-2"
              style={{ background: "hsl(34 16% 82%)" }}
            >
              {/* 04 RYANAIR */}
              <MotionWrapper delay={0.08}>
                <div
                  className="group flex flex-col justify-between p-7 transition-colors"
                  style={{ background: "hsl(38 22% 93%)", minHeight: "220px" }}
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="font-mono text-[9px]"
                        style={{ color: "hsl(24 18% 10% / 0.28)" }}
                      >
                        04
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                        style={{
                          border: "1px solid hsl(24 18% 10% / 0.22)",
                          color: "hsl(24 18% 10% / 0.50)",
                        }}
                      >
                        {PROJECTS[3].discipline}
                      </span>
                      <span
                        className="font-mono text-[9px] ml-auto"
                        style={{ color: "hsl(24 18% 10% / 0.30)" }}
                      >
                        {PROJECTS[3].year}
                      </span>
                    </div>
                    <h3
                      className="font-serif text-xl font-medium leading-tight md:text-2xl"
                      style={{ color: "hsl(24 18% 10%)" }}
                    >
                      {PROJECTS[3].title}
                    </h3>
                    <SecondReading
                      first={PROJECTS[3].tagline}
                      second={PROJECTS[3].taglineHover}
                      dark={false}
                    />
                    <p
                      className="mt-2 font-sans text-sm leading-relaxed"
                      style={{ color: "hsl(24 22% 9% / 0.65)" }}
                    >
                      {PROJECTS[3].description}
                    </p>
                    <p
                      className="mt-2 font-mono text-[9px] uppercase tracking-wide"
                      style={{ color: "hsl(24 18% 10% / 0.30)" }}
                    >
                      {PROJECTS[3].territory}
                    </p>
                  </div>
                  <Link
                    to="/trabajo"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-foreground"
                    style={{ color: "hsl(24 18% 10% / 0.38)" }}
                  >
                    Ver proyecto <ArrowRight size={12} />
                  </Link>
                </div>
              </MotionWrapper>

              {/* 05 PROYECTO DE MARCA — oscuro */}
              <MotionWrapper delay={0.12}>
                <div
                  className="group relative flex flex-col justify-between overflow-hidden p-7"
                  style={{ background: "hsl(25 24% 12%)", minHeight: "220px" }}
                >
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="font-mono text-[9px]"
                        style={{ color: "hsl(0 0% 100% / 0.25)" }}
                      >
                        05
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                        style={{
                          border: "1px solid hsl(0 0% 100% / 0.14)",
                          color: "hsl(0 0% 100% / 0.38)",
                        }}
                      >
                        {PROJECTS[4].discipline}
                      </span>
                      <span
                        className="font-mono text-[9px] ml-auto"
                        style={{ color: "hsl(0 0% 100% / 0.25)" }}
                      >
                        {PROJECTS[4].year}
                      </span>
                    </div>
                    <h3
                      className="font-serif text-xl font-medium leading-tight md:text-2xl"
                      style={{ color: "hsl(36 18% 90%)" }}
                    >
                      {PROJECTS[4].title}
                    </h3>
                    <SecondReading
                      first={PROJECTS[4].tagline}
                      second={PROJECTS[4].taglineHover}
                      dark={true}
                    />
                    <p
                      className="mt-2 font-sans text-sm leading-relaxed"
                      style={{ color: "hsl(0 0% 100% / 0.45)" }}
                    >
                      {PROJECTS[4].description}
                    </p>
                    <p
                      className="mt-2 font-mono text-[9px] uppercase tracking-wide"
                      style={{ color: "hsl(0 0% 100% / 0.22)" }}
                    >
                      {PROJECTS[4].territory}
                    </p>
                  </div>
                  <Link
                    to="/trabajo"
                    className="relative z-10 mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-white"
                    style={{ color: "hsl(0 0% 100% / 0.35)" }}
                  >
                    Ver proyecto <ArrowRight size={12} />
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            {/* Ver todos — mobile */}
            <MotionWrapper delay={0.1} className="mt-5 md:hidden">
              <Link
                to="/trabajo"
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-foreground"
                style={{ color: "hsl(24 18% 10% / 0.42)" }}
              >
                Ver todos los proyectos <ArrowRight size={11} />
              </Link>
            </MotionWrapper>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            04 — NOTAS
            Archivo editorial · carrusel horizontal.
        ══════════════════════════════════════════════════════ */}
        <section
          className="py-16 md:py-20 overflow-hidden"
          style={{ background: "hsl(36 28% 89%)" }}
          id="notas-preview"
          aria-label="Notas"
        >
          <div className="px-8">
            <div className="mx-auto max-w-7xl">
              <MotionWrapper>
                <div
                  className="mb-8 flex items-baseline justify-between pb-5"
                  style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.16)" }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{ color: "hsl(44 95% 38%)" }}
                    >
                      04
                    </span>
                    <div>
                      <p
                        className="font-mono text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: "hsl(24 18% 10% / 0.60)" }}
                      >
                        Notas
                      </p>
                      <h2
                        className="mt-0.5 font-serif text-2xl font-medium"
                        style={{ color: "hsl(24 18% 10%)" }}
                      >
                        Observaciones en curso
                      </h2>
                    </div>
                  </div>
                  <Link
                    to="/notas"
                    className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors hover:opacity-80 md:flex"
                    style={{ color: "hsl(44 95% 38%)" }}
                  >
                    Ver todas <ArrowUpRight size={13} />
                  </Link>
                </div>
              </MotionWrapper>
            </div>
          </div>

          {/* Carrusel horizontal — permite scroll lateral nativo */}
          <MotionWrapper>
            <div
              className="flex gap-4 overflow-x-auto pb-4 px-8 scrollbar-hide"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {HOME_NOTES.map((note, i) => (
                <Link
                  key={note.id}
                  to="/notas"
                  className="group shrink-0 flex flex-col justify-between p-6 transition-shadow hover:shadow-md"
                  style={{
                    background: "hsl(40 18% 96%)",
                    width: "clamp(280px, 36vw, 360px)",
                    scrollSnapAlign: "start",
                    border: "1px solid hsl(24 22% 9% / 0.12)",
                    minHeight: "240px",
                  }}
                >
                  {/* Header de tarjeta */}
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 shrink-0"
                        style={{
                          background:
                            i === 0 ? "hsl(44 95% 48% / 0.15)" : "transparent",
                          border:
                            i === 0
                              ? "1px solid hsl(44 95% 48% / 0.40)"
                              : "1px solid hsl(24 18% 10% / 0.18)",
                          color:
                            i === 0
                              ? "hsl(44 95% 30%)"
                              : "hsl(24 18% 10% / 0.58)",
                        }}
                      >
                        {note.category}
                      </span>
                      <span
                        className="font-mono text-[9px] shrink-0"
                        style={{ color: "hsl(24 18% 10% / 0.42)" }}
                      >
                        {note.date}
                      </span>
                    </div>

                    <h4
                      className="font-serif text-base font-medium leading-snug group-hover:underline decoration-primary underline-offset-2"
                      style={{ color: "hsl(24 18% 10%)" }}
                    >
                      {note.title}
                    </h4>

                    <p
                      className="mt-3 font-sans text-xs leading-relaxed line-clamp-3"
                      style={{ color: "hsl(24 22% 9% / 0.68)" }}
                    >
                      {note.excerpt}
                    </p>
                  </div>

                  {/* Footer de tarjeta */}
                  <div className="mt-5 flex items-center justify-between">
                    <div
                      className="pl-2.5 font-mono text-[9px]"
                      style={{
                        borderLeft: "2px solid hsl(44 95% 48% / 0.50)",
                        color: "hsl(24 18% 10% / 0.52)",
                      }}
                    >
                      {note.annotation}
                    </div>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "hsl(44 95% 38%)" }}
                    >
                      Leer →
                    </span>
                  </div>
                </Link>
              ))}

              {/* Tarjeta-CTA al final del carrusel */}
              <Link
                to="/notas"
                className="group shrink-0 flex flex-col items-center justify-center gap-3 p-6 transition-colors"
                style={{
                  background: "transparent",
                  border: "1px dashed hsl(24 18% 10% / 0.22)",
                  width: "clamp(180px, 22vw, 220px)",
                  scrollSnapAlign: "start",
                  minHeight: "240px",
                }}
              >
                <span
                  className="font-mono text-[9px] uppercase tracking-widest text-center"
                  style={{ color: "hsl(24 18% 10% / 0.45)" }}
                >
                  Todas las notas
                </span>
                <span
                  className="font-serif text-2xl"
                  style={{ color: "hsl(44 95% 48%)" }}
                >
                  →
                </span>
              </Link>
            </div>
          </MotionWrapper>

          {/* Indicador de scroll — visible sólo en mobile */}
          <div className="mt-3 px-8 md:hidden">
            <p
              className="font-mono text-[9px] uppercase tracking-widest"
              style={{ color: "hsl(24 18% 10% / 0.35)" }}
            >
              ← desliza →
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            05 — FORMACIÓN · CREDENCIALES
            Bloque oscuro con Máster en curso.
            Idiomas NO aparecen aquí (ya están en el hero).
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(24 22% 9%)" }}
          id="credenciales"
          aria-label="Formación y credenciales"
        >
          <div className="mx-auto max-w-7xl">
            <MotionWrapper>
              <div
                className="mb-10 flex items-baseline gap-4 pb-5"
                style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.12)" }}
              >
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: "hsl(44 95% 48%)" }}
                >
                  05
                </span>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: "hsl(0 0% 100% / 0.55)" }}
                >
                  Formación · Credenciales
                </p>
              </div>
            </MotionWrapper>

            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
              {/* Statement lateral — sin idiomas (ya aparecen en el hero) */}
              <MotionWrapper>
                <div className="lg:pr-10">
                  <h2
                    className="font-serif text-3xl font-medium leading-snug md:text-4xl"
                    style={{ color: "hsl(36 18% 92%)" }}
                  >
                    Formación académica
                    <br />
                    <span
                      className="italic"
                      style={{ color: "hsl(36 18% 92% / 0.42)" }}
                    >
                      con trabajo propio.
                    </span>
                  </h2>
                  <p
                    className="mt-5 font-sans text-sm leading-relaxed"
                    style={{ color: "hsl(0 0% 100% / 0.58)" }}
                  >
                    La nota importa. Pero importa más lo que se construye fuera
                    del aula. Talixea nació durante la carrera.
                  </p>

                  {/* Hitos editoriales */}
                  <div className="mt-10 space-y-4">
                    {[
                      {
                        label: "En curso",
                        val: "Máster en Comunicación Publicitaria",
                      },
                      { label: "Grado", val: "Publicidad y RRPP · 8,62" },
                      { label: "Experiencia", val: "Stud-IA" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="pl-4"
                        style={{
                          borderLeft: "2px solid hsl(44 95% 48% / 0.50)",
                        }}
                      >
                        <p
                          className="font-mono text-[9px] uppercase tracking-widest mb-0.5"
                          style={{ color: "hsl(44 95% 48% / 0.65)" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="font-sans text-sm font-medium"
                          style={{ color: "hsl(36 18% 92% / 0.88)" }}
                        >
                          {item.val}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionWrapper>

              {/* Timeline de credenciales */}
              <MotionWrapper delay={0.08}>
                <div>
                  <div className="space-y-0">
                    {CREDENTIALS.map((c, i) => (
                      <div
                        key={c.org + c.period}
                        className="grid grid-cols-[auto_1fr] gap-4 py-4 transition-colors hover:bg-white/[0.03]"
                        style={{
                          borderBottom:
                            i < CREDENTIALS.length - 1
                              ? "1px solid hsl(0 0% 100% / 0.08)"
                              : "none",
                        }}
                      >
                        {/* Badge tipo */}
                        <span
                          className={cx(
                            "mt-0.5 shrink-0 self-start font-mono text-[9px] tracking-widest px-1.5 py-0.5",
                            c.type === "AWD" ? "text-primary" : "text-white/30",
                          )}
                          style={{
                            background:
                              c.type === "AWD"
                                ? "hsl(44 95% 48% / 0.18)"
                                : "transparent",
                            border:
                              c.type === "AWD"
                                ? "none"
                                : "1px solid hsl(0 0% 100% / 0.12)",
                          }}
                        >
                          {c.type}
                        </span>

                        {/* Info */}
                        <div>
                          <div className="flex items-baseline justify-between gap-3">
                            <p
                              className="font-sans text-sm font-medium"
                              style={{ color: "hsl(36 18% 92% / 0.88)" }}
                            >
                              {c.org}
                            </p>
                            <span
                              className="shrink-0 font-mono text-[9px]"
                              style={{ color: "hsl(0 0% 100% / 0.28)" }}
                            >
                              {c.period}
                            </span>
                          </div>
                          <p
                            className="font-mono text-[10px] mt-0.5"
                            style={{ color: "hsl(0 0% 100% / 0.42)" }}
                          >
                            {c.role}
                          </p>
                          <p
                            className="mt-1 font-mono text-[9px]"
                            style={{ color: "hsl(0 0% 100% / 0.28)" }}
                          >
                            {c.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/cv"
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-white px-5 py-2.5"
                      style={{
                        border: "1px solid hsl(0 0% 100% / 0.20)",
                        color: "hsl(0 0% 100% / 0.48)",
                      }}
                    >
                      CV completo <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            06 — CONTACTO
            Sección final de contacto.
        ══════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-16 md:py-20"
          style={{ background: "hsl(40 18% 96%)" }}
          id="contacto"
          aria-label="Contacto"
        >
          <div className="mx-auto max-w-7xl">
            <MotionWrapper>
              <div
                className="mb-10 flex items-baseline gap-4 pb-5"
                style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.16)" }}
              >
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: "hsl(44 95% 38%)" }}
                >
                  06
                </span>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: "hsl(24 18% 10% / 0.60)" }}
                >
                  Contacto
                </p>
              </div>
            </MotionWrapper>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
              {/* Texto */}
              <MotionWrapper>
                <h2
                  className="font-serif text-3xl font-medium leading-snug md:text-4xl"
                  style={{ color: "hsl(24 18% 10%)" }}
                >
                  Siempre abierta a conversaciones,
                  <br />
                  <span
                    style={{
                      color: "hsl(24 18% 10% / 0.42)",
                      fontStyle: "italic",
                    }}
                  >
                    proyectos y oportunidades.
                  </span>
                </h2>
                <p
                  className="mt-5 font-sans text-base leading-relaxed max-w-md"
                  style={{ color: "hsl(24 22% 9% / 0.75)" }}
                >
                  Trabajo en estrategia y comunicación publicitaria. Si tienes
                  un proyecto que merece una segunda lectura, hablamos.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/cv"
                    className="inline-flex items-center gap-2 px-7 py-3 font-sans text-sm font-semibold transition-all hover:opacity-90"
                    style={{
                      background: "hsl(44 95% 48%)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Ver CV <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/cv"
                    className="inline-flex items-center gap-2 px-7 py-3 font-sans text-sm font-medium transition-colors"
                    style={{
                      border: "1px solid hsl(24 18% 10% / 0.38)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Ver CV
                  </Link>
                </div>
              </MotionWrapper>

              {/* Datos de contacto estructurados */}
              <MotionWrapper delay={0.08}>
                <div className="space-y-0">
                  {[
                    {
                      label: "Email",
                      val: "TODO: email profesional",
                      href: "#contacto",
                    },
                    {
                      label: "LinkedIn",
                      val: "TODO: perfil profesional",
                      href: "#contacto",
                    },
                    {
                      label: "CV",
                      val: "CV navegable",
                      href: "/cv",
                    },
                  ].filter((item) => !isPendingContent(item.val)).map((item, i) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center justify-between py-4 transition-colors"
                      style={{
                        borderBottom: "1px solid hsl(24 18% 10% / 0.12)",
                        borderTop:
                          i === 0 ? "1px solid hsl(24 18% 10% / 0.12)" : "none",
                      }}
                    >
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest"
                        style={{ color: "hsl(24 18% 10% / 0.38)" }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="font-sans text-sm font-medium transition-colors group-hover:underline decoration-primary underline-offset-2"
                        style={{ color: "hsl(24 18% 10% / 0.72)" }}
                      >
                        {item.val} <ArrowUpRight size={12} className="inline" />
                      </span>
                    </a>
                  ))}
                </div>

                {/* CTA amarillo — marca */}
                <div
                  className="mt-8 p-6"
                  style={{
                    background: "hsl(44 95% 48% / 0.10)",
                    border: "1px solid hsl(44 95% 48% / 0.35)",
                  }}
                >
                  <p
                    className="font-mono text-[9px] uppercase tracking-[0.22em] mb-2"
                    style={{ color: "hsl(24 18% 10% / 0.42)" }}
                  >
                    Disponible para
                  </p>
                  <p
                    className="font-serif text-base font-medium"
                    style={{ color: "hsl(24 18% 10%)" }}
                  >
                    Proyectos, colaboraciones y oportunidades en estrategia y
                    comunicación publicitaria.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ─── ProcessStep — subcomponente interactivo ──────────────────────────────
function ProcessStep({
  step,
  index,
  total,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionWrapper delay={index * 0.06}>
      <div
        className="group grid cursor-default py-5 transition-colors"
        style={{
          borderBottom:
            index < total - 1 ? "1px solid hsl(0 0% 100% / 0.08)" : "none",
          background: hovered ? "hsl(0 0% 100% / 0.03)" : "transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Layout: num · verbo · pregunta · ejemplo */}
        <div className="grid grid-cols-[2.5rem_1fr] gap-4 lg:grid-cols-[2.5rem_12rem_1fr_1fr]">
          {/* Número */}
          <span
            className="font-mono text-[10px] pt-0.5"
            style={{ color: "hsl(44 95% 48% / 0.55)" }}
          >
            {step.num}
          </span>

          {/* Verbo */}
          <p
            className="font-serif text-lg font-medium leading-tight md:text-xl transition-colors"
            style={{ color: hovered ? "hsl(44 95% 68%)" : "hsl(36 18% 92%)" }}
          >
            {step.verb}
          </p>

          {/* Pregunta / descripción */}
          <p
            className="font-mono text-xs leading-relaxed hidden lg:block"
            style={{ color: "hsl(0 0% 100% / 0.52)" }}
          >
            {step.question}
          </p>

          {/* Ejemplo — aparece en hover */}
          <p
            className="font-sans text-xs leading-relaxed hidden lg:block transition-all duration-200"
            style={{
              color: hovered ? "hsl(0 0% 100% / 0.60)" : "hsl(0 0% 100% / 0.0)",
              paddingLeft: hovered ? "0.75rem" : "0",
              borderLeft: hovered
                ? "1px solid hsl(44 95% 48% / 0.35)"
                : "1px solid transparent",
            }}
          >
            {step.example}
          </p>
        </div>

        {/* Mobile: pregunta + ejemplo */}
        <div className="col-span-2 mt-2 pl-[calc(2.5rem+1rem)] lg:hidden">
          <p
            className="font-mono text-[10px] leading-relaxed"
            style={{ color: "hsl(0 0% 100% / 0.50)" }}
          >
            {step.question}
          </p>
          {hovered && (
            <p
              className="mt-2 font-sans text-xs leading-relaxed pl-3"
              style={{
                borderLeft: "1px solid hsl(44 95% 48% / 0.35)",
                color: "hsl(0 0% 100% / 0.52)",
              }}
            >
              {step.example}
            </p>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
}

// ─── Segunda Lectura — subcomponente unificado ──────────────────────────────
function SecondReading({
  first,
  second,
  dark,
}: {
  first: string;
  second: string;
  dark: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const mutedColor = dark ? "hsl(0 0% 100% / 0.40)" : "hsl(24 18% 10% / 0.50)";
  const revealColor = dark ? "hsl(36 18% 92%)" : "hsl(24 18% 10%)";

  return (
    <div
      className="mt-4 cursor-default select-none min-h-[1.5rem]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <p
          className="font-mono text-xs transition-opacity duration-200"
          style={{ color: mutedColor }}
        >
          {first}
        </p>
      ) : (
        <p
          className="font-mono text-xs font-medium transition-opacity duration-200 pl-3"
          style={{
            color: revealColor,
            borderLeft: "2px solid hsl(44 95% 48%)",
          }}
        >
          {second}
        </p>
      )}
    </div>
  );
}
