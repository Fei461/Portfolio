import { useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { perfil, type Hito } from "@/data/perfil";
import { Nudo } from "@/components/firma";
import "./cv.css";

// El CV de Lara con su estructura de siempre (foto, columna lateral, títulos por sección),
// hecho con las piezas del portfolio (cinturones para ordenar, tarjetas con sombra dura) y su celeste.
// Lo que se ve aquí es lo que se descarga en PDF.
const base = import.meta.env.BASE_URL;
const pdf = `${base}cv-lara-feijoo.pdf`;

const icono = {
  correo: "M3 5.5h18v13H3zM3 6l9 7 9-7",
  telefono: "M6.5 3.5h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2",
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
            {h.lugar} <span className="ccv-barra">|</span> {h.titulo}
          </h3>
          <p className="ccv-fecha">{h.periodo}</p>
          {h.nota && <p className="ccv-nota">{h.nota}</p>}
          {h.destacado && (
            <p className="ccv-destacado">
              {h.destacadoEnlace ? (
                <a href={h.destacadoEnlace} target="_blank" rel="noreferrer">
                  {h.destacado} (léela en el portfolio)
                </a>
              ) : (
                h.destacado
              )}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function CvPage() {
  // La versión para enviar lleva teléfono: solo en local (?tel=…), nunca en la web publicada.
  const [params] = useSearchParams();
  const telefono = import.meta.env.DEV ? params.get("tel") : null;
  useEffect(() => {
    document.title = "CV de Lara Feijóo Vázquez";
  }, []);

  return (
    <main className="cv-mesa">
      <div className="cv-acciones">
        <a className="dojo-boton" href={pdf} download="CV Lara Feijóo Vázquez.pdf">
          Descargar CV en PDF
        </a>
      </div>

      <article className="ccv" aria-label="Currículum de Lara Feijóo Vázquez">
        <div className="ccv-principal">
          <header className="ccv-cabecera">
            <h1 className="ccv-nombre">{perfil.nombreCompleto}</h1>
            <p className="ccv-resumen">{perfil.resumen}</p>
            <p className="ccv-busco">
              <strong>Busco prácticas</strong> a tiempo completo, con convenio de la UC3M, a partir de abril de 2027.
            </p>
            <ul className="ccv-contacto">
              <li>
                <Icono d={icono.correo} />
                <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
              </li>
              <li>
                <Icono d={icono.correo} />
                <a href={`mailto:${perfil.emailUni}`}>{perfil.emailUni}</a>
              </li>
              {telefono && (
                <li>
                  <Icono d={icono.telefono} />
                  {telefono}
                </li>
              )}
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
                <a href={`${perfil.portfolio}?ref=cv`} target="_blank" rel="noreferrer">
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
          {/* El nudo del cinturón, abajo en la esquina */}
          <Nudo className="ccv-agua" />
        </div>

        <aside className="ccv-lateral">
          <figure className="ccv-foto">
            <img src={`${base}assets/lara/cv-foto.jpg`} alt="Lara Feijóo Vázquez sonriendo, con un gorro azul de pingüino" />
            <span className="ccv-foto__obi" aria-hidden="true" />
          </figure>
          <Bloque titulo="Lo que sé hacer">
            <ul className="ccv-simple">
              {perfil.competencias.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Bloque>
          <Bloque titulo="Herramientas">
            <p className="ccv-herramientas">{perfil.herramientas.map((h) => h.replace(/ /g, " ")).join(" · ")}</p>
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
            <p className="ccv-idiomas__nota">{perfil.idiomasNota}</p>
          </Bloque>
          <Bloque titulo="Premios">
            <ul className="ccv-simple">
              {perfil.premios.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Bloque>
          <Bloque titulo="Sobre el tatami">
            <p>{perfil.tatami}</p>
          </Bloque>
        </aside>
      </article>
    </main>
  );
}
