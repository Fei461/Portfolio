import { useEffect, type CSSProperties } from "react";
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

// La portada es el dojo entero en una pantalla: quién soy a la izquierda y,
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
            Me muevo entre la estrategia, la marca y la reputación. Piso un tatami desde los siete
            años y trabajo igual que entreno: con constancia, preguntándolo todo y sin quedarme quieta
            hasta que algo sale bien.
          </p>
        </div>
        <p className="dojo-busco">
          <strong>Busco prácticas</strong> a tiempo completo a partir de abril de 2027.
        </p>
        <p className="dojo-pista">
          Coge un cinturón de la pared para ver mis proyectos.
        </p>
      </div>

      <div className="dojo-pared">
        <Colgador
          extra={
            <Link to="/sobre-mi" className="dojo-foto dojo-foto--pared">
              <span className="dojo-foto__cordel" aria-hidden="true" />
              <span className="dojo-foto__marco">
                <img
                  src={foto}
                  alt="Lara con la beca de graduación y un ramo de flores, levantando una pierna y con el pulgar arriba"
                  width={1200}
                  height={1600}
                />
                <span className="dojo-foto__pie">
                  Quieta, poco. <strong>Sobre mí</strong>
                </span>
              </span>
            </Link>
          }
        />
      </div>
    </main>
  );
}
