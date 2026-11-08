import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Colgador } from "@/components/colgador";
import { FotoGiro } from "@/components/foto-giro";

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
  { img: caso("talixea/portada.jpg"), cifra: "Una app", texto: "hecha sin saber programar", to: "/trabajo/talixea" },
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
  return (
    <FotoGiro
      src={foto}
      alt="Lara con la beca de graduación y un ramo de flores, levantando una pierna y con el pulgar arriba"
      ancho={1200}
      alto={1600}
      frente="Mi graduación tiene historia."
      enlace={{ to: "/sobre-mi", texto: "Más sobre mí →" }}
      detras={
        <>
          <p>
            Si el Atleti hubiera ganado la Champions, me habría graduado con la camiseta. No fue el caso, así
            que tocó ir «formal»: un top y un pantalón cómodo para seguir haciendo la cabra loca.
          </p>
          <p>
            Eso sí, por muy «formal» que fuera el acto, mis calcetines seguían siendo mi seña de identidad: perros
            salchicha con el culo en forma de corazón.
          </p>
        </>
      }
    />
  );
}

// La portada es el tatami entero en una pantalla: quién soy a la izquierda y,
// en la pared, los judogis que llevan a los proyectos.
export function InicioPage() {
  useEffect(() => {
    document.title = "Lara Feijóo, publicidad, relaciones públicas y culo inquieto";
  }, []);

  return (
    <main className="dojo-hero dojo-hero--pantalla">
      <div className="dojo-hero__texto">
        <NombreProyectado />
        <p className="dojo-lema">Publicidad, RRPP y culo inquieto.</p>
        <p className="dojo-rol">
          Graduada en Publicidad y RRPP (URJC) · Máster en Comunicación Publicitaria (UC3M)
        </p>
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
            O coge un judogi de la pared <span aria-hidden="true">→</span>
          </p>
        </nav>
      </div>

      <div className="dojo-pared">
        <div className="dojo-pared__arriba">
          <p className="dojo-rotulo">
            <strong>Mis proyectos</strong>
            <span>Elige un judogi: cada uno lleva a un tipo de trabajo. En la carpeta, los de la carrera.</span>
          </p>
          <FotoGraduacion />
        </div>
        <Colgador />
      </div>
    </main>
  );
}
