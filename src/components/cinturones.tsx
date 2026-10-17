import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { cinturones, porCinturon, type Cinturon, type Proyecto } from "@/data/proyectos";

const colorCinta: Record<Cinturon, string> = {
  negro: "var(--sumi)",
  marron: "var(--obi)",
  blanco: "var(--judogi)",
};

const enlaceCaso = (p: Proyecto) => (p.pagina ? `/trabajo/${p.slug}` : undefined);

function Fuera({ p }: { p: Proyecto }) {
  if (!p.fuera) return null;
  const esArchivo = p.fuera.href.endsWith(".mp4");
  return (
    <a href={p.fuera.href} target="_blank" rel="noreferrer">
      {p.fuera.label}
      {!esArchivo && <span className="sr-only"> (se abre en otra pestaña)</span>}
    </a>
  );
}

export function CabeceraGrado({
  cinturon,
  as: Titulo = "h3",
}: {
  cinturon: Cinturon;
  as?: "h2" | "h3";
}) {
  const { nombre, nota } = cinturones[cinturon];
  return (
    <div className="dojo-grado__cabecera">
      <span
        className="dojo-grado__cinta"
        style={{ "--cinta": colorCinta[cinturon] } as CSSProperties}
        aria-hidden="true"
      />
      <Titulo className="dojo-grado__nombre">{nombre}</Titulo>
      <p className="dojo-grado__nota">{nota}</p>
    </div>
  );
}

export function CasosNegros({ titulo = "h4" }: { titulo?: "h3" | "h4" }) {
  const Titulo = titulo;
  return (
    <ol className="dojo-casos">
      {porCinturon("negro").map((p, n) => {
        const to = enlaceCaso(p);
        return (
          <li className="dojo-caso" key={p.slug}>
            <span className="dojo-caso__orden" aria-hidden="true">
              {n + 1}
            </span>
            <div>
              <Titulo className="dojo-caso__titulo">{p.titulo}</Titulo>
              <span className="dojo-caso__tipo">{p.tipo}</span>
            </div>
            <p className="dojo-caso__texto">{p.resumen}</p>
            <div className="dojo-caso__enlaces">
              {to && (
                <Link to={to}>
                  Ver caso<span className="sr-only"> de {p.titulo}</span>
                </Link>
              )}
              <Fuera p={p} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function CasosMarrones({ conTipo = false }: { conTipo?: boolean }) {
  return (
    <ul className="dojo-lista">
      {porCinturon("marron").map((p) => {
        const to = enlaceCaso(p);
        return (
          <li key={p.slug}>
            <strong>{to ? <Link to={to}>{p.titulo}</Link> : p.titulo}</strong>
            <span>{p.resumen}</span>
            {conTipo && <small>{p.tipo}</small>}
            {p.fuera && (
              <span className="dojo-lista__fuera">
                <Fuera p={p} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function CasosBlancos({ detalle = false }: { detalle?: boolean }) {
  const lista = porCinturon("blanco");
  if (!detalle) {
    const nombres = lista.map((p) => p.titulo);
    const texto = `${nombres.slice(0, -1).join(", ")} y ${nombres[nombres.length - 1]}.`;
    return <p className="dojo-archivo">{texto}</p>;
  }
  return (
    <ul className="dojo-lista dojo-lista--blanca">
      {lista.map((p) => (
        <li key={p.slug}>
          <strong>{p.titulo}</strong>
          <span>{p.resumen}</span>
          <small>{p.tipo}</small>
        </li>
      ))}
    </ul>
  );
}
