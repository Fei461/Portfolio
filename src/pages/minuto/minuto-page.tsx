import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { proyectos } from "@/data/proyectos";
import { tiempos } from "@/data/metodo";
import { perfil } from "@/data/perfil";
import "../sobre/paginas.css";
import "./minuto.css";

// «Dame un minuto»: lo más importante, para quien no tiene tiempo de verlo todo.
// Todo sale de textos que ya están en la web (portada, CV, casos y Sobre mí).
const base = import.meta.env.BASE_URL;
const destacados = ["tfg-bbva", "stud-ia", "santander"]
  .map((slug) => proyectos.find((p) => p.slug === slug)!)
  .filter(Boolean);

const imagen = (p: (typeof proyectos)[number]) => p.portada ?? p.poster;

function Correo() {
  const [copiado, setCopiado] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1800);
    } catch {
      window.location.href = `mailto:${perfil.email}`;
    }
  };
  return (
    <button type="button" className="dojo-boton dojo-boton--claro" onClick={copiar} data-evento="Copiar correo">
      <span aria-live="polite">{copiado ? "Correo copiado" : perfil.email}</span>
    </button>
  );
}

export function MinutoPage() {
  useEffect(() => {
    document.title = "Dame un minuto, Lara Feijóo Vázquez";
  }, []);

  return (
    <main className="minuto">
      <header className="minuto__cabeza">
        <h1>Dame un minuto</h1>
        <p>Lo más importante, para quien no tiene tiempo de verlo todo.</p>
      </header>

      <ol className="minuto__pasos">
        <li className="minuto__paso">
          <h2>Quién soy</h2>
          <p>
            Graduada en Publicidad y RRPP (URJC) y estudiante del Máster en Comunicación Publicitaria (UC3M). Me
            tiran las relaciones públicas, la gestión de marca, la reputación y la comunicación interna. Quiero
            entender a la gente y partirme la cabeza buscando la mejor solución para la marca.
          </p>
        </li>

        <li className="minuto__paso minuto__paso--busco">
          <h2>Qué busco</h2>
          <p>
            <strong>Prácticas a tiempo completo</strong>, con convenio de la UC3M, a partir de abril de 2027.
          </p>
        </li>

        <li className="minuto__paso">
          <h2>Lo que dicen de mí</h2>
          <blockquote className="minuto__cita">
            <p>
              «Lara demostró ser una persona responsable, creativa y con una excelente actitud de aprendizaje y
              adaptación a un entorno dinámico y exigente como el de una startup.»
            </p>
            <footer>
              Diego López de Aragón, cofundador y CMO de Stud-IA, en su carta de recomendación
            </footer>
          </blockquote>
        </li>

        <li className="minuto__paso">
          <h2>Tres trabajos para empezar</h2>
          <ul className="minuto__casos">
            {destacados.map((p) => (
              <li key={p.slug}>
                <Link to={`/trabajo/${p.slug}`}>
                  {imagen(p) && <img src={imagen(p)} alt="" loading="lazy" />}
                  <strong>{p.titulo}</strong>
                  <span className="minuto__tipo">{p.tipo}</span>
                  <span>{p.resumen}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="minuto__paso">
          <h2>Cómo trabajo</h2>
          <p className="minuto__tiempos">
            {tiempos.map((t, i) => (
              <span key={t.nombre} className={`minuto__tiempo color--${t.color}`}>
                {i + 1}. {t.nombre}
              </span>
            ))}
          </p>
          <p>
            <Link className="minuto__ejemplos" to="/sobre-mi?parte=metodo">
              Verlo con ejemplos
            </Link>
          </p>
        </li>
        <li className="minuto__paso">
          <h2>Más allá del CV</h2>
          <ul className="minuto__mas-de-mi">
            <li>
              <strong>Culo inquieto.</strong> Me lo paso genial en un brainstorming diciendo locuras, y me lo paso
              igual de bien dándoles forma después.
            </li>
            <li>
              <strong>Sobre el tatami.</strong> Cinturón marrón de judo y azul de taekwondo, y años dando clase a
              otros.
            </li>
            <li>
              <strong>Cuatro idiomas.</strong> Español, inglés, catalán y francés, y un curso escolar en Irlanda.
            </li>
          </ul>
          <p>
            <Link className="minuto__ejemplos" to="/sobre-mi">
              Más sobre mí
            </Link>
          </p>
        </li>
      </ol>

      <footer className="minuto__pie">
        <a className="dojo-boton" href={`${base}cv-lara-feijoo.pdf`} download="CV Lara Feijóo Vázquez.pdf">
          Descargar CV
        </a>
        <Correo />
        <Link className="minuto__mas" to="/trabajo">
          ¿Tienes más tiempo? Todos los proyectos
        </Link>
      </footer>
    </main>
  );
}
