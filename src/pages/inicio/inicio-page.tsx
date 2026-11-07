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

const caso = (file: string) => `${import.meta.env.BASE_URL}assets/casos/${file}`;

// Las pruebas más fuertes, a un clic desde la portada.
const minuto = [
  { img: caso("stud-ia/poster.jpg"), cifra: "36.000", texto: "visualizaciones en Stud‑IA", to: "/trabajo/stud-ia" },
  { img: caso("tfg-bbva/brecha.jpg"), cifra: "248", texto: "respuestas en mi TFG", to: "/trabajo/tfg-bbva" },
  { img: caso("talixea/portada.png"), cifra: "Una app", texto: "hecha sin saber programar", to: "/trabajo/talixea" },
];

const correo = "lara.feijoo@gmail.com";

// El correo a la vista, por si «Escríbeme» no abre nada en quien lo pulsa.
function Correo() {
  const [copiado, setCopiado] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(correo);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1800);
    } catch {
      window.location.href = `mailto:${correo}`;
    }
  };
  return (
    <button type="button" className="dojo-correo" onClick={copiar}>
      {correo} <span aria-live="polite">{copiado ? "Copiado" : "Copiar"}</span>
    </button>
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
          Eso sí, por muy «formal» que fuera el acto, mis calcetines seguían siendo mi seña de identidad: perros
          salchicha con el culo en forma de corazón.
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
        <p className="dojo-rol">Estudiante del Máster en Comunicación Publicitaria (UC3M)</p>
        <div className="dojo-intro-caja">
          <p className="dojo-intro">
            No me defino como copy, ni como arte, ni como cuentas, ni como planner. Si tuviera que
            decantarme, elegiría las relaciones públicas, la gestión de marca, la reputación y la
            comunicación interna. Quiero entender a la gente y partirme la cabeza buscando la mejor
            solución para la marca.
          </p>
        </div>
        <p className="dojo-busco">
          <strong>Busco prácticas</strong> a tiempo completo a partir de abril de 2027.
          <Correo />
        </p>
        <nav className="dojo-minuto" aria-label="Lo mejor, en un clic">
          <p>Si solo tienes un minuto:</p>
          <ul>
            {minuto.map((m) => (
              <li key={m.to}>
                <Link to={m.to}>
                  <img src={m.img} alt="" width={160} height={72} />
                  <strong>{m.cifra}</strong> <span>{m.texto}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="dojo-minuto__pista">
            O coge un cinturón de la pared <span aria-hidden="true">→</span>
          </p>
        </nav>
      </div>

      <div className="dojo-pared">
        <FotoGraduacion />
        <Colgador />
      </div>
    </main>
  );
}
