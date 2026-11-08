import type { CasoCompleto } from "./tipos";

const video = (file: string) => `${import.meta.env.BASE_URL}assets/casos/stud-ia/${file}`;

// Fuente: memoria de prácticas (mayo de 2026), carta de recomendación y piezas publicadas.
export const studIa: CasoCompleto = {
  slug: "stud-ia",
  titulo: "Stud-IA",
  parecia: "Parecían unas prácticas de redes sociales.",
  era: "Era construir una marca en un océano rojo de apps de IA para estudiar.",
  ficha: [
    { etiqueta: "Qué", valor: "Prácticas en el departamento de marketing" },
    { etiqueta: "Cuándo", valor: "Enero a mayo de 2026" },
    { etiqueta: "Dónde", valor: "Startup EdTech, 100 % en remoto, con equipo en España, Uruguay y Chile" },
    { etiqueta: "Mi papel", valor: "Reputación, comunidad, contenido y campañas. X, Threads y Bluesky, a mi cargo" },
  ],
  marcador: [
    { cifra: "36.000", texto: "visualizaciones de uno de mis vídeos en YouTube" },
    { cifra: "3.030", texto: "visitas y 365 seguidores en Threads en un mes, empezando desde cero" },
    { cifra: "10:1", texto: "impresiones de responder a cuentas grandes frente a publicar contenido propio en X" },
  ],
  contexto: {
    titulo: "Una startup pequeña, a propósito",
    parrafos: [
      "Stud-IA convierte los apuntes del propio estudiante en flashcards, mapas mentales y simulacros de examen. Cuando acabé, tenía 80.000 estudiantes activos al mes. Tiene dos negocios que hablan de forma muy distinta: los estudiantes (B2C) y los centros educativos (B2B).",
      "Cuando buscaba prácticas me encontré ante una encrucijada: grandes empresas con un nombre bonito en el CV o una startup de menos de diez personas de la que ni había oído hablar. No quería ser «una becaria más». Así que no me limité a subir mi solicitud: busqué en Google hasta localizar al equipo de comunicación y les escribí directamente.",
      "Y, para qué negarlo, era mi propio público. Empecé con los exámenes finales a tres semanas y el TFG a dos meses, así que el agobio que tenía que comunicar lo estaba viviendo en primera persona.",
      "Al principio me puse yo sola la etiqueta de «huevito» y prefería callarme a equivocarme. Hasta que detecté un hueco donde yo sí tenía experiencia: X. Lo propuse y me dijeron: «Podría estar bien». En lugar de esperar instrucciones, en la siguiente reunión llevé una estrategia completa para X, Threads y Bluesky. Así conseguí mi primer ownership, mi bebé, al que llamé BXT (como Elon Musk).",
    ],
  },
  bloques: [
    {
      titulo: "Cuidar la reputación",
      resumen: "Era parte de mi rutina diaria.",
      puntos: [
        "Respondía los comentarios de Trustpilot. Nos servía para estar cerca de los usuarios, enseñar una empresa que se preocupa por ellos, detectar y corregir fallos y hasta como buzón de sugerencias. Si alguno pedía más de lo que yo podía hacer, lo hablaba directamente con el CEO y con Diego.",
        "Llevaba el community management en X, Instagram, TikTok, Threads y Bluesky, situaciones delicadas incluidas. No era lo mismo alguien con miedo a un examen que alguien que dudaba de la ética de estudiar con IA: primero tenía que saber qué esperaba esa persona y luego escribir algo que mejorara, o mínimo mantuviera, la reputación de la empresa.",
        "Contestaba en los primeros minutos en cuentas grandes del mundo estudiantil y buscaba conversaciones por palabras clave para aportar sin sonar a venta forzada.",
      ],
    },
    {
      titulo: "Leer los datos y cambiar el plan",
      resumen: "BXT (Bluesky, X y Threads) fue mi primer ownership. Le dediqué un informe cada mes.",
      puntos: [
        "X: las respuestas rápidas a cuentas grandes sumaron 6.577 impresiones frente a 671 del contenido propio. Una respuesta a Lidl logró 784 impresiones, 43 interacciones y 7 visitas al perfil. Con esos datos dejé de publicar a diario y de copiar lo mismo en las tres redes: tres publicaciones propias a la semana y cuatro días entrando en conversaciones.",
        "Threads: 3.030 visitas y 365 seguidores en un mes. Y un hallazgo que me cambió el tono: la audiencia real era latinoamericana y de 25 a 34 años, cuando yo pensaba en universitarios españoles.",
        "TikTok: 16.000 visualizaciones en una semana, pero la gente se iba en el primer segundo. El «reto del baño» llegó a 8 segundos de media frente a uno o dos del resto, así que pasamos a miniseries, ganchos sin «hola» y vídeos de 12 a 25 segundos.",
        "Bluesky: el tono más coherente con la marca, pero sin red de contactos. Lancé un starter pack, «Survival Kit Estudiante 2026», para entrar en la comunidad académica.",
      ],
    },
    {
      titulo: "Investigar y crear contenido",
      resumen: "Antes de publicar nada, entender a quién le hablábamos.",
      puntos: [
        "Benchmark de cinco competidores, Customer Journey Map de cinco tipos de usuario y, para B2B, el sector educativo español dividido en trece nichos.",
        "Establecí cuatro pilares de contenido para B2C: Producto, Viralidad, Lifestyle y Humanización.",
        "Guiones, grabación y edición propias, adaptando cada pieza al tono de cada red, y un calendario editorial con más de cien fechas en los seis países con más usuarios.",
      ],
    },
    {
      titulo: "Lanzar campañas",
      resumen: "Una por país, cuando a cada uno le tocaba examen.",
      puntos: [
        "Perú, «Entrena el examen real». Colombia, «No es cuánto estudias, es cómo llegas al examen». México, «Rumbo al EXANI».",
        "Argentina, «No estaba muerto, estaba de parranda»: la resurrección académica de quien desaparece en marzo y despierta con un parcial.",
        "España, «El 30 % que nadie mira», para los de primero de Bachillerato, y la campaña de la PAU 2026, «Que las estadísticas estén siempre de vuestro lado».",
        "Cada una con vídeos, carruseles, estrategia de comentarios, email marketing y códigos de descuento. Y en B2B, secuencias de siete mensajes por LinkedIn y email para cuatro nichos prioritarios.",
      ],
    },
  ],
  enMovil: true,
  piezas: {
    titulo: "Piezas publicadas",
    texto: "Algunos de los vídeos que guioné, grabé y edité. Alguno no lo vio ni mi madre (y eso que nos seguía); otro llegó a las 36.000 visualizaciones.",
    videos: [
      {
        src: video("youtube-36k.mp4"),
        titulo: "El vídeo de las 36.000 visualizaciones",
        red: "YouTube Shorts",
        original: "https://www.youtube.com/shorts/DuHQNrGzdFo",
      },
      { src: video("tiktok-gracioso.mp4"), titulo: "Humor estudiantil", red: "TikTok" },
      { src: video("tiktok-relatable.mp4"), titulo: "Lo que todo estudiante ha vivido", red: "TikTok" },
      { src: video("tiktok-dia-1.mp4"), titulo: "Serie: día 1 de 7", red: "TikTok" },
      { src: video("reel-producto.mp4"), titulo: "La herramienta, en acción", red: "Instagram" },
      { src: video("reel-relatable.mp4"), titulo: "Reel para sentirse identificado", red: "Instagram" },
    ],
    masEnlaces: [
      {
        red: "Instagram",
        enlaces: [
          "https://www.instagram.com/reel/DX8zu2kSd4Y/",
          "https://www.instagram.com/reel/DYMNOOmSYXB/",
          "https://www.instagram.com/reel/DYeR5pDSIwk/",
          "https://www.instagram.com/reel/DYy5fj-yMYr/",
        ],
      },
      {
        red: "TikTok",
        enlaces: [
          "https://www.tiktok.com/@studia.community/video/7638539708414430486",
          "https://www.tiktok.com/@studia.community/video/7610360156085406998",
          "https://www.tiktok.com/@studia.community/video/7625555265248578838",
          "https://www.tiktok.com/@studia.community/video/7612978259646598422",
        ],
      },
    ],
  },
  caidas: [
    {
      titulo: "Rehacer campañas ya ideadas",
      texto:
        "Las campañas de marzo y abril empezaron siendo paid media y, cuando ya estaban completamente ideadas, me dijeron que tenían que rehacerse para ser solo orgánicas. Ahí entendí que la estrategia que había redactado no era un documento intocable, sino el mapa base que se redibuja según el contexto de cada momento.",
    },
    {
      titulo: "Medir sin estadísticas",
      texto:
        "Bluesky no daba estadísticas y en X me faltaban datos por no tener cuenta premium. Así que tocó apuntarlo todo a mano y encontrar patrones a base de observar.",
    },
    {
      titulo: "Ir rápido cuando prefiero ir despacio",
      texto:
        "En una startup no se puede sopesar durante semanas la decisión perfecta. Creo haberme defendido bien, pero sigo prefiriendo los proyectos «cocinados a fuego lento» y es algo en lo que debo mejorar.",
    },
  ],
  citaEnFicha: true,
  cita: {
    texto:
      "Lara demostró ser una persona responsable, creativa y con una excelente actitud de aprendizaje y adaptación a un entorno dinámico y exigente como el de una startup.",
    autor: "Diego López de Aragón",
    cargo: "cofundador y CMO de Stud-IA, en su carta de recomendación",
  },
  aprendizajes: [
    "Solo puedes aprender de aquello que te atreves a decir en voz alta, a probar, a equivocarte y a acertar en el proceso.",
    "La coordinación es clave para cualquier equipo, no un detalle operativo más.",
    "A defender proyectos que ya me habían negado, confiando en mi trabajo y buscando una nueva perspectiva.",
    "Que soy suficiente y que mis ideas también lo son.",
  ],
  enLinkedIn: [
    {
      titulo: "No buscaba prácticas: buscaba impacto",
      href: "https://es.linkedin.com/posts/lara-feijoo_studia-pr%C3%A1cticas-startuplife-activity-7416766114707251201-BdE8",
    },
    {
      titulo: "La única idea que seguro no funciona",
      href: "https://es.linkedin.com/posts/lara-feijoo_pr%C3%A1cticas-startuplife-publicidadyrrpp-activity-7442861679312289792-LyoH",
    },
    {
      titulo: "Salir de la universidad para empezar a proponer",
      href: "https://es.linkedin.com/posts/lara-feijoo_qu%C3%A9-lleg%C3%B3-antes-el-huevo-o-la-gallina-activity-7466057066965549056-Sz73",
    },
  ],
  nota: "Los documentos internos (benchmark, matriz de nichos, secuencias B2B y calendario) se quedan en Stud-IA. Aquí cuento qué hice y cómo, sin enseñarlos.",
};
