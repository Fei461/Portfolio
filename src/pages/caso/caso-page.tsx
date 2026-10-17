import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { CasoCompleto } from "@/data/casos";
import { cinturones, porCinturon, proyectos } from "@/data/proyectos";
import { DemoTalixea } from "./demo-talixea";
import { Cronograma, Reparto } from "./graficos";
import "./caso.css";

const red = (href: string) => (href.includes("tiktok") ? "TikTok" : href.includes("instagram") ? "Instagram" : "YouTube");

function Vecinos({ slug }: { slug: string }) {
  const conPagina = proyectos.filter((p) => p.pagina);
  const i = conPagina.findIndex((p) => p.slug === slug);
  const anterior = conPagina[i - 1];
  const siguiente = conPagina[i + 1];
  return (
    <nav className="caso-vecinos" aria-label="Otros casos">
      {anterior ? (
        <Link to={`/trabajo/${anterior.slug}`} className="caso-vecinos__anterior">
          <span>Caso anterior</span>
          <strong>{anterior.titulo}</strong>
        </Link>
      ) : (
        <span />
      )}
      <Link to="/trabajo" className="caso-vecinos__todos">
        Todos los proyectos
      </Link>
      {siguiente && (
        <Link to={`/trabajo/${siguiente.slug}`} className="caso-vecinos__siguiente">
          <span>Siguiente caso</span>
          <strong>{siguiente.titulo}</strong>
        </Link>
      )}
    </nav>
  );
}

