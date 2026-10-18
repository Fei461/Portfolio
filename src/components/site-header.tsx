import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Proyectos", to: "/trabajo" },
  { label: "Sobre mí", to: "/sobre-mi" },
  { label: "En voz alta", to: "/en-voz-alta" },
  { label: "CV", to: "/cv" },
] as const;

export function SiteHeader() {
  const { pathname } = useLocation();
  // En la portada la cabecera flota sobre el tatami; en el resto, sobre el judogi.
  const sobreTatami = pathname === "/";

  return (
    <header className={sobreTatami ? "dojo-head dojo-head--tatami" : "dojo-head"}>
      <a className="dojo-saltar" href="#contenido">
        Saltar al contenido
      </a>
      <Link to="/" className="dojo-head__firma">
        Lara Feijóo
      </Link>
      <nav aria-label="Principal">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          className="dojo-head__linkedin"
          href="https://www.linkedin.com/in/lara-feijoo"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn (se abre en otra pestaña)"
        >
          in
        </a>
        <a className="dojo-head__escribir" href="mailto:lara.feijoo@gmail.com">
          Escríbeme
        </a>
      </nav>
    </header>
  );
}
