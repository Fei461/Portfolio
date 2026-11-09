import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Judogi } from "@/components/judogi";
import { perchas, porPercha, type Percha } from "@/data/proyectos";

type Lado = Exclude<Percha, "archivo">;

// El archivo: una carpeta colgada de una pinza.
function Carpeta() {
  const borde = { stroke: "#000", strokeWidth: 3, strokeLinejoin: "round" as const };
  return (
    <svg className="obi obi--carpeta" viewBox="0 0 160 300" aria-hidden="true">
      <path d="M58 18 L102 18 L98 52 L62 52 Z" fill="#9a9a92" {...borde} />
      <path d="M16 50 L60 50 L68 62 L146 62 L146 236 L16 236 Z" fill="#b8874f" {...borde} />
      <path d="M22 78 L150 70 L144 246 L14 240 Z" fill="#d9a865" {...borde} />
      <rect x="40" y="120" width="82" height="34" fill="#f5f5f2" stroke="#000" strokeWidth="2.5" transform="rotate(-2 81 137)" />
      <text x="81" y="143" textAnchor="middle" fontFamily="Bricolage Grotesque, system-ui, sans-serif" fontWeight="800" fontSize="15" transform="rotate(-2 81 137)">
        ARCHIVO
      </text>
      <path d="M30 196 L126 192 M30 210 L104 207" stroke="#8a5c34" strokeWidth="2" />
    </svg>
  );
}

export function Colgador({ extra }: { extra?: ReactNode }) {
  const orden: Lado[] = ["azul", "blanco"];
  return (
    <nav className="colgador" aria-label="Proyectos">
      <div className="colgador__barra" aria-hidden="true" />
      <ul>
        {orden.map((c, i) => (
          <li key={c} style={{ "--i": i } as CSSProperties}>
            <Link to={`/trabajo?percha=${c}`} className="colgador__percha">
              <Judogi color={c} />
              <span className="colgador__etiqueta">
                <strong>{perchas[c].nombre}</strong>
                <span>{porPercha(c).length} proyectos</span>
              </span>
            </Link>
          </li>
        ))}
        <li style={{ "--i": 2 } as CSSProperties}>
          <Link to="/trabajo?percha=archivo" className="colgador__percha">
            <Carpeta />
            <span className="colgador__etiqueta">
              <strong>{perchas.archivo.nombre}</strong>
              <span>{porPercha("archivo").length} trabajos de la carrera</span>
            </span>
          </Link>
        </li>
        {extra && (
          <li className="colgador__extra" style={{ "--i": 3 } as CSSProperties}>
            {extra}
          </li>
        )}
      </ul>
    </nav>
  );
}
