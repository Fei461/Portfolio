import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/talixea/${file}`;

// Fuente: carpeta del proyecto (página «Cómo empezó», manual de marca,
// constitución de producto, customer journeys y plan de ejecución) y talixea.es.
export const talixea: CasoCompleto = {
  slug: "talixea",
  titulo: "Talixea",
  era: "Un producto entero hecho desde mi cuarto y sin saber programar: método, catálogo, marca, precios y lanzamiento.",
  ficha: [
    { etiqueta: "Qué", valor: "App para aprender idiomas leyendo historias que ya conoces" },
    { etiqueta: "Cuándo", valor: "Desde febrero de 2026, en mi cuarto. Lanzada en octubre" },
    { etiqueta: "Mi parte", valor: "Todo: idea, producto, marca, contenido y lanzamiento" },
    { etiqueta: "Con qué", valor: "Herramientas de IA para la parte técnica, aprendiendo sobre la marcha" },
  ],
  enlaces: [{ href: "https://talixea.es", label: "Probar Talixea" }],
  marcador: [
    { cifra: "40", texto: "libros: cuentos, mitos, clásicos y aventuras" },
    { cifra: "6", texto: "idiomas, siempre desde el español" },
  ],
  contexto: {
    titulo: "Buscaba algo que no existía",
    parrafos: [
      "Quería aprender idiomas leyendo con un método que me convencía, el diglot weave: lees un texto en tu idioma y, poco a poco, algunas palabras aparecen en el que estás aprendiendo, hasta que el texto acaba casi entero en él.",
      "Busqué una app que lo hiciera así y no la encontré: las que había no estaban en español o no eran gratis. Así que decidí hacerla yo. Pequeño detalle: no sabía programar. Como mucho, leía un poco de código.",
      "La empecé en febrero de 2026, desde mi cuarto. Estoy orgullosa por la constancia, por el esfuerzo y por no haberme dado por vencida cuando no encontré nada que me gustara.",
      "Salió al mercado en octubre de 2026. Es un proyecto personal que sigue creciendo, y ahora toca lo siguiente: sus primeros lectores.",
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
      titulo: "Contarlo en redes",
      resumen: "Desde finales de octubre, con calendario y métricas.",
      puntos: [
        "Cinco series fijas a la semana: expresiones que no se traducen literal, palabras con historia, curiosidades de los clásicos, carruseles y demos de la app.",
        "Yo pongo la cara y la voz; para producir carruseles y demos me apoyo en herramientas de IA, igual que con el código.",
        "Cada pieza se mide a los siete días en TikTok, Instagram y YouTube, y cada diez o quince publicaciones reviso qué funciona.",
      ],
    },
    {
      titulo: "Lanzar y sostenerlo",
      resumen: "La parte de negocio, que también es comunicación.",
      puntos: [
        "Modelo freemium: 16 de los 40 libros gratis y sin tarjeta; Plus por 4,99 € al mes o 49,99 € al año.",
        "Antes de publicar, recorrí la web y la app como cada tipo de cliente y cerré los fallos críticos que encontré.",
        "Medición propia con consentimiento y sin guardar IP, y un reto gratuito por correo, «7 días, 7 escenas», para conseguir los primeros lectores.",
      ],
    },
  ],
  imagenes: {
    titulo: "Así se ve hoy",
    texto: "La biblioteca de la web y algunos carruseles del lanzamiento.",
    items: [
      {
        src: img("biblioteca.png"),
        alt: "Biblioteca de Talixea con portadas de libros gratis y Plus, y el esquema de cómo funciona: 10 %, 45 % y 90 %",
        pie: "La biblioteca y cómo funciona, en tres pasos.",
      },
      { src: img("carrusel-ojo.jpg"), alt: "Carrusel de Talixea: «En francés no cuesta un ojo: cuesta los dos»", pie: "Carrusel: «cuesta un ojo de la cara» en seis idiomas." },
      { src: img("carrusel-ojo-3.jpg"), alt: "Diapositiva del carrusel con la expresión francesa Ça coûte les yeux de la tête y su pronunciación", pie: "Cada idioma, con traducción literal y pronunciación." },
      { src: img("carrusel-falsos.jpg"), alt: "Carrusel de Talixea: «Parecen lo mismo… y te la juegan», sobre falsos amigos", pie: "Carrusel de falsos amigos." },
      { src: img("carrusel-grimm.jpg"), alt: "Carrusel de Talixea: «Blancanieves no es como la recuerdas»", pie: "Curiosidades de los clásicos." },
    ],
  },
  caidas: [
    {
      titulo: "No sabía programar",
      texto:
        "Me apoyé en herramientas de IA y fui aprendiendo sobre la marcha, a base de romper cosas. Después de muchísimos errores, la app por fin me dejó crear una cuenta. Lo que escribí en ese momento: «Lo hemos conseguido, me deja entrar».",
    },
    {
      titulo: "Cada nombre ya estaba cogido",
      texto:
        "Costó. Cada nombre que me gustaba ya lo usaba alguien. Talixea apareció después de muchas vueltas y, al final, guarda todo lo que quería decir.",
    },
    {
      titulo: "Lo que vi al recorrerla entera",
      texto:
        "Cuando la recorrí como lo haría cada tipo de cliente, aparecieron fallos que yo, de tanto mirarla, ya no veía: etiquetas internas a la vista, un botón de Plus que no llevaba a Plus o mezclas de idiomas que parecían erratas. Se arreglaron antes de lanzar.",
    },
  ],
  aprendizajes: [
    "Antes de lanzar, recorre tu producto como cada uno de tus clientes.",
    "Un cuento no se estira para parecer novela.",
    "Promesas honestas antes que hype.",
  ],
};
