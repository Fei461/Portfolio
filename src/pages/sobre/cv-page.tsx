import { useEffect } from "react";
import { perfil, type Hito } from "@/data/perfil";
import "./paginas.css";

function Bloque({ titulo, hitos }: { titulo: string; hitos: Hito[] }) {
  return (
    <section className="cv-bloque" aria-label={titulo}>
      <h2 className="pagina-h3">{titulo}</h2>
      <ul>
        {hitos.map((h) => (
          <li key={h.titulo}>
            <span className="cv-periodo">{h.periodo}</span>
            <div>
              <strong>{h.titulo}</strong>
              <span className="cv-lugar">{h.lugar}</span>
              {h.detalle && <p>{h.detalle}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CvPage() {
  useEffect(() => {
    document.title = "CV de Lara Feijóo";
  }, []);

  return (
    <main className="pagina cv">
      <header className="pagina-cabecera cv-cabecera">
        <div>
          <h1 className="pagina-titulo">{perfil.nombre}</h1>
          <p className="pagina-lead">{perfil.titular}</p>
          <p className="pagina-texto">{perfil.resumen}</p>
          <p className="cv-busco">
            <strong>Busco:</strong> {perfil.busco}
          </p>
        </div>
        <div className="cv-contacto">
          <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/lara-feijoo
          </a>
          <span>{perfil.lugar}</span>
          <button type="button" className="dojo-boton cv-imprimir" onClick={() => window.print()}>
            Imprimir o guardar en PDF
          </button>
        </div>
      </header>

      <div className="cv-cuerpo">
        <div>
          <Bloque titulo="Experiencia" hitos={perfil.experiencia} />
          <Bloque titulo="Formación" hitos={perfil.formacion} />
          <Bloque titulo="Cursos" hitos={perfil.cursos} />
        </div>
        <aside>
          <section className="cv-bloque" aria-label="Premios">
            <h2 className="pagina-h3">Premios</h2>
            <ul className="pagina-lista">
              {perfil.premios.map((p) => (
                <li key={p.titulo}>
                  <strong>{p.titulo}</strong> {p.lugar}
                  {p.detalle && <p className="cv-premio">{p.detalle}</p>}
                </li>
              ))}
            </ul>
          </section>
          <section className="cv-bloque" aria-label="Idiomas">
            <h2 className="pagina-h3">Idiomas</h2>
            <ul className="pagina-lista">
              {perfil.idiomas.map((i) => (
                <li key={i.idioma}>
                  <strong>{i.idioma}</strong> {i.nivel}
                </li>
              ))}
            </ul>
          </section>
          <section className="cv-bloque" aria-label="Competencias">
            <h2 className="pagina-h3">Competencias</h2>
            <ul className="pagina-lista">
              {perfil.competencias.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
          <section className="cv-bloque" aria-label="Aficiones">
            <h2 className="pagina-h3">Aficiones</h2>
            <ul className="pagina-lista">
              {perfil.aficiones.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
