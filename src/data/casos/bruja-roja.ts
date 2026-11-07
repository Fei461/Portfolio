import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/bruja-roja/${file}`;

// Fuente: manual de identidad corporativa de Bruja Roja (Grado URJC).
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
  contexto: {
    titulo: "Una copa menstrual que no pide permiso",
    parrafos: [
      "Fue uno de los trabajos más divertidos que hice en toda la carrera. Cuando nos dijeron que debíamos hacernos una cuenta en Twitter, pensé que para ver el mundo arder (según el público de esta red) lo mejor era un producto de menstruación femenina y feminista.",
      "Convencí a mi equipo de buscar la viralidad desde el odio, con un discurso profundamente progresista que chocara con la masculinidad frágil de esa red. Estuvimos cuatro meses publicando de forma constante y, si soy sincera, a veces me dan ganas de volver.",
      "Yo aportaba el toque más sarcástico y provocador. El apartado de nuestra marca pone en palabras lo que yo pensaba de verdad, el logotipo fue cosa mía y el nombre lo elegimos entre todas. Admito que hice bastante en este trabajo, porque estaba motivada.",
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
      ],
    },
    {
      titulo: "La marca",
      resumen: "Una identidad corporativa completa.",
      puntos: [
        "El logotipo, con el sombrero de bruja, dentro de un universo de lunas, calderos y constelaciones muy lejos de la estética de farmacia.",
        "Creamos dos productos y una bolsa con el claim «Menstrúo, luego existo», y colaboramos con otros grupos de clase.",
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
  aprendizajes: [
    "Cómo comunicarme en un mundo instantáneo, donde la conversación se genera al segundo y desaparece a la misma velocidad.",
  ],
  nota: "Proyecto académico en equipo (Grado URJC). Bruja Roja es una marca inventada para el ejercicio.",
};
