import { Link } from "react-router-dom";

// El cierre de todas las páginas: en judo, «hajime» es la orden de empezar.
export function SiteFooter() {
  return (
    <footer className="dojo-hajime" id="contacto" aria-labelledby="hajime">
      <div className="dojo-hajime__dentro">
        <p className="dojo-hajime__titulo" id="hajime" lang="ja-Latn">
          Hajime.
        </p>
        <p>
          Es lo que dice el árbitro para que empiece el combate. Si tienes unas prácticas, un
          proyecto o una pregunta, empezamos cuando quieras.
        </p>
        <div className="dojo-acciones">
          <a className="dojo-boton dojo-boton--rojo" href="mailto:lara.feijoo@gmail.com">
            Escribir a lara.feijoo@gmail.com
          </a>
          <a
            className="dojo-boton dojo-boton--claro"
            href="https://www.linkedin.com/in/lara-feijoo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link className="dojo-boton dojo-boton--claro" to="/cv">
            Ver CV
          </Link>
        </div>
      </div>
      <div className="dojo-pie">
        <span>Lara Feijóo, 2026</span>
        <span>Hecho en Galapagar.</span>
      </div>
    </footer>
  );
}
