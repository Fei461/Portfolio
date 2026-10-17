import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import type { CasoCompleto } from "@/data/casos";
import { cinturones, porCinturon, proyectos } from "@/data/proyectos";
import { DemoTalixea } from "./demo-talixea";
import { Cronograma, Reparto } from "./graficos";
import "./caso.css";
import "./combate.css";

type Imagen = { src: string; alt: string; pie: string };
type Asalto = { id: string; nombre: string; contenido: ReactNode };

const red = (href: string) =>
  href.includes("tiktok") ? "TikTok" : href.includes("instagram") ? "Instagram" : "YouTube";

// Imagen a pantalla completa; se cierra con Escape, con el botón o pulsando fuera.
function Lupa({ imagen, cerrar }: { imagen: Imagen; cerrar: () => void }) {
  const boton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    boton.current?.focus();
    const tecla = (e: KeyboardEvent) => e.key === "Escape" && cerrar();
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [cerrar]);
  return (
    <div className="lupa" role="dialog" aria-modal="true" aria-label={imagen.pie} onClick={cerrar}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={imagen.src} alt={imagen.alt} />
        <figcaption>{imagen.pie}</figcaption>
      </figure>
      <button ref={boton} type="button" className="lupa__cerrar" onClick={cerrar}>
        Cerrar
      </button>
    </div>
  );
}

