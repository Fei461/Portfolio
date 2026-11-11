import { useEffect, useRef, useState, type ReactNode } from "react";
import { Sigue } from "@/components/sigue";
import { FotoGiro } from "@/components/foto-giro";
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
      <h2>Creo que puedo encajar en todas partes (y en ninguna a la vez)</h2>
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
        No me defino como copy, ni como arte, ni como cuentas, ni como planner. Si tuviera que
        decantarme, seguramente elegiría <Sub c="verde">las relaciones públicas, la gestión de marca, la
        reputación y la comunicación interna</Sub>. No quiero ser la cara visible de nada:{" "}
        <Sub c="naranja">quiero entender a la gente</Sub>. Me mueve la psicología de la
        comunicación y partirme la cabeza buscando la mejor solución para la marca, no quedarme en
        resolver el briefing.
      </p>
      <p>
        Me lo paso genial en un brainstorming diciendo locuras, y me lo paso igual de bien dándoles forma
        después. Y luego están <Sub c="azul">los números: me encanta analizar qué ha pasado y, sobre
        todo, por qué</Sub>. Soy un poco Barbie en esto, siento que puedo serlo todo. Por eso quizá
        encajo más en una agencia pequeña, en la que hay que tocar todos los palos.
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

const fotoJudo = `${import.meta.env.BASE_URL}assets/lara/judo.jpg`;

