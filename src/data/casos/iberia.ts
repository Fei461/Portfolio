import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/iberia/${file}`;

// Fuente: propuesta creativa del Grupo 6 (Grado URJC).
export const iberia: CasoCompleto = {
  slug: "iberia",
  titulo: "Iberia",
  parecia: "Parecía un problema de sostenibilidad.",
  era: "Era un problema de credibilidad: nadie se cree a una aerolínea que promete vuelos verdes.",
  ficha: [
    { etiqueta: "Qué", valor: "Propuesta creativa de campaña" },
    { etiqueta: "Dónde", valor: "Grado en Publicidad y RRPP, URJC" },
    { etiqueta: "Equipo", valor: "Grupo 6, cinco personas" },
    { etiqueta: "Mi parte", valor: "Estrategia, narrativa y piezas, en equipo. El entregable no asigna autoría por pieza" },
  ],
  marcador: [
    { cifra: "Top 10", texto: "Iberia, entre las aerolíneas más contaminantes según Transport & Environment (2025)" },
    { cifra: "2050", texto: "año de su objetivo de emisiones netas cero" },
    { cifra: "1836", texto: "año de El Oxbow, el cuadro que se restaura en el spot" },
    { cifra: "4", texto: "soportes para una misma idea: cine, aeropuerto, email y prensa" },
  ],
  contexto: {
    titulo: "Hablar de sostenibilidad sin greenwashing",
    parrafos: [
      "Iberia, junto con Cepsa, Vueling y BIOCIRC, impulsa combustibles sostenibles de aviación y sistemas eléctricos, con el objetivo de llegar a cero emisiones netas en 2050. El encargo era construir una campaña para contar esa transición.",
      "Pero el problema de comunicación estaba en otra parte. Entre lo que hace la aerolínea y lo que percibe la gente hay una brecha enorme, y cualquier mensaje «verde» genera desconfianza. ¿Prometer más? Solo habría hecho la brecha más grande.",
    ],
  },
  bloques: [
    {
      titulo: "Diagnosticar",
      resumen: "El brief pedía contar; el problema era que no nos creyeran.",
      puntos: [
        "Tres síntomas: la brecha entre acciones y percepción, una imagen poco comprometida con el clima y la desconfianza hacia los mensajes verdes.",
        "Tres objetivos: una visión más informada de lo que hace Iberia, que se la perciba como una marca honesta y más tráfico a su web de sostenibilidad.",
      ],
    },
    {
      titulo: "Encontrar el insight",
      resumen: "Generación Z, nativa digital y muy atenta a la autenticidad.",
      puntos: [
        "Un público hiperconectado, preocupado por el futuro y que valora lo auténtico: los «authentic activists».",
        "El insight, el flight shaming: «Me siento mal cuando viajo en avión porque contamina mucho».",
      ],
    },
    {
      titulo: "Elegir el concepto",
      resumen: "La restauración inacabada.",
      puntos: [
        "La transición ecológica como la restauración de una obra de arte deteriorada: un proceso real, lento y necesario.",
        "Como en el kintsugi, hacer visible el daño para poder transformarlo. Sin esconder la huella y sin dar el trabajo por terminado.",
        "Un tono sincero, cercano y esperanzador.",
      ],
    },
    {
      titulo: "Llevarlo a cada soporte",
      resumen: "La misma idea, cambiando de escala.",
      puntos: [
        "Spot: la restauración de El Oxbow, colocado en el aeropuerto, intercalada con las acciones reales de Iberia. Termina sin acabar de restaurarse.",
        "Cine: el tráiler arranca con un falso fallo técnico, una imagen sucia que rompe la calidad que se espera de una sala.",
        "Aeropuerto: cuadros españoles con doble cristal y un kit de limpieza; solo el público puede limpiar el primero.",
        "Email: un correo «sucio» que se va limpiando a medida que se baja. Prensa: una página casi cubierta de tinta, como la huella de carbono.",
      ],
    },
    {
      titulo: "Decidir cómo medirlo",
      resumen: "Propuesta académica: no hubo campaña en el mercado.",
      puntos: [
        "Comprensión de las acciones concretas de Iberia.",
        "Credibilidad percibida frente a un mensaje verde convencional.",
        "Visitas a la web de sostenibilidad e intención de volver a volar con Iberia.",
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
  tatami: {
    termino: "Kuzushi",
    titulo: "desequilibrar el brief",
    intro:
      "Kuzushi es sacar al otro de su equilibrio antes de proyectarlo. Aquí lo que había que desequilibrar era el propio encargo.",
  },
  caidas: [
    {
      titulo: "No decir más",
      texto:
        "El brief pedía comunicar la transición sostenible. Con tanta desconfianza, comunicar más habría alejado aún más a la marca de su público.",
    },
    {
      titulo: "Enseñar el daño",
      texto:
        "La tentación era enseñar el cielo limpio. Decidimos enseñar la mancha y dejar la restauración a medias, porque así es el proceso.",
    },
    {
      titulo: "Incomodar a propósito",
      texto:
        "Un tráiler que parece estropeado o una página de periódico tapada de tinta rompen el formato. La incomodidad es lo que hace que se mire.",
    },
  ],
  cita: {
    texto:
      "Nuestro propósito, al igual que el kintsugi, es hacer el daño visible para transformar el sector aéreo en algo mejor.",
    autor: "Texto del spot",
    cargo: "Propuesta para Iberia",
  },
  aprendizajes: [
    "Reformular el brief cuando la percepción pública revela otro problema.",
    "En territorios con desconfianza, explicar los límites da más credibilidad que parecer resuelto.",
    "Una idea creativa sirve como prueba de coherencia, no como decoración.",
  ],
  nota: "Propuesta académica en equipo (Grupo 6, Grado URJC), sin relación con Iberia.",
};
