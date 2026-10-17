import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/talixea/${file}`;

// Fuente: carpeta del proyecto (página «Cómo empezó», manual de marca,
// constitución de producto, customer journeys y plan de ejecución) y talixea.es.
export const talixea: CasoCompleto = {
  slug: "talixea",
  titulo: "Talixea",
  parecia: "Parecía un hobby para aprender idiomas.",
  era: "Era un producto entero: método, catálogo, marca, precios y lanzamiento, hecho sin saber programar.",
  ficha: [
    { etiqueta: "Qué", valor: "App para aprender idiomas leyendo historias que ya conoces" },
    { etiqueta: "Cuándo", valor: "Lanzada en octubre de 2026 y en marcha" },
    { etiqueta: "Mi papel", valor: "Todo: idea, producto, marca, contenido y lanzamiento" },
    { etiqueta: "Con qué", valor: "Herramientas de IA para la parte técnica, aprendiendo sobre la marcha" },
  ],
  enlaces: [{ href: "https://talixea.es", label: "Probar Talixea" }],
  marcador: [
    { cifra: "40", texto: "libros: cuentos, mitos, clásicos y aventuras" },
    { cifra: "6", texto: "idiomas, siempre desde el español" },
    { cifra: "16", texto: "libros gratis, sin tarjeta" },
    { cifra: "6,95 €", texto: "lo que costó el dominio. Conectarlo, bastante más" },
  ],
  contexto: {
    titulo: "Buscaba algo que no existía",
    parrafos: [
      "Quería aprender idiomas leyendo con un método que me convencía, el diglot weave: lees un texto en tu idioma y, poco a poco, algunas palabras aparecen en el que estás aprendiendo, hasta que el texto acaba casi entero en él.",
      "Busqué una app que lo hiciera así y no la encontré: las que había no estaban en español o no eran gratis. Así que decidí hacerla. No sabía programar; como mucho, leía un poco de código.",
      "La idea estuvo clara desde el primer día: cuentos y clásicos de dominio público, historias que todo el mundo conoce, y en cada capítulo un poco más del idioma nuevo que en el anterior.",
    ],
  },
  demo: "talixea",
  bloques: [
    {
      titulo: "Definir a quién le hablo",
      resumen: "Antes de diseñar, decidir para quién no era.",
      puntos: [
        "Cinco buyer personas, de la lectora con poco tiempo al estudiante que prepara un Erasmus, y sus customer journeys cruzados.",
        "Target principal: hispanohablante de 25 a 40 años, lectora, con nivel bajo o intermedio, que quiere aprender sin sentir que vuelve al aula.",
        "Lo que Talixea no debía ser: una academia, una app gamificada con tono adolescente, una marca de autoayuda ni una marca elitista.",
      ],
    },
    {
      titulo: "Diseñar el método",
      resumen: "Comprensión primero, inmersión progresiva.",
      puntos: [
        "Se empieza con alrededor de un 10 % del texto en el idioma nuevo y sube a medida que recuerdas las palabras: hasta el 45 % gratis y hasta el 90 % con Plus.",
        "Al acabar cada capítulo, una práctica corta con frases del propio libro, no ejercicios sueltos.",
        "Una regla para el vocabulario: lo frecuente sostiene la lectura; lo raro la enriquece, pero nunca marca el ritmo.",
      ],
    },
    {
      titulo: "Construir el catálogo",
      resumen: "Cuarenta obras, cada una con su puerta de entrada.",
      puntos: [
        "Cuatro colecciones de diez: cuentos, mitos y leyendas, clásicos, y aventura y misterio.",
        "Cada libro pasa por revisión de derechos, fidelidad a la obra original, adaptación al español y revisión en los seis idiomas antes de publicarse.",
        "Un criterio editorial que repito mucho: un cuento no se estira para parecer novela.",
      ],
    },
    {
      titulo: "Crear la marca",
      resumen: "Del nombre al manual de identidad.",
      puntos: [
        "Talixea une tale (cuento), lexis (palabra) y la idea de tejer dos idiomas en una historia. El logo es una T por la que pasa un hilo.",
        "Manual de identidad con propósito, posicionamiento, mensaje madre («Aprende idiomas leyendo historias sin perderte»), cinco pilares de mensaje y voz para producto, web y redes.",
        "Tono editorial y calmado, con promesas honestas antes que hype.",
      ],
    },
    {
      titulo: "Lanzar y sostenerlo",
      resumen: "La parte de negocio, que también es comunicación.",
      puntos: [
        "Modelo freemium: 16 de los 40 libros gratis y sin tarjeta; Plus por 4,99 € al mes o 49,99 € al año.",
        "Antes de publicar, recorrí la web y la app como cada tipo de cliente y cerré los fallos críticos que encontré.",
        "Medición propia con consentimiento y sin guardar IP, y un reto por correo, «7 días, 7 escenas», como primer lead magnet.",
      ],
    },
  ],
  imagenes: {
    titulo: "Así se ve hoy",
    texto: "La portada de talixea.es: se puede leer el primer capítulo sin crear cuenta.",
    items: [
      {
        src: img("portada.png"),
        alt: "Portada de talixea.es con el titular «Aprende idiomas con libros que ya conoces» y una muestra de Blancanieves con palabras en inglés",
        pie: "La portada, con la muestra de lectura y el control de idioma.",
      },
      {
        src: img("biblioteca.png"),
        alt: "Biblioteca de Talixea con portadas de libros gratis y Plus, y el esquema de cómo funciona: 10 %, 45 % y 90 %",
        pie: "La biblioteca y cómo funciona, en tres pasos.",
      },
    ],
  },
  caidas: [
    {
      titulo: "No sabía programar",
      texto:
        "Me apoyé en herramientas de IA y aprendí sobre la marcha. Después de muchos errores, la app por fin me dejó crear una cuenta. Lo que escribí en ese momento: «Lo hemos conseguido, me deja entrar».",
    },
    {
      titulo: "Cada nombre ya estaba cogido",
      texto:
        "Cada nombre que me gustaba lo usaba ya alguien. Talixea apareció después de muchas vueltas y guarda todo lo que quería decir.",
    },
    {
      titulo: "Lo que vi al recorrerla entera",
      texto:
        "Al probarla como lo haría cada tipo de cliente aparecieron fallos que yo no veía: etiquetas internas a la vista, un botón de Plus que no llevaba a Plus o mezclas de idiomas que parecían erratas. Se arreglaron antes de lanzar.",
    },
  ],
  cita: {
    texto: "Lo hemos conseguido, me deja entrar.",
    autor: "Lo que escribí",
    cargo: "El día que la app me dejó crear la primera cuenta",
  },
  aprendizajes: [
    "No saber hacer algo no es motivo para no hacerlo: es el primer capítulo.",
    "Decidir qué no entra pesa tanto como decidir qué entra.",
    "Una promesa honesta convence más que el hype.",
    "Antes de lanzar, recorre tu producto como cada uno de tus clientes.",
  ],
};
