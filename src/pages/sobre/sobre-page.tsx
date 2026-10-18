import { useEffect, useRef, useState, type ReactNode } from "react";
import { Sigue } from "@/components/sigue";
import { Link, useSearchParams } from "react-router-dom";
import { colores, tiempos } from "@/data/metodo";
import { perfil } from "@/data/perfil";
import "./paginas.css";
import "../caso/combate.css";

const foto = `${import.meta.env.BASE_URL}assets/lara/cascada.jpg`;

// Subrayado como mis apuntes: verde lo que elijo, naranja lo que me mueve, azul cómo pienso.
function Sub({ c, children }: { c: "azul" | "naranja" | "verde"; children: ReactNode }) {
  return <mark className={`sub sub--${c}`}>{children}</mark>;
}

function QuienSoy() {
  return (
    <div className="asalto__prosa quien">
      <h2>Puedo encajar en todas partes (y en ninguna a la vez)</h2>
      <p className="quien__leyenda" aria-hidden="true">
        Subrayado como mis apuntes: <span className="sub sub--verde">lo que elijo</span>{" "}
        <span className="sub sub--naranja">lo que me mueve</span>{" "}
        <span className="sub sub--azul">cómo pienso</span>
      </p>
      <p className="quien__lead">
        De pequeña me apunté a todos los deportes hasta que encontré el judo. En la publicidad me está
        pasando un poco lo mismo.
      </p>
      <p>
        No me defino como copy, ni como arte, ni como cuentas, ni como planner. Pero si tengo que
        decantarme, me quedo con <Sub c="verde">las relaciones públicas, la gestión de marca, la
        reputación y la comunicación interna</Sub>. No quiero ser la cara visible de nada ni busco los
        premios: <Sub c="naranja">quiero entender a la gente</Sub>. Me mueve la psicología de la
        comunicación y partirme la cabeza buscando la mejor solución para la marca, no quedarme en
        resolver el briefing.
      </p>
      <p>
        Me lo paso genial en un brainstorming diciendo locuras, y me lo paso igual de bien dándoles forma
        después. Y luego están <Sub c="azul">los números: me encanta analizar qué ha pasado y, sobre
        todo, por qué</Sub>. Soy un poco Barbie en esto, siento que puedo serlo todo. Por eso creo que
        encajo en una agencia pequeña, de las que hay que tocar todos los palos.
      </p>
      <p>
        Y una alegría por el camino: <strong>primer premio del Ideathon de Innovación de la URJC</strong>, entre
        más de 200 estudiantes, con un CV generativo con IA que convierte el TFG en competencias para cada
        oferta.
      </p>
      <p className="quien__busco">
        <strong>Busco:</strong> {perfil.busco} Ahora estudio el Máster en Comunicación Publicitaria
        en la UC3M.
      </p>
    </div>
  );
}

// Por qué el judo, con mis palabras: cada «porque» es una razón.
const porques: ReactNode[] = [
  <>
    Por los valores: el respeto, la perseverancia, hacer mil <span lang="ja-Latn">uchi komis</span> y{" "}
    <span lang="ja-Latn">nage komis</span> (repetir la entrada de una técnica y luego la proyección
    entera, una y otra vez) antes de llegar a ganar una medalla. Por el esfuerzo, la
    dedicación y la motivación.
  </>,
  <>Porque ha sido un refugio en el que me he hospedado.</>,
  <>Porque es un lugar en el que ser distinta es una ventaja y no un inconveniente.</>,
  <>Porque consigo callar mi mente y centrarlo todo en una única cosa.</>,
  <>
    Porque, cuando dicen <span lang="ja-Latn">hajime</span> («¡empezad!»), el resto desaparece.
  </>,
  <>
    Porque puede parecer un deporte individual hasta que descubres a tu entrenador, a tus compañeros, a
    tu familia o, sobre todo, a tu pareja (cuack{" "}
    <span aria-label="corazón amarillo" role="img">
      💛
    </span>
    ), más ilusionada que tú por un resultado.
  </>,
];

function Judo() {
  return (
    <div className="asalto__prosa judo">
      <h2>Por qué el judo</h2>
      <p className="quien__lead">
        Descubrí el tatami con siete años, casi por obligación, porque tenía que hacer deporte. Ahora no me
        imagino mi vida sin él.
      </p>
      <ol className="judo__porques">
        {porques.map((p, i) => (
          <li key={i} className={i === 4 ? "judo__hajime" : undefined}>
            {p}
          </li>
        ))}
      </ol>
    </div>
  );
}

