import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/iberia/${file}`;

// Fuente: propuesta creativa del Grupo 6 (Grado URJC).
export const iberia: CasoCompleto = {
  slug: "iberia",
  titulo: "Iberia",
  parecia: "Parecía imposible: que una aerolínea hablara de sostenibilidad sin sonar a greenwashing.",
  era: "Era admitir la mancha y enseñar la restauración, aunque no esté terminada.",
  ficha: [
    { etiqueta: "Qué", valor: "Propuesta creativa de campaña" },
    { etiqueta: "Dónde", valor: "Redacción Publicitaria, Grado URJC, 2025" },
    { etiqueta: "Equipo", valor: "Grupo 6, cinco personas" },
    { etiqueta: "Mi parte", valor: "La idea de la estrategia y su redacción, el guion del spot y las acciones de cada soporte" },
  ],
  contexto: {
    titulo: "Hablar de sostenibilidad sin greenwashing",
    parrafos: [
      "La elegimos a propósito, en contraposición a Ryanair, el trabajo del curso anterior. Iberia, junto con Cepsa, Vueling y BIOCIRC, impulsa combustibles sostenibles de aviación, con el objetivo de llegar a cero emisiones netas en 2050. El encargo era construir una campaña para contar esa transición.",
      "Pero entre lo que hace la aerolínea y lo que percibe la gente hay una brecha enorme, y cualquier mensaje «verde» genera desconfianza. ¿Prometer más? Solo habría hecho la brecha más grande.",
      "Investigando vimos que Iberia sí hacía cosas, pero no las comunicaba. Y la autocrítica es un valor que considero clave, en las empresas y en las personas: quien asume sus errores y pide perdón puede seguir mejorando; quien no, solo se está engañando. Así surgió «la restauración inacabada».",
      "Me lo pasé muy bien porque nos salimos de lo establecido. Sí, hicimos un spot, pero en realidad era marketing experiencial con muchísimos factores en juego: pensar fuera de la caja para encajar. Y convencer a gente que te odia ya era un reto en sí mismo.",
    ],
  },
  bloques: [
    {
      titulo: "La estrategia",
      resumen: "La restauración inacabada: asumir el daño antes de prometer nada.",
      puntos: [
        "Nuestro público era una Generación Z que valora lo auténtico y que siente flight shaming: «Me siento mal cuando viajo en avión porque contamina mucho».",
        "La transición ecológica contada como la restauración de una obra de arte deteriorada: un proceso real, lento y necesario. Como en el kintsugi, hacer visible el daño para poder transformarlo.",
      ],
    },
    {
      titulo: "Los objetivos",
      resumen: "Que se vea a Iberia como una marca honesta.",
      puntos: [
        "Fomentar una visión más informada de lo que Iberia hace de verdad, aumentar el tráfico a su web y, sobre todo, que se la perciba como honesta.",
      ],
    },
    {
      titulo: "Cada soporte",
      resumen: "Cada pieza, con su porqué.",
      puntos: [
        "Spot: el cuadro El Oxbow (1836), deteriorado y colgado en la zona de embarque, se restaura mientras se intercalan las acciones reales de Iberia. Termina sin acabar, porque la responsabilidad empieza al asumir el daño.",
        "Aeropuerto: cuadros españoles tras un doble cristal sucio y un kit de limpieza; solo el público puede limpiar el primero. Así lo intangible se convierte en algo que se toca.",
        "Cine: el tráiler arranca con un falso fallo técnico. Romper la calidad de imagen que se espera de una sala genera incertidumbre y atrapa la atención.",
        "Email: un correo «sucio» que se va limpiando a medida que bajas. Es más personal y permite segmentar mejor.",
        "Prensa: una página casi cubierta de tinta negra, como la huella de carbono, con un solo trazo nítido. Materializa el problema en papel y rompe los códigos del medio.",
      ],
    },
  ],
  guion: {
    titulo: "«La restauración inacabada»",
    intro: "Las cinco primeras escenas del guion del spot.",
    escenas: [
      {
        tiempo: "00:00 – 00:30",
        imagen: "Negro. De golpe, un collage de ciudades, aeropuertos, humo industrial, noticias y manifestaciones climáticas.",
        texto: "Voz en off: «Volar contamina». Silencio y, después, un ruido blanco que crece.",
      },
      {
        tiempo: "00:30 – 00:45",
        imagen: "Corte abrupto a negro. Aparece el primer rótulo, centrado en blanco.",
        texto: "Voz en off: «Ocultarlo no lo va a borrar». Rótulo: «Capítulo 1: la mancha».",
      },
      {
        tiempo: "00:45 – 01:15",
        imagen: "Un cuadro tapado con una tela negra en un expositor. La cámara se aleja y descubre dónde está: un aeropuerto.",
        texto: "La tela se retira de un tirón. Golpe de sonido y ambiente de aeropuerto.",
      },
      {
        tiempo: "01:15 – 01:55",
        imagen: "El Oxbow de Thomas Cole (1836), en la zona de embarque, lleno de grietas y con una capa de suciedad.",
        texto: "Una metáfora visual del daño en la atmósfera. Entra la música.",
      },
      {
        tiempo: "01:55 – 02:15",
        imagen: "Primer plano de un pie, en ángulo de gusano y con el fondo desenfocado: llega quien va a restaurarlo.",
        texto: "El spot sigue con la restauración, intercalada con las acciones reales de Iberia, y termina sin acabar.",
      },
    ],
    nota: "Guion completo en el trabajo original; aquí, solo el arranque.",
  },
  imagenes: {
    titulo: "Las piezas",
    texto: "La misma idea en cada soporte: enseñar la mancha y lo que se está haciendo para limpiarla.",
    items: [
      {
        src: img("storyboard.jpg"),
        alt: "Storyboard del spot: manos restaurando un cuadro con oro al estilo kintsugi, intercaladas con un avión de Iberia repostando y el cierre con el logo",
        pie: "Storyboard del spot. El cuadro se restaura con oro, como en el kintsugi, y no llega a terminarse.",
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
};
