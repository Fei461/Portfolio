import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/bruja-roja/${file}`;

// Fuente: manual de identidad corporativa de Bruja Roja (Grado URJC).
export const brujaRoja: CasoCompleto = {
  slug: "bruja-roja",
  titulo: "Bruja Roja",
  parecia: "Parecía una identidad visual.",
  era: "Era un sistema entero para hablar de la regla sin pedir perdón: tono, logos, color, contenido y producto.",
  ficha: [
    { etiqueta: "Qué", valor: "Cuenta de X e identidad corporativa para una copa menstrual" },
    { etiqueta: "Dónde", valor: "Comunicación Multimedia, Grado URJC" },
    { etiqueta: "Equipo", valor: "Cuatro personas, cuatro meses publicando en X" },
    { etiqueta: "Mi parte", valor: "Propuse el enfoque de la cuenta; identidad y aplicaciones, en equipo" },
  ],
  marcador: [
    { cifra: "3", texto: "colores: cobre, burdeos y crema" },
    { cifra: "3", texto: "tipografías, cada una con su función" },
    { cifra: "4", texto: "tipos de publicación con su día de la semana" },
    { cifra: "6", texto: "usos incorrectos del logo, documentados" },
  ],
  contexto: {
    titulo: "Una copa menstrual que no pide permiso",
    parrafos: [
      "Bruja Roja nace para desafiar los tabúes sobre la menstruación, empoderar a las mujeres y ofrecer una alternativa sostenible con su copa menstrual.",
      "El reto de la asignatura era crear una cuenta en X. Convencí a mi equipo de que había otra forma de abordarlo: buscar la viralidad desde el odio, con un discurso profundamente progresista que chocara con la masculinidad frágil de esa red. Estuvimos cuatro meses publicando sin parar.",
      "La clave era el tono: directo, provocador y con un punto de ironía. Una marca que habla como esa amiga que te dice las verdades que nadie más se atreve a decir. Por el camino creamos dos productos, colaboramos con otros grupos y lo resumimos todo en un dossier y un manual de marca.",
    ],
  },
  bloques: [
    {
      titulo: "Definir la marca y su voz",
      resumen: "Antes que el logo, cómo habla.",
      puntos: [
        "Misión: desafiar los tabúes sobre la regla, empoderar y ofrecer una alternativa sostenible.",
        "Una comunicación sarcástica, disruptiva y sin filtros, con la irreverencia de quien no teme cuestionar lo establecido.",
        "La bruja, en honor al nombre, como imagen central de un universo místico que da personalidad a la marca.",
      ],
    },
    {
      titulo: "Diseñar el logotipo",
      resumen: "Un sistema, no un dibujo suelto.",
      puntos: [
        "Logotipo primario y secundario, cada uno en tres versiones: solo el nombre, el nombre con sombrero de bruja y una versión compacta.",
        "Seis usos incorrectos documentados: cambiar elementos, colores no corporativos, otra separación, rotarlo, deformarlo o cambiar la tipografía.",
      ],
    },
    {
      titulo: "Elegir color y tipografía",
      resumen: "Mística sin perder legibilidad.",
      puntos: [
        "Paleta de tres colores: cobre (#CE945C), burdeos (#6D1B2C) y crema (#FAF2EC).",
        "Barcelona ITC para los titulares, Bodoni como secundaria y Glacial Indifference para los textos.",
        "Elementos gráficos de brujería: fases de la luna, calderos, constelaciones y la propia copa.",
      ],
    },
    {
      titulo: "Planificar el contenido",
      resumen: "Provocar, hacer reír y enseñar a la vez.",
      puntos: [
        "Lunes de datos educativos que desmontan mitos sobre la regla y jueves de datos curiosos de historia, cultura o ciencia.",
        "Mensajes cortos y disruptivos para hacer pensar, y respuestas sin filtros a las preguntas incómodas.",
        "Un diseño base reconocible: constelaciones rojas sobre crema y el imagotipo siempre en la esquina inferior derecha.",
      ],
    },
    {
      titulo: "Llevarlo al producto",
      resumen: "Donde la marca se toca.",
      puntos: [
        "Packaging de la copa (100 % silicona) y caja regalo con el universo místico de la marca.",
        "Una bolsa con el claim «Menstrúo, luego existo».",
      ],
    },
  ],
  imagenes: {
    titulo: "El manual",
    texto: "Las páginas que explican el sistema, recortadas del manual de identidad.",
    items: [
      {
        src: img("logos.jpg"),
        alt: "Tres versiones del logotipo de Bruja Roja en cobre sobre burdeos: el nombre, el nombre con sombrero de bruja y una versión compacta",
        pie: "Logotipo primario en sus tres versiones.",
      },
      {
        src: img("paleta.jpg"),
        alt: "Paleta de color con tres círculos: cobre #CE945C, burdeos #6D1B2C y crema #FAF2EC",
        pie: "La paleta: cobre, burdeos y crema.",
      },
      {
        src: img("tipografias.jpg"),
        alt: "Muestras de las tres tipografías: Barcelona ITC, Bodoni y Glacial Indifference",
        pie: "Tres tipografías con funciones distintas.",
      },
      {
        src: img("elementos.jpg"),
        alt: "Elementos gráficos de la marca: fases lunares, una bruja, la copa menstrual, un caldero y un fondo místico",
        pie: "Elementos gráficos del universo de la marca.",
      },
      {
        src: img("publicaciones.jpg"),
        alt: "Diseño base de las publicaciones, con constelaciones sobre crema, y un ejemplo con un reloj de arena",
        pie: "Diseño base de las publicaciones y un ejemplo.",
      },
      {
        src: img("productos.jpg"),
        alt: "Caja regalo de copas menstruales, packaging de la copa y una bolsa burdeos con el texto «Menstrúo, luego existo»",
        pie: "Producto: caja, packaging y bolsa.",
      },
    ],
  },
  tatami: {
    termino: "Kuzushi",
    titulo: "desequilibrar un tabú",
    intro:
      "Para que se hable de algo que se esconde, primero hay que sacarlo de su sitio. Estas fueron las decisiones que lo hicieron.",
  },
  caidas: [
    {
      titulo: "Llamarlo por su nombre",
      texto:
        "Nada de eufemismos ni de líquidos azules. La regla se nombra, y el humor quita la vergüenza sin quitarle seriedad al tema.",
    },
    {
      titulo: "Un universo propio",
      texto:
        "Lejos de la estética de farmacia, un mundo de brujas, lunas, calderos y constelaciones que hace la marca reconocible a primera vista.",
    },
    {
      titulo: "Provocar con datos",
      texto:
        "La provocación se sostiene con educación sexual: cada mensaje disruptivo convive con información que desmonta un mito.",
    },
  ],
  cita: {
    texto: "Menstrúo, luego existo.",
    autor: "Claim de la bolsa",
    cargo: "Bruja Roja",
  },
  aprendizajes: [
    "Cómo comunicar en un mundo instantáneo, donde la conversación nace en un segundo y desaparece igual de rápido.",
    "Un tono se diseña igual que un logo: con reglas.",
    "Decir cómo no se usa una marca la protege tanto como decir cómo se usa.",
    "El humor abre conversaciones que un dato solo no abre.",
  ],
  nota: "Proyecto académico en equipo (Grado URJC). Bruja Roja es una marca inventada para el ejercicio.",
};
