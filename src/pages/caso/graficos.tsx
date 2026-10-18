import { useState } from "react";
import type { CasoCompleto } from "@/data/casos";

// Línea de tiempo: cada tramo es una barra sobre una regla de meses.
export function Cronograma({ datos }: { datos: NonNullable<CasoCompleto["cronograma"]> }) {
  const marcas = Array.from({ length: Math.floor(datos.meses / 6) + 1 }, (_, i) => i * 6);
  return (
    <section className="caso-seccion" aria-labelledby="caso-cronograma">
      <h2 id="caso-cronograma" className="caso-h2">
        {datos.titulo}
      </h2>
      <p className="caso-entradilla">{datos.intro}</p>
      <ol className="cronograma">
        {datos.tramos.map((t) => (
          <li key={t.nombre}>
            <div className="cronograma__texto">
              <h3>{t.nombre}</h3>
              <p>{t.texto}</p>
            </div>
            <div className="cronograma__pista" aria-hidden="true">
              <span
                className={t.abierto ? "cronograma__barra cronograma__barra--abierta" : "cronograma__barra"}
                style={{
                  left: `${(t.desde / datos.meses) * 100}%`,
                  width: `${((t.hasta - t.desde) / datos.meses) * 100}%`,
                }}
              />
            </div>
            <p className="sr-only">
              Del mes {t.desde} al {t.abierto ? "final del plan y más allá" : `mes ${t.hasta}`}.
            </p>
          </li>
        ))}
      </ol>
      <div className="cronograma__regla" aria-hidden="true">
        {marcas.map((m) => (
          <span key={m} style={{ left: `${(m / datos.meses) * 100}%` }}>
            {m === 0 ? "Estreno" : `Mes ${m}`}
          </span>
        ))}
      </div>
    </section>
  );
}

// Reparto: una sola barra apilada, con la leyenda debajo.
export function Reparto({ datos }: { datos: NonNullable<CasoCompleto["reparto"]> }) {
  return (
    <section className="caso-seccion" aria-labelledby="caso-reparto">
      <h2 id="caso-reparto" className="caso-h2">
        {datos.titulo}
      </h2>
      <p className="caso-entradilla">{datos.intro}</p>
      <div className="reparto" aria-hidden="true">
        {datos.partes.map((p, i) => (
          <span key={p.nombre} className={`reparto__parte reparto__parte--${i}`} style={{ flexGrow: p.pct }}>
            {p.pct >= 10 ? `${p.pct} %` : ""}
          </span>
        ))}
      </div>
      <ul className="reparto__leyenda">
        {datos.partes.map((p, i) => (
          <li key={p.nombre}>
            <span className={`reparto__muestra reparto__parte--${i}`} aria-hidden="true" />
            <strong>{p.pct} %</strong> {p.nombre}
          </li>
        ))}
      </ul>
      <p className="caso-video__red">Total: {datos.total}.</p>
    </section>
  );
}

const coma = (n: number) => n.toFixed(2).replace(".", ",");

