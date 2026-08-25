import { Link, useLocation } from "react-router-dom";
import { profile } from "@/lib/content";

export function SiteFooter() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

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
        {isHome && (
          <section id="contacto" className="border-b border-white/10 pb-12 mb-12" aria-label="Contacto">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Contacto</p>
            <div className="mt-5 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-2xl font-serif text-3xl font-medium leading-snug text-white md:text-4xl">
                  Siempre abierta a conversaciones, proyectos y oportunidades.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
                  Estrategia y comunicación publicitaria.
                </p>
              </div>
              <Link
                to="/cv"
                className="inline-flex w-fit items-center gap-2 border border-primary/60 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-primary transition-colors hover:border-white hover:text-white"
              >
                Ver CV
              </Link>
            </div>
          </section>
        )}
        <div className="grid gap-10 pb-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold text-white">
              Lara Feijóo
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
              {profile.home.territory}
            </p>
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
            CULO INQUIETO.
          </p>
        </div>
      </div>
    </footer>
  );
}
