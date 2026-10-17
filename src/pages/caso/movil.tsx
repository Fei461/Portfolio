import { useEffect, useRef, useState } from "react";

type Video = { src: string; titulo: string; red: string; original?: string };

// Un móvil con las piezas en vertical, como un feed: se desliza y suena el que se ve.
export function Movil({ videos }: { videos: Video[] }) {
  const pantalla = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [actual, setActual] = useState(0);
  const [sonido, setSonido] = useState(false);

  // El vídeo que ocupa la pantalla se reproduce; el resto, en pausa.
  useEffect(() => {
    const raiz = pantalla.current;
    if (!raiz) return;
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          const i = refs.current.indexOf(v);
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            setActual(i);
            if (!quieto) v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { root: raiz, threshold: [0, 0.6, 1] },
    );
    refs.current.forEach((v) => v && obs.observe(v));
    return () => obs.disconnect();
  }, [videos]);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (v) v.muted = !(sonido && i === actual);
    });
  }, [sonido, actual]);

  const ir = (i: number) => {
    const n = (i + videos.length) % videos.length;
    refs.current[n]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const v = videos[actual];

  return (
    <div className="movil">
      <div className="movil__aparato">
        <span className="movil__isla" aria-hidden="true" />
        <div
          ref={pantalla}
          className="movil__pantalla"
          tabIndex={0}
          aria-label="Vídeos publicados. Desliza o usa los botones para pasar."
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              ir(actual + 1);
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              ir(actual - 1);
            }
          }}
        >
          {videos.map((x, i) => (
            <video
              key={x.src}
              ref={(el) => {
                refs.current[i] = el;
              }}
              src={`${x.src}#t=0.1`}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${x.titulo}, vídeo para ${x.red}`}
            />
          ))}
        </div>
        <div className="movil__rotulo" aria-live="polite">
          <strong>{v.titulo}</strong>
          <span>{v.red}</span>
        </div>
      </div>

      <div className="movil__mandos">
        <p className="movil__cuenta">
          {actual + 1} / {videos.length}
        </p>
        <button type="button" onClick={() => ir(actual - 1)}>
          Anterior
        </button>
        <button type="button" onClick={() => ir(actual + 1)}>
          Siguiente
        </button>
        <button type="button" aria-pressed={sonido} onClick={() => setSonido(!sonido)}>
          {sonido ? "Quitar sonido" : "Poner sonido"}
        </button>
        {v.original && (
          <a href={v.original} target="_blank" rel="noreferrer">
            Ver la publicación original
          </a>
        )}
      </div>
    </div>
  );
}
