import { useEffect } from "react";
import { perfil, type Hito } from "@/data/perfil";
import "./cv.css";

// El CV es una hoja A4: lo que se ve aquí es exactamente lo que se descarga en PDF.
const pdf = `${import.meta.env.BASE_URL}cv-lara-feijoo.pdf`;

const nivelIdioma: Record<string, number> = { Nativo: 5, C2: 5, C1: 4, B2: 3, B1: 2, A2: 1 };

function Linea({ titulo, hitos }: { titulo: string; hitos: Hito[] }) {
  return (
    <section className="hcv-seccion">
      <h2>{titulo}</h2>
      <ol className="hcv-linea">
        {hitos.map((h) => (
          <li key={h.titulo}>
            <span className="hcv-periodo">{h.periodo}</span>
            <div>
              <strong>{h.titulo}</strong>
              <span className="hcv-lugar">{h.lugar}</span>
              {h.detalle && <p>{h.detalle}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CvPage() {
  useEffect(() => {
    document.title = "CV de Lara Feijóo";
  }, []);

  return (
    <main className="cv-mesa">
      <div className="cv-acciones">
        <a className="dojo-boton" href={pdf} download="CV Lara Feijóo.pdf">
          Descargar CV en PDF
        </a>
      </div>

      <article className="hcv" aria-label="Currículum de Lara Feijóo">
        <header className="hcv-cabecera">
          <div>
            <h1>{perfil.nombre}</h1>
            <p className="hcv-titular">{perfil.titular}</p>
          </div>
          <ul className="hcv-contacto">
            <li>
              <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
            </li>
            <li>
              <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/lara-feijoo
              </a>
            </li>
            <li>{perfil.lugar}</li>
          </ul>
        </header>

        <div className="hcv-cuerpo">
          <div className="hcv-principal">
            <section className="hcv-seccion hcv-perfil">
              <h2>Perfil</h2>
              <p>{perfil.resumen}</p>
              <p className="hcv-busco">
                <strong>Busco</strong> {perfil.busco}
              </p>
            </section>
            <Linea titulo="Experiencia" hitos={perfil.experiencia} />
            <Linea titulo="Formación" hitos={perfil.formacion} />
            <Linea titulo="Cursos" hitos={perfil.cursos} />
          </div>

          <aside className="hcv-lateral">
            <section className="hcv-seccion">
              <h2>Premios</h2>
              {perfil.premios.map((p) => (
                <div key={p.titulo} className="hcv-premio">
                  <strong>{p.titulo}</strong>
                  <span className="hcv-lugar">{p.lugar}</span>
                  {p.detalle && <p>{p.detalle}</p>}
                </div>
              ))}
            </section>
            <section className="hcv-seccion">
              <h2>Idiomas</h2>
              <ul className="hcv-idiomas">
                {perfil.idiomas.map((i) => (
                  <li key={i.idioma}>
                    <span>
                      <strong>{i.idioma}</strong> {i.nivel}
                    </span>
                    <span className="hcv-nivel" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <i key={n} className={n <= (nivelIdioma[i.nivel] ?? 0) ? "lleno" : undefined} />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="hcv-seccion">
              <h2>Competencias</h2>
              <ul className="hcv-chips">
                {perfil.competencias.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
            <section className="hcv-seccion">
              <h2>Fuera del trabajo</h2>
              <ul className="hcv-puntos">
                {perfil.aficiones.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>
            <p className="hcv-web">Portfolio: fei461.github.io/Portfolio</p>
          </aside>
        </div>
      </article>
    </main>
  );
}
