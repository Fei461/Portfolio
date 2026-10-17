import { useEffect } from "react";
import { Link } from "react-router-dom";
import { perfil } from "@/data/perfil";
import "./paginas.css";

const foto = `${import.meta.env.BASE_URL}assets/lara/cascada.jpg`;

// Trayectoria en orden cronológico, de lo más reciente a lo más antiguo.
const trayectoria = [
  { cuando: "Octubre de 2026", que: "Lanzo Talixea, la app que buscaba y no existía." },
  { cuando: "Septiembre de 2026", que: "Empiezo el Máster en Comunicación Publicitaria en la UC3M." },
  { cuando: "Enero a mayo de 2026", que: "Prácticas en marketing en Stud-IA, con tres redes a mi cargo." },
  { cuando: "2022–2026", que: "Grado en Publicidad y RRPP en la URJC, con un 8,62 de media y seis matrículas de honor." },
  { cuando: "2024–2025", que: "Cursos de RTVE sobre contenidos para plataformas OTT y sobre IA en medios." },
  { cuando: "2021–2025", que: "Profesora de artes marciales y monitora de campamento en Guerreros Galapagar." },
];

export function SobrePage() {
  useEffect(() => {
    document.title = "Sobre mí, Lara Feijóo";
  }, []);

  return (
    <main className="pagina">
      <section className="pagina-cabecera pagina-cabecera--foto">
        <div>
          <h1 className="pagina-titulo">Sobre mí</h1>
          <p className="pagina-lead">
            No suelo ser la persona con la primera idea. Suelo ser la que quiere entender por qué esa
            idea debería funcionar.
          </p>
          <p className="pagina-texto">{perfil.resumen}</p>
        </div>
        <figure className="pagina-foto">
          <img src={foto} alt="Lara sonriendo con la lengua fuera delante de una cascada" width={1400} height={1050} />
          <figcaption>Fuera del aula, tampoco me quedo quieta.</figcaption>
        </figure>
      </section>

      <section className="pagina-bloque pagina-dos" aria-labelledby="tatami">
        <h2 className="pagina-h2" id="tatami">
          Del tatami a la publicidad
        </h2>
        <div className="pagina-prosa">
          <p>
            El judo forma parte de mí casi desde que nací. Soy cinturón marrón en judo y azul en
            taekwondo, y durante años he dado clase de artes marciales y he sido monitora de
            campamento en Guerreros Galapagar.
          </p>
          <p>
            Del tatami me he traído una forma de trabajar: entender antes de moverme, colocarme bien
            antes de lanzarme y saber caer cuando algo sale mal. Lo cuento en la{" "}
            <Link to="/">portada</Link>, con mis proyectos como ejemplo.
          </p>
        </div>
      </section>

      <section className="pagina-bloque pagina-dos" aria-labelledby="camino">
        <h2 className="pagina-h2" id="camino">
          El camino hasta aquí
        </h2>
        <ol className="pagina-linea">
          {trayectoria.map((t) => (
            <li key={t.que}>
              <span>{t.cuando}</span>
              <p>{t.que}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pagina-bloque pagina-tres" aria-label="Idiomas, competencias y aficiones">
        <div>
          <h2 className="pagina-h3">Idiomas</h2>
          <ul className="pagina-lista">
            {perfil.idiomas.map((i) => (
              <li key={i.idioma}>
                <strong>{i.idioma}</strong> {i.nivel}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="pagina-h3">Cómo trabajo</h2>
          <ul className="pagina-lista">
            {perfil.competencias.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="pagina-h3">Fuera del trabajo</h2>
          <ul className="pagina-lista">
            {perfil.aficiones.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pagina-bloque dojo-acciones">
        <Link className="dojo-boton" to="/trabajo">
          Ver proyectos
        </Link>
        <Link className="dojo-boton dojo-boton--claro" to="/cv">
          Ver CV completo
        </Link>
      </div>
    </main>
  );
}
