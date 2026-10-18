import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cinturones, porCinturon, type Cinturon } from "@/data/proyectos";

// Colores de cada cinturón: tela, cara interior (más oscura) y costuras.
type Grado = Exclude<Cinturon, "archivo">;

const telas: Record<Grado, { tela: string; sombra: string; costura: string }> = {
  negro: { tela: "#161616", sombra: "#000", costura: "#5a5a54" },
  verde: { tela: "#2f8a3e", sombra: "#1b5527", costura: "#5fb36c" },
};

const subtitulos: Record<Grado, (n: number) => string> = {
  negro: (n) => `${n} casos completos`,
  verde: (n) => `${n} casos breves`,
};

// Un cinturón colgado de la barra como en el vestuario: doblado por la mitad,
// con las dos puntas cayendo y las costuras a lo largo. El negro lleva mi nombre bordado.
function Obi({ cinturon }: { cinturon: Grado }) {
  const { tela, sombra, costura } = telas[cinturon];
  const borde = { stroke: "#000", strokeWidth: 3, strokeLinejoin: "round" as const };
  return (
    <svg className="obi" viewBox="0 0 120 300" aria-hidden="true">
      {/* Punta de atrás: asoma un poco por detrás y se abre hacia la derecha */}
      <path d="M50 40 L88 40 L100 262 L63 266 Z" fill={sombra} {...borde} />
      {/* La vuelta por encima de la barra */}
      <path d="M28 44 C28 14 90 14 90 44 Z" fill={sombra} {...borde} />
      {/* Punta de delante */}
      <path d="M28 40 L68 40 L64 288 L24 286 Z" fill={tela} {...borde} />
      <g stroke={costura} strokeWidth="1.3" fill="none">
        {[34, 41, 48, 55, 62].map((x) => (
          <path key={x} d={`M${x} 46 L${x - 4} 280`} />
        ))}
        {[90, 95].map((x) => (
          <path key={x} d={`M${x - 14} 46 L${x - 2} 258`} />
        ))}
        <path d="M25 272 L64 274" />
      </g>
      {cinturon === "negro" && (
        <text
          x="0"
          y="0"
          transform="translate(47 214) rotate(90.9)"
          fill="#d6b25e"
          fontFamily="Bricolage Grotesque, system-ui, sans-serif"
          fontWeight="800"
          fontSize="14"
          letterSpacing="2.5"
          textAnchor="middle"
        >
          LARA
        </text>
      )}
    </svg>
  );
}

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

// Al pasar por un cinturón asoman, en abanico, tres de sus proyectos.
function Asomo({ cinturon }: { cinturon: Grado }) {
  const lista = porCinturon(cinturon);
  const conImagen = lista.filter((p) => p.portada);
  const elegidos = (conImagen.length >= 3 ? conImagen : lista).slice(0, 3);
  return (
    <span className="asomo" aria-hidden="true">
      {elegidos.map((p, k) => (
        <span key={p.slug} className="asomo__carta" style={{ "--k": k - 1 } as CSSProperties}>
          {p.portada ? <img src={p.portada} alt="" loading="lazy" /> : <span>{p.titulo}</span>}
        </span>
      ))}
    </span>
  );
}

export function Colgador({ extra }: { extra?: ReactNode }) {
  const orden: Grado[] = ["negro", "verde"];
  return (
    <nav className="colgador" aria-label="Proyectos por cinturón">
      <div className="colgador__barra" aria-hidden="true" />
      <ul>
        {orden.map((c, i) => (
          <li key={c} style={{ "--i": i } as CSSProperties}>
            <Link to={`/trabajo?cinturon=${c}`} className="colgador__cinturon">
              <Asomo cinturon={c} />
              <Obi cinturon={c} />
              <span className="colgador__etiqueta">
                <strong>{cinturones[c].nombre}</strong>
                <span>{subtitulos[c](porCinturon(c).length)}</span>
              </span>
            </Link>
          </li>
        ))}
        <li style={{ "--i": 2 } as CSSProperties}>
          <Link to="/trabajo?cinturon=archivo" className="colgador__cinturon">
            <Carpeta />
            <span className="colgador__etiqueta">
              <strong>{cinturones.archivo.nombre}</strong>
              <span>{porCinturon("archivo").length} trabajos de la carrera</span>
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