export function CasoPage({ caso }: { caso: CasoCompleto }) {
  const cinturon = proyectos.find((p) => p.slug === caso.slug)?.cinturon ?? "negro";
  const mismos = porCinturon(cinturon);
  const posicion = mismos.findIndex((p) => p.slug === caso.slug) + 1;

  useEffect(() => {
    document.title = `${caso.titulo}, un caso de Lara Feijóo`;
    window.scrollTo(0, 0);
  }, [caso]);

  return (
    <main className="caso">
      {/* ── Cabecera: la primera lectura, tumbada ── */}
      <header className="caso-cabecera">
        <p className="caso-grado">
          <span className={`caso-grado__cinta caso-grado__cinta--${cinturon}`} aria-hidden="true" />
          {cinturones[cinturon].nombre}
          {posicion > 0 && `, caso ${posicion} de ${mismos.length}`}
        </p>
        <h1 className="caso-titulo">{caso.titulo}</h1>
        <p className="caso-lecturas">
          <s className="caso-lecturas__primera">{caso.parecia}</s>
          <span className="caso-lecturas__segunda">{caso.era}</span>
        </p>
        {caso.enlaces && (
          <div className="dojo-acciones">
            {caso.enlaces.map((e) => (
              <a key={e.href} className="dojo-boton" href={e.href} target="_blank" rel="noreferrer">
                {e.label}
                <span className="sr-only"> (se abre en otra pestaña)</span>
              </a>
            ))}
          </div>
        )}
        <dl className="caso-ficha">
          {caso.ficha.map((f) => (
            <div key={f.etiqueta}>
              <dt>{f.etiqueta}</dt>
              <dd>{f.valor}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ── Marcador ── */}
      {caso.marcador && (
        <section className="caso-marcador" aria-label="Cifras del proyecto">
          <ul>
            {caso.marcador.map((m) => (
              <li key={m.texto}>
                <strong>{m.cifra}</strong>
                <span>{m.texto}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Contexto ── */}
      <section className="caso-seccion caso-dos" aria-labelledby="caso-contexto">
        <h2 id="caso-contexto" className="caso-h2">
          {caso.contexto.titulo}
        </h2>
        <div className="caso-prosa">
          {caso.contexto.parrafos.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {caso.demo === "talixea" && <DemoTalixea />}
      {caso.cronograma && <Cronograma datos={caso.cronograma} />}

      {/* ── Lo que hice ── */}
      {caso.bloques.length > 0 && (
      <section className="caso-seccion" aria-labelledby="caso-hice">
        <h2 id="caso-hice" className="caso-h2">
          Lo que hice
        </h2>
        <div className="caso-bloques">
          {caso.bloques.map((b) => (
            <article className="caso-bloque" key={b.titulo}>
              <div>
                <h3>{b.titulo}</h3>
                <p>{b.resumen}</p>
              </div>
              <ul>
                {b.puntos.map((punto) => (
                  <li key={punto.slice(0, 32)}>{punto}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      )}

      {caso.reparto && <Reparto datos={caso.reparto} />}

      {/* ── Imágenes ── */}
      {caso.imagenes && (
        <section className="caso-seccion" aria-labelledby="caso-imagenes">
          <h2 id="caso-imagenes" className="caso-h2">
            {caso.imagenes.titulo}
          </h2>
          {caso.imagenes.texto && <p className="caso-entradilla">{caso.imagenes.texto}</p>}
          <div className={caso.imagenes.vertical ? "caso-imagenes caso-imagenes--vertical" : "caso-imagenes"}>
            {caso.imagenes.items.map((im) => (
              <figure key={im.src}>
                <img src={im.src} alt={im.alt} loading="lazy" />
                <figcaption>{im.pie}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── Piezas ── */}
      {caso.piezas && (
        <section className="caso-seccion" aria-labelledby="caso-piezas">
          <h2 id="caso-piezas" className="caso-h2">
            {caso.piezas.titulo}
          </h2>
          <p className="caso-entradilla">{caso.piezas.texto}</p>
          <ul className="caso-videos">
            {caso.piezas.videos.map((v) => (
              <li key={v.src}>
                <video
                  src={`${v.src}#t=0.1`}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${v.titulo}, vídeo para ${v.red}`}
                />
                <p className="caso-video__titulo">{v.titulo}</p>
                <p className="caso-video__red">
                  {v.red}
                  {v.original && (
                    <>
                      {". "}
                      <a href={v.original} target="_blank" rel="noreferrer">
                        Ver la publicación original
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
          {caso.piezas.masEnlaces && (
            <div className="caso-mas">
              <h3>Más publicaciones en sus perfiles</h3>
              {caso.piezas.masEnlaces.map((grupo) => (
                <p key={grupo.red}>
                  <strong>{grupo.red}:</strong>{" "}
                  {grupo.enlaces.map((href, n) => (
                    <span key={href}>
                      <a href={href} target="_blank" rel="noreferrer">
                        {n === 0 ? "publicación" : ""} {n + 1}
                        <span className="sr-only"> en {red(href)}</span>
                      </a>
                      {n < grupo.enlaces.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── Ukemi ── */}
      {caso.caidas && (
        <section className="caso-ukemi" aria-labelledby="caso-ukemi">
          <div className="caso-ukemi__dentro">
            <h2 id="caso-ukemi" className="caso-h2">
              <span lang="ja-Latn">{caso.tatami?.termino ?? "Ukemi"}</span>:{" "}
              {caso.tatami?.titulo ?? "dónde caí y cómo me levanté"}
            </h2>
            <p className="caso-entradilla">
              {caso.tatami?.intro ??
                "Lo primero que te enseñan en judo es a caer sin hacerte daño. Aquí me tocó caer unas cuantas veces."}
            </p>
            <ul className="caso-caidas">
              {caso.caidas.map((c) => (
                <li key={c.titulo}>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Cita ── */}
      {caso.cita && (
        <figure className="caso-cita">
          <blockquote>
            <p>«{caso.cita.texto}»</p>
          </blockquote>
          <figcaption>
            <strong>{caso.cita.autor}</strong>
            <span>{caso.cita.cargo}</span>
          </figcaption>
        </figure>
      )}

      {/* ── Aprendizajes ── */}
      <section className="caso-seccion caso-dos" aria-labelledby="caso-aprendi">
        <h2 id="caso-aprendi" className="caso-h2">
          Lo que me llevo
        </h2>
        <div>
          <ul className="caso-aprendizajes">
            {caso.aprendizajes.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          {caso.enLinkedIn && (
            <div className="caso-linkedin">
              <h3>Lo conté en LinkedIn</h3>
              <ul>
                {caso.enLinkedIn.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noreferrer">
                      {l.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {caso.nota && <p className="caso-nota">{caso.nota}</p>}
        </div>
      </section>

      <Vecinos slug={caso.slug} />
    </main>
  );
}
