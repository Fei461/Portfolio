import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { tiempos } from "@/data/metodo";
import { perfil } from "@/data/perfil";
import "./paginas.css";
import "../caso/combate.css";

const foto = `${import.meta.env.BASE_URL}assets/lara/cascada.jpg`;

// Trayectoria en orden cronológico, de lo más reciente a lo más antiguo.
const trayectoria = [
  { cuando: "Octubre de 2026", que: "Lanzo Talixea, la app que buscaba y no existía." },
  { cuando: "Septiembre de 2026", que: "Empiezo el Máster en Comunicación Publicitaria en la UC3M." },
  { cuando: "Febrero de 2026", que: "Empiezo Talixea desde mi cuarto." },
  { cuando: "Enero a mayo de 2026", que: "Prácticas en marketing en Stud-IA, con tres redes a mi cargo." },
  { cuando: "2022–2026", que: "Grado en Publicidad y RRPP en la URJC, con un 8,62 de media y seis matrículas de honor." },
  { cuando: "2024–2025", que: "Cursos de RTVE sobre contenidos para plataformas OTT y sobre IA en medios." },
  { cuando: "2021–2025", que: "Profesora de artes marciales y monitora de campamento en Guerreros Galapagar." },
];

function QuienSoy() {
  return (
    <div className="asalto__prosa">
      <h2>No suelo ser la persona con la primera idea</h2>
      <p className="quien__lead">Suelo ser la que quiere entender por qué esa idea debería funcionar.</p>
      <p>
        Lo que más me tira es la reputación, la percepción de marca, las relaciones públicas y la
        comunicación, tanto corporativa como interna. Y, por el camino, he descubierto que me flipa
        entender por qué compramos lo que compramos.
      </p>
      <p>
        Estudio el Máster en Comunicación Publicitaria en la UC3M después de acabar Publicidad y RRPP en
        la URJC. Antes de terminar ya había hecho prácticas en una startup, Stud-IA, y había empezado a
        construir Talixea desde mi cuarto, sin saber programar.
      </p>
      <p>
        Me muevo bien cuando hay que investigar, ordenar y bajar las ideas a tierra. Pregunto mucho, me
        tomo en serio los datos y no me quedo quieta hasta que algo sale bien.
      </p>
      <p className="quien__busco">
        <strong>Busco:</strong> {perfil.busco}
      </p>
    </div>
  );
}

function Judo() {
  return (
    <div className="asalto__prosa">
      <h2>Por qué el judo</h2>
      <p>
        Descubrí el tatami con siete años, casi por obligación, porque tenía que hacer deporte. Ahora
        no me imagino la vida sin él.
      </p>
      <p>
        Me ha enseñado respeto, perseverancia y lo que cuesta llegar: miles de{" "}
        <span lang="ja-Latn">uchi komis</span> y <span lang="ja-Latn">nage komis</span> antes de ganar
        una medalla. Esfuerzo, dedicación y motivación.
      </p>
      <p>
        Ha sido un refugio. Un lugar en el que ser distinta es una ventaja y no un inconveniente, y en
        el que consigo callar la mente y centrarme en una sola cosa.
      </p>
      <blockquote className="pagina-cita">
        <p>
          Cuando dicen <span lang="ja-Latn">hajime</span>, el resto desaparece.
        </p>
      </blockquote>
      <p>
        Puede parecer un deporte individual hasta que descubres a tu entrenador, a tus compañeros, a tu
        familia y, sobre todo, a tu cuack{" "}
        <span aria-label="corazón amarillo" role="img">
          💛
        </span>
        , más ilusionados que tú por un resultado.
      </p>
      <p>
        Hoy soy cinturón marrón en judo y azul en taekwondo, y he dado clase de artes marciales y he
        sido monitora de campamento en Guerreros Galapagar.
      </p>
    </div>
  );
}

// Los cuatro tiempos de una proyección: se elige uno y se ve el ejemplo real.
function Metodo() {
  const [activo, setActivo] = useState(0);
  const t = tiempos[activo];
  return (
    <div>
      <h2>Trabajo un proyecto como una proyección</h2>
      <p className="asalto__entradilla">
        En judo, una proyección tiene tres tiempos y una regla previa: saber caer. Llevo años
        repitiéndolos en el tatami y, sin darme cuenta, es también como trabajo fuera de él.
      </p>
      <div className="metodo">
        <ol className="metodo__tiempos">
          {tiempos.map((x, i) => (
            <li key={x.nombre}>
              <button
                type="button"
                aria-pressed={i === activo}
                className={i === activo ? "activo" : undefined}
                onClick={() => setActivo(i)}
              >
                <span className="metodo__n">{i}</span>
                <strong lang="ja-Latn">{x.nombre}</strong>
                <span>{x.significado}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="metodo__detalle" key={t.nombre} aria-live="polite">
          <p className="metodo__grande" lang="ja-Latn">
            {t.nombre}
          </p>
          <p>{t.ejemplo}</p>
          <Link to={`/trabajo/${t.caso.slug}`}>Verlo en {t.caso.titulo}</Link>
        </div>
      </div>
    </div>
  );
}

function Camino() {
  return (
    <div>
      <h2>El camino hasta aquí</h2>
      <ol className="pagina-linea">
        {trayectoria.map((t) => (
          <li key={t.que}>
            <span>{t.cuando}</span>
            <p>{t.que}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LoDemas() {
  return (
    <div className="sobre-demas">
      <div>
        <h3 className="pagina-h3">Idiomas</h3>
        <ul className="pagina-lista">
          {perfil.idiomas.map((i) => (
            <li key={i.idioma}>
              <strong>{i.idioma}</strong> {i.nivel}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="pagina-h3">Cómo soy trabajando</h3>
        <ul className="pagina-lista">
          {perfil.competencias.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="pagina-h3">Fuera del trabajo</h3>
        <ul className="pagina-lista">
          {perfil.aficiones.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const pestanas: { id: string; nombre: string; contenido: ReactNode }[] = [
  { id: "quien", nombre: "Quién soy", contenido: <QuienSoy /> },
  { id: "metodo", nombre: "Cómo trabajo", contenido: <Metodo /> },
  { id: "camino", nombre: "El camino", contenido: <Camino /> },
  { id: "judo", nombre: "Por qué el judo", contenido: <Judo /> },
  { id: "demas", nombre: "Lo demás", contenido: <LoDemas /> },
];

export function SobrePage() {
  const [activo, setActivo] = useState(0);
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
          <figcaption>Fuera del aula, tampoco me quedo quieta.</figcaption>
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
          id="sobre-panel"
          role="tabpanel"
          aria-labelledby={`sobre-${actual.id}`}
          className="asalto"
          key={actual.id}
        >
          {actual.contenido}
        </div>
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
