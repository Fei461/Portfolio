import { useEffect, type ReactNode } from "react";
import { perfil, type Hito } from "@/data/perfil";
import "./cv.css";

// El CV de Lara, mejorado: su misma estructura y sus colores. Lo que se ve aquí es lo que se descarga en PDF.
// La columna principal va primero en el código para que el texto del PDF se lea en orden.
const base = import.meta.env.BASE_URL;
const pdf = `${base}cv-lara-feijoo.pdf`;

const icono = {
  correo: "M3 5.5h18v13H3zM3 6l9 7 9-7",
  lugar: "M12 21.5s6.5-6 6.5-11.5a6.5 6.5 0 0 0-13 0c0 5.5 6.5 11.5 6.5 11.5zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
  enlace: "M10 14a4.5 4.5 0 0 0 6.4 0l3-3A4.5 4.5 0 0 0 13 4.6l-1 1M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1",
};

function Icono({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ccv-icono">
      <path d={d} />
    </svg>
  );
}

function Bloque({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="ccv-bloque">
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}

function Lista({ hitos }: { hitos: Hito[] }) {
  return (
    <ul className="ccv-lista">
      {hitos.map((h) => (
        <li key={h.lugar + h.titulo}>
          <h3>
            {h.lugar} | {h.titulo}
          </h3>
          <p className="ccv-fecha">{h.periodo}</p>
          {h.nota && <p className="ccv-nota">{h.nota}</p>}
          {h.puntos && (
            <ul className="ccv-puntos">
              {h.puntos.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
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

      <article className="ccv" aria-label="Currículum de Lara Feijóo">
        <div className="ccv-principal">
          <header className="ccv-cabecera">
            <h1>{perfil.nombre}</h1>
            <p className="ccv-titular">{perfil.titular}</p>
            <div className="ccv-presenta">
              <p>{perfil.resumen}</p>
              <p className="ccv-busco">{perfil.busco}</p>
            </div>
            <ul className="ccv-contacto">
              <li>
                <Icono d={icono.correo} />
                <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
              </li>
              <li>
                <Icono d={icono.correo} />
                <a href={`mailto:${perfil.emailUni}`}>{perfil.emailUni}</a>
              </li>
              <li>
                <Icono d={icono.lugar} />
                {perfil.lugar}
              </li>
              <li>
                <Icono d={icono.enlace} />
                <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <Icono d={icono.enlace} />
                <a href={perfil.portfolio} target="_blank" rel="noreferrer">
                  Portfolio
                </a>
              </li>
            </ul>
          </header>

          <Bloque titulo="Experiencia laboral">
            <Lista hitos={perfil.experiencia} />
          </Bloque>
          <Bloque titulo="Formación educativa">
            <Lista hitos={perfil.formacion} />
          </Bloque>
          <Bloque titulo="Cursos">
            <Lista hitos={perfil.cursos} />
          </Bloque>
          <span className="ccv-lf" aria-hidden="true">
            LF
          </span>
        </div>

        <aside className="ccv-lateral">
          <img
            className="ccv-foto"
            src={`${base}assets/lara/cv-foto.jpg`}
            alt="Lara Feijóo sonriendo, con un gorro azul de pingüino"
          />
          <Bloque titulo="Competencias">
            <ul className="ccv-simple">
              {perfil.competencias.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Bloque>
          <Bloque titulo="Idiomas">
            <ul className="ccv-idiomas">
              {perfil.idiomas.map((i) => (
                <li key={i.idioma}>
                  <strong>{i.idioma}</strong>
                  <span>{i.nivel}</span>
                </li>
              ))}
            </ul>
          </Bloque>
          <Bloque titulo="Hobbies">
            <ul className="ccv-hobbies">
              {perfil.aficiones.map((a) => (
                <li key={a.titulo}>
                  <strong>{a.titulo}</strong>
                  {a.texto && <span>{a.texto}</span>}
                </li>
              ))}
            </ul>
          </Bloque>
          <Bloque titulo="Premios">
            <ul className="ccv-simple ccv-premios">
              {perfil.premios.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Bloque>
        </aside>
      </article>
    </main>
  );
}
