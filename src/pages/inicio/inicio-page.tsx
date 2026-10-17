import { useEffect, type CSSProperties, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./dojo.css";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,300..800&display=swap";

const foto = `${import.meta.env.BASE_URL}assets/lara/salto.jpg`;

type Caso = {
  titulo: string;
  tipo: string;
  texto: string;
  to?: string;
  fuera?: { href: string; label: string };
};

// Orden pensado para una entrevista: primero la prueba profesional,
// después la iniciativa propia y luego la variedad de disciplinas.
const cinturonNegro: Caso[] = [
  {
    titulo: "Stud-IA",
    tipo: "Prácticas en marketing, enero a mayo de 2026",
    texto:
      "Cinco meses en una startup de IA para estudiantes con 80.000 usuarios al mes. Contenido, comunidad, campañas B2C y B2B, y X, Threads y Bluesky a mi cargo.",
    to: "/trabajo/stud-ia",
  },
  {
    titulo: "Talixea",
    tipo: "Proyecto propio, en marcha",
    texto:
      "Buscaba una app para aprender idiomas leyendo, en español y gratis. No existía, así que la hice sin saber programar: 40 libros y seis idiomas.",
    to: "/trabajo/talixea",
    fuera: { href: "https://talixea.es", label: "Visitar talixea.es" },
  },
  {
    titulo: "Santander",
    tipo: "Máster UC3M, web y encuesta hechas por mí",
    texto:
      "Un laboratorio web para evaluar el logo del banco con once criterios y una encuesta propia a 31 personas. Lo que la marca dice frente a lo que la gente percibe.",
    fuera: { href: "https://fei461.github.io/santander/", label: "Abrir el laboratorio" },
  },
  {
    titulo: "Iberia",
    tipo: "Grado URJC, en equipo",
    texto:
      "Parecía un problema de sostenibilidad. Era de credibilidad: una campaña que reconoce la huella en vez de prometer vuelos verdes.",
    to: "/trabajo/iberia",
  },
  {
    titulo: "Bruja Roja",
    tipo: "Grado URJC, en equipo",
    texto:
      "Identidad corporativa completa para una copa menstrual que habla como esa amiga que te dice lo que nadie se atreve.",
    to: "/trabajo/bruja-roja",
  },
  {
    titulo: "Warriors Arena",
    tipo: "Curso de RTVE, individual",
    texto:
      "Plan de distribución para un formato de competición física de diez episodios: ventanas, plataformas y venta internacional.",
    to: "/trabajo/warriors-arena",
  },
];

const cinturonMarron = [
  { titulo: "Ryanair", texto: "Comunicación interna para que la plantilla se sienta parte." },
  { titulo: "Torrons Vicens", texto: "El regalo que nadie quería y que acaba siendo el mejor." },
  { titulo: "M&M's Premium", texto: "Lanzamiento en España como agencia, del contrabriefing a los medios." },
  { titulo: "Tour C de C", texto: "Un Tinder publicitario en vídeo." },
  { titulo: "Revista Super Pop", texto: "Liderazgo explicado con Mean Girls, maquetado como una revista de los 2000." },
  { titulo: "BBVA", texto: "Fraude digital y jóvenes que se creen a salvo." },
  { titulo: "Oreo", texto: "Plan de medios para un público que vive en redes." },
];

const cinturonBlanco =
  "Matutano MIX, Brekkies, FNAC, Generación Z, Hermanos Chacón, Sra. Rushmore y El respeto en el fútbol.";

const tiempos = [
  {
    nombre: "Ukemi",
    significado: "Saber caer",
    ejemplo:
      "Lo primero que te enseñan en judo. En Stud-IA, unas campañas pensadas para pago tuvieron que rehacerse en orgánico cuando ya estaban ideadas. Se rehicieron.",
  },
  {
    nombre: "Kuzushi",
    significado: "Desequilibrar",
    ejemplo:
      "Mover el brief antes de aceptarlo. En Iberia, el problema que nos daban no era el problema real.",
  },
  {
    nombre: "Tsukuri",
    significado: "Colocarse",
    ejemplo:
      "Investigar y ordenar. Antes de escribir un mensaje B2B, segmenté el sector educativo en trece nichos.",
  },
  {
    nombre: "Kake",
    significado: "Ejecutar",
    ejemplo: "Lanzarse del todo. Talixea existe porque decidí hacerla en lugar de seguir buscándola.",
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
    if (!document.querySelector(`link[href="${FONT_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = FONT_URL;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="dojo">
      <header className="dojo-head">
        <Link to="/" className="dojo-head__firma">
          Lara Feijóo
        </Link>
        <nav aria-label="Principal">
          <a href="#/" onClick={irAProyectos}>
            Proyectos
          </a>
          <Link to="/sobre-mi">Sobre mí</Link>
          <Link to="/notas">Notas</Link>
          <Link to="/cv">CV</Link>
        </nav>
      </header>

      <main>
        <section className="dojo-hero">
          <div className="dojo-hero__texto">
            <NombreProyectado />
            <p className="dojo-lema">Publicista con culo inquieto.</p>
            <div className="dojo-intro-caja">
              <p className="dojo-intro">
                Estrategia, marca y reputación. Piso un tatami desde que tengo memoria y trabajo
                igual que entreno: sin quedarme quieta hasta que algo sale bien.
              </p>
            </div>
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
            Cinturón marrón en judo y azul en taekwondo. En publicidad, entrenando para el negro.
          </p>
        </div>

        <section className="dojo-seccion" aria-labelledby="metodo">
          <h2 className="dojo-titulo" id="metodo">
            Trabajo un proyecto como una proyección.
          </h2>
          <p className="dojo-entradilla">
            En judo, tirar a alguien tiene tres tiempos y una regla previa: saber caer. Llevo años
            repitiéndolos en el tatami y resulta que también sirven fuera.
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
            están en el orden en que te los enseñaría en una entrevista.
          </p>

          <div className="dojo-grado">
            <div className="dojo-grado__cabecera">
              <span className="dojo-grado__cinta" aria-hidden="true" />
              <h3>Cinturón negro</h3>
              <p className="dojo-grado__nota">Casos completos, con el razonamiento entero.</p>
            </div>
            <ol className="dojo-casos">
              {cinturonNegro.map((caso, n) => (
                <li className="dojo-caso" key={caso.titulo}>
                  <span className="dojo-caso__orden" aria-hidden="true">
                    {n + 1}
                  </span>
                  <div>
                    <h4 className="dojo-caso__titulo">{caso.titulo}</h4>
                    <span className="dojo-caso__tipo">{caso.tipo}</span>
                  </div>
                  <p className="dojo-caso__texto">{caso.texto}</p>
                  <div className="dojo-caso__enlaces">
                    {caso.to && <Link to={caso.to}>Ver caso</Link>}
                    {caso.fuera && (
                      <a href={caso.fuera.href} target="_blank" rel="noreferrer">
                        {caso.fuera.label}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="dojo-grado">
            <div className="dojo-grado__cabecera">
              <span
                className="dojo-grado__cinta"
                style={{ "--cinta": "var(--obi)" } as CSSProperties}
                aria-hidden="true"
              />
              <h3>Cinturón marrón</h3>
              <p className="dojo-grado__nota">Casos breves: el reto, lo que aporté y una pieza.</p>
            </div>
            <ul className="dojo-lista">
              {cinturonMarron.map((caso) => (
                <li key={caso.titulo}>
                  <strong>{caso.titulo}</strong>
                  <span>{caso.texto}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dojo-grado">
            <div className="dojo-grado__cabecera">
              <span
                className="dojo-grado__cinta"
                style={{ "--cinta": "var(--judogi)" } as CSSProperties}
                aria-hidden="true"
              />
              <h3>Cinturón blanco</h3>
              <p className="dojo-grado__nota">Donde empecé. Trabajos de la carrera que me enseñaron el oficio.</p>
            </div>
            <p className="dojo-archivo">{cinturonBlanco}</p>
          </div>
        </section>

        <section className="dojo-hajime" aria-labelledby="hajime">
          <div className="dojo-hajime__dentro">
            <h2 id="hajime" lang="ja-Latn">
              Hajime.
            </h2>
            <p>
              Es lo que dice el árbitro para que empiece el combate. Si tienes unas prácticas, un
              proyecto o una pregunta, empezamos cuando quieras.
            </p>
            <div className="dojo-acciones">
              <a className="dojo-boton dojo-boton--rojo" href="mailto:lara.feijoo@gmail.com">
                Escribir a lara.feijoo@gmail.com
              </a>
              <a
                className="dojo-boton dojo-boton--claro"
                href="https://www.linkedin.com/in/lara-feijoo"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <Link className="dojo-boton dojo-boton--claro" to="/cv">
                Ver CV
              </Link>
            </div>
          </div>
          <footer className="dojo-pie">
            <span>Lara Feijóo, 2026</span>
            <span>Hecho en Galapagar.</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
