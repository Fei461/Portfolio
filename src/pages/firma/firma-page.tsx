import { useEffect } from "react";
import { Nudo } from "@/components/firma";
import "./firma.css";

// Hoja de la firma de Lara: versiones, tamaños, colores y usos. Solo en local.
const colores = [
  { nombre: "Tatami", hex: "#C9C48B", uso: "El fondo de la casa" },
  { nombre: "Judogi blanco", hex: "#F5F5F2", uso: "Para leer: tarjetas y hojas" },
  { nombre: "Negro", hex: "#000000", uso: "Texto, bordes y sombras duras" },
  { nombre: "Cinturón", hex: "#6E3C20", uso: "La firma y lo que ordena" },
  { nombre: "Hilo dorado", hex: "#E6BC4A", uso: "Solo el bordado" },
  { nombre: "Celeste", hex: "#8EC5EA", uso: "Su color, como su gorro" },
  { nombre: "Celeste claro", hex: "#E4F2FB", uso: "Fondos suaves: la columna del CV, lo que se destaca" },
];

export function FirmaPage() {
  useEffect(() => {
    document.title = "Firma de Lara Feijóo Vázquez";
  }, []);

  return (
    <main className="hoja-firma">
      <header className="hf-cabecera">
        <p className="hf-etiqueta">Imagen personal de Lara Feijóo Vázquez</p>
        <h1>Su nombre y el nudo de su cinturón</h1>
        <p className="hf-intro">
          Dos piezas que ya están en el portfolio. El nombre, con la letra de la portada, es la firma. El nudo del
          cinturón marrón de los judogis, con FEIJÓO bordado en una punta como en el suyo de verdad, es el símbolo.
          Nunca van pegados: el nudo va solo, entero y en color.
        </p>
      </header>

      <section className="hf-bloque">
        <h2>1. El nombre</h2>
        <div className="hf-fondos">
          <div className="hf-fondo hf-fondo--blanco">
            <span className="firma__nombre hf-nombre">Lara Feijóo Vázquez</span>
            <span>Sobre judogi blanco</span>
          </div>
          <div className="hf-fondo hf-fondo--tatami">
            <span className="firma__nombre hf-nombre">Lara Feijóo Vázquez</span>
            <span>Sobre tatami</span>
          </div>
          <div className="hf-fondo hf-fondo--negro">
            <span className="firma__nombre hf-nombre hf-invertida">Lara Feijóo Vázquez</span>
            <span>Sobre negro</span>
          </div>
          <div className="hf-fondo hf-fondo--blanco hf-fondo--agua">
            <span className="firma__nombre hf-nombre">Lara Feijóo Vázquez</span>
            <Nudo className="hf-agua" />
            <span>Con el nudo en la esquina, como en el CV</span>
          </div>
        </div>
      </section>

      <section className="hf-bloque">
        <h2>2. Solo el nudo</h2>
        <p className="hf-nota">Para la foto de perfil, la esquina del CV y, sobre celeste, el icono de la web.</p>
        <div className="hf-tamanos">
          <div>
            <Nudo className="hf-t200" />
            <span>Grande</span>
          </div>
          <div>
            <Nudo className="hf-t64" />
            <span>64 px</span>
          </div>
          <div>
            <Nudo className="hf-t32" />
            <span>32 px</span>
          </div>
        </div>
      </section>

      <section className="hf-bloque">
        <h2>3. En uso</h2>
        <div className="hf-usos">
          <figure className="hf-uso">
            <div className="hf-avatar">
              <span className="hf-avatar__circulo">
                <Nudo />
              </span>
            </div>
            <figcaption>Foto de perfil, si no va su foto</figcaption>
          </figure>
          <figure className="hf-uso">
            <div className="hf-correo">
              <p>Un saludo,</p>
              <p className="firma__nombre hf-correo__nombre">Lara Feijóo Vázquez</p>
              <p className="hf-correo__datos">
                Publicidad y RRPP · Máster en Comunicación Publicitaria (UC3M)
                <br />
                lara.feijoo@gmail.com · Portfolio · LinkedIn
              </p>
            </div>
            <figcaption>Firma de correo</figcaption>
          </figure>
        </div>
      </section>

      <section className="hf-bloque">
        <h2>4. Colores</h2>
        <ul className="hf-colores">
          {colores.map((c) => (
            <li key={c.hex}>
              <span className="hf-muestra" style={{ background: c.hex }} />
              <strong>{c.nombre}</strong>
              <code>{c.hex}</code>
              <small>{c.uso}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