function Judo() {
  return (
    <div className="asalto__prosa judo">
      <figure className="judo__foto">
        <img
          src={fotoJudo}
          alt="Lara, de blanco y con el cinturón marrón bordado con su apellido, agarrando a su rival de azul en un combate"
          width={1200}
          height={1080}
          loading="lazy"
        />
        <figcaption>De blanco, con FEIJÓO en el cinturón.</figcaption>
      </figure>
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

// Lo que no cabe en el CV: una ruleta con mis seis colores. Se gira (o se coge un subrayador)
// y sale el apunte de ese color.
const GAJO = 360 / colores.length;

function punto(angulo: number, r: number) {
  const rad = ((angulo - 90) * Math.PI) / 180;
  return [100 + r * Math.cos(rad), 100 + r * Math.sin(rad)];
}

function gajo(i: number) {
  const [x1, y1] = punto(i * GAJO - GAJO / 2, 96);
  const [x2, y2] = punto(i * GAJO + GAJO / 2, 96);
  return `M100 100 L${x1.toFixed(2)} ${y1.toFixed(2)} A96 96 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
}

function LoDemas() {
  const [activo, setActivo] = useState(0);
  const [giro, setGiro] = useState(0);
  const [girando, setGirando] = useState(false);
  const quieto = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Lleva el gajo i arriba, bajo la flecha, dando unas cuantas vueltas antes.
  const ir = (i: number, vueltas: number) => {
    if (girando) return;
    const destino = (((-i * GAJO - giro) % 360) + 360) % 360;
    setGiro(giro + (quieto ? 0 : vueltas * 360) + destino);
    if (quieto) {
      setActivo(i);
      return;
    }
    setGirando(true);
    window.setTimeout(() => {
      setActivo(i);
      setGirando(false);
    }, 2600);
  };
  const girar = () => {
    let i = Math.floor(Math.random() * colores.length);
    if (i === activo) i = (i + 1 + Math.floor(Math.random() * (colores.length - 1))) % colores.length;
    ir(i, 4);
  };
  const c = colores[activo];

  return (
    <div>
      <h2>Lo que no cabe en el CV</h2>
      <p className="asalto__entradilla">
        En mi cabeza cada cosa tiene su color. Gira la ruleta o coge directamente un subrayador.
      </p>
      <div className="estuche__fila" role="group" aria-label="Subrayadores">
        {colores.map((x, i) => (
          <button
            key={x.color}
            type="button"
            aria-pressed={i === activo}
            className={`subrayador color--${x.color}${i === activo ? " activo" : ""}`}
            data-evento={`Lo que no cabe en el CV · ${x.etiqueta}`}
            onClick={() => ir(i, 1)}
          >
            <span className="subrayador__tapa" aria-hidden="true" />
            <span className="subrayador__cuerpo">{x.etiqueta}</span>
          </button>
        ))}
      </div>
      <div className="ruleta">
        <div className="ruleta__rueda">
          <span className="ruleta__flecha" aria-hidden="true" />
          <svg
            viewBox="0 0 200 200"
            aria-hidden="true"
            style={{ transform: `rotate(${giro}deg)` }}
            className={girando ? "girando" : undefined}
          >
            {colores.map((x, i) => {
              const [tx, ty] = punto(i * GAJO, 57);
              return (
                <g key={x.color} className={`color--${x.color}`}>
                  <path d={gajo(i)} className="ruleta__gajo" />
                  <text x={tx} y={ty} transform={`rotate(${i * GAJO - 90} ${tx} ${ty})`} className="ruleta__texto">
                    {x.etiqueta}
                  </text>
                </g>
              );
            })}
            <circle cx="100" cy="100" r="15" className="ruleta__centro" />
          </svg>
          <button type="button" className="dojo-boton ruleta__boton" data-evento="Girar la ruleta" onClick={girar} disabled={girando}>
            {girando ? "Girando…" : "Gira la ruleta"}
          </button>
        </div>
        <article className={`apunte color--${c.color}${girando ? " apunte--espera" : ""}`} key={c.color} aria-live="polite">
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
  { id: "metodo", nombre: "Cómo trabajo", contenido: <Metodo /> },
  { id: "demas", nombre: "Lo que no cabe en el CV", contenido: <LoDemas /> },
  { id: "judo", nombre: "Por qué el judo", contenido: <Judo /> },
];

export function SobrePage() {
  // La parte abierta vive en la URL (?parte=demas), como las partes de los casos.
  const [params, setParams] = useSearchParams();
  const activo = Math.max(0, pestanas.findIndex((p) => p.id === params.get("parte")));
  const panel = useRef<HTMLDivElement>(null);
  const setActivo = (i: number) => setParams(i ? { parte: pestanas[i].id } : {}, { replace: true });
  const actual = pestanas[activo];
  // «Por qué el judo» se queda sobre el tatami; el resto de Sobre mí, en celeste.

  useEffect(() => {
    document.title = "Sobre mí, Lara Feijóo Vázquez";
  }, []);

  return (
    <main className={`combate combate--sobre${actual.id === "judo" ? " combate--judo" : ""}`}>
      <aside className="combate__ficha">
        <h1 className="combate__titulo">Sobre mí</h1>
        <FotoGiro
          className="foto-giro--sobre"
          src={foto}
          alt="Lara sonriendo y mordiéndose la lengua delante de una cascada"
          ancho={1400}
          alto={1050}
          frente="No es una foto seria porque no lo soy."
          detras={
            <>
              <p>
                Soy muy familiar y me encanta la naturaleza. Este año descubrí una joya oculta del paisaje
                ibérico: la Sierra de la Estrella. Perderme entre montañas con mi familia y con Gretuka es uno
                de mis planes favoritos.
              </p>
              <p>
                Hacía calor; si no, me habría llevado uno de mis mil gorritos (tengo uno de cada color, de
                dinosaurios, de pingüinos y, cómo no, de mi Atleti).
              </p>
              <p>
                Nunca se me ha dado bien posar, así que ya ni lo intento. Suelo sacar la lengua, y tiene gracia
                que me la esté mordiendo: soy tan culo inquieto que con dos años casi me quedo sin ella por
                balancearme en la silla. Mis profes siempre lo destacaban (sí, hasta en la universidad): todo muy
                bien, pero no sabía sentarme. Escribo esto mal sentada, para sorpresa de nadie.
              </p>
              <p>
                Ah, y mi madre siempre dice que llevo las gafas sucias. Pero las últimas se me partieron por la
                mitad al intentar limpiarlas, así que siempre, siempre, no.
              </p>
            </>
          }
        />
        <dl className="sobre-corto">
          <div>
            <dt>Vivo en</dt>
            <dd>{perfil.lugar}</dd>
          </div>
          <div>
            <dt>Estudié</dt>
            <dd>Publicidad y RRPP (URJC)</dd>
          </div>
          <div>
            <dt>Estudio</dt>
            <dd>Máster en Comunicación Publicitaria (UC3M)</dd>
          </div>
          <div>
            <dt>Sobre el tatami</dt>
            <dd>Cinturón marrón de judo y azul de taekwondo</dd>
          </div>
          <div>
            <dt>Hablo</dt>
            <dd>Español, inglés, catalán y francés</dd>
          </div>
          <div>
            <dt>Mi color</dt>
            <dd>Azul (soy azulita 💙)</dd>
          </div>
        </dl>
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
