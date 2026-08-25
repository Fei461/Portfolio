import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MagnifyingGlass,
  X,
  ArrowRight,
} from "@phosphor-icons/react";
import { SeoHead } from "@/components/seo-head";
import { MotionWrapper } from "@/components/motion-wrapper";
import { noteCategories, notes, type Note } from "@/data/notes";

// ─── CONSTANTES ───────────────────────────────────────────────────────────────

const ALL_CATEGORIES = ["Todo", ...noteCategories];

const CATEGORY_COUNTS = ALL_CATEGORIES.reduce<Record<string, number>>(
  (acc, cat) => {
    if (cat === "Todo") {
      acc[cat] = notes.length;
    } else {
      acc[cat] = notes.filter((n) => n.category === cat).length;
    }
    return acc;
  },
  {},
);

// ─── SUBCOMPONENTES ───────────────────────────────────────────────────────────

// Lectura estimada en texto
function ReadTime({ mins }: { mins: number }) {
  if (mins <= 0) return null;

  return (
    <span
      className="font-mono text-[9px] uppercase tracking-widest"
      style={{ color: "hsl(24 18% 10% / 0.32)" }}
    >
      {mins} min
    </span>
  );
}

// Fecha formateada
function NoteDate({ raw }: { raw: string }) {
  const [year, month] = raw.split("-");
  const monthNames = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  const label = month ? `${monthNames[parseInt(month, 10) - 1]} ${year}` : year;
  return (
    <span
      className="font-mono text-[9px] uppercase tracking-widest"
      style={{ color: "hsl(24 18% 10% / 0.28)" }}
    >
      {label}
    </span>
  );
}

// Chip de categoría
function CategoryChip({
  label,
  active,
  count,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 transition-all duration-150"
      style={{
        padding: "5px 10px",
        fontFamily: "var(--font-mono)",
        fontSize: "9px",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        background: active ? "hsl(44 95% 48%)" : "transparent",
        border: `1px solid ${active ? "hsl(44 95% 48%)" : "hsl(24 18% 10% / 0.18)"}`,
        color: active ? "hsl(24 18% 10%)" : "hsl(24 18% 10% / 0.52)",
        cursor: "pointer",
      }}
    >
      {label}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "8px",
          opacity: 0.6,
        }}
      >
        {count}
      </span>
    </button>
  );
}

