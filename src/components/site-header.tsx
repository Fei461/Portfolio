import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Proyectos", to: "/trabajo" },
  { label: "Sobre mí", to: "/sobre-mi" },
  { label: "Notas", to: "/notas" },
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
      </nav>
    </header>
  );
}
