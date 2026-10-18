import type { CasoCompleto } from "./tipos";

// TFG individual. Fuente: «Percepción y renovación de la identidad corporativa:
// el caso de BBVA tras la crisis financiera» (URJC, curso 2025-2026).
const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/tfg-bbva/${file}`;

export const tfgBbva: CasoCompleto = {
  slug: "tfg-bbva",
  titulo: "BBVA tras 2008",
  parecia: "Parecía un TFG sobre un banco.",
  era: "Era medir, dentro y fuera, si la gente se ha creído el nuevo relato de BBVA.",
  ficha: [
    { etiqueta: "Qué", valor: "Trabajo de Fin de Grado sobre identidad y reputación corporativa" },
    { etiqueta: "Dónde", valor: "Grado en Publicidad y RRPP, URJC, curso 2025-2026" },
    { etiqueta: "Equipo", valor: "Individual" },
    { etiqueta: "Método", valor: "Análisis documental, dos encuestas y una entrevista en profundidad" },
  ],
  marcador: [
    { cifra: "248", texto: "respuestas: 103 de dentro del banco y 145 de fuera" },
    { cifra: "0,68", texto: "puntos separan la reputación vista por la plantilla (4,19) y por la sociedad (3,51)" },
  ],
  contexto: {
    titulo: "¿Se ha cerrado la herida de 2008?",
    parrafos: [
      "Tras la crisis financiera, la banca perdió la confianza de la gente. BBVA respondió con un rebranding, una apuesta por la sostenibilidad y proyectos de contenido como Aprendemos Juntos. Mi TFG quería saber si todo eso había funcionado de verdad.",
      "Para no quedarme en la teoría lo medí desde los dos lados: una encuesta a la plantilla y otra a la sociedad, con las mismas preguntas, y una entrevista en profundidad a la Head of Brand & Content de BBVA, una de las creadoras de Aprendemos Juntos.",
      "La conclusión, en una frase: la marca cae bien, pero el banco todavía genera desconfianza.",
    ],
  },
  brecha: {
    titulo: "Lo que se ve desde dentro y desde fuera",
    intro: "Cada atributo, puntuado de 1 a 5 por la plantilla y por la sociedad. La línea roja es la distancia entre los dos.",
    dentro: "Plantilla",
    fuera: "Sociedad",
    items: [
      {
        atributo: "Reputación actual",
        dentro: 4.19,
        fuera: 3.51,
        porQue: "Casi un punto por debajo fuera: la marca cae bien, pero la entidad bancaria aún genera desconfianza.",
      },
      {
        atributo: "Compromiso ético con la sociedad",
        dentro: 4.16,
        fuera: 3.08,
        porQue: "La memoria de 2008 pesa más que el relato nuevo: fuera se recuerda la sensación de que se socializaron las pérdidas.",
      },
      {
        atributo: "Trato justo a los clientes",
        dentro: 4.1,
        fuera: 3.05,
        porQue: "Más de un punto de diferencia: lo que la plantilla vive por dentro no llega a quien está al otro lado del mostrador.",
      },
      {
        atributo: "Acciones sociales",
        dentro: 4.56,
        fuera: 3.81,
        porQue: "Lo mejor valorado por la sociedad. Aprendemos Juntos funciona como escudo reputacional, y su fuerza está en que no vende nada.",
      },
      {
        atributo: "Integración de la IA",
        dentro: 4.64,
        fuera: 3.15,
        porQue: "Dentro es una herramienta para el día a día; fuera se vive como una barrera que deshumaniza la atención.",
      },
      {
        atributo: "Compromiso con el medio ambiente",
        dentro: 4.33,
        fuera: 3.03,
        porQue: "La plantilla ve los cambios de primera mano; la sociedad solo recibe el mensaje publicitario y lo lee como greenwashing.",
      },
    ],
  },
  bloques: [
    {
      titulo: "Medir la brecha",
      resumen: "Dos encuestas gemelas, dentro y fuera.",
      puntos: [
        "Las mismas preguntas para 103 personas de BBVA y 145 de fuera: reputación, ética, trato al cliente, acciones sociales, inteligencia artificial y medio ambiente.",
        "Análisis descriptivo, correlacional y de dispersión, y categorización de las respuestas abiertas para entender el porqué de cada nota.",
      ],
    },
    {
      titulo: "Escuchar a quien lo hizo",
      resumen: "Una entrevista a la responsable de marca y contenidos.",
      puntos: [
        "Cómo BBVA pasó del patrocinio a la utilidad: de buscar que lo conocieran a aportar algo de valor.",
        "Por qué la credibilidad de Aprendemos Juntos está en su invisibilidad comercial.",
      ],
    },
    {
      titulo: "Segmentar",
      resumen: "No hay una reputación, hay varias.",
      puntos: [
        "Por generación: la Generación X, la más golpeada por la crisis, es la más crítica; la Z castiga la integración de la IA.",
        "Por cargo: los técnicos, el grueso de la plantilla, son los más exigentes con su propia empresa.",
        "Por eso BBVA no gestiona una única reputación, sino una polisemia de marca.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    texto: "Dos de los gráficos del trabajo.",
    items: [
      { src: img("brecha.jpg"), alt: "Gráfico de barras que compara la opinión interna y externa sobre BBVA en cuatro atributos", pie: "Opinión interna y externa, comparadas." },
      { src: img("nube.jpg"), alt: "Nube de palabras con Imagen, Social, Marca y Sostenibilidad como términos más repetidos", pie: "Las palabras que más se repitieron en las respuestas abiertas." },
    ],
  },
  aprendizajes: [
    "El cambio más importante no fue el logo, fue el propósito.",
    "La credibilidad de una acción social está en no venderla.",
    "Una marca no gestiona una reputación, sino varias a la vez.",
  ],
};