// ─── TARJETA DESTACADA (featured) ────────────────────────────────────────────
function FeaturedNoteCard({ note }: { note: Note }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative overflow-hidden transition-all duration-200 cursor-default"
      style={{
        background: hovered ? "hsl(25 20% 10%)" : "hsl(36 28% 91%)",
        border: `1px solid ${hovered ? "hsl(0 0% 100% / 0.06)" : "hsl(24 18% 10% / 0.15)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Acento izquierdo */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] transition-opacity duration-200"
        style={{ background: "hsl(44 95% 48%)", opacity: hovered ? 1 : 0.6 }}
        aria-hidden="true"
      />

      <div className="pl-8 pr-6 pt-7 pb-7 md:pl-10 md:pr-8 md:pt-9 md:pb-9">
        {/* Eyebrow row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className="font-mono text-[8px] uppercase tracking-widest px-2 py-0.5"
            style={{
              background: "hsl(44 95% 48%)",
              color: "hsl(24 18% 10%)",
            }}
          >
            Destacada
          </span>
          <span
            className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
            style={{
              border: `1px solid ${hovered ? "hsl(0 0% 100% / 0.15)" : "hsl(24 18% 10% / 0.18)"}`,
              color: hovered
                ? "hsl(0 0% 100% / 0.55)"
                : "hsl(24 18% 10% / 0.55)",
            }}
          >
            {note.category}
          </span>
          <NoteDate raw={note.date} />
          <ReadTime mins={note.readingTime} />
        </div>

        {/* Título */}
        <h2
          className="font-serif font-medium leading-snug mb-4"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.85rem)",
            color: hovered ? "hsl(36 18% 92%)" : "hsl(24 18% 10%)",
          }}
        >
          {note.title}
        </h2>

        {/* Excerpt */}
        <p
          className="font-sans text-sm leading-relaxed max-w-2xl"
          style={{
            color: hovered ? "hsl(0 0% 100% / 0.60)" : "hsl(24 18% 10% / 0.65)",
          }}
        >
          {note.excerpt}
        </p>

        {/* Anotación marginal */}
        <div
          className="mt-6 flex items-center justify-between gap-4 pt-5"
          style={{
            borderTop: `1px solid ${hovered ? "hsl(0 0% 100% / 0.08)" : "hsl(24 18% 10% / 0.10)"}`,
          }}
        >
          <p
            className="font-mono text-[9px] italic"
            style={{
              color: hovered
                ? "hsl(44 95% 58% / 0.80)"
                : "hsl(24 18% 10% / 0.38)",
            }}
          >
            {note.annotation}
          </p>
          <a
            href="#archivo"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70 shrink-0"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: hovered ? "hsl(44 95% 58%)" : "hsl(44 95% 30%)",
            }}
            aria-label={`Ficha de ${note.title} en preparación`}
          >
            En preparación <ArrowUpRight size={10} />
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── TARJETA GRANDE ───────────────────────────────────────────────────────────
function LargeNoteCard({ note, delay = 0 }: { note: Note; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionWrapper delay={delay}>
      <article
        className="relative h-full cursor-default transition-all duration-200"
        style={{
          background: hovered ? "hsl(44 95% 48% / 0.05)" : "hsl(40 20% 97%)",
          border: `1px solid ${hovered ? "hsl(44 95% 48% / 0.40)" : "hsl(24 18% 10% / 0.10)"}`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Banda de categoría superior */}
        <div
          className="px-5 py-2.5 flex items-center justify-between"
          style={{
            borderBottom: `1px solid ${hovered ? "hsl(44 95% 48% / 0.22)" : "hsl(24 18% 10% / 0.08)"}`,
            background: hovered ? "hsl(44 95% 48% / 0.08)" : "hsl(38 22% 93%)",
          }}
        >
          <span
            className="font-mono text-[9px] uppercase tracking-widest"
            style={{
              color: hovered ? "hsl(44 95% 30%)" : "hsl(24 18% 10% / 0.45)",
            }}
          >
            {note.category}
          </span>
          <div className="flex items-center gap-2">
            <NoteDate raw={note.date} />
            <span style={{ color: "hsl(24 18% 10% / 0.18)", fontSize: "10px" }}>
              ·
            </span>
            <ReadTime mins={note.readingTime} />
          </div>
        </div>

        <div className="p-5">
          <h3
            className="font-serif text-base font-medium leading-snug mb-3 transition-colors duration-200"
            style={{
              color: hovered ? "hsl(24 18% 10%)" : "hsl(24 18% 10% / 0.88)",
            }}
          >
            {note.title}
          </h3>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "hsl(24 18% 10% / 0.60)" }}
          >
            {note.excerpt}
          </p>

          <div
            className="mt-4 pt-4 flex items-center justify-between gap-3"
            style={{
              borderTop: `1px solid ${hovered ? "hsl(44 95% 48% / 0.16)" : "hsl(24 18% 10% / 0.07)"}`,
            }}
          >
            <p
              className="font-mono text-[9px] italic transition-opacity duration-200"
              style={{
                color: "hsl(24 18% 10% / 0.35)",
                opacity: hovered ? 1 : 0.6,
              }}
            >
              {note.annotation}
            </p>
            <a
              href="#archivo"
              className="shrink-0 transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "hsl(44 95% 30%)",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
              aria-label="Ficha en preparación"
            >
              Pendiente <ArrowUpRight size={9} />
            </a>
          </div>
        </div>
      </article>
    </MotionWrapper>
  );
}

// ─── TARJETA MEDIANA ──────────────────────────────────────────────────────────
function MediumNoteCard({ note, delay = 0 }: { note: Note; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionWrapper delay={delay}>
      <article
        className="group relative cursor-default transition-all duration-200 py-5"
        style={{
          borderBottom: "1px solid hsl(24 18% 10% / 0.09)",
          borderLeft: `2px solid ${hovered ? "hsl(44 95% 48%)" : "transparent"}`,
          paddingLeft: hovered ? "1rem" : "0",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-start gap-3 mb-2.5">
          <span
            className="font-mono text-[9px] uppercase tracking-widest shrink-0 mt-[2px]"
            style={{
              color: hovered ? "hsl(44 95% 30%)" : "hsl(24 18% 10% / 0.40)",
              background: hovered ? "hsl(44 95% 48% / 0.10)" : "transparent",
              padding: hovered ? "2px 6px" : "0",
              border: hovered ? "1px solid hsl(44 95% 48% / 0.28)" : "none",
              transition: "all 0.15s ease",
            }}
          >
            {note.category}
          </span>
          <div className="flex items-center gap-2">
            <NoteDate raw={note.date} />
            <ReadTime mins={note.readingTime} />
          </div>
        </div>

        <h3
          className="font-serif text-sm font-medium leading-snug mb-2 transition-colors duration-150"
          style={{
            color: hovered ? "hsl(24 18% 10%)" : "hsl(24 18% 10% / 0.80)",
          }}
        >
          {note.title}
        </h3>

        <p
          className="font-sans text-xs leading-relaxed transition-all duration-150"
          style={{
            color: "hsl(24 18% 10% / 0.55)",
            maxHeight: hovered ? "120px" : "48px",
            overflow: "hidden",
          }}
        >
          {note.excerpt}
        </p>

        <div
          className="mt-2.5 flex items-center justify-between gap-3 transition-opacity duration-200"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <p
            className="font-mono text-[8px] italic"
            style={{ color: "hsl(24 18% 10% / 0.35)" }}
          >
            {note.annotation}
          </p>
          <a
            href="#archivo"
            className="shrink-0 inline-flex items-center gap-1 hover:opacity-70"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "hsl(44 95% 30%)",
            }}
            aria-label="Ficha en preparación"
          >
            Pendiente <ArrowUpRight size={9} />
          </a>
        </div>
      </article>
    </MotionWrapper>
  );
}

// ─── TARJETA PEQUEÑA ──────────────────────────────────────────────────────────
function SmallNoteCard({ note, delay = 0 }: { note: Note; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionWrapper delay={delay}>
      <article
        className="cursor-default transition-all duration-150 py-3.5 flex items-start gap-4"
        style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.07)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Dot de categoría */}
        <div className="shrink-0 mt-[5px]">
          <div
            className="h-[7px] w-[7px] rounded-full transition-all duration-150"
            style={{
              background: hovered
                ? "hsl(44 95% 48%)"
                : "hsl(24 18% 10% / 0.18)",
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "hsl(24 18% 10% / 0.35)" }}
            >
              {note.category}
            </span>
            <span style={{ color: "hsl(24 18% 10% / 0.18)", fontSize: "9px" }}>
              ·
            </span>
            <ReadTime mins={note.readingTime} />
          </div>
          <h3
            className="font-serif text-xs font-medium leading-snug transition-colors duration-150"
            style={{
              color: hovered ? "hsl(24 18% 10%)" : "hsl(24 18% 10% / 0.72)",
            }}
          >
            {note.title}
          </h3>
          {hovered && (
            <p
              className="mt-1.5 font-mono text-[8px] italic"
              style={{ color: "hsl(24 18% 10% / 0.35)" }}
            >
              {note.annotation}
            </p>
          )}
        </div>

        <div className="shrink-0 flex flex-col items-end gap-1">
          <NoteDate raw={note.date} />
          {hovered && (
            <a
              href="#archivo"
              className="inline-flex items-center gap-0.5 hover:opacity-70"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "7px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "hsl(44 95% 28%)",
              }}
              aria-label="Ficha en preparación"
            >
              Pendiente <ArrowUpRight size={8} />
            </a>
          )}
        </div>
      </article>
    </MotionWrapper>
  );
}

// ─── TARJETA NOTAS RELACIONADAS ───────────────────────────────────────────────
function RelatedNoteInline({ note }: { note: Note }) {
  return (
    <div
      className="py-3 flex items-start gap-3"
      style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.07)" }}
    >
      <span
        className="font-mono text-[8px] uppercase tracking-widest shrink-0 mt-0.5"
        style={{ color: "hsl(44 95% 48% / 0.65)" }}
      >
        {note.category}
      </span>
      <p
        className="font-serif text-xs font-medium leading-snug flex-1"
        style={{ color: "hsl(36 18% 92% / 0.72)" }}
      >
        {note.title}
      </p>
      <ReadTime mins={note.readingTime} />
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export function NotasPage() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Nota destacada (siempre la featured, independiente de filtros para el hero)
  const featuredNote = useMemo(() => notes.find((n) => n.featured), []);

  // Filtrado con búsqueda + categoría
  const filteredNotes = useMemo(() => {
    let result = notes.filter((n) => !n.featured); // la featured tiene sección propia
    if (activeCategory !== "Todo") {
      result = result.filter((n) => n.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.excerpt.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q) ||
          (n.tags && n.tags.some((t) => t.toLowerCase().includes(q))),
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  // Notas relacionadas de la destacada
  const featuredRelated = useMemo(() => {
    if (!featuredNote?.related) return [];
    return featuredNote.related
      .map((id) => notes.find((n) => n.id === id))
      .filter(Boolean) as Note[];
  }, [featuredNote]);

  // Clasificar por tamaño
  const largeNotes = filteredNotes.filter((n) => n.size === "large");
  const mediumNotes = filteredNotes.filter((n) => n.size === "medium");
  const smallNotes = filteredNotes.filter((n) => n.size === "small");

  const isFiltered = activeCategory !== "Todo" || searchQuery.trim().length > 0;

  return (
    <>
      <SeoHead
        meta={{
          title: "Notas | Lara Feijóo",
          description:
            "Archivo editorial de observaciones sobre comunicación, marcas, comportamiento y cultura. No es un blog — son apuntes en proceso.",
          canonical: `${window.location.origin}/notas`,
        }}
      />

      <main>
        {/* ════════════════════════════════════════════════════
            00 — CABECERA EDITORIAL
            Eyebrow, título, nota sobre el espacio, filtros
        ════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{ background: "hsl(36 28% 91%)" }}
          aria-label="Archivo de notas"
        >
          {/* Acento radial */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 55% 70% at 100% 0%, hsl(50 90% 80% / 0.38) 0%, hsl(44 75% 88% / 0.15) 45%, transparent 70%)",
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
                Notas
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.26em]"
                style={{ color: "hsl(24 18% 10% / 0.30)" }}
              >
                {notes.length} entradas
              </span>
            </div>
          </div>

          <div className="relative z-10 px-8 pt-10 pb-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-end">
                {/* Titular + descripción */}
                <MotionWrapper>
                  <h1
                    className="font-serif font-medium leading-[1.04] mb-4"
                    style={{
                      fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Cuaderno de
                    <br />
                    <span
                      style={{
                        color: "hsl(24 18% 10% / 0.38)",
                        fontStyle: "italic",
                      }}
                    >
                      observaciones.
                    </span>
                  </h1>

                  <div
                    className="max-w-md pl-4"
                    style={{ borderLeft: "2px solid hsl(44 95% 48% / 0.50)" }}
                  >
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "hsl(24 18% 10% / 0.60)" }}
                    >
                      Esto no es un blog. Son apuntes en proceso — observaciones
                      que no encajan en un brief pero que informan cómo pienso.
                      El punto de vista puede cambiar.{" "}
                      <span
                        className="font-semibold"
                        style={{ color: "hsl(24 18% 10%)" }}
                      >
                        Ese también es el punto.
                      </span>
                    </p>
                  </div>
                </MotionWrapper>

                {/* Buscador */}
                <MotionWrapper delay={0.08}>
                  <div
                    className="relative flex items-center transition-all duration-150"
                    style={{
                      background: "hsl(40 20% 97%)",
                      border: `1px solid ${searchFocused ? "hsl(44 95% 48% / 0.50)" : "hsl(24 18% 10% / 0.16)"}`,
                    }}
                  >
                    <MagnifyingGlass
                      size={13}
                      className="absolute left-3.5 pointer-events-none"
                      style={{ color: "hsl(24 18% 10% / 0.32)" }}
                    />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Buscar por tema, categoría..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      className="w-full bg-transparent pl-9 pr-9 py-3 font-sans text-sm outline-none placeholder:font-mono placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest"
                      style={{
                        color: "hsl(24 18% 10%)",
                      }}
                      aria-label="Buscar notas"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3.5 transition-opacity hover:opacity-70"
                        aria-label="Limpiar búsqueda"
                      >
                        <X
                          size={12}
                          style={{ color: "hsl(24 18% 10% / 0.40)" }}
                        />
                      </button>
                    )}
                  </div>

                  {/* Conteo de resultados */}
                  {searchQuery && (
                    <p
                      className="mt-2 font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "hsl(24 18% 10% / 0.38)" }}
                    >
                      {filteredNotes.length} resultado
                      {filteredNotes.length !== 1 ? "s" : ""}
                    </p>
                  )}
                </MotionWrapper>
              </div>

              {/* Filtros de categoría */}
              <MotionWrapper delay={0.1}>
                <div
                  className="mt-8 pt-6 flex flex-wrap gap-2 items-center"
                  style={{ borderTop: "1px solid hsl(24 18% 10% / 0.10)" }}
                >
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest mr-1"
                    style={{ color: "hsl(24 18% 10% / 0.32)" }}
                  >
                    Filtrar:
                  </span>
                  {ALL_CATEGORIES.map((cat) => (
                    <CategoryChip
                      key={cat}
                      label={cat}
                      active={activeCategory === cat}
                      count={CATEGORY_COUNTS[cat]}
                      onClick={() => setActiveCategory(cat)}
                    />
                  ))}
                  {isFiltered && (
                    <button
                      onClick={() => {
                        setActiveCategory("Todo");
                        setSearchQuery("");
                      }}
                      className="inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "hsl(24 18% 10% / 0.40)",
                        marginLeft: "4px",
                      }}
                    >
                      <X size={9} /> Limpiar
                    </button>
                  )}
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            01 — NOTA DESTACADA
            Solo visible cuando no hay filtros activos
        ════════════════════════════════════════════════════ */}
        {featuredNote && !isFiltered && (
          <section
            className="px-8 py-0"
            style={{ background: "hsl(38 22% 95%)" }}
            aria-label="Nota destacada"
          >
            <div className="mx-auto max-w-7xl">
              {/* Separador con label */}
              <div
                className="flex items-center gap-4 py-6"
                style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.09)" }}
              >
                <span
                  className="font-mono text-[9px] uppercase tracking-widest"
                  style={{ color: "hsl(44 95% 38%)" }}
                >
                  Entrada destacada
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "hsl(24 18% 10% / 0.08)" }}
                  aria-hidden="true"
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_260px] items-start py-6">
                {/* Tarjeta destacada */}
                <MotionWrapper>
                  <FeaturedNoteCard note={featuredNote} />
                </MotionWrapper>

                {/* Panel lateral — notas relacionadas */}
                {featuredRelated.length > 0 && (
                  <MotionWrapper delay={0.08}>
                    <div
                      className="p-5"
                      style={{
                        background: "hsl(25 20% 10%)",
                        border: "1px solid hsl(0 0% 100% / 0.05)",
                      }}
                    >
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mb-4"
                        style={{ color: "hsl(44 95% 48% / 0.65)" }}
                      >
                        Notas relacionadas
                      </p>
                      {featuredRelated.map((rel) => (
                        <RelatedNoteInline key={rel.id} note={rel} />
                      ))}
                      <p
                        className="mt-4 font-mono text-[8px] italic"
                        style={{ color: "hsl(0 0% 100% / 0.22)" }}
                      >
                        Selección editorial — conexiones temáticas
                      </p>
                    </div>
                  </MotionWrapper>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════
            02 — ARCHIVO PRINCIPAL
            Composición asimétrica: large / medium / small
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-8"
          style={{ background: "hsl(40 20% 97%)" }}
          aria-label="Archivo de notas"
        >
          <div className="mx-auto max-w-7xl">
            {/* Estado vacío */}
            {filteredNotes.length === 0 && (
              <MotionWrapper>
                <div
                  className="py-16 text-center"
                  style={{ border: "1px dashed hsl(24 18% 10% / 0.14)" }}
                >
                  <p
                    className="font-serif italic text-lg mb-2"
                    style={{ color: "hsl(24 18% 10% / 0.38)" }}
                  >
                    Aún no hay notas publicadas.
                  </p>
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "hsl(24 18% 10% / 0.28)" }}
                  >
                    El archivo editorial se está preparando.
                  </p>
                </div>
              </MotionWrapper>
            )}

            {/* BLOQUE LARGE — 2 columnas */}
            {largeNotes.length > 0 && (
              <div className="mb-10">
                <div
                  className="flex items-center gap-4 mb-5"
                  style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.09)" }}
                >
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest pb-3"
                    style={{ color: "hsl(24 18% 10% / 0.35)" }}
                  >
                    Observaciones
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {largeNotes.map((note, i) => (
                    <LargeNoteCard key={note.id} note={note} delay={i * 0.05} />
                  ))}
                </div>
              </div>
            )}

            {/* BLOQUE MEDIUM + SMALL — grid asimétrico 3+2 col */}
            {(mediumNotes.length > 0 || smallNotes.length > 0) && (
              <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-start">
                {/* Columna izquierda — tarjetas medianas */}
                {mediumNotes.length > 0 && (
                  <div>
                    <div
                      className="flex items-center gap-4 mb-0"
                      style={{
                        borderBottom: "1px solid hsl(24 18% 10% / 0.09)",
                      }}
                    >
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest pb-3"
                        style={{ color: "hsl(24 18% 10% / 0.35)" }}
                      >
                        Notas
                      </span>
                    </div>
                    {mediumNotes.map((note, i) => (
                      <MediumNoteCard
                        key={note.id}
                        note={note}
                        delay={i * 0.04}
                      />
                    ))}
                  </div>
                )}

                {/* Columna derecha — tarjetas pequeñas */}
                {smallNotes.length > 0 && (
                  <div
                    className="lg:pl-6"
                    style={{ borderLeft: "1px solid hsl(24 18% 10% / 0.08)" }}
                  >
                    <div
                      className="flex items-center gap-4 mb-0"
                      style={{
                        borderBottom: "1px solid hsl(24 18% 10% / 0.09)",
                      }}
                    >
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest pb-3"
                        style={{ color: "hsl(24 18% 10% / 0.35)" }}
                      >
                        Apuntes breves
                      </span>
                    </div>
                    {smallNotes.map((note, i) => (
                      <SmallNoteCard
                        key={note.id}
                        note={note}
                        delay={i * 0.03}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Vista plana cuando hay filtros — todos en columna */}
            {isFiltered && filteredNotes.length > 0 && (
              <div>
                <div
                  className="flex items-center gap-3 mb-0 pb-3"
                  style={{ borderBottom: "1px solid hsl(24 18% 10% / 0.09)" }}
                >
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "hsl(24 18% 10% / 0.35)" }}
                  >
                    {filteredNotes.length} nota
                    {filteredNotes.length !== 1 ? "s" : ""}
                  </span>
                  {activeCategory !== "Todo" && (
                    <>
                      <span
                        style={{
                          color: "hsl(24 18% 10% / 0.20)",
                          fontSize: "10px",
                        }}
                      >
                        —
                      </span>
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest"
                        style={{ color: "hsl(44 95% 38%)" }}
                      >
                        {activeCategory}
                      </span>
                    </>
                  )}
                </div>
                {filteredNotes.map((note, i) => (
                  <MediumNoteCard key={note.id} note={note} delay={i * 0.04} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════
            03 — PANEL TEMÁTICO OSCURO
            Agrupación por tema transversal — navegación alternativa
        ════════════════════════════════════════════════════ */}
        {false && notes.length > 0 && !isFiltered && (
          <section
            className="px-8 py-12 md:py-16"
            style={{ background: "hsl(25 20% 10%)" }}
            aria-label="Temas recurrentes"
          >
            <div className="mx-auto max-w-7xl">
              <div
                className="flex items-baseline gap-4 mb-8 pb-4"
                style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.08)" }}
              >
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: "hsl(44 95% 48%)" }}
                >
                  ✦
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: "hsl(0 0% 100% / 0.45)" }}
                >
                  Temas que reaparecen
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    tema: "Brecha declarativa-conductual",
                    descripcion:
                      "La distancia entre lo que dicen las personas y lo que hacen. El territorio donde nace el insight real.",
                    notas: ["n02", "n07"],
                    color: "hsl(44 95% 48%)",
                  },
                  {
                    tema: "Credibilidad vs. alcance",
                    descripcion:
                      "Cuándo más audiencia produce menos confianza, y por qué la coherencia sostenida supera al impacto puntual.",
                    notas: ["n01", "n10"],
                    color: "hsl(44 95% 48%)",
                  },
                  {
                    tema: "Causa vs. amplificador",
                    descripcion:
                      "Diferenciar qué provoca un fenómeno de qué lo distribuye. Una confusión que contamina el análisis estratégico.",
                    notas: ["n03", "n06"],
                    color: "hsl(44 95% 48%)",
                  },
                  {
                    tema: "Contexto en el aprendizaje",
                    descripcion:
                      "Por qué aprender sin contexto real produce conocimiento frágil. Conexión directa con el origen de Talixea.",
                    notas: ["n09", "n12"],
                    color: "hsl(44 95% 48%)",
                  },
                  {
                    tema: "El brief y sus síntomas",
                    descripcion:
                      "La mayoría de los briefs describen el efecto, no la causa. El trabajo estratégico empieza por abajo.",
                    notas: ["n05", "n04"],
                    color: "hsl(44 95% 48%)",
                  },
                  {
                    tema: "Señales débiles",
                    descripcion:
                      "Memes, microtendencias, anomalías en los datos cualitativos. Las señales que la velocidad hace ignorar.",
                    notas: ["n08", "n03"],
                    color: "hsl(44 95% 48%)",
                  },
                ].map((tema, i) => (
                  <MotionWrapper key={tema.tema} delay={i * 0.05}>
                    <div
                      className="p-5 h-full transition-all duration-200 cursor-default group"
                      style={{
                        background: "hsl(0 0% 100% / 0.03)",
                        border: "1px solid hsl(0 0% 100% / 0.07)",
                        borderTop: `2px solid ${tema.color}`,
                      }}
                    >
                      <h3
                        className="font-serif text-sm font-medium leading-snug mb-2.5"
                        style={{ color: "hsl(36 18% 92% / 0.85)" }}
                      >
                        {tema.tema}
                      </h3>
                      <p
                        className="font-sans text-xs leading-relaxed"
                        style={{ color: "hsl(0 0% 100% / 0.42)" }}
                      >
                        {tema.descripcion}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5">
                        <span
                          className="font-mono text-[8px] uppercase tracking-widest"
                          style={{ color: "hsl(44 95% 48% / 0.50)" }}
                        >
                          {tema.notas.length} nota
                          {tema.notas.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════
            04 — CTA LINKEDIN + NOTA SOBRE EL ESPACIO
        ════════════════════════════════════════════════════ */}
        <section
          className="px-8 py-10"
          style={{
            background: "hsl(38 22% 95%)",
            borderTop: "1px solid hsl(24 18% 10% / 0.10)",
          }}
          aria-label="Más observaciones"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
              <MotionWrapper>
                <p
                  className="font-serif font-medium italic leading-relaxed"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.3rem)",
                    color: "hsl(24 18% 10% / 0.55)",
                    maxWidth: "500px",
                  }}
                >
                  "Publico más observaciones en LinkedIn. Si algo de lo que lees
                  aquí genera una pregunta,{" "}
                  <span style={{ color: "hsl(24 18% 10%)" }}>
                    la conversación continúa allí.
                  </span>
                  "
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.06}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-sans text-sm font-medium transition-all hover:opacity-85"
                    style={{
                      background: "hsl(44 95% 48%)",
                      color: "hsl(24 18% 10%)",
                    }}
                  >
                    Enlace profesional pendiente de confirmar
                  </span>
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 font-sans text-sm transition-colors hover:opacity-70"
                    style={{
                      color: "hsl(24 18% 10% / 0.55)",
                      borderBottom: "1px solid hsl(24 18% 10% / 0.22)",
                      paddingBottom: "1px",
                    }}
                  >
                    O escríbeme directamente <ArrowRight size={12} />
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
