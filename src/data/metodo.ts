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
      "Me lo paso genial en un brainstorming porque puedo decir locuras y dejar que la mente imagine lo que quiera. Así salió un Tinder para conectar a la industria con los creativos afectados por la DANA.",
    caso: { slug: "tour-cdc-dana", titulo: "Tour C de C" },
  },
  {
    nombre: "Ordenarlo por colores",
    significado: "Antes de lanzarme",
    color: "azul",
    ejemplo:
      "Vivo con un esquema de colores en la cabeza: mis apuntes llevan siempre el mismo orden y todos los subrayadores del mundo, y tengo tres calendarios, cada uno con su color. Antes de escribir un solo mensaje B2B en Stud-IA, dividí el sector educativo en trece nichos.",
    caso: { slug: "stud-ia", titulo: "Stud-IA" },
  },
  {
    nombre: "Darles forma",
    significado: "Medio, soporte y ejecución",
    color: "naranja",
    ejemplo:
      "Disfruto igual bajando la idea a tierra: qué medio, qué soporte, en qué orden. En Warriors Arena eso fue un plan entero para venderlo por el mundo.",
    caso: { slug: "warriors-arena", titulo: "Warriors Arena" },
  },
  {
    nombre: "Mirar los números",
    significado: "Qué ha pasado y por qué",
    color: "verde",
    ejemplo:
      "Me encantan las métricas, pero sobre todo entender por qué salen como salen. En Stud-IA, con los datos de cada red, buscaba qué publicaciones funcionaban y por qué.",
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
      "En la carrera me recomendaron leer «Rodeado de idiotas» y, desde entonces, mis amigas y yo nos llamamos por nuestros colores. Yo soy azulita: la analítica, la cuadriculada, la de los tres calendarios.",
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
      "No me arrepiento de haberla estudiado: me encanta aprender. Me encanta llegar a un tema del que hace media hora no sabía absolutamente nada y empezar a descubrirlo.",
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