// Brecha: cada atributo con dos puntos sobre una regla de 1 a 5. Se puede ordenar
// por la distancia entre públicos y tocar una fila para ver qué la explica.
export function Brecha({ datos }: { datos: NonNullable<CasoCompleto["brecha"]> }) {
  const [orden, setOrden] = useState<"encuesta" | "brecha">("brecha");
  const [abierto, setAbierto] = useState<string | null>(null);
  const filas =
    orden === "brecha"
      ? [...datos.items].sort((a, b) => b.dentro - b.fuera - (a.dentro - a.fuera))
      : datos.items;
  const x = (v: number) => `${((v - 1) / 4) * 100}%`;
  const elegido = datos.items.find((i) => i.atributo === abierto);
  return (
    <section className="caso-seccion brecha" aria-labelledby="caso-brecha">
      <h2 id="caso-brecha" className="caso-h2">
        {datos.titulo}
      </h2>
      <p className="caso-entradilla">{datos.intro}</p>
      <div className="brecha__mandos">
        <span className="brecha__leyenda">
          <i className="brecha__punto brecha__punto--dentro" aria-hidden="true" /> {datos.dentro}
          <i className="brecha__punto brecha__punto--fuera" aria-hidden="true" /> {datos.fuera}
        </span>
        <span role="group" aria-label="Ordenar">
          <button type="button" aria-pressed={orden === "brecha"} onClick={() => setOrden("brecha")}>
            Mayor brecha primero
          </button>
          <button type="button" aria-pressed={orden === "encuesta"} onClick={() => setOrden("encuesta")}>
            Orden de la encuesta
          </button>
        </span>
      </div>
      <ul className="brecha__filas">
        {filas.map((f) => (
          <li key={f.atributo}>
            <button
              type="button"
              className={abierto === f.atributo ? "activo" : undefined}
              aria-expanded={abierto === f.atributo}
              onClick={() => setAbierto(abierto === f.atributo ? null : f.atributo)}
            >
              <span className="brecha__atributo">{f.atributo}</span>
              <span className="brecha__pista" aria-hidden="true">
                <span className="brecha__tramo" style={{ left: x(f.fuera), width: `calc(${x(f.dentro)} - ${x(f.fuera)})` }} />
                <i className="brecha__punto brecha__punto--fuera" style={{ left: x(f.fuera) }} />
                <i className="brecha__punto brecha__punto--dentro" style={{ left: x(f.dentro) }} />
              </span>
              <span className="brecha__dif">
                −{coma(f.dentro - f.fuera)}
                <span className="sr-only">
                  {" "}
                  puntos: {datos.dentro} {coma(f.dentro)}, {datos.fuera} {coma(f.fuera)}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="brecha__regla" aria-hidden="true">
        <span />
        <span className="brecha__regla-pista">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} style={{ left: x(n) }}>
              {n}
            </span>
          ))}
        </span>
        <span />
      </div>
      <p className="brecha__porque" aria-live="polite">
        {elegido ? (
          <>
            <strong>
              {elegido.atributo}: {coma(elegido.dentro)} dentro, {coma(elegido.fuera)} fuera.
            </strong>{" "}
            {elegido.porQue}
          </>
        ) : (
          "Toca una fila para ver qué explica la diferencia."
        )}
      </p>
    </section>
  );
}

const CIRCULOS = {
  poder: { cx: 120, cy: 112, color: "#f2c14e" },
  legitimidad: { cx: 210, cy: 112, color: "#e9798a" },
  urgencia: { cx: 165, cy: 186, color: "#7aa7e8" },
} as const;

// Mapa de públicos: tres círculos (poder, legitimidad, urgencia). Al elegir un tipo de
// público se encienden sus círculos y aparece quién está ahí y por qué.
export function Mapa({ datos }: { datos: NonNullable<CasoCompleto["mapa"]> }) {
  const [activo, setActivo] = useState(0);
  const g = datos.grupos[activo];
  return (
    <section className="caso-seccion mapa" aria-labelledby="caso-mapa">
      <h2 id="caso-mapa" className="caso-h2">
        {datos.titulo}
      </h2>
      <p className="caso-entradilla">{datos.intro}</p>
      <div className="mapa__cuerpo">
        <svg className="mapa__venn" viewBox="0 0 330 300" overflow="visible" role="img" aria-label={`${g.tipo}: ${g.atributos.join(", ")}`}>
          {(Object.keys(CIRCULOS) as (keyof typeof CIRCULOS)[]).map((k) => {
            const c = CIRCULOS[k];
            const on = g.atributos.includes(k);
            return (
              <g key={k}>
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r="78"
                  fill={c.color}
                  fillOpacity={on ? 0.75 : 0.12}
                  stroke="#000"
                  strokeWidth={on ? 3 : 1.5}
                  style={{ transition: "fill-opacity .35s ease" }}
                />
                <text
                  x={k === "poder" ? c.cx - 30 : k === "legitimidad" ? c.cx + 30 : c.cx}
                  y={k === "urgencia" ? c.cy + 98 : c.cy - 86}
                  textAnchor="middle"
                  fontFamily="Bricolage Grotesque, system-ui, sans-serif"
                  fontWeight="800"
                  fontSize="13"
                  fill="#000"
                  opacity={on ? 1 : 0.45}
                >
                  {k === "poder" ? "PODER" : k === "legitimidad" ? "LEGITIMIDAD" : "URGENCIA"}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="mapa__lado">
          <div className="mapa__tipos" role="group" aria-label="Tipo de público">
            {datos.grupos.map((x, i) => (
              <button
                key={x.tipo}
                type="button"
                aria-pressed={i === activo}
                className={i === activo ? "activo" : undefined}
                onClick={() => setActivo(i)}
              >
                {x.tipo}
              </button>
            ))}
          </div>
          <div className="mapa__detalle" key={g.tipo} aria-live="polite">
            <p className="mapa__atributos">{g.atributos.map((a) => a[0].toUpperCase() + a.slice(1)).join(" + ")}</p>
            <ul>
              {g.miembros.map((m) => (
                <li key={m.nombre}>
                  <strong>{m.nombre}</strong> {m.texto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
