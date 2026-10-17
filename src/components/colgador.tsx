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

// Un cinturón atado como en el tatami: el lazo cerrado colgado de la clavija,
// el nudo cuadrado delante y las dos puntas cayendo.
function Obi({ cinturon }: { cinturon: Grado }) {
  const { tela, sombra, costura } = telas[cinturon];
  const borde = { stroke: "#000", strokeWidth: 3, strokeLinejoin: "round" as const };
  return (
    <svg className="obi" viewBox="0 0 200 230" aria-hidden="true">
      {/* Lazo: la cara de atrás se ve por dentro y es más oscura */}
      <path d="M20 62 C20 17 180 17 180 62 L158 62 C158 38 42 38 42 62 Z" fill={sombra} {...borde} />
      <path d="M20 62 C20 107 180 107 180 62 L158 62 C158 86 42 86 42 62 Z" fill={tela} {...borde} />
      <path
        d="M27 63 C28 100 172 100 173 63 M35 63 C36 93 164 93 165 63"
        stroke={costura}
        strokeWidth="1.4"
        fill="none"
      />
      {/* Puntas */}
      <path d="M86 104 L101 108 L80 214 L57 206 Z" fill={tela} {...borde} />
      <path d="M101 108 L116 104 L143 204 L120 213 Z" fill={tela} {...borde} />
      {/* Nudo y la vuelta que lo cruza */}
      <path d="M81 78 L119 74 L122 108 L84 112 Z" fill={tela} {...borde} />
      <path d="M73 92 L127 80 L130 93 L76 105 Z" fill={tela} {...borde} />
      <path
        d="M90 112 L65 206 M96 113 L73 210 M106 112 L129 207 M112 110 L137 204 M76 99 L127 87"
        stroke={costura}
        strokeWidth="1.4"
        fill="none"
      />
      {/* Clavija */}
      <circle cx="100" cy="27" r="9" fill="#5b3b1f" stroke="#000" strokeWidth="3" />
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
        <li className="colgador__archivo" style={{ "--i": 2 } as CSSProperties}>
          <Link to="/trabajo?cinturon=archivo">
            <strong>Archivo</strong>
            <span>{porCinturon("archivo").length} trabajos de la carrera</span>
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
