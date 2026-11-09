import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/bruja-roja/${file}`;

// Fuente: dossier corporativo y manual de identidad de Bruja Roja (Grado URJC).
export const brujaRoja: CasoCompleto = {
  slug: "bruja-roja",
  titulo: "Bruja Roja",
  parecia: "Parecía otra cuenta de Twitter que había que abrir para aprobar una asignatura.",
  era: "Era ver el mundo arder: una copa menstrual feminista justo en la red donde más iba a escocer.",
  ficha: [
    { etiqueta: "Qué", valor: "Cuenta de X e identidad corporativa para una copa menstrual" },
    { etiqueta: "Dónde", valor: "Comunicación Multimedia, Grado URJC, 2025" },
    { etiqueta: "Equipo", valor: "Cuatro personas, cuatro meses publicando en X" },
    { etiqueta: "Mi parte", valor: "La idea, el logotipo, el calendario, los tipos de contenido y el contenido disruptivo" },
  ],
  enlaces: [{ href: "https://x.com/brujaroja_cup", label: "Ver la cuenta en X" }],
  marcador: [
    { cifra: "2.391", texto: "visualizaciones de una de nuestras entrevistas en la calle" },
    { cifra: "1.778", texto: "visualizaciones del tuit que presentó la copa" },
  ],
  contexto: {
    titulo: "Una copa menstrual que no pide permiso",
    parrafos: [
      "Fue uno de los trabajos más divertidos que hice en toda la carrera. Cuando nos dijeron que debíamos hacernos una cuenta en Twitter (hoy, X), pensé que para ver el mundo arder (según el público de esta red) lo mejor era un producto de menstruación femenina y feminista.",
      "Desde el primer momento convencí a mi equipo de que había más de una forma de abordar el reto: lograr la viralidad desde el odio, con un discurso profundamente progresista que chocara con la masculinidad frágil de esa red. Estuvimos cuatro meses publicando de forma constante y, si soy sincera, a veces me dan ganas de volver.",
      "Cada una aportó lo suyo; yo, el toque más sarcástico y provocador. El nombre lo elegimos entre todas.",
    ],
  },
  bloques: [
    {
      titulo: "La voz",
      resumen: "Esa amiga que te dice lo que nadie se atreve.",
      puntos: [
        "Un tono directo, disruptivo y sarcástico que rompiera con los estereotipos.",
        "Teníamos que ser rápidas pero eficaces con nuestros mensajes.",
      ],
    },
    {
      titulo: "El contenido",
      resumen: "Un calendario fijo y varios tipos de publicaciones.",
      puntos: [
        "Cada semana se planificaba con una de antelación: los lunes y los jueves, un dato informativo o curioso que desmontaba mitos sobre la regla; el resto de días, dudas sobre la copa, producto y vídeo.",
        "Apostamos por el vídeo y la imagen porque las entrevistas, los spots y los tuits con imagen eran lo que más se veía.",
        "Mi pilar favorito era el contenido disruptivo y las dudas, así que solía encargarme de ello. Y aprovechamos el calendario, como con el hilo del Día del Padre.",
      ],
    },
    {
      titulo: "La marca",
      resumen: "Una identidad corporativa completa.",
      puntos: [
        "El logotipo, con dos símbolos que lo complementan: el sombrero de la bruja y la gota de sangre. Y, desde el primer momento, el fondo con las constelaciones.",
        "Creamos dos productos, la copa y unas infusiones para los cólicos, y una bolsa con el claim «Menstrúo, luego existo».",
        "Colaboramos con las marcas de otros grupos de clase: unas zapatillas con UShoose y un kit de autocuidado con Sävia y Lumina.",
      ],
    },
  ],
  imagenes: {
    titulo: "Los tuits",
    oscuro: true,
    texto: "Capturas de la cuenta, con sus visualizaciones reales, y el logotipo.",
    items: [
      {
        src: img("tuit-juegos.jpg"),
        alt: "Tuit de Bruja Roja: «Nosotras lo llamamos Los Juegos de Sangre», con una copa menstrual convertida en trofeo",
        pie: "«Los Juegos de Sangre», en respuesta a un tuit. 550 visualizaciones.",
      },
      {
        src: img("tuit-copa.jpg"),
        alt: "Tuit de presentación de la copa menstrual Bruja Roja, con una bruja y el packaging",
        pie: "La presentación de la copa. 1.778 visualizaciones.",
      },
      {
        src: img("tuit-meme.jpg"),
        alt: "Tuit con un vídeo meme: «La tranquilidad que da que te baje la regla con tal de no estar embarazada»",
        pie: "Un vídeo meme. 700 visualizaciones.",
      },
      {
        src: img("tuit-educativo.jpg"),
        alt: "Tuit educativo: «La copa es capaz de cubrir un turno de 12 horas», según el flujo",
        pie: "Un dato educativo. 806 visualizaciones.",
      },
      {
        src: img("tuit-ushoose.jpg"),
        alt: "Tuit de la colaboración con UShoose: zapatillas pintadas con el lema Sangra libre, menstrúa sin culpa",
        pie: "La colaboración con UShoose.",
      },
      {
        src: img("logos.jpg"),
        alt: "Tres versiones del logotipo de Bruja Roja en cobre sobre burdeos: el nombre, el nombre con sombrero de bruja y una versión compacta",
        pie: "El logotipo.",
      },
    ],
  },
  piezasExtra: [
    {
      id: "calendario",
      nombre: "El calendario",
      intro: "Así se veía una semana: los lunes y los jueves, con tema fijo; el resto, según lo que tocaba contar.",
      tarjetas: [
        {
          etiqueta: "Una semana de ejemplo",
          titulo: "Del domingo 6 al sábado 12",
          escenas: [
            { momento: "Domingo", texto: "Clip de la entrevista a chicas que usan la copa" },
            { momento: "Lunes", texto: "Dato informativo: el impuesto rosa" },
            { momento: "Martes", texto: "¿De qué material están hechas las copas?" },
            { momento: "Miércoles", texto: "¿Cómo se limpia la copa, durante la regla y entre ciclos?" },
            { momento: "Jueves", texto: "Dato curioso: la regla como signo vital" },
            { momento: "Viernes", texto: "¿Las copas vienen en tallas? ¿Cómo sé cuál es la mía?" },
            { momento: "Sábado", texto: "¿Cuánto tiempo puedo llevar la copa sin cambiarla?" },
          ],
        },
      ],
    },
    {
      id: "spots",
      nombre: "Los spots",
      intro: "Dos spots, uno para presentarnos y otro para explicar el producto. Los dos acaban igual.",
      cita: "«No es magia, es poder.»",
      tarjetas: [
        {
          etiqueta: "Spot 1 · presentación",
          titulo: "Desmentir los mitos",
          lineas: [
            "Desmonta los mitos sobre la menstruación y se pregunta por qué la sangre se normaliza en otros ámbitos y en este no. Es nuestra carta de presentación: propósito y valores.",
          ],
        },
        {
          etiqueta: "Spot 2 · producto",
          titulo: "Una menstruación digna",
          lineas: [
            "Explica las propiedades de la copa y cómo cuidarla, y reivindica el derecho a vivir la regla de forma digna y libre.",
          ],
        },
      ],
    },
  ],
  aprendizajes: [
    "Cómo comunicarme en un mundo instantáneo, donde la conversación se genera al segundo y desaparece a la misma velocidad.",
    "A estar presente y usar el altavoz que podíamos tener en un mundo lleno de ruido.",
    "Que el precio de romper estereotipos no es económico, sino de tiempo, esfuerzo y dedicación.",
  ],
  nota: "Proyecto académico en equipo (Grado URJC). Bruja Roja es una marca inventada para el ejercicio.",
};
