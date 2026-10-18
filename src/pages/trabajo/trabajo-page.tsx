import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { cinturones, porCinturon, type Cinturon, type Proyecto } from "@/data/proyectos";
import "./trabajo.css";

const orden: Cinturon[] = ["negro", "verde", "archivo"];
const esCinturon = (v: string | null): v is Cinturon => orden.includes(v as Cinturon);
const siguiente: Record<Cinturon, Cinturon> = { negro: "verde", verde: "archivo", archivo: "negro" };

// El grado de la URJC se da por supuesto en las tarjetas (lo dice la nota de arriba).
const tipoCorto = (t: string) => {
  const r = t.replace(/^Grado URJC, /, "");
  return r.charAt(0).toUpperCase() + r.slice(1);
};

// Archivo: dos grupos de fichas que se despliegan para ver de qué va cada trabajo.
function Archivo({ lista }: { lista: Proyecto[] }) {
  const [abierto, setAbierto] = useState<string | null>(null);
  const grupos: { id: "escrito" | "campana"; titulo: string; texto: string }[] = [
    { id: "escrito", titulo: "Por escrito", texto: "Estrategia, relaciones públicas y análisis, sin piezas visuales." },
    { id: "campana", titulo: "Campañas de clase", texto: "Ideas, conceptos y acciones de los primeros cursos." },
  ];
  let n = 0;
  return (
    <div className="archivo-grupos">
      {grupos.map((g) => (
        <section key={g.id} className="archivo-grupo" aria-labelledby={`archivo-${g.id}`}>
          <header>
            <h2 id={`archivo-${g.id}`}>{g.titulo}</h2>
            <p>{g.texto}</p>
          </header>
          <ul className="archivo">
            {lista
              .filter((p) => p.grupo === g.id)
              .map((p) => {
                n += 1;
                const abiertoAqui = abierto === p.slug;
                return (
                  <li key={p.slug} style={{ "--n": n } as CSSProperties} className={abiertoAqui ? "abierto" : undefined}>
                    <button
                      type="button"
                      aria-expanded={abiertoAqui}
                      aria-controls={`ficha-${p.slug}`}
                      onClick={() => setAbierto(abiertoAqui ? null : p.slug)}
                    >
                      <span className="archivo__n" aria-hidden="true">
                        {String(n).padStart(2, "0")}
                      </span>
                      <strong>{p.titulo}</strong>
                      <span className="archivo__resumen">{p.resumen}</span>
                      <span className="archivo__tipo">{p.tipo}</span>
                      <span className="archivo__mas" aria-hidden="true">
                        {abiertoAqui ? "−" : "+"}
                      </span>
                    </button>
                    {p.detalle && (
                      <div id={`ficha-${p.slug}`} className="archivo__ficha" hidden={!abiertoAqui}>
                        {p.detalle.map((d) => (
                          <p key={d}>{d}</p>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </section>
      ))}
    </div>
  );
}

// Tarjeta tipo dorsal de competición: número grande, imagen o vídeo y nombre.
function Dorsal({ p, n, cinturon }: { p: Proyecto; n: number; cinturon: Cinturon }) {
  const video = useRef<HTMLVideoElement>(null);
  const reproducir = () => {
    const v = video.current;
    if (v && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {});
  };
  const parar = () => video.current?.pause();

  const contenido = (
    <>
      <span className="dorsal__numero" aria-hidden="true">
        {String(n).padStart(2, "0")}
      </span>
      <span className="dorsal__visual">
        {p.video ? (
          <video
            ref={video}
            src={p.video}
            poster={p.poster}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        ) : p.portada ? (
          <img src={p.portada} alt="" loading="lazy" draggable={false} />
        ) : (
          <span className="dorsal__tipografia" aria-hidden="true">
            {p.titulo}
          </span>
        )}
      </span>
      <span className="dorsal__texto">
        <strong className="dorsal__titulo">{p.titulo}</strong>
        <span className="dorsal__tipo">{tipoCorto(p.tipo)}</span>
        <span className="dorsal__resumen">{p.resumen}</span>
        {p.pagina && <span className="dorsal__ver">Ver caso</span>}
      </span>
    </>
  );

  return (
    <li
      className={`dorsal dorsal--${cinturon}`}
      style={{ "--n": n } as CSSProperties}
      onMouseEnter={reproducir}
      onMouseLeave={parar}
    >
      {p.pagina ? (
        <Link to={`/trabajo/${p.slug}`} className="dorsal__enlace" draggable={false} onFocus={reproducir} onBlur={parar}>
          {contenido}
        </Link>
      ) : (
        <div className="dorsal__enlace">{contenido}</div>
      )}
    </li>
  );
}

// Pista horizontal: rueda del ratón, arrastre y flechas del teclado.
function Pista({ children, clave }: { children: ReactNode; clave: string }) {
  const pista = useRef<HTMLUListElement>(null);
  const arrastre = useRef({ activo: false, x: 0, scroll: 0, movido: false });
  const [progreso, setProgreso] = useState(0);

  useEffect(() => {
    const el = pista.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    const alRodar = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      if (el.scrollWidth <= el.clientWidth) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 1.2 });
    };
    const alMover = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgreso(max > 0 ? el.scrollLeft / max : 0);
    };
    alMover();
    // Las flechas del teclado mueven la pista estés donde estés de la página.
    const alTeclear = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("input, textarea, select, [role='tablist']")) return;
      if (e.key === "ArrowRight") desplazar(1);
      if (e.key === "ArrowLeft") desplazar(-1);
    };
    window.addEventListener("keydown", alTeclear);
    el.addEventListener("wheel", alRodar, { passive: false });
    el.addEventListener("scroll", alMover, { passive: true });
    return () => {
      window.removeEventListener("keydown", alTeclear);
      el.removeEventListener("wheel", alRodar);
      el.removeEventListener("scroll", alMover);
    };
  }, [clave]);

  const desplazar = (sentido: 1 | -1) => {
    const el = pista.current;
    if (!el) return;
    const carta = el.querySelector<HTMLElement>(".dorsal");
    const paso = carta ? carta.offsetWidth + 24 : 360;
    el.scrollBy({ left: sentido * paso, behavior: "smooth" });
  };

  const abajo = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !pista.current) return;
    arrastre.current = { activo: true, x: e.clientX, scroll: pista.current.scrollLeft, movido: false };
  };
  const mover = (e: PointerEvent<HTMLUListElement>) => {
    const a = arrastre.current;
    if (!a.activo || !pista.current) return;
    const dx = e.clientX - a.x;
    if (Math.abs(dx) > 6) {
      a.movido = true;
      pista.current.classList.add("pista--arrastrando");
    }
    pista.current.scrollLeft = a.scroll - dx;
  };
  const soltar = () => {
    arrastre.current.activo = false;
    pista.current?.classList.remove("pista--arrastrando");
  };
  // Si se ha arrastrado, el clic no abre el caso.
  const alClic = (e: MouseEvent) => {
    if (arrastre.current.movido) {
      e.preventDefault();
      e.stopPropagation();
      arrastre.current.movido = false;
    }
  };

  return (
    <>
      <ul
        ref={pista}
        className="pista"
        tabIndex={0}
        aria-label="Proyectos. Desplázate con la rueda, arrastrando o con las flechas."
        onPointerDown={abajo}
        onPointerMove={mover}
        onPointerUp={soltar}
        onPointerLeave={soltar}
        onClickCapture={alClic}
      >
        {children}
      </ul>
      <div className="pista__mandos">
        <button type="button" onClick={() => desplazar(-1)} disabled={progreso <= 0.001} aria-label="Proyectos anteriores">
          ←
        </button>
        <div className="pista__progreso" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(progreso, 0.04)})` }} />
        </div>
        <button type="button" onClick={() => desplazar(1)} disabled={progreso >= 0.999} aria-label="Más proyectos">
          →
        </button>
      </div>
    </>
  );
}

export function TrabajoPage() {
  const [params, setParams] = useSearchParams();
  const pedido = params.get("cinturon");
  const cinturon: Cinturon = esCinturon(pedido) ? pedido : "negro";
  const lista = porCinturon(cinturon);

  useEffect(() => {
    document.title = `${cinturones[cinturon].nombre}, proyectos de Lara Feijóo`;
  }, [cinturon]);

  return (
    <main className={`trabajo trabajo--${cinturon}`}>
      <header className="trabajo__cabecera">
        <h1 className="trabajo__titulo">Proyectos</h1>
        <div className="trabajo__grados" role="tablist" aria-label="Cinturón">
          {orden.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={c === cinturon}
              className={`grado-boton grado-boton--${c}`}
              onClick={() => setParams({ cinturon: c }, { replace: true })}
            >
              <span className="grado-boton__cinta" aria-hidden="true" />
              {cinturones[c].nombre}
              <span className="grado-boton__n">{porCinturon(c).length}</span>
            </button>
          ))}
        </div>
        <p className="trabajo__nota">{cinturones[cinturon].nota}</p>
      </header>

      {cinturon === "archivo" ? (
        <Archivo lista={lista} key="archivo" />
      ) : (
      <Pista clave={cinturon} key={cinturon}>
        {lista.map((p, i) => (
          <Dorsal key={p.slug} p={p} n={i + 1} cinturon={cinturon} />
        ))}
        <li className="dorsal dorsal--fin">
          <button
            type="button"
            className="dorsal__enlace dorsal__siguiente"
            onClick={() => setParams({ cinturon: siguiente[cinturon] }, { replace: true })}
            style={{ "--cinta": `var(--cinta-${siguiente[cinturon]})` } as CSSProperties}
          >
            <span className="dorsal__siguiente-cinta" aria-hidden="true" />
            <strong>{cinturones[siguiente[cinturon]].nombre}</strong>
            <span>
              {siguiente[cinturon] === "archivo" ? "Los trabajos de la carrera" : "Seguir con el siguiente cinturón"}
            </span>
          </button>
        </li>
      </Pista>
      )}

      {cinturon !== "archivo" && (
        <p className="trabajo__ayuda">Arrastra, usa la rueda, las flechas del teclado o los botones.</p>
      )}
    </main>
  );
}
