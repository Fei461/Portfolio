import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/iberia/${file}`;

// Fuente: propuesta creativa del Grupo 6 (Grado URJC).
export const iberia: CasoCompleto = {
  slug: "iberia",
  titulo: "Iberia",
  era: "Un problema de credibilidad: nadie se cree a una aerolínea que promete vuelos verdes.",
  ficha: [
    { etiqueta: "Qué", valor: "Propuesta creativa de campaña" },
    { etiqueta: "Dónde", valor: "Redacción Publicitaria, Grado URJC, 2025" },
    { etiqueta: "Equipo", valor: "Grupo 6, cinco personas" },
    { etiqueta: "Mi parte", valor: "La idea de la estrategia y su redacción, el guion del spot y las acciones de cada soporte" },
  ],
  contexto: {
    titulo: "Hablar de sostenibilidad sin greenwashing",
    parrafos: [
      "Iberia, junto con Cepsa, Vueling y BIOCIRC, impulsa combustibles sostenibles de aviación, con el objetivo de llegar a cero emisiones netas en 2050. El encargo era construir una campaña para contar esa transición.",
      "Pero entre lo que hace la aerolínea y lo que percibe la gente hay una brecha enorme, y cualquier mensaje «verde» genera desconfianza. ¿Prometer más? Solo habría hecho la brecha más grande.",
      "Aunque la trabajamos en conjunto, la estrategia se me ocurrió a mí y la redacté yo. El guion lo tenía en la cabeza desde el principio: cómo quería que saliera el spot, el marketing experiencial, el spot de cine, el email y la prensa escrita, que creo que fue de lo más original.",
    ],
  },
  bloques: [
    {
      titulo: "La estrategia",
      resumen: "La restauración inacabada.",
      puntos: [
        "Nuestro público era una Generación Z que valora lo auténtico y que siente flight shaming: «Me siento mal cuando viajo en avión porque contamina mucho».",
        "La transición ecológica contada como la restauración de una obra de arte deteriorada: un proceso real, lento y necesario. Como en el kintsugi, hacer visible el daño para poder transformarlo.",
      ],
    },
    {
      titulo: "Cada soporte",
      resumen: "La misma idea, cambiando de escala.",
      puntos: [
        "Spot: la restauración de El Oxbow, colocado en el aeropuerto, intercalada con las acciones reales de Iberia. Termina sin acabar de restaurarse.",
        "Cine: el tráiler arranca con un falso fallo técnico, una imagen sucia que rompe la calidad que se espera de una sala.",
        "Aeropuerto: cuadros españoles con doble cristal y un kit de limpieza; solo el público puede limpiar el primero.",
        "Email: un correo «sucio» que se va limpiando a medida que bajas. Prensa: una página casi cubierta de tinta, como la huella de carbono.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      {
        src: img("storyboard.jpg"),
        alt: "Storyboard del spot: manos restaurando un cuadro con oro al estilo kintsugi, intercaladas con un avión de Iberia repostando y el cierre con el logo",
        pie: "Storyboard del spot. El cuadro se restaura con oro, como en el kintsugi, y no llega a terminarse.",
      },
      {
        src: img("cine.png"),
        alt: "Sala de cine con una pantalla sucia que alguien limpia con un trapo y el texto «A veces, la suciedad no te deja ver la imagen completa»",
        pie: "Cine: el tráiler empieza con la pantalla sucia.",
      },
      {
        src: img("activacion.png"),
        alt: "Propuesta de activación en el aeropuerto con un cuadro de paisaje tras un cristal y un kit de limpieza",
        pie: "Aeropuerto: el público limpia el primer cristal.",
      },
      {
        src: img("email.jpg"),
        alt: "Email en un móvil con fondo negro manchado que se va aclarando al deslizar, con mensajes sobre combustible sostenible",
        pie: "Email: «No abras este correo si buscas un cielo azul».",
      },
      {
        src: img("prensa.jpg"),
        alt: "Página de periódico cubierta de tinta negra con una sola línea legible: «No está terminado. Y no será fácil»",
        pie: "Prensa: solo una frase se libra de la mancha.",
      },
    ],
  },
  aprendizajes: [
    "Reformular el brief cuando la percepción pública revela otro problema.",
    "Donde hay desconfianza, explicar los límites da más credibilidad que parecer resuelto.",
  ],
  nota: "Propuesta académica en equipo (Grupo 6, Grado URJC), sin relación con Iberia.",
};
