import { Sigue } from "@/components/sigue";
import { motivo, temas } from "@/data/casos/temas";
import { useCallback, useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { CasoCompleto } from "@/data/casos";
import { perchas, porPercha, proyectos } from "@/data/proyectos";
import { DemoTalixea } from "./demo-talixea";
import { Tablon } from "./tablon";
import { Brecha, Contraste, Cronograma, Guion, Mapa, Reparto } from "./graficos";
import { Movil } from "./movil";
import "./caso.css";
import "./combate.css";

type Imagen = { src: string; alt: string; pie: string };
type Asalto = { id: string; nombre: string; contenido: ReactNode };

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
  visual?: { portada?: string; video?: string; poster?: string },
  compacto = false,
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
              <video src={`${visual.video}#t=2`} poster={visual.poster} muted loop playsInline autoPlay={!quieto} aria-hidden="true" />
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
              {caso.retoPie && <figcaption>{caso.retoPie}</figcaption>}
            </figure>
          ) : null}
        </div>
      ),
    },
  ];

  if (caso.demo === "talixea") asaltos.unshift({ id: "demo", nombre: "Pruébalo", contenido: <DemoTalixea /> });

  // Santander: el laboratorio se abre en su propia pestaña del navegador, donde se ve entero.
  if (caso.laboratorio)
    asaltos.splice(1, 0, {
      id: "laboratorio",
      nombre: "El laboratorio",
      contenido: (
        <div className="laboratorio">
          <a className="laboratorio__ventana" href={caso.laboratorio.src} target="_blank" rel="noreferrer">
            <span className="laboratorio__barra" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>fei461.github.io/santander</span>
            </span>
            <img src={caso.laboratorio.imagen} alt={`Portada de la web: ${caso.laboratorio.titulo}`} />
          </a>
          <div className="laboratorio__lado">
            <h2>{caso.laboratorio.titulo}</h2>
            <p>{caso.laboratorio.texto}</p>
            <ul>
              {caso.laboratorio.dentro.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <a className="dojo-boton" href={caso.laboratorio.src} target="_blank" rel="noreferrer">
              Abrir el laboratorio <span aria-hidden="true">↗</span>
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </div>
        </div>
      ),
    });

  if (caso.brecha)
    asaltos.push({ id: "brecha", nombre: "La brecha", contenido: <Brecha datos={caso.brecha} /> });

  if (caso.contraste)
    asaltos.push({ id: "brecha", nombre: "La brecha", contenido: <Contraste datos={caso.contraste} /> });

  if (caso.mapa) asaltos.push({ id: "mapa", nombre: "Los públicos", contenido: <Mapa datos={caso.mapa} /> });

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

  if (caso.guion) asaltos.push({ id: "guion", nombre: "El guion", contenido: <Guion datos={caso.guion} /> });

  if (caso.imagenes || caso.piezas || caso.piezasExtra) {
    const galeria = caso.imagenes && (
      <div className="asalto__bloque">
        {caso.imagenes.texto && <p className="asalto__entradilla">{caso.imagenes.texto}</p>}
        <ul className={`galeria${caso.imagenes.vertical ? " galeria--vertical" : ""}${caso.imagenes.oscuro ? " galeria--oscura" : ""}`}>
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
    );
    const videos = caso.piezas && (
      <>
        <p className="asalto__entradilla">{caso.piezas.texto}</p>
        {caso.enMovil ? (
          <Movil videos={caso.piezas.videos} />
        ) : (
          <ul className="caso-videos">
            {caso.piezas.videos.map((v) => (
              <li key={v.src} className={v.horizontal ? "caso-video--horizontal" : undefined}>
                <video
                  src={v.horizontal ? v.src : `${v.src}#t=0.1`}
                  poster={v.poster}
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
                        Verlo en {v.red}
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        )}
        {caso.piezas.masEnlaces && (
          <div className="caso-mas">
            <h3>Más vídeos míos, en su red</h3>
            <ul>
              {caso.piezas.masEnlaces.map((e) => (
                <li key={e.href}>
                  <a href={e.href} target="_blank" rel="noreferrer">
                    {e.titulo}
                  </a>{" "}
                  <span>en {e.red}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
    const principal = (
      <>
        {galeria}
        {videos}
      </>
    );
    asaltos.push({
      id: "piezas",
      nombre: "Las piezas",
      contenido: caso.piezasExtra ? (
        <div className="asalto__bloque">
          <Tablon
            nombre={caso.piezas ? "Vídeos" : caso.imagenes?.titulo ?? "Imágenes"}
            principal={principal}
            extras={caso.piezasExtra}
          />
        </div>
      ) : (
        principal
      ),
    });
  }

  if (caso.caidas)
    asaltos.push({
      id: "tatami",
      nombre: caso.tatami ? caso.tatami.termino || "Decisiones" : "Caídas",
      contenido: (
        <div className="asalto__tatami">
          {caso.tatami && !caso.tatami.termino ? (
            <h2>{caso.tatami.titulo}</h2>
          ) : (
            <h2>{caso.tatami?.titulo ?? "Dónde caí y cómo me levanté"}</h2>
          )}
          <p className="asalto__entradilla">
            {caso.tatami?.intro ??
              "Lo primero que te enseñan en judo son las ukemis: saber caer sin hacerte daño y levantarte rápido. Aquí me tocó caer unas cuantas veces."}
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
        {caso.cita && !caso.citaEnFicha && (
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
        <h2 className="llevo__titulo">Lo que me llevo</h2>
        <ol className="llevo__lista">
          {caso.aprendizajes.map((a, k) => (
            <li key={a}>
              <span className="llevo__n" aria-hidden="true">
                {String(k + 1).padStart(2, "0")}
              </span>
              <p>{a}</p>
            </li>
          ))}
        </ol>
        {caso.enLinkedIn && (
          <div className="caso-linkedin">
            <h3>Lo conté en LinkedIn</h3>
            <ul>
              {caso.enLinkedIn.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.titulo} <span aria-hidden="true">→</span>
                    <span className="sr-only"> (se abre en otra pestaña)</span>
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

  // Casos breves: lo que hice en una sola parte y, aparte, el guion, las piezas y lo que me llevo.
  if (compacto) {
    const reto = asaltos.find((x) => x.id === "reto")!;
    const resto = asaltos.filter((x) => x.id === "numeros" || x.id === "piezas" || x.id === "guion");
    return [
      reto,
      {
        id: "hice",
        nombre: "Lo que hice",
        contenido: (
          <>
            {caso.bloques.length > 0 && (
              <div className="breve__bloques breve__bloques--solo">
                {caso.bloques.map((b) => (
                  <div key={b.titulo}>
                    <h3>{b.titulo}</h3>
                    <p className="hice__resumen">{b.resumen}</p>
                    <ul>
                      {b.puntos.map((pt) => (
                        <li key={pt.slice(0, 32)}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </>
        ),
      },
      ...resto,
      ...asaltos.filter((x) => x.id === "llevo"),
    ];
  }

  return asaltos;
}

export function CasoPage({ caso }: { caso: CasoCompleto }) {
  const proyecto = proyectos.find((p) => p.slug === caso.slug);
  const tema = temas[caso.slug];
  const percha = proyecto?.percha ?? "azul";
  const mismos = porPercha(percha);
  const posicion = mismos.findIndex((p) => p.slug === caso.slug) + 1;
  const conPagina = proyectos.filter((p) => p.pagina && !p.oculto);
  const indice = conPagina.findIndex((p) => p.slug === caso.slug);
  const siguienteCaso = conPagina[indice + 1] ?? conPagina[0];

  const [lupa, setLupa] = useState<Imagen | null>(null);
  const cerrarLupa = useCallback(() => setLupa(null), []);
  const asaltos = construirAsaltos(
    caso,
    setLupa,
    // Con laboratorio, su portada ya se ve en esa pestaña: el reto va sin imagen.
    caso.laboratorio ? {} : { portada: proyecto?.portada, video: proyecto?.video, poster: proyecto?.poster },
    Boolean(proyecto?.breve),
  );
  // La parte abierta queda en la dirección (?parte=piezas) para poder enlazarla.
  const [params, setParams] = useSearchParams();
  const pedido = asaltos.findIndex((a) => a.id === params.get("parte"));
  const activo = pedido >= 0 ? pedido : 0;
  const setActivo = useCallback(
    (n: number) => setParams(n === 0 ? {} : { parte: asaltos[n].id }, { replace: true }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setParams, caso.slug],
  );
  const panel = useRef<HTMLDivElement>(null);
  const pestanas = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    document.title = `${caso.titulo}, un caso de Lara Feijóo Vázquez`;
    window.scrollTo(0, 0);
  }, [caso]);

  const ir = useCallback(
    (i: number, enfocar = false) => {
      const n = Math.max(0, Math.min(asaltos.length - 1, i));
      setActivo(n);
      panel.current?.scrollTo({ top: 0 });
      if (enfocar) pestanas.current[n]?.focus();
    },
    [asaltos.length, setActivo],
  );

  // Flechas del teclado para cambiar de parte, salvo si se está usando un control.
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
    <main
      className={`combate combate--${percha}${tema ? " combate--tema" : ""}`}
      style={
        tema
          ? ({
              "--caso-fondo": tema.fondo,
              "--caso-oscuro": tema.oscuro,
              "--caso-acento": tema.acento,
              "--caso-motivo": motivo(tema),
            } as CSSProperties)
          : undefined
      }
    >
      <aside className="combate__ficha">
        <p className="caso-grado">
          <Link to={`/trabajo?percha=${percha}`} className="caso-grado__volver">
            <span className={`caso-grado__cinta caso-grado__cinta--${percha}`} aria-hidden="true" />
            {perchas[percha].nombre}
            {posicion > 0 && ` · ${posicion} de ${mismos.length}`}
          </Link>
        </p>
        <h1 className="combate__titulo">{caso.titulo}</h1>
        <p className="caso-lecturas">
          {caso.parecia && <s className="caso-lecturas__primera">{caso.parecia}</s>}
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
        {caso.cita && caso.citaEnFicha && (
          <figure className="ficha-cita">
            <blockquote>
              <p>«{caso.cita.texto}»</p>
            </blockquote>
            <figcaption>
              <strong>{caso.cita.autor}</strong>, {caso.cita.cargo}
            </figcaption>
          </figure>
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

      <section className="combate__tatami" aria-label="El caso, por partes">
        <div className="asaltos" role="tablist" aria-label="Partes del caso">
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
              <span>{a.nombre}</span>
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
        <Sigue panel={panel} clave={`${caso.slug}-${actual.id}`} />

        <nav className="combate__pie" aria-label="Navegación del caso">
          <button type="button" onClick={() => ir(activo - 1)} disabled={activo === 0}>
            Anterior
          </button>
          <span className="combate__marcador" aria-live="polite">
            {activo + 1} de {asaltos.length}
          </span>
          {ultimo ? (
            <Link to={`/trabajo/${siguienteCaso.slug}`} className="combate__siguiente">
              Siguiente caso: {siguienteCaso.titulo}
            </Link>
          ) : (
            <button type="button" className="combate__siguiente" onClick={() => ir(activo + 1)}>
              Siguiente: {asaltos[activo + 1].nombre}
            </button>
          )}
        </nav>
      </section>

      {lupa && <Lupa imagen={lupa} cerrar={cerrarLupa} />}
    </main>
  );
}
