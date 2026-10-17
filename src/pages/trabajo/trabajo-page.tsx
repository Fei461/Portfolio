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

const orden: Cinturon[] = ["negro", "marron", "blanco"];
const esCinturon = (v: string | null): v is Cinturon => orden.includes(v as Cinturon);
const siguiente: Record<Cinturon, Cinturon> = { negro: "marron", marron: "blanco", blanco: "negro" };

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
          <video ref={video} src={`${p.video}#t=0.5`} muted loop playsInline preload="metadata" aria-hidden="true" />
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
        <span className="dorsal__tipo">{p.tipo}</span>
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
    el.addEventListener("wheel", alRodar, { passive: false });
    el.addEventListener("scroll", alMover, { passive: true });
    return () => {
      el.removeEventListener("wheel", alRodar);
      el.removeEventListener("scroll", alMover);
    };
  }, [clave]);

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
        onKeyDown={(e) => {
          if (!pista.current) return;
          if (e.key === "ArrowRight") pista.current.scrollBy({ left: 360, behavior: "smooth" });
          if (e.key === "ArrowLeft") pista.current.scrollBy({ left: -360, behavior: "smooth" });
        }}
      >
        {children}
      </ul>
      <div className="pista__progreso" aria-hidden="true">
        <span style={{ transform: `scaleX(${Math.max(progreso, 0.04)})` }} />
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
              {cinturon === "blanco" ? "Volver a empezar por los casos completos" : "Seguir con el siguiente cinturón"}
            </span>
          </button>
        </li>
      </Pista>

      <p className="trabajo__ayuda">Arrastra, usa la rueda o las flechas del teclado.</p>
    </main>
  );
}
