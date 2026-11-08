import type { CasoCompleto } from "./tipos";

// TFG individual. Fuente: «Percepción y renovación de la identidad corporativa:
// el caso de BBVA tras la crisis financiera» (URJC, curso 2025-2026).
const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/tfg-bbva/${file}`;

export const tfgBbva: CasoCompleto = {
  slug: "tfg-bbva",
  titulo: "BBVA tras 2008",
  era: "Quise medir, dentro y fuera del banco, si la gente se ha creído el nuevo relato de BBVA.",
  ficha: [
    { etiqueta: "Qué", valor: "Trabajo de Fin de Grado sobre identidad y reputación corporativa" },
    { etiqueta: "Dónde", valor: "Grado en Publicidad y RRPP, URJC, curso 2025-2026" },
    { etiqueta: "Equipo", valor: "Individual" },
    { etiqueta: "Método", valor: "Análisis documental, dos encuestas y una entrevista en profundidad" },
  ],
  marcador: [
    { cifra: "248", texto: "respuestas: 103 de dentro del banco y 145 de fuera" },
    { cifra: "0,68", texto: "puntos separan la reputación vista por la plantilla (4,19) y por el público externo (3,51)" },
  ],
  contexto: {
    titulo: "¿Se ha cerrado la herida de 2008?",
    parrafos: [
      "Tras la crisis financiera, la banca perdió la confianza de la gente. BBVA respondió con un rebranding, una apuesta por la sostenibilidad y proyectos de contenido como Aprendemos Juntos. Mi TFG quería saber si todo eso había funcionado de verdad.",
      "Para no quedarme en la teoría lo medí desde los dos lados: una encuesta a la plantilla y otra al público externo, con las mismas preguntas, y una entrevista en profundidad a la Head of Brand & Content de BBVA, una de las creadoras de Aprendemos Juntos.",
      "La conclusión, en una frase: la marca BBVA cae bien, pero la entidad bancaria aún genera desconfianza.",
      "Y a riesgo de cruzar la línea, hay algo que no se ve detrás de este trabajo: soy hija de dos empleados de BBVA. He visto de cerca su plantación de árboles tras los incendios, sus talleres de ciberseguridad y sus becas. Todo eso es cierto, como también lo es que tienen un problema de comunicación.",
    ],
  },
  brecha: {
    titulo: "Lo que se ve desde dentro y desde fuera",
    intro: "Cada atributo, puntuado de 1 a 5 por la plantilla y por el público externo. La línea roja es la distancia entre los dos.",
    dentro: "Plantilla",
    fuera: "Público externo",
    items: [
      {
        atributo: "Reputación actual",
        dentro: 4.19,
        fuera: 3.51,
        porQue: "La marca cae bien, pero la entidad bancaria aún genera desconfianza.",
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
        porQue: "Más de un punto de diferencia: lo que la plantilla vive por dentro no llega a quien está fuera.",
      },
      {
        atributo: "Acciones sociales",
        dentro: 4.56,
        fuera: 3.81,
        porQue: "Lo mejor valorado por el público externo. Aprendemos Juntos actúa como escudo reputacional, y su credibilidad reside en su invisibilidad comercial.",
      },
      {
        atributo: "Integración de la IA",
        dentro: 4.64,
        fuera: 3.15,
        porQue: "Dentro es una herramienta para el día a día; fuera provoca una sensación de abandono.",
      },
      {
        atributo: "Compromiso con el medio ambiente",
        dentro: 4.33,
        fuera: 3.03,
        porQue: "La plantilla ve los cambios de primera mano; fuera solo llega el mensaje publicitario, y muchos lo leen como greenwashing.",
      },
    ],
  },
  bloques: [
    {
      titulo: "Medir la brecha",
      resumen: "Dos encuestas gemelas, dentro y fuera.",
      puntos: [
        "Hice las mismas preguntas a 103 personas de BBVA y a 145 de fuera: reputación, ética, trato al cliente, acciones sociales, inteligencia artificial y medio ambiente.",
        "Analicé las medias, la dispersión y las correlaciones, y categoricé las respuestas abiertas para entender el porqué de cada nota.",
      ],
    },
    {
      titulo: "Escuchar a quien lo hizo",
      resumen: "Una entrevista a la responsable de marca y contenidos.",
      puntos: [
        "Me contó cómo BBVA pasó del patrocinio a la utilidad.",
        "Y por qué llegaron a rechazar contactos que venían de presidencia para no «sacar la patita de banco».",
      ],
    },
    {
      titulo: "Lo que le recomiendo a BBVA",
      resumen: "Su problema no es lo que hace, es que no lo cuenta.",
      puntos: [
        "Comunicar los intangibles en medios ganados y pagados, no solo las condiciones de una cuenta.",
        "Evitar que aparezcan nuevos escándalos como el de Villarejo.",
        "Si quiere fusionarse con otro banco, ser más estratégico para que no se pueda leer como una OPA hostil.",
        "Mantener la coherencia con su filosofía antes de incorporar novedades como la inteligencia artificial, y escuchar siempre a sus públicos, de dentro y de fuera.",
      ],
    },
    {
      titulo: "Segmentar",
      resumen: "Cada público ve un banco distinto.",
      puntos: [
        "Por generación: la Generación X, a la que más afectó la crisis, da las puntuaciones más bajas; la Z castiga la integración de la IA.",
        "Por cargo: los técnicos, el grueso de la plantilla, son los más críticos con su propia empresa.",
        "Por eso BBVA no debe gestionar una única reputación, sino una polisemia de marca.",
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
  cita: {
    texto: "La raíz de la brecha reputacional no consiste en la falta de acciones y estrategias, sino en la no muestra de las mismas.",
    autor: "Lo que concluí",
    cargo: "Discusión final del TFG",
  },
  aprendizajes: [
    "Lo que más me ha gustado descubrir: cuando BBVA se lanzó a la piscina, no sabía si tendría agua.",
    "Para mí, el cambio más significativo no fue el restyling, sino replantearse el propósito.",
  ],
};
