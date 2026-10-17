import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cinturones, porCinturon, type Cinturon } from "@/data/proyectos";

// Colores de cada cinturón: tela, costuras y contorno.
const telas: Record<Cinturon, { tela: string; costura: string }> = {
  negro: { tela: "#141414", costura: "#55554f" },
  marron: { tela: "#6b3a1f", costura: "#95603d" },
  blanco: { tela: "#f7f7f4", costura: "#cfcfc6" },
};

const subtitulos: Record<Cinturon, (n: number) => string> = {
  negro: (n) => `${n} casos completos`,
  marron: (n) => `${n} casos breves`,
  blanco: (n) => `${n} trabajos donde empecé`,
};

// Un cinturón atado y colgado de una clavija: el lazo sube hasta la clavija,
// el nudo cuadrado en medio y las dos puntas caen abiertas, como en el dojo.
function Obi({ cinturon }: { cinturon: Cinturon }) {
  const { tela, costura } = telas[cinturon];
  const linea = { stroke: "#000", strokeWidth: 2.6, strokeLinejoin: "round" as const };
  return (
    <svg className="obi" viewBox="0 0 140 340" aria-hidden="true">
      {/* Lazo: las dos vueltas del cinturón suben hasta la clavija */}
      <path d="M44 150 L62 26 L78 26 L66 150 Z" fill={tela} {...linea} />
      <path d="M74 150 L66 26 L82 26 L98 150 Z" fill={tela} {...linea} />
      <path d="M53 140 L66 40 M88 140 L76 40" stroke={costura} strokeWidth="1.2" fill="none" />
      {/* Puntas que caen desde el nudo */}
      <path d="M58 180 L30 318 L56 326 L78 186 Z" fill={tela} {...linea} />
      <path d="M82 180 L102 306 L126 296 L96 176 Z" fill={tela} {...linea} />
      <path d="M62 196 L40 314 M70 196 L48 318 M88 196 L106 302 M94 194 L115 298" stroke={costura} strokeWidth="1.2" fill="none" />
      {/* Nudo */}
      <path d="M50 146 L94 142 L98 186 L52 190 Z" fill={tela} {...linea} />
      <path d="M54 166 L95 162" stroke={costura} strokeWidth="1.4" />
      {/* Clavija */}
      <circle cx="70" cy="22" r="9" fill="#5b3b1f" stroke="#000" strokeWidth="2.6" />
    </svg>
  );
}

// Al pasar por un cinturón asoman, en abanico, tres de sus proyectos.
function Asomo({ cinturon }: { cinturon: Cinturon }) {
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
  const orden: Cinturon[] = ["negro", "marron", "blanco"];
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
        {extra && (
          <li className="colgador__extra" style={{ "--i": 3 } as CSSProperties}>
            {extra}
          </li>
        )}
      </ul>
    </nav>
  );
}
