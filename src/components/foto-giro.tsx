import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

// Una foto con historia detrás: se le da la vuelta para leerla.
export function FotoGiro({
  src,
  alt,
  ancho,
  alto,
  frente,
  detras,
  enlace,
  className = "",
}: {
  src: string;
  alt: string;
  ancho: number;
  alto: number;
  /** Lo que se lee debajo de la foto, antes de girarla. */
  frente: ReactNode;
  /** La historia, por detrás. */
  detras: ReactNode;
  enlace?: { to: string; texto: string };
  className?: string;
}) {
  const [vuelta, setVuelta] = useState(false);
  const atras = useRef<HTMLButtonElement>(null);
  const delante = useRef<HTMLButtonElement>(null);
  const girada = useRef(false);
  // Al girarla, el foco acompaña a la cara que se ve.
  useEffect(() => {
    if (!girada.current) return;
    (vuelta ? atras : delante).current?.focus({ preventScroll: true });
  }, [vuelta]);
  const girar = (v: boolean) => {
    girada.current = true;
    setVuelta(v);
  };
  return (
    <div className={`foto-giro ${vuelta ? "foto-giro--vuelta " : ""}${className}`}>
      <span className="dojo-foto__obi" aria-hidden="true" />
      <div className="foto-giro__cara foto-giro__delante" aria-hidden={vuelta}>
        <img src={src} alt={alt} width={ancho} height={alto} />
        <button ref={delante} type="button" className="foto-giro__boton" onClick={() => girar(true)} tabIndex={vuelta ? -1 : 0}>
          {frente}{" "}
          <span className="foto-giro__accion">
            Dale la vuelta <span aria-hidden="true">↻</span>
          </span>
        </button>
      </div>
      <div className="foto-giro__cara foto-giro__detras" aria-hidden={!vuelta}>
        {detras}
        {enlace && (
          <Link to={enlace.to} tabIndex={vuelta ? 0 : -1}>
            {enlace.texto}
          </Link>
        )}
        <button ref={atras} type="button" className="foto-giro__volver" onClick={() => girar(false)} tabIndex={vuelta ? 0 : -1}>
          <span aria-hidden="true">↺</span> Ver la foto
        </button>
      </div>
    </div>
  );
}
