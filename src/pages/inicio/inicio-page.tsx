import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Colgador } from "@/components/colgador";

const foto = `${import.meta.env.BASE_URL}assets/lara/salto.jpg`;

function NombreProyectado() {
  const lineas = ["Lara", "Feijóo"];
  let i = 0;
  return (
    <h1 className="dojo-nombre" aria-label="Lara Feijóo">
      {lineas.map((linea) => (
        <span className="dojo-nombre__linea" key={linea} aria-hidden="true">
          {[...linea].map((letra, j) => (
            <span
              className="dojo-nombre__letra"
              key={`${linea}-${j}`}
              style={{ "--i": i++ } as CSSProperties}
            >
              {letra}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

// La foto de la graduación tiene historia detrás: se le da la vuelta para leerla.
function FotoGraduacion() {
  const [vuelta, setVuelta] = useState(false);
  const detras = useRef<HTMLAnchorElement>(null);
  const delante = useRef<HTMLButtonElement>(null);
  const girada = useRef(false);
  // Al girarla, el foco acompaña a la cara que se ve.
  useEffect(() => {
    if (!girada.current) return;
    (vuelta ? detras : delante).current?.focus({ preventScroll: true });
  }, [vuelta]);
  const girar = (v: boolean) => {
    girada.current = true;
    setVuelta(v);
  };
  return (
    <div className={vuelta ? "foto-giro foto-giro--vuelta" : "foto-giro"}>
      <span className="dojo-foto__obi" aria-hidden="true" />
      <div className="foto-giro__cara foto-giro__delante" aria-hidden={vuelta}>
        <img
          src={foto}
          alt="Lara con la beca de graduación y un ramo de flores, levantando una pierna y con el pulgar arriba"
          width={1200}
          height={1600}
        />
        <button ref={delante} type="button" className="foto-giro__boton" onClick={() => girar(true)} tabIndex={vuelta ? -1 : 0}>
          Graduada, y sin la camiseta del Atleti <span aria-hidden="true">↻</span>
        </button>
      </div>
      <div className="foto-giro__cara foto-giro__detras" aria-hidden={!vuelta}>
        <p>
          Si el Atleti hubiera ganado la Champions, me habría graduado con la camiseta. No fue el caso, así
          que tocó ir «formal»: un top y un pantalón cómodo para seguir haciendo la cabra loca.
        </p>
        <p>
          Eso sí, los calcetines no se negociaban: perros salchicha con el culo en forma de corazón. Quien me
          conoce sabe que me gustan los calcetines originales.
        </p>
        <Link ref={detras} to="/sobre-mi" tabIndex={vuelta ? 0 : -1}>
          Más sobre mí →
        </Link>
        <button type="button" className="foto-giro__volver" onClick={() => girar(false)} tabIndex={vuelta ? 0 : -1}>
          <span aria-hidden="true">↺</span> Ver la foto
        </button>
      </div>
    </div>
  );
}

// La portada es el tatami entero en una pantalla: quién soy a la izquierda y,
// en la pared, los cinturones que llevan a los proyectos.
export function InicioPage() {
  useEffect(() => {
    document.title = "Lara Feijóo, publicista con culo inquieto";
  }, []);

  return (
    <main className="dojo-hero dojo-hero--pantalla">
      <div className="dojo-hero__texto">
        <NombreProyectado />
        <p className="dojo-lema">Publicista con culo inquieto.</p>
        <div className="dojo-intro-caja">
          <p className="dojo-intro">
            Ni copy, ni arte, ni cuentas, ni planner: me lo paso bien en todas. Si me haces elegir,
            relaciones públicas, marca, reputación y comunicación interna. Quiero entender a la gente
            y partirme la cabeza por la mejor solución, no solo resolver el briefing.
          </p>
        </div>
        <p className="dojo-busco">
          <strong>Busco prácticas</strong> a tiempo completo a partir de abril de 2027.
        </p>
        <p className="dojo-pista">
          Coge un cinturón de la pared para ver mis proyectos <span aria-hidden="true">→</span>
        </p>
      </div>

      <div className="dojo-pared">
        <FotoGraduacion />
        <Colgador />
      </div>
    </main>
  );
}
