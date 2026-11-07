import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/bruja-roja/${file}`;

// Fuente: dossier corporativo y manual de identidad de Bruja Roja (Grado URJC).
export const brujaRoja: CasoCompleto = {
  slug: "bruja-roja",
  titulo: "Bruja Roja",
  parecia: "Parecía una cuenta de Twitter para una asignatura.",
  era: "Era ver el mundo arder con un producto de menstruación femenina y feminista.",
  ficha: [
    { etiqueta: "Qué", valor: "Cuenta de X e identidad corporativa para una copa menstrual" },
    { etiqueta: "Dónde", valor: "Comunicación Multimedia, Grado URJC" },
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
      "Fue uno de los trabajos más divertidos que hice en toda la carrera. Cuando nos dijeron que debíamos hacernos una cuenta en Twitter, pensé que para ver el mundo arder (según el público de esta red) lo mejor era un producto de menstruación femenina y feminista.",
      "Convencí a mi equipo de buscar la viralidad desde el odio, con un discurso profundamente progresista que chocara con la masculinidad frágil de esa red. Estuvimos cuatro meses publicando de forma constante y, si soy sincera, a veces me dan ganas de volver.",
      "Yo aportaba el toque más sarcástico y provocador. El apartado de nuestra marca pone en palabras lo que yo pensaba de verdad, el logotipo fue cosa mía y el nombre lo elegimos entre todas. Admito que hice bastante en este trabajo, porque estaba motivada.",
      "Empezamos de cero y sin presupuesto. La cuenta siguió siendo pequeña, pero algunos mensajes se recibieron mejor de lo esperado.",
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
      resumen: "Hice el calendario y los tipos de publicaciones.",
      puntos: [
        "Mi pilar favorito era el contenido disruptivo y las dudas, así que solía encargarme de ello.",
        "Los datos curiosos y los educativos, que desmontaban mitos sobre la regla, los hicimos entre todas.",
        "Aprovechamos el calendario, como con el hilo del Día del Padre, y salimos a la calle a hacer entrevistas.",
      ],
    },
    {
      titulo: "La marca",
      resumen: "Una identidad corporativa completa.",
      puntos: [
        "El logotipo, con el sombrero de bruja, dentro de un universo de lunas, calderos y constelaciones muy lejos de la estética de farmacia.",
        "Creamos dos productos, la copa y unas infusiones, y una bolsa con el claim «Menstrúo, luego existo».",
        "Colaboramos con otros grupos de clase, como las zapatillas con UShoose.",
      ],
    },
  ],
  imagenes: {
    titulo: "Los tuits",
    oscuro: true,
    texto: "Capturas de la cuenta, con sus visualizaciones reales, y algunas piezas de la marca.",
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
        src: img("productos.jpg"),
        alt: "Caja regalo de copas menstruales, packaging de la copa y una bolsa burdeos con el texto «Menstrúo, luego existo»",
        pie: "Producto: caja, packaging y bolsa.",
      },
      {
        src: img("logos.jpg"),
        alt: "Tres versiones del logotipo de Bruja Roja en cobre sobre burdeos: el nombre, el nombre con sombrero de bruja y una versión compacta",
        pie: "El logotipo.",
      },
    ],
  },
  aprendizajes: [
    "Cómo comunicarme en un mundo instantáneo, donde la conversación se genera al segundo y desaparece a la misma velocidad.",
  ],
  nota: "Proyecto académico en equipo (Grado URJC). Bruja Roja es una marca inventada para el ejercicio.",
};
