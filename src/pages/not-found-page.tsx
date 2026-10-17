import { useEffect } from "react";
import { Link } from "react-router-dom";

// En judo, «matte» es la orden de parar.
export function NotFoundPage() {
  useEffect(() => {
    document.title = "Página no encontrada, Lara Feijóo";
  }, []);

  return (
    <main className="no-encontrada" aria-labelledby="no-encontrada">
      <div className="dojo-seccion">
      <h1 className="trabajo-titulo" id="no-encontrada" lang="ja-Latn">
        Matte.
      </h1>
      <p className="dojo-entradilla">
        Es lo que dice el árbitro para parar el combate. Esta página no existe o ha cambiado de
        sitio.
      </p>
      <div className="dojo-acciones">
        <Link className="dojo-boton" to="/">
          Volver al inicio
        </Link>
        <Link className="dojo-boton dojo-boton--claro" to="/trabajo">
          Ver proyectos
        </Link>
      </div>
      </div>
    </main>
  );
}
