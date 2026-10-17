import { useEffect, useState } from "react";
import { notes, noteCategories, type NoteCategory } from "@/data/notes";
import "./paginas.css";

const esPerfil = (url: string) => !url.includes("/posts/");

export function NotasPage() {
  const [filtro, setFiltro] = useState<NoteCategory | "Todas">("Todas");
  const categorias = noteCategories.filter((c) => notes.some((n) => n.category === c));
  const visibles = filtro === "Todas" ? notes : notes.filter((n) => n.category === filtro);

  useEffect(() => {
    document.title = "Notas, Lara Feijóo";
  }, []);

  return (
    <main className="pagina">
      <section className="pagina-cabecera">
        <h1 className="pagina-titulo">Notas</h1>
        <p className="pagina-lead">
          Lo que voy observando de marcas, campañas y de mi propio aprendizaje, y que acabo contando
          en LinkedIn. ¿Lo ves de otra forma? Te leo.
        </p>
      </section>

      <div className="notas-filtro" role="group" aria-label="Filtrar notas por tema">
        {(["Todas", ...categorias] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filtro === c}
            className={filtro === c ? "activo" : undefined}
            onClick={() => setFiltro(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="notas">
        {visibles.map((n) => (
          <li key={n.id} className="nota">
            <span className="nota-tema">{n.category}</span>
            <h2>{n.title}</h2>
            <p>{n.excerpt}</p>
            <a href={n.sourceUrl} target="_blank" rel="noreferrer">
              {esPerfil(n.sourceUrl) ? "Ver en mi LinkedIn" : "Leer en LinkedIn"}
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
