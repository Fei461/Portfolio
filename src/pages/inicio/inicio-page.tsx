import { useEffect, type CSSProperties, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  CabeceraGrado,
  CasosBlancos,
  CasosMarrones,
  CasosNegros,
} from "@/components/cinturones";

const foto = `${import.meta.env.BASE_URL}assets/lara/salto.jpg`;

const tiempos = [
  {
    nombre: "Ukemi",
    significado: "Saber caer",
    ejemplo:
      "Lo primero que te enseñan en judo. En Stud-IA nos pasaron unas campañas de pago a orgánico cuando ya estaban pensadas. ¿Dolió? Un poco. Se rehicieron igual.",
  },
  {
    nombre: "Kuzushi",
    significado: "Desequilibrar",
    ejemplo:
      "Desmontar el brief antes de aceptarlo. En Iberia nos pedían hablar de sostenibilidad, y el problema real era que nadie se lo creía.",
  },
  {
    nombre: "Tsukuri",
    significado: "Colocarse",
    ejemplo:
      "Investigar y ordenar antes de lanzarme. Antes de escribir un solo mensaje B2B en Stud-IA, dividí el sector educativo en trece nichos.",
  },
  {
    nombre: "Kake",
    significado: "Ejecutar",
    ejemplo: "Ir a por todas. Talixea existe porque me cansé de buscarla y decidí hacerla yo.",
  },
];

// Con HashRouter, un ancla «#proyectos» cambiaría de ruta: se desplaza a mano.
function irAProyectos(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const destino = document.getElementById("proyectos");
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  destino?.scrollIntoView({ behavior: quieto ? "auto" : "smooth" });
  destino?.focus({ preventScroll: true });
}

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

export function InicioPage() {
  useEffect(() => {
    document.title = "Lara Feijóo, publicista con culo inquieto";
  }, []);

  return (
    <>
      <main>
        <section className="dojo-hero">
          <div className="dojo-hero__texto">
            <NombreProyectado />
            <p className="dojo-lema">Publicista con culo inquieto.</p>
            <div className="dojo-intro-caja">
              <p className="dojo-intro">
                Me muevo entre la estrategia, la marca y la reputación. Piso un tatami desde los siete
                años y trabajo igual que entreno: con constancia, preguntándolo todo y sin quedarme
                quieta hasta que algo sale bien.
              </p>
            </div>
            <p className="dojo-busco">
              <strong>Busco prácticas</strong> a tiempo completo a partir de abril de 2027.
            </p>
            <div className="dojo-acciones">
              <a className="dojo-boton" href="#/" onClick={irAProyectos}>
                Ver proyectos
              </a>
              <a className="dojo-boton dojo-boton--claro" href="mailto:lara.feijoo@gmail.com">
                Escribirme
              </a>
            </div>
          </div>

          <figure className="dojo-foto">
            <div className="dojo-foto__marco">
              <img
                src={foto}
                alt="Lara con la beca de graduación y un ramo de flores, levantando una pierna y con el pulgar arriba"
                width={1200}
                height={1600}
              />
            </div>
            <span className="dojo-foto__obi" aria-hidden="true" />
            <figcaption>El día que acabé la carrera. Quieta, poco.</figcaption>
          </figure>
        </section>

        <div className="dojo-cinturon">
          <p>
            Cinturón marrón en judo y azul en taekwondo. ¿En publicidad? Experta todavía no, y está
            bien.
          </p>
        </div>

        <section className="dojo-seccion" aria-labelledby="metodo">
          <h2 className="dojo-titulo" id="metodo">
            Trabajo un proyecto como una proyección.
          </h2>
          <p className="dojo-entradilla">
            En judo, una proyección tiene tres tiempos y una regla previa: saber caer. Llevo años
            repitiéndolos en el tatami y, sin darme cuenta, es también como trabajo fuera de él.
          </p>
          <ol className="dojo-tiempos">
            {tiempos.map((t) => (
              <li className="dojo-tiempo" key={t.nombre}>
                <h3 lang="ja-Latn">{t.nombre}</h3>
                <p className="dojo-tiempo__significado">{t.significado}</p>
                <p className="dojo-tiempo__ejemplo">{t.ejemplo}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="dojo-seccion"
          id="proyectos"
          tabIndex={-1}
          aria-labelledby="titulo-proyectos"
        >
          <h2 className="dojo-titulo" id="titulo-proyectos">
            Proyectos, ordenados por cinturón.
          </h2>
          <p className="dojo-entradilla">
            Como en el dojo, cada uno tiene su grado según lo que demuestra. Los de cinturón negro
            van en el orden en que te los contaría si nos sentáramos a tomar un café.
          </p>

          <div className="dojo-grado">
            <CabeceraGrado cinturon="negro" />
            <CasosNegros />
          </div>

          <div className="dojo-grado">
            <CabeceraGrado cinturon="marron" />
            <CasosMarrones />
          </div>

          <div className="dojo-grado">
            <CabeceraGrado cinturon="blanco" />
            <CasosBlancos />
            <p className="dojo-grado__mas">
              <Link to="/trabajo">Ver todos los proyectos con su contexto</Link>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