// «Lo que hice»: lista de terrenos a un lado y el detalle del elegido al otro.
function LoQueHice({ bloques }: { bloques: CasoCompleto["bloques"] }) {
  const [activo, setActivo] = useState(0);
  const b = bloques[activo] ?? bloques[0];
  return (
    <div className="hice">
      <ol className="hice__lista">
        {bloques.map((x, i) => (
          <li key={x.titulo}>
            <button
              type="button"
              aria-pressed={i === activo}
              onClick={() => setActivo(i)}
              className={i === activo ? "activo" : undefined}
            >
              {x.titulo}
            </button>
          </li>
        ))}
      </ol>
      <div className="hice__detalle" key={b.titulo} aria-live="polite">
        <h3>{b.titulo}</h3>
        <p className="hice__resumen">{b.resumen}</p>
        <ul>
          {b.puntos.map((p) => (
            <li key={p.slice(0, 32)}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function construirAsaltos(
  caso: CasoCompleto,
  abrir: (i: Imagen) => void,
  visual?: { portada?: string; video?: string },
): Asalto[] {
  const quieto = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const asaltos: Asalto[] = [
    {
      id: "reto",
      nombre: "El reto",
      contenido: (
        <div className={visual?.portada || visual?.video ? "reto reto--con-imagen" : "reto"}>
          <div className="asalto__prosa">
            <h2>{caso.contexto.titulo}</h2>
            {caso.contexto.parrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          {visual?.video ? (
            <figure className="reto__foto reto__foto--video">
              <video src={visual.video} muted loop playsInline autoPlay={!quieto} aria-hidden="true" />
            </figure>
          ) : visual?.portada ? (
            <figure className="reto__foto">
              <button
                type="button"
                onClick={() => abrir({ src: visual.portada!, alt: "", pie: caso.titulo })}
                aria-label={`Ampliar la imagen de ${caso.titulo}`}
              >
                <img src={visual.portada} alt="" />
              </button>
            </figure>
          ) : null}
        </div>
      ),
    },
  ];

  if (caso.demo === "talixea") asaltos.push({ id: "demo", nombre: "Pruébalo", contenido: <DemoTalixea /> });

  if (caso.cronograma || caso.reparto)
    asaltos.push({
      id: "numeros",
      nombre: "Los números",
      contenido: (
        <>
          {caso.cronograma && <Cronograma datos={caso.cronograma} />}
          {caso.reparto && <Reparto datos={caso.reparto} />}
        </>
      ),
    });

  if (caso.bloques.length > 0)
    asaltos.push({ id: "hice", nombre: "Lo que hice", contenido: <LoQueHice bloques={caso.bloques} /> });

  if (caso.imagenes || caso.piezas)
    asaltos.push({
      id: "piezas",
      nombre: "Las piezas",
      contenido: (
        <>
          {caso.imagenes && (
            <div className="asalto__bloque">
              {caso.imagenes.texto && <p className="asalto__entradilla">{caso.imagenes.texto}</p>}
              <ul className={caso.imagenes.vertical ? "galeria galeria--vertical" : "galeria"}>
                {caso.imagenes.items.map((im) => (
                  <li key={im.src}>
                    <button type="button" onClick={() => abrir(im)} aria-label={`Ampliar: ${im.pie}`}>
                      <img src={im.src} alt={im.alt} loading="lazy" />
                    </button>
                    <p>{im.pie}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {caso.piezas && (
            <div className="asalto__bloque">
              <p className="asalto__entradilla">{caso.piezas.texto}</p>
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
                            {n === 0 ? "publicación " : ""}
                            {n + 1}
                            <span className="sr-only"> en {red(href)}</span>
                          </a>
                          {n < grupo.enlaces.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      ),
    });

  if (caso.caidas)
    asaltos.push({
      id: "tatami",
      nombre: caso.tatami?.termino ?? "Ukemi",
      contenido: (
        <div className="asalto__tatami">
          <h2>
            <span lang="ja-Latn">{caso.tatami?.termino ?? "Ukemi"}</span>:{" "}
            {caso.tatami?.titulo ?? "dónde caí y cómo me levanté"}
          </h2>
          <p className="asalto__entradilla">
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
      ),
    });

  asaltos.push({
    id: "llevo",
    nombre: "Me llevo",
    contenido: (
      <div className="asalto__llevo">
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
    ),
  });

  return asaltos;
}

export function CasoPage({ caso }: { caso: CasoCompleto }) {
  const proyecto = proyectos.find((p) => p.slug === caso.slug);
  const cinturon = proyecto?.cinturon ?? "negro";
  const mismos = porCinturon(cinturon);
  const posicion = mismos.findIndex((p) => p.slug === caso.slug) + 1;
  const conPagina = proyectos.filter((p) => p.pagina);
  const indice = conPagina.findIndex((p) => p.slug === caso.slug);
  const siguienteCaso = conPagina[indice + 1] ?? conPagina[0];

  const [lupa, setLupa] = useState<Imagen | null>(null);
  const cerrarLupa = useCallback(() => setLupa(null), []);
  const asaltos = construirAsaltos(caso, setLupa, { portada: proyecto?.portada, video: proyecto?.video });
  const [activo, setActivo] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const pestanas = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    document.title = `${caso.titulo}, un caso de Lara Feijóo`;
    window.scrollTo(0, 0);
    setActivo(0);
  }, [caso]);

  const ir = useCallback(
    (i: number, enfocar = false) => {
      const n = Math.max(0, Math.min(asaltos.length - 1, i));
      setActivo(n);
      panel.current?.scrollTo({ top: 0 });
      if (enfocar) pestanas.current[n]?.focus();
    },
    [asaltos.length],
  );

  // Flechas del teclado para cambiar de asalto, salvo si se está usando un control.
  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if (lupa) return;
      const el = e.target instanceof HTMLElement ? e.target : null;
      if (el?.closest("input, textarea, select, video, [role='tab']")) return;
      if (e.key === "ArrowRight") ir(activo + 1);
      if (e.key === "ArrowLeft") ir(activo - 1);
    };
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [activo, ir, lupa]);

  const actual = asaltos[activo] ?? asaltos[0];
  const ultimo = activo === asaltos.length - 1;

  return (
    <main className={`combate combate--${cinturon}`}>
      <aside className="combate__ficha">
        <p className="caso-grado">
          <Link to={`/trabajo?cinturon=${cinturon}`} className="caso-grado__volver">
            <span className={`caso-grado__cinta caso-grado__cinta--${cinturon}`} aria-hidden="true" />
            {cinturones[cinturon].nombre}
            {posicion > 0 && `, caso ${posicion} de ${mismos.length}`}
          </Link>
        </p>
        <h1 className="combate__titulo">{caso.titulo}</h1>
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
        {caso.marcador && (
          <ul className="marcador" aria-label="Cifras del proyecto">
            {caso.marcador.map((m) => (
              <li key={m.texto}>
                <strong>{m.cifra}</strong>
                <span>{m.texto}</span>
              </li>
            ))}
          </ul>
        )}
        <dl className="combate__datos">
          {caso.ficha.map((f) => (
            <div key={f.etiqueta}>
              <dt>{f.etiqueta}</dt>
              <dd>{f.valor}</dd>
            </div>
          ))}
        </dl>
      </aside>

      <section className="combate__tatami" aria-label="El caso, por asaltos">
        <div className="asaltos" role="tablist" aria-label="Asaltos">
          {asaltos.map((a, i) => (
            <button
              key={a.id}
              ref={(el) => {
                pestanas.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`pestana-${a.id}`}
              aria-selected={i === activo}
              aria-controls="asalto-panel"
              tabIndex={i === activo ? 0 : -1}
              onClick={() => ir(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") ir(i + 1, true);
                if (e.key === "ArrowLeft") ir(i - 1, true);
              }}
            >
              <span className="asaltos__n">{i + 1}</span>
              <span lang={a.id === "tatami" ? "ja-Latn" : undefined}>{a.nombre}</span>
            </button>
          ))}
        </div>

        <div
          ref={panel}
          id="asalto-panel"
          role="tabpanel"
          aria-labelledby={`pestana-${actual.id}`}
          className="asalto"
          key={`${caso.slug}-${actual.id}`}
        >
          {actual.contenido}
        </div>

        <nav className="combate__pie" aria-label="Navegación del caso">
          <button type="button" onClick={() => ir(activo - 1)} disabled={activo === 0}>
            Asalto anterior
          </button>
          <span className="combate__marcador" aria-live="polite">
            Asalto {activo + 1} de {asaltos.length}
          </span>
          {ultimo ? (
            <Link to={`/trabajo/${siguienteCaso.slug}`} className="combate__siguiente">
              Siguiente caso: {siguienteCaso.titulo}
            </Link>
          ) : (
            <button type="button" className="combate__siguiente" onClick={() => ir(activo + 1)}>
              Siguiente asalto: {asaltos[activo + 1].nombre}
            </button>
          )}
        </nav>
      </section>

      {lupa && <Lupa imagen={lupa} cerrar={cerrarLupa} />}
    </main>
  );
}
