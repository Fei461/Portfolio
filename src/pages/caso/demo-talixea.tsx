import { useId, useState } from "react";

// Recreación de la muestra de talixea.es: el inglés gana terreno en el texto.
type Trozo = string | { es: string; en: string; orden: number };

const frases: Trozo[][] = [
  [{ es: "La niña", en: "The girl", orden: 2 }, " abrió la puerta y ", { es: "el castillo", en: "the castle", orden: 4 }, " quedó en silencio."],
  [{ es: "La reina", en: "The queen", orden: 1 }, " miró por ", { es: "la ventana", en: "the window", orden: 5 }, " mientras caía ", { es: "la nieve", en: "the snow", orden: 3 }, "."],
  ["Se pinchó ", { es: "el dedo", en: "the finger", orden: 7 }, " con ", { es: "la aguja", en: "the needle", orden: 6 }, " y tres ", { es: "gotas", en: "drops", orden: 10 }, " de ", { es: "sangre", en: "blood", orden: 8 }, " cayeron sobre la nieve."],
  ["Entonces ", { es: "la reina", en: "the queen", orden: 1 }, " preguntó al ", { es: "espejo", en: "mirror", orden: 9 }, " quién era la más bella del reino."],
];

const TOTAL = 10;

export function DemoTalixea() {
  const [porcentaje, setPorcentaje] = useState(20);
  const id = useId();
  const visibles = Math.round((porcentaje / 100) * TOTAL);

  return (
    <section className="caso-seccion" aria-labelledby={`${id}-titulo`}>
      <h2 id={`${id}-titulo`} className="caso-h2">
        Pruébalo aquí
      </h2>
      <p className="caso-entradilla">
        Mueve el control: el inglés va ganando terreno en el texto. Pasa el ratón por una palabra en
        color para ver qué significa.
      </p>
      <div className="demo-talixea">
        <div className="demo-talixea__control">
          <label htmlFor={`${id}-rango`}>Inglés en el texto</label>
          <output htmlFor={`${id}-rango`}>{porcentaje} %</output>
          <input
            id={`${id}-rango`}
            type="range"
            min={10}
            max={90}
            step={5}
            value={porcentaje}
            onChange={(e) => setPorcentaje(Number(e.target.value))}
          />
          <div className="demo-talixea__marcas" aria-hidden="true">
            <span>10 %, empiezas</span>
            <span>45 %, techo gratis</span>
            <span>90 %, techo Plus</span>
          </div>
        </div>
        <div className="demo-talixea__texto" aria-live="polite">
          <p className="demo-talixea__libro">Blancanieves, de los hermanos Grimm. Capítulo 1</p>
          {frases.map((frase, i) => (
            <p key={i}>
              {frase.map((t, j) =>
                typeof t === "string" ? (
                  <span key={j}>{t}</span>
                ) : t.orden <= visibles ? (
                  <mark key={j} title={t.es} lang="en">
                    {t.en}
                  </mark>
                ) : (
                  <span key={j}>{t.es}</span>
                ),
              )}
            </p>
          ))}
        </div>
      </div>
      <p className="caso-video__red">
        Recreación de la muestra de la portada de talixea.es.
      </p>
    </section>
  );
}