// Mis cuatro momentos de un proyecto: se elige uno y se ve el ejemplo real.
function Metodo() {
  const [activo, setActivo] = useState(0);
  const t = tiempos[activo];
  return (
    <div>
      <h2>Cómo trabajo un proyecto</h2>
      <p className="asalto__entradilla">
        Cuatro momentos, cada uno con su color (no puedo evitarlo). Elige uno y te enseño dónde lo hice.
      </p>
      <div className="metodo">
        <ol className="metodo__tiempos">
          {tiempos.map((x, i) => (
            <li key={x.nombre}>
              <button
                type="button"
                aria-pressed={i === activo}
                className={`color--${x.color}${i === activo ? " activo" : ""}`}
                onClick={() => setActivo(i)}
              >
                <span className="metodo__n">{i + 1}</span>
                <strong>{x.nombre}</strong>
                <span>{x.significado}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className={`metodo__detalle color--${t.color}`} key={t.nombre} aria-live="polite">
          <p className="metodo__grande">
            <span className="sub">{t.nombre}</span>
          </p>
          <p>{t.ejemplo}</p>
          <Link to={`/trabajo/${t.caso.slug}`}>Verlo en {t.caso.titulo}</Link>
        </div>
      </div>
    </div>
  );
}

// Lo que no cabe en el CV: un estuche de subrayadores; cada uno abre una cosa sobre mí.
function LoDemas() {
  const [activo, setActivo] = useState(0);
  const c = colores[activo];
  return (
    <div>
      <h2>Lo que no cabe en el CV</h2>
      <p className="asalto__entradilla">En mi cabeza cada cosa tiene su color. Coge un subrayador.</p>
      <div className="estuche">
        <div className="estuche__fila" role="group" aria-label="Subrayadores">
          {colores.map((x, i) => (
            <button
              key={x.color}
              type="button"
              aria-pressed={i === activo}
              className={`subrayador color--${x.color}${i === activo ? " activo" : ""}`}
              onClick={() => setActivo(i)}
            >
              <span className="subrayador__tapa" aria-hidden="true" />
              <span className="subrayador__cuerpo">{x.etiqueta}</span>
            </button>
          ))}
        </div>
        <article className={`apunte color--${c.color}`} key={c.color} aria-live="polite">
          <h3>
            <span className="sub">{c.titulo}</span>
          </h3>
          {c.texto.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </article>
      </div>
    </div>
  );
}

const pestanas: { id: string; nombre: string; contenido: ReactNode }[] = [
  { id: "quien", nombre: "Quién soy", contenido: <QuienSoy /> },
  { id: "demas", nombre: "Lo que no cabe en el CV", contenido: <LoDemas /> },
  { id: "metodo", nombre: "Cómo trabajo", contenido: <Metodo /> },
  { id: "judo", nombre: "Por qué el judo", contenido: <Judo /> },
];

export function SobrePage() {
  // La parte abierta vive en la URL (?parte=demas), como las partes de los casos.
  const [params, setParams] = useSearchParams();
  const activo = Math.max(0, pestanas.findIndex((p) => p.id === params.get("parte")));
  const panel = useRef<HTMLDivElement>(null);
  const setActivo = (i: number) => setParams(i ? { parte: pestanas[i].id } : {}, { replace: true });
  const actual = pestanas[activo];

  useEffect(() => {
    document.title = "Sobre mí, Lara Feijóo";
  }, []);

  return (
    <main className="combate combate--sobre">
      <aside className="combate__ficha">
        <h1 className="combate__titulo">Sobre mí</h1>
        <figure className="pagina-foto sobre-foto">
          <img src={foto} alt="Lara sonriendo con la lengua fuera delante de una cascada" width={1400} height={1050} />
          <figcaption>Azulita, fuera del aula.</figcaption>
        </figure>
        <div className="dojo-acciones">
          <Link className="dojo-boton" to="/trabajo">
            Ver proyectos
          </Link>
          <Link className="dojo-boton dojo-boton--claro" to="/cv">
            Ver CV
          </Link>
        </div>
      </aside>

      <section className="combate__tatami" aria-label="Sobre mí, por partes">
        <div className="asaltos" role="tablist" aria-label="Partes">
          {pestanas.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              id={`sobre-${p.id}`}
              aria-selected={i === activo}
              aria-controls="sobre-panel"
              tabIndex={i === activo ? 0 : -1}
              onClick={() => setActivo(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") setActivo(Math.min(pestanas.length - 1, i + 1));
                if (e.key === "ArrowLeft") setActivo(Math.max(0, i - 1));
              }}
            >
              <span className="asaltos__n">{i + 1}</span>
              {p.nombre}
            </button>
          ))}
        </div>
        <div
          ref={panel}
          id="sobre-panel"
          role="tabpanel"
          aria-labelledby={`sobre-${actual.id}`}
          className="asalto"
          key={actual.id}
        >
          {actual.contenido}
        </div>
        <Sigue panel={panel} clave={actual.id} />
        <nav className="combate__pie" aria-label="Navegación">
          <button type="button" onClick={() => setActivo(activo - 1)} disabled={activo === 0}>
            Anterior
          </button>
          <span className="combate__marcador">
            {activo + 1} de {pestanas.length}
          </span>
          {activo < pestanas.length - 1 ? (
            <button type="button" className="combate__siguiente" onClick={() => setActivo(activo + 1)}>
              Siguiente: {pestanas[activo + 1].nombre}
            </button>
          ) : (
            <Link to="/trabajo" className="combate__siguiente">
              Ahora, mis proyectos
            </Link>
          )}
        </nav>
      </section>
    </main>
  );
}
