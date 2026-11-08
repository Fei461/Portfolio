// Cómo trabajo: mis cuatro momentos de un proyecto, cada uno con su color y un ejemplo real.
export type ColorSubrayador = "azul" | "naranja" | "amarillo" | "verde" | "rosa" | "morado";

export const tiempos: {
  nombre: string;
  significado: string;
  color: ColorSubrayador;
  ejemplo: string;
  caso: { slug: string; titulo: string };
}[] = [
  {
    nombre: "Decir locuras",
    significado: "El brainstorming",
    color: "amarillo",
    ejemplo:
      "Me lo paso genial en un brainstorming porque puedo decir locuras y dejar que la mente imagine lo que quiera. Cuando nos pidieron una cuenta de Twitter, pensé que para ver el mundo arder lo mejor era un producto de menstruación femenina y feminista.",
    caso: { slug: "bruja-roja", titulo: "Bruja Roja" },
  },
  {
    nombre: "Ordenarlo por colores",
    significado: "Antes de lanzarme",
    color: "verde",
    ejemplo:
      "Vivo con un esquema de colores en la cabeza: mis apuntes llevan siempre el mismo orden y todos los subrayadores del mundo, y tengo tres calendarios, cada uno con su color. En Stud-IA hice un calendario editorial con más de cien fechas de seis países, categorizado para que fuera lo más útil y visual posible.",
    caso: { slug: "stud-ia", titulo: "Stud-IA" },
  },
  {
    nombre: "Darles forma",
    significado: "Medio, soporte y ejecución",
    color: "naranja",
    ejemplo:
      "También me lo paso genial dando forma a las ideas, buscando el mejor medio, soporte y ejecución. En Iberia tenía en la cabeza cómo quería que salieran el spot, el email y la prensa escrita.",
    caso: { slug: "iberia", titulo: "Iberia" },
  },
  {
    nombre: "Mirar los números",
    significado: "Qué ha pasado y por qué",
    color: "azul",
    ejemplo:
      "Me encantan las métricas, los números y los resultados. Me encanta analizar qué ha pasado y, sobre todo, por qué. En Stud-IA los datos me hicieron cambiar el plan de X, Threads y Bluesky.",
    caso: { slug: "stud-ia", titulo: "Stud-IA" },
  },
];

// Lo que no cabe en el CV: cada cosa con su color, como en mis apuntes.
export const colores: {
  color: ColorSubrayador;
  etiqueta: string;
  titulo: string;
  texto: string[];
}[] = [
  {
    color: "azul",
    etiqueta: "Azulita",
    titulo: "Me llaman azulita",
    texto: [
      "En la carrera me recomendaron leer «Rodeado de idiotas» y, desde entonces, mis amigas y yo nos llamamos por nuestros colores. Yo soy azulita 💙.",
      "Y sí, en mi cabeza cada cosa tiene su color: mates, azul; lengua, naranja. Por eso estos subrayadores no están puestos al azar.",
    ],
  },
  {
    color: "amarillo",
    etiqueta: "Culo inquieto",
    titulo: "Risueña y sin estarme quieta",
    texto: [
      "De pequeña me echaban la bronca por no sentarme bien en clase (con dos años casi me quedo sin lengua por ello) y en la carrera me lo han seguido diciendo.",
      "Tengo un humor muy rápido, encajo con casi cualquiera e intento que todo el mundo se sienta integrado. También tengo carácter (mi madre dice que por ser tauro), pero es muy difícil que salga.",
    ],
  },
  {
    color: "naranja",
    etiqueta: "Lengua",
    titulo: "Aprendí catalán por el fútbol",
    texto: [
      "Hace diez años el fútbol femenino era tan nicho que los partidos del Barça solo se podían ver en el directo de Instagram de una aficionada. Mi Twitter acabó en catalán, me enganché a Merlí y a Les de l’hoquei, y la transición vino sola.",
      "Hoy: español nativo, inglés C1, catalán B2 y francés B1. Y de cada país con un idioma nuevo que visito me traigo un libro. Empecé con unos diez años y ya tengo más de diez.",
    ],
  },
  {
    color: "verde",
    etiqueta: "Antes",
    titulo: "Empecé Nutrición",
    texto: [
      "Hice el bachillerato sanitario de excelencia y empecé Nutrición Humana y Dietética, porque toda la vida había pensado que mi camino tenía que ser sanitario. Me gustaban la biología y la química, pero no era mi pasión, así que di el paso a la publicidad.",
      "Estudiarla me gustó, porque me encanta aprender. Me encanta llegar a un tema del que hace media hora no sabía absolutamente nada y empezar a descubrirlo.",
    ],
  },
  {
    color: "morado",
    etiqueta: "Manías",
    titulo: "Banderas y factoriales",
    texto: [
      "Juego cada día a adivinar el país y creo que me sé casi todas las banderas del mundo (estoy en ello).",
      "Cuando terminaba pronto en clase y me aburría, calculaba factoriales a mano o hacía cuentas con las letras de las palabras.",
    ],
  },
  {
    color: "rosa",
    etiqueta: "A mano",
    titulo: "Las buenas costumbres",
    texto: [
      "Escribo a ordenador, pero luego lo paso todo a mano. Que no se pierdan las buenas costumbres, como dar los buenos días, pedir perdón o dar las gracias.",
    ],
  },
];
