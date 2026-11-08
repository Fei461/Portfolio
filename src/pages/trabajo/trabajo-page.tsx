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
import { perchas, porPercha, type Percha, type Proyecto } from "@/data/proyectos";
import "./trabajo.css";

const orden: Percha[] = ["azul", "blanco", "archivo"];
const esPercha = (v: string | null): v is Percha => orden.includes(v as Percha);
const siguiente: Record<Percha, Percha> = { azul: "blanco", blanco: "archivo", archivo: "azul" };

// El grado de la URJC se da por supuesto en las tarjetas (lo dice la nota de arriba).
const tipoCorto = (t: string) => {
  const r = t.replace(/^Grado URJC, /, "");
  return r.charAt(0).toUpperCase() + r.slice(1);
};

// Archivo: un cajón de archivador. Se tira de una carpeta y su expediente se abre sobre la mesa.
function Archivo({ lista }: { lista: Proyecto[] }) {
  const etiqueta = { escrito: "Por escrito", campana: "Campaña de clase" } as const;
  const ordenados = [...lista].sort((a, b) => (a.grupo === b.grupo ? 0 : a.grupo === "escrito" ? -1 : 1));
  const [abierta, setAbierta] = useState(0);
  const carpetas = useRef<(HTMLButtonElement | null)[]>([]);
  const p = ordenados[abierta];
  const [miParte, ...resto] = p.detalle ?? [];
  const esMiParte = Boolean(miParte) && /(mío|mía|me encargué|me dediqué|individual)/i.test(miParte);
  const mover = (k: number) => {
    const n = (k + ordenados.length) % ordenados.length;
    setAbierta(n);
    carpetas.current[n]?.focus();
  };
  return (
    <div className="cajon">
      <div className="cajon__mueble">
        <div className="cajon__carpetas" role="tablist" aria-label="Expedientes del archivo" aria-orientation="vertical">
          {ordenados.map((x, k) => (
            <button
              key={x.slug}
              ref={(el) => {
                carpetas.current[k] = el;
              }}
              type="button"
              role="tab"
              id={`carpeta-${x.slug}`}
              aria-selected={k === abierta}
              aria-controls="expediente-abierto"
              tabIndex={k === abierta ? 0 : -1}
              className={`carpeta carpeta--${x.grupo}${k === abierta ? " carpeta--fuera" : ""}`}
              style={{ "--n": k } as CSSProperties}
              onClick={() => setAbierta(k)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                  e.preventDefault();
                  mover(k + 1);
                }
                if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  mover(k - 1);
                }
              }}
            >
              <span className="carpeta__pestana">
                <span aria-hidden="true">{String(k + 1).padStart(2, "0")}</span> {x.titulo}
              </span>
              <span className="carpeta__tipo">{x.grupo ? etiqueta[x.grupo] : "Trabajo"}</span>
            </button>
          ))}
        </div>
        <div className="cajon__frente" aria-hidden="true">
          <span className="cajon__placa">Archivo · Grado URJC</span>
          <span className="cajon__tirador" />
        </div>
      </div>

      <article
        id="expediente-abierto"
        role="tabpanel"
        aria-labelledby={`carpeta-${p.slug}`}
        className={`expediente expediente--${p.grupo}`}
        key={p.slug}
      >
        <span className="expediente__pestana">{p.grupo ? etiqueta[p.grupo] : "Trabajo"}</span>
        <div className="expediente__hoja">
          <span className="expediente__n" aria-hidden="true">
            {String(abierta + 1).padStart(2, "0")}
          </span>
          <h2>{p.titulo}</h2>
          <p className="expediente__resumen">{p.resumen}</p>
          {esMiParte && <p className="expediente__mia">{miParte}</p>}
          {(esMiParte ? resto : p.detalle ?? []).map((d) => (
            <p key={d}>{d}</p>
          ))}
          <p className="expediente__tipo">{tipoCorto(p.tipo)}</p>
          <nav className="expediente__pasar" aria-label="Pasar de expediente">
            <button type="button" onClick={() => setAbierta((abierta - 1 + ordenados.length) % ordenados.length)}>
              ← Anterior
            </button>
            <span>
              {abierta + 1} de {ordenados.length}
            </span>
            <button type="button" onClick={() => setAbierta((abierta + 1) % ordenados.length)}>
              Siguiente →
            </button>
          </nav>
        </div>
      </article>
    </div>
  );
}

// Tarjeta tipo dorsal de competición: número grande, imagen o vídeo y nombre.
function Dorsal({ p, n, percha }: { p: Proyecto; n: number; percha: Percha }) {
  const video = useRef<HTMLVideoElement>(null);
  const reproducir = () => {
    const v = video.current;
    if (v && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {});
  };
  const parar = () => video.current?.pause();

  const contenido = (
    <>
      {p.origen && <span className="dorsal__origen">{p.origen}</span>}
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
      className={`dorsal dorsal--${percha}`}
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
  const pedido = params.get("percha");
  const percha: Percha = esPercha(pedido) ? pedido : "azul";
  const lista = porPercha(percha);

  useEffect(() => {
    document.title = `${perchas[percha].nombre}, proyectos de Lara Feijóo`;
  }, [percha]);

  return (
    <main className={`trabajo trabajo--${percha}`}>
      <header className="trabajo__cabecera">
        <h1 className="trabajo__titulo">Proyectos</h1>
        <div className="trabajo__grados" role="tablist" aria-label="Tipo de proyecto">
          {orden.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={c === percha}
              className={`grado-boton grado-boton--${c}`}
              onClick={() => setParams({ percha: c }, { replace: true })}
            >
              <span className="grado-boton__cinta" aria-hidden="true" />
              {perchas[c].nombre}
              <span className="grado-boton__n">{porPercha(c).length}</span>
            </button>
          ))}
        </div>
        <p className="trabajo__nota">{perchas[percha].nota}</p>
      </header>

      {percha === "archivo" ? (
        <Archivo lista={lista} key="archivo" />
      ) : (
      <Pista clave={percha} key={percha}>
        {lista.map((p, i) => (
          <Dorsal key={p.slug} p={p} n={i + 1} percha={percha} />
        ))}
        <li className="dorsal dorsal--fin">
          <button
            type="button"
            className="dorsal__enlace dorsal__siguiente"
            onClick={() => setParams({ percha: siguiente[percha] }, { replace: true })}
            style={{ "--cinta": `var(--cinta-${siguiente[percha]})` } as CSSProperties}
          >
            <span className="dorsal__siguiente-cinta" aria-hidden="true" />
            <strong>{perchas[siguiente[percha]].nombre}</strong>
            <span>
              {siguiente[percha] === "archivo" ? "Los trabajos de la carrera" : "Seguir por aquí"}
            </span>
          </button>
        </li>
      </Pista>
      )}

      {percha !== "archivo" && (
        <p className="trabajo__ayuda">
          <span className="ayuda-raton">Arrastra, usa la rueda, las flechas del teclado o los botones.</span>
          <span className="ayuda-tactil">Desliza para ver más.</span>
        </p>
      )}
    </main>
  );
}
