import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/santander/${file}`;

// Fuente: presentación del Grupo 7 (Comunicación corporativa, máster UC3M)
// y el laboratorio web publicado en fei461.github.io/santander.
export const santander: CasoCompleto = {
  slug: "santander",
  titulo: "Santander",
  parecia: "Parecía una presentación de diez diapositivas, justo lo que nos pidieron.",
  era: "Era un laboratorio entero escondido detrás de cada hipervínculo.",
  ficha: [
    { etiqueta: "Qué", valor: "Análisis de la identidad visual del logo de Santander" },
    { etiqueta: "Dónde", valor: "Comunicación Corporativa, Máster UC3M, 2026" },
    { etiqueta: "Equipo", valor: "Cuatro personas" },
    { etiqueta: "Mi parte", valor: "La web del laboratorio y la encuesta, enteras. La evaluación, en equipo" },
  ],
  enlaces: [{ href: "https://fei461.github.io/santander/", label: "Abrir el laboratorio" }],
  laboratorio: {
    src: "https://fei461.github.io/santander/",
    titulo: "Laboratorio de pruebas del signo Santander",
    texto: "La web que hice para que cada nota se pudiera comprobar. Se recorre en diez o doce minutos.",
    imagen: `${import.meta.env.BASE_URL}assets/casos/santander/laboratorio.png`,
    dentro: [
      "Los once criterios, cada uno en su pestaña: nuestra valoración, la evidencia de la guía de marca y una prueba interactiva.",
      "Los resultados de la encuesta, sin saber de qué marca se trataba.",
      "Las críticas de los expertos, positivas y negativas, respondidas una a una.",
      "Tu propia nota de 1 a 5 en cada criterio, comparada al final con la nuestra.",
    ],
  },
  marcador: [
    { cifra: "87 %", texto: "de las 31 personas encuestadas reconoció la marca solo con la llama (27)" },
    { cifra: "10 %", texto: "percibe cercanía, lo que la marca dice transmitir (3 de 31)" },
  ],
  contexto: {
    titulo: "Lo que no se ve a primera vista",
    parrafos: [
      "El primer trabajo en grupo de la asignatura no puntuaba, teníamos varias entregas a la vez y no le dedicamos demasiado tiempo. Al día siguiente, en clase, el profesor nos contó una historia sobre unos yogures que se nos quedó marcada: de una forma muy enrevesada, nos estaba diciendo que esperaba mucho más de nosotros.",
      "En el siguiente trabajo hicimos una revista entera, con estilo y coherencia temática, y aun así hubo dos trabajos por encima del nuestro. Uno era una locura, sí. El otro, sinceramente, no era mejor. Me piqué.",
      "Así que, en este, fui un paso más allá. Nos pidieron diez diapositivas siguiendo el método Kawasaki para un cliente metódico, explicando por qué el nuevo logo de Santander era mejor que el anterior según los once criterios de Chaves y Belluccia. Y eso es lo que presentamos. Pero con hipervínculos a todo lo que había debajo: una encuesta que respondieron 31 personas en apenas 24 horas y una web entera con cómo cumple el logo cada criterio, los resultados del sondeo y hasta las críticas de profesionales.",
      "Lo que se veía a primera vista era lo que nos habían pedido. Lo que marcaba la diferencia estaba debajo.",
    ],
  },
  bloques: [
    {
      titulo: "El encargo",
      resumen: "Evaluar un logo sin quedarse en la opinión.",
      puntos: [
        "En 2018 Santander evolucionó su marca para un cliente que vive en el móvil: letra sin remates, fondo blanco y un rojo más vivo.",
        "Había que evaluar ese logo con los once criterios de calidad de Chaves y Belluccia, que miran desde si se lee bien y se reconoce hasta si funciona en cualquier tamaño y soporte.",
        "Decidimos que cada nota tenía que poder comprobarse, con tres fuentes de evidencia: la guía de marca del banco, una prueba por criterio y una encuesta propia.",
      ],
    },
    {
      titulo: "Diseñar la encuesta",
      resumen: "Medir lo que el público percibe, no lo que la marca declara.",
      puntos: [
        "La hice yo, y conseguimos 31 respuestas en apenas 24 horas, sin decir de qué marca se trataba: 14 personas con formación en publicidad, diseño o marketing, 17 sin ella y 9 clientes del banco.",
        "Pruebas de reconocimiento: identificar la marca solo con el símbolo, decir qué se ve en cinco segundos y elegir la llama original entre cuatro versiones, con un 25 % de acierto por azar.",
        "Una pregunta antes de enseñar ninguna imagen, «escribe el primer banco que te venga a la cabeza: rojo», para medir la asociación de color sin contaminarla.",
        "Escalas de acuerdo y atributos percibidos, comparados entre perfiles: profesionales frente al resto y clientes frente a no clientes.",
      ],
    },
    {
      titulo: "Construir el laboratorio",
      resumen: "La parte que no se veía a primera vista.",
      puntos: [
        "Cada criterio tiene nuestra valoración, la evidencia de la guía de marca, el dato de la encuesta y una prueba interactiva.",
        "El visitante se pone su propia nota de 1 a 5 y la tabla final la compara con la del grupo, 65 sobre 75.",
        "Cuatro criterios cuentan doble y la web explica por qué. También enseña el resultado sin ponderar, 47 sobre 55, para que se vea que el peso no cambia la conclusión.",
        "Las siete valoraciones de expertos que recogió la web especializada Reason Why, positivas y críticas, respondidas una a una.",
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
      resumen: "Lo que nos pidieron, al pie de la letra (y con hipervínculos a todo lo demás).",
      puntos: [
        "Una presentación de diez diapositivas, veinte minutos y letra de treinta puntos (la regla 10/20/30 de Kawasaki), pensada para un cliente metódico.",
        "Cada diapositiva lleva un dato comprobable y la última enlaza directamente con cada prueba del laboratorio.",
      ],
    },
  ],
  imagenes: {
    titulo: "El laboratorio",
    texto: "Dos pantallas más de la web.",
    items: [
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
    "Lo que una marca declara y lo que la gente percibe no siempre coinciden. Medirlo es la mitad del trabajo.",
    "Que lo que se ve a primera vista tiene que cumplir el encargo, y lo que marca la diferencia puede estar debajo.",
    "Que picarse, bien canalizado, también es un motor.",
  ],
};
