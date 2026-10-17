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
