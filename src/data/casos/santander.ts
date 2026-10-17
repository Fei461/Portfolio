import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/santander/${file}`;

// Fuente: presentación del Grupo 7 (Comunicación corporativa, máster UC3M)
// y el laboratorio web publicado en fei461.github.io/santander.
export const santander: CasoCompleto = {
  slug: "santander",
  titulo: "Santander",
  parecia: "Parecía un análisis del logo de Santander.",
  era: "Era una herramienta: un laboratorio web donde cualquiera puede evaluarlo y comparar su nota con la nuestra.",
  ficha: [
    { etiqueta: "Qué", valor: "Análisis de identidad visual para Comunicación corporativa" },
    { etiqueta: "Cuándo", valor: "Octubre de 2026, Máster UC3M" },
    { etiqueta: "Equipo", valor: "Grupo 7, cuatro personas" },
    { etiqueta: "Mi parte", valor: "La web del laboratorio y la encuesta, enteras. La evaluación, en equipo" },
  ],
  enlaces: [{ href: "https://fei461.github.io/santander/", label: "Abrir el laboratorio" }],
  laboratorio: {
    src: "https://fei461.github.io/santander/",
    titulo: "Laboratorio del signo Santander",
    texto: "La web que hice, aquí mismo. Ponle tu nota al logo y compárala con la nuestra.",
  },
  marcador: [
    { cifra: "11", texto: "criterios de Chaves y Belluccia, cada uno con su prueba interactiva" },
    { cifra: "31", texto: "personas en la encuesta, sin saber de qué marca se trataba" },
    { cifra: "87 %", texto: "reconoció la marca solo con la llama" },
    { cifra: "10 %", texto: "percibe la cercanía que la marca dice transmitir" },
  ],
  contexto: {
    titulo: "Evaluar un logo sin quedarse en la opinión",
    parrafos: [
      "En 2018 Santander evolucionó su marca para un cliente que vive en el móvil: letra sin remates, fondo blanco y un rojo más vivo. El encargo era evaluar ese logo con los once criterios de calidad de Chaves y Belluccia.",
      "Decidimos que cada nota tenía que poder comprobarse. Por eso trabajamos con tres fuentes de evidencia: la guía de marca del banco, un laboratorio con una prueba por criterio y una encuesta propia.",
      "La web y la encuesta las hice yo sola. Después de cuatro años entregando PDF que acaban en una carpeta, me apetecía un anexo que se usara de verdad: quien lo visita pone su nota y la compara con la nuestra.",
    ],
  },
  bloques: [
    {
      titulo: "Diseñar la encuesta",
      resumen: "Medir lo que el público percibe, no lo que la marca declara.",
      puntos: [
        "31 personas respondieron en Google Forms sin saber de qué marca se trataba: 14 con formación en publicidad, diseño o marketing, 17 sin ella y 9 clientes del banco.",
        "Pruebas de reconocimiento: identificar la marca solo con el símbolo, decir qué se ve en cinco segundos y elegir la llama original entre cuatro versiones, con un 25 % de acierto por azar.",
        "Una pregunta antes de enseñar ninguna imagen, «escribe el primer banco que te venga a la cabeza: rojo», para medir la asociación de color sin contaminarla.",
        "Escalas de acuerdo y atributos percibidos, comparados entre perfiles: profesionales frente al resto y clientes frente a no clientes.",
      ],
    },
    {
      titulo: "Construir el laboratorio",
      resumen: "Una pestaña por criterio y el visitante como evaluador.",
      puntos: [
        "Cada criterio tiene nuestra valoración, la evidencia de la guía de marca, el dato de la encuesta y una prueba interactiva.",
        "El visitante se pone su propia nota de 1 a 5 y la tabla final la compara con la del grupo, 65 sobre 75.",
        "Cuatro criterios cuentan doble y la web explica por qué. También enseña el resultado sin ponderar, 47 sobre 55, para que se vea que el peso no cambia la conclusión.",
        "Las siete valoraciones de expertos que recogió Reason Why, positivas y críticas, respondidas una a una.",
      ],
    },
    {
      titulo: "Llegar a una conclusión",
      resumen: "Una evolución continuista que cumple los once criterios.",
      puntos: [
        "Lo más fuerte: se lee con claridad (4,68 sobre 5), el 87 % reconoce la marca solo por la llama y se reproduce igual en color, en negro y a 16 píxeles.",
        "Lo más débil: solo un 10 % percibe cercanía, solo un 61 % lo ve actual y no hay un sistema de submarcas publicado.",
      ],
    },
    {
      titulo: "Presentarlo",
      resumen: "Para un cliente metódico, cada titular es una conclusión.",
      puntos: [
        "Presentación según la regla 10/20/30 de Kawasaki, pensada para un perfil de cliente metódico.",
        "Cada diapositiva lleva un dato comprobable y la última enlaza directamente con cada prueba del laboratorio.",
      ],
    },
  ],
  imagenes: {
    titulo: "El laboratorio",
    texto: "Tres pantallas de la web. Se puede recorrer entera en diez o doce minutos.",
    items: [
      {
        src: img("laboratorio.png"),
        alt: "Portada del laboratorio de pruebas del signo Santander, con la conclusión del grupo, 65 sobre 75, y cómo leer las notas",
        pie: "La portada: la conclusión arriba y el método justo al lado.",
      },
      {
        src: img("criterio.png"),
        alt: "Pestaña del criterio de pertinencia, con la valoración del grupo, la evidencia y una prueba para marcar los atributos que se perciben en el logotipo",
        pie: "Un criterio: valoración, evidencia y prueba para el visitante.",
      },
      {
        src: img("sondeo.png"),
        alt: "Resultados de la encuesta a 31 personas, con porcentajes de reconocimiento y gráficos de barras de acuerdo y atributos",
        pie: "La encuesta: lo que percibe el público, sin saber qué marca era.",
      },
    ],
  },
  tatami: {
    termino: "",
    titulo: "Cuando los datos te llevan la contraria",
    intro: "Más de una vez, la encuesta nos dijo algo distinto de lo que esperábamos. Esto es lo que hicimos con ello.",
  },
  caidas: [
    {
      titulo: "Lo declarado frente a lo percibido",
      texto:
        "La guía dice que la llama transmite calor y humanidad. La encuesta dijo otra cosa: un 10 % percibe cercanía y un 3 %, humanidad. Por eso la pertinencia se quedó en un 4 y no en un 5.",
    },
    {
      titulo: "Que el peso no decidiera por nosotros",
      texto:
        "Ponderar criterios puede parecer una forma de ajustar el resultado. Para evitarlo, la web enseña también la nota sin ponderar: 85 % frente a 87 %.",
    },
    {
      titulo: "Dar la razón a quien la tiene",
      texto:
        "Incluimos también las valoraciones críticas de los expertos. A cada una le respondimos con argumentos, y reconocimos cuándo tenía razón.",
    },
  ],
  cita: {
    texto: "Evolución, no revolución.",
    autor: "Ana Botín",
    cargo: "Presidenta de Banco Santander, sobre el cambio de 2018 (Reason Why, 2018)",
  },
  aprendizajes: [
    "Una opinión con evidencia se defiende sola.",
    "Enseñar el método convence más que enseñar la nota.",
    "Lo que una marca declara y lo que la gente percibe no siempre coinciden. Medirlo es la mitad del trabajo.",
    "Un anexo puede ser algo que la gente usa, no algo que se salta.",
  ],
  nota: "Trabajo académico de máster, sin relación con Banco Santander. El logotipo se reproduce con fines académicos.",
};
