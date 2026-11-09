import type { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import type { CasoCompleto } from "@/data/casos";

type Extra = NonNullable<CasoCompleto["piezasExtra"]>[number];

// Las piezas de un caso, en pequeñas pestañas: lo principal (vídeos o imágenes) y luego el resto
// del trabajo (guiones, campañas, voz de marca…).
export function Tablon({ nombre, principal, extras }: { nombre: string; principal: ReactNode; extras: Extra[] }) {
  // El tipo de pieza abierto vive en la URL (?pieza=guiones), como las partes del caso.
  const [params, setParams] = useSearchParams();
  const activo = params.get("pieza") ?? "principal";
  const setActivo = (id: string) => {
    const nuevos = new URLSearchParams(params);
    if (id === "principal") nuevos.delete("pieza");
    else nuevos.set("pieza", id);
    setParams(nuevos, { replace: true });
  };
  const grupos = [{ id: "principal", nombre }, ...extras.map((e) => ({ id: e.id, nombre: e.nombre }))];
  const extra = extras.find((e) => e.id === activo);

  return (
    <div className="tablon">
      <div className="tablon__pestanas" role="group" aria-label="Tipo de pieza">
        {grupos.map((g) => (
          <button key={g.id} type="button" aria-pressed={g.id === activo} onClick={() => setActivo(g.id)}>
            {g.nombre}
          </button>
        ))}
      </div>
      <div className="tablon__contenido" key={activo}>
        {extra ? <Grupo extra={extra} /> : principal}
      </div>
    </div>
  );
}

function Grupo({ extra }: { extra: Extra }) {
  return (
    <>
      <p className="asalto__entradilla">{extra.intro}</p>
      {extra.cita && <p className="tablon__cita">{extra.cita}</p>}
      {extra.sliders && (
        <ul className="tablon__sliders" aria-label="Tono de voz, de 1 a 5">
          {extra.sliders.map((s) => (
            <li key={s.nombre}>
              <span className="tablon__slider-nombre">{s.nombre}</span>
              <span className="tablon__slider" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((n) => (
                  <i key={n} className={n <= s.valor ? "lleno" : undefined} />
                ))}
              </span>
              <span className="sr-only">
                {s.valor} de 5
              </span>
              {s.nota && <span className="tablon__slider-nota">{s.nota}</span>}
            </li>
          ))}
        </ul>
      )}
      {extra.pares && (
        <ul className="tablon__pares">
          {extra.pares.map((p) => (
            <li key={p.si}>
              <span className="tablon__no">
                <span aria-hidden="true">✗</span> <span className="sr-only">Así no: </span>
                {p.no}
              </span>
              <span className="tablon__si">
                <span aria-hidden="true">✓</span> <span className="sr-only">Así sí: </span>
                {p.si}
              </span>
            </li>
          ))}
        </ul>
      )}
      {extra.tarjetas && (
        <ul className="tablon__tarjetas">
          {extra.tarjetas.map((t) => (
            <li key={t.titulo} className={t.email ? "tablon__tarjeta tablon__tarjeta--ancha" : "tablon__tarjeta"}>
              {t.etiqueta && <span className="tablon__etiqueta">{t.etiqueta}</span>}
              <h3>{t.titulo}</h3>
              {t.lineas?.map((l) => (
                <p key={l}>{l}</p>
              ))}
              {t.escenas && (
                <ol className="tablon__escenas">
                  {t.escenas.map((e) => (
                    <li key={e.momento}>
                      <strong>{e.momento}</strong>
                      <span>{e.texto}</span>
                    </li>
                  ))}
                </ol>
              )}
              {t.email && (
                <div className="tablon__email">
                  <p className="tablon__asunto">
                    <span>Asunto:</span> {t.email.asunto}
                  </p>
                  {t.email.cuerpo.map((l, k) => (
                    <p key={k}>{l}</p>
                  ))}
                  <span className="tablon__boton">{t.email.boton}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
