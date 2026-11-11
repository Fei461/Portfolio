import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Colgador } from "@/components/colgador";
import { FotoGiro } from "@/components/foto-giro";

const foto = `${import.meta.env.BASE_URL}assets/lara/salto.jpg`;

function NombreProyectado() {
  const lineas = ["Lara Feijóo", "Vázquez"];
  let i = 0;
  return (
    <h1 className="dojo-nombre dojo-nombre--dos" aria-label="Lara Feijóo Vázquez">
      {lineas.map((linea) => (
        <span className="dojo-nombre__linea" key={linea} aria-hidden="true">
          {[...linea].map((letra, j) => (
            <span
              className="dojo-nombre__letra"
              key={`${linea}-${j}`}
              style={{ "--i": i++ } as CSSProperties}
            >
              {letra === " " ? " " : letra}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}


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
    <button type="button" className="dojo-correo" onClick={copiar} data-evento="Copiar correo">
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
        <p className="dojo-busco">
          <strong>Busco prácticas</strong> a tiempo completo a partir de abril de 2027.
          <Correo />
        </p>
        <Link to="/minuto" className="dojo-boton dojo-dame-minuto">
          ¿Vas con prisa? Dame un minuto
        </Link>
      </div>

      <div className="dojo-pared">
        <div className="dojo-pared__arriba">
          <p className="dojo-rotulo">
            <strong>Mis proyectos</strong>
            <span>Elige un judogi</span>
          </p>
          <FotoGraduacion />
        </div>
        <Colgador />
      </div>
    </main>
  );
}
