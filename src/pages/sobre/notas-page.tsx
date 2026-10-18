import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { categoriasNotas, notas, soloEnLinkedIn, type CategoriaNota } from "@/data/notas";
import { proyectos } from "@/data/proyectos";
import "./paginas.css";
import "../caso/combate.css";

const esPerfil = (url: string) => !url.includes("/posts/");
const simple = (t: string) => t.toLowerCase().replace(/[^a-záéíóúñü¿? ]/g, "").slice(0, 18);

// Notas: mis publicaciones de LinkedIn, enteras, para leerlas sin salir de aquí.
export function NotasPage() {
  const [params, setParams] = useSearchParams();
  const filtro = (params.get("tema") as CategoriaNota | null) ?? null;
  const visibles = filtro ? notas.filter((n) => n.categoria === filtro) : notas;
  const nota = visibles.find((n) => n.id === params.get("nota")) ?? visibles[0];
  const i = visibles.indexOf(nota);
  const hoja = useRef<HTMLElement>(null);
  const caso = nota.caso ? proyectos.find((p) => p.slug === nota.caso) : undefined;

  useEffect(() => {
    document.title = `${nota.titulo}, notas de Lara Feijóo`;
    hoja.current?.scrollTo({ top: 0 });
  }, [nota]);

  const abrir = (id: string) => {
    const p: Record<string, string> = { nota: id };
    if (filtro) p.tema = filtro;
    setParams(p, { replace: true });
  };
  const elegirTema = (t: CategoriaNota | null) => setParams(t ? { tema: t } : {}, { replace: true });

  return (
    <main className="combate combate--notas">
      <aside className="combate__ficha notas-indice">
        <h1 className="combate__titulo">Notas</h1>
        <p className="notas-indice__intro">
          Lo que voy publicando en LinkedIn sobre marcas, campañas y mi propio aprendizaje. Aquí están
          enteras, de la más reciente a la más antigua.
        </p>
        <div className="notas-filtro" role="group" aria-label="Filtrar por tema">
          <button type="button" aria-pressed={!filtro} className={!filtro ? "activo" : undefined} onClick={() => elegirTema(null)}>
            Todas
          </button>
          {categoriasNotas.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filtro === c}
              className={filtro === c ? "activo" : undefined}
              onClick={() => elegirTema(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <ol className="notas-lista">
          {visibles.map((n) => (
            <li key={n.id}>
              <button
                type="button"
                aria-current={n.id === nota.id ? "true" : undefined}
                className={n.id === nota.id ? "activo" : undefined}
                onClick={() => abrir(n.id)}
              >
                <span>{n.categoria}</span>
                {n.titulo}
              </button>
            </li>
          ))}
        </ol>
        {!filtro && (
          <div className="notas-fuera">
            <h2 className="pagina-h3">Solo en LinkedIn, de momento</h2>
            <ul>
              {soloEnLinkedIn.map((n) => (
                <li key={n.url + n.titulo}>
                  <a href={n.url} target="_blank" rel="noreferrer">
                    {n.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      <section className="combate__tatami" aria-label="Nota abierta">
        <article ref={hoja} className="asalto nota-hoja" key={nota.id}>
          <p className="nota-hoja__tema">
            {nota.categoria}
            {nota.fecha && (
              <time dateTime={nota.fecha}>
                {" · "}
                {new Date(nota.fecha).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            )}
          </p>
          {/* Si la publicación ya empieza por su título, no se repite. */}
          {simple(nota.texto[0]) === simple(nota.titulo) ? (
            <>
              <h2>{nota.texto[0]}</h2>
              {nota.texto.slice(1).map((p, k) => (
                <p key={k}>{p}</p>
              ))}
            </>
          ) : (
            <>
              <h2>{nota.titulo}</h2>
              {nota.texto.map((p, k) => (
                <p key={k} className={k === 0 ? "nota-hoja__gancho" : undefined}>
                  {p}
                </p>
              ))}
            </>
          )}
          <div className="nota-hoja__pie">
            <a href={nota.url} target="_blank" rel="noreferrer">
              {esPerfil(nota.url) ? "Más en mi LinkedIn" : "Ver la publicación en LinkedIn"}
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
            {caso && <Link to={`/trabajo/${caso.slug}`}>Ver el caso de {caso.titulo}</Link>}
          </div>
        </article>
        <nav className="combate__pie" aria-label="Pasar de nota">
          <button type="button" onClick={() => abrir(visibles[i - 1].id)} disabled={i <= 0}>
            Nota anterior
          </button>
          <span className="combate__marcador">
            {i + 1} de {visibles.length}
          </span>
          <button
            type="button"
            className="combate__siguiente"
            onClick={() => abrir(visibles[i + 1].id)}
            disabled={i >= visibles.length - 1}
          >
            Siguiente nota
          </button>
        </nav>
      </section>
    </main>
  );
}
