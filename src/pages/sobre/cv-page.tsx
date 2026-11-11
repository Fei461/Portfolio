import { useEffect } from "react";
import { perfil, type Hito } from "@/data/perfil";
import "./cv.css";

// El CV es una hoja A4 de formato clásico: lo que se ve aquí es exactamente lo que se descarga en PDF.
const pdf = `${import.meta.env.BASE_URL}cv-lara-feijoo.pdf`;

function Entrada({ h }: { h: Hito }) {
  // Sin logros, el lugar va en la misma línea que el puesto.
  const corta = !h.puntos;
  return (
    <li className="hcv-entrada">
      <div className="hcv-entrada__cabeza">
        <h3>
          {h.titulo}
          {corta && <span className="hcv-lugar">{h.lugar}</span>}
        </h3>
        <span className="hcv-periodo">{h.periodo}</span>
      </div>
      {!corta && <p className="hcv-lugar">{h.lugar}</p>}
      {h.detalle && <p className="hcv-detalle">{h.detalle}</p>}
      {h.puntos && (
        <ul className="hcv-logros">
          {h.puntos.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Seccion({ titulo, hitos }: { titulo: string; hitos: Hito[] }) {
  return (
    <section className="hcv-seccion">
      <h2>{titulo}</h2>
      <ul className="hcv-lista">
        {hitos.map((h) => (
          <Entrada key={h.titulo} h={h} />
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
    <main className="cv-mesa">
      <div className="cv-acciones">
        <a className="dojo-boton" href={pdf} download="CV Lara Feijóo.pdf">
          Descargar CV en PDF
        </a>
      </div>

      <article className="hcv" aria-label="Currículum de Lara Feijóo">
        <header className="hcv-cabecera">
          <h1>{perfil.nombre}</h1>
          <p className="hcv-titular">{perfil.titular}</p>
          <ul className="hcv-contacto">
            <li>{perfil.lugar}</li>
            <li>
              <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
            </li>
            <li>
              <a href={`mailto:${perfil.emailUni}`}>{perfil.emailUni}</a>
            </li>
            <li>
              <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/lara-feijoo
              </a>
            </li>
            <li>
              <a href={perfil.portfolio} target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </li>
          </ul>
        </header>

        <section className="hcv-seccion hcv-perfil">
          <h2>Perfil</h2>
          <p>{perfil.resumen}</p>
          <p className="hcv-disponible">
            <strong>Disponibilidad:</strong> {perfil.busco.charAt(0).toLowerCase() + perfil.busco.slice(1)}
          </p>
        </section>

        <Seccion titulo="Experiencia" hitos={perfil.experiencia} />
        <Seccion titulo="Formación" hitos={perfil.formacion} />

        <Seccion titulo="Formación complementaria" hitos={perfil.cursos} />
        <Seccion titulo="Premios" hitos={perfil.premios} />

        <section className="hcv-seccion">
          <h2>Idiomas y otros datos</h2>
          <dl className="hcv-datos">
            <dt>Idiomas</dt>
            <dd>{perfil.idiomas.map((i) => `${i.idioma} (${i.nivel === "Nativa" ? "nativa" : i.nivel})`).join(" · ")}</dd>
            <dt>Competencias</dt>
            <dd>{perfil.competencias.join(" · ")}</dd>
            <dt>Intereses</dt>
            <dd>{perfil.aficiones.join(" · ")}</dd>
          </dl>
        </section>
      </article>
    </main>
  );
}
