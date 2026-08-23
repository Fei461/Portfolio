import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden px-8 pb-10 pt-16"
      style={{ background: "hsl(var(--color-ink))" }}
    >
      {/* Línea dorada superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Monograma decorativo */}
      <span
        className="pointer-events-none absolute right-8 top-6 select-none font-serif text-[8rem] font-bold leading-none text-white/4 md:text-[11rem]"
        aria-hidden="true"
      >
        LF
      </span>

      <div className="section-inner relative z-10">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold text-white">
              Lara Feijóo
            </p>
            {/* Subtitle: mono blanco/60 — legible sobre oscuro */}
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
              Estrategia · Comunicación · Insights
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55 font-sans">
              Estrategia, comunicación, research e insights.
            </p>
            <Link
              to="/#contacto"
              className="mt-5 inline-flex items-center gap-2 border-b border-primary/50 pb-0.5 text-sm font-medium text-primary transition-colors hover:text-white hover:border-white/50"
            >
              Contacto <ArrowRight size={14} />
            </Link>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-white/35">
              Páginas
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio", to: "/" },
                { label: "Trabajo", to: "/trabajo" },
                { label: "Notas", to: "/notas" },
                { label: "Sobre mí", to: "/sobre-mi" },
                { label: "CV", to: "/cv" },
                { label: "Contacto", to: "/#contacto" as string },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-sans text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {profile.socials.length > 0 && (
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-white/35">
                Contacto
              </p>
              <ul className="space-y-2.5">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="font-sans text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} Lara Feijóo
          </p>
          <p className="font-mono text-[10px] text-white/20">
            Segunda lectura recomendada.
          </p>
        </div>
      </div>
    </footer>
  );
}
