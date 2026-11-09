import type { CasoCompleto } from "./tipos";

const video = (file: string) => `${import.meta.env.BASE_URL}assets/casos/stud-ia/${file}`;

// Fuente: memoria de prácticas (mayo de 2026), carta de recomendación y piezas publicadas.
export const studIa: CasoCompleto = {
  slug: "stud-ia",
  titulo: "Stud-IA",
  parecia: "Parecían las prácticas de una becaria «huevito» que llevaba redes sociales.",
  era: "Era pasar de huevito a llevar X, Threads y Bluesky por mi cuenta, en un océano rojo de apps de IA para estudiar.",
  ficha: [
    { etiqueta: "Qué", valor: "Prácticas en el departamento de marketing" },
    { etiqueta: "Cuándo", valor: "Enero a mayo de 2026" },
    { etiqueta: "Dónde", valor: "Startup EdTech, 100 % en remoto, con equipo en España, Uruguay y Chile" },
    { etiqueta: "Mi parte", valor: "Reputación, comunidad, contenido y campañas. X, Threads y Bluesky, a mi cargo" },
  ],
  marcador: [
    { cifra: "36.000", texto: "visualizaciones de uno de mis vídeos en YouTube" },
    { cifra: "3.030", texto: "visitas en un mes en Threads, una cuenta que empezó de cero y llegó a 365 seguidores" },
    { cifra: "10:1", texto: "impresiones de responder a cuentas grandes frente a publicar contenido propio en X" },
  ],
  contexto: {
    titulo: "Una startup pequeña, a propósito",
    parrafos: [
      "Stud-IA es una startup que convierte los apuntes de cada estudiante en flashcards, mapas mentales y simulacros de examen. Trabaja con dos públicos que hablan de forma muy distinta: los estudiantes (B2C) y los centros educativos (B2B). Cuando terminé mis prácticas, la usaban 80.000 estudiantes al mes.",
      "Cuando buscaba prácticas me encontré ante una encrucijada: grandes empresas con un nombre bonito en el CV o una startup de menos de diez personas de la que ni había oído hablar. No quería ser «una becaria más». Así que no me limité a subir mi solicitud: busqué en Google hasta localizar al equipo de comunicación y les escribí directamente.",
      "Y, para qué negarlo, era mi propio público. Empecé con los exámenes finales a tres semanas y el TFG a dos meses, así que el agobio que tenía que comunicar lo estaba viviendo en primera persona.",
      "Al principio me puse yo sola la etiqueta de «huevito» y prefería callarme a equivocarme. Hasta que detecté un hueco donde yo sí tenía experiencia: X. Lo propuse y me dijeron: «Podría estar bien». En lugar de esperar instrucciones, en la siguiente reunión llevé una estrategia completa para X, Threads y Bluesky. Así conseguí mi primer ownership, mi bebé, al que llamé BXT (como Elon Musk).",
    ],
  },
  bloques: [
    {
      titulo: "Cuidar la reputación",
      resumen: "Era parte de mi día a día, también cuando tocaba algún comentario delicado.",
      puntos: [
        "Contestaba todas las reseñas de Trustpilot, las buenas y las malas. Al final eran nuestro mejor buzón de sugerencias: ahí aparecían los fallos antes que en ningún sitio. Si alguien pedía más de lo que yo podía darle, lo hablaba directamente con los fundadores.",
        "Llevaba la comunidad en cinco redes. Y no se responde igual a alguien con miedo a un examen que a alguien que duda de si estudiar con IA es ético: primero tocaba entender qué esperaba cada persona y después escribir algo que, como mínimo, no dañara la reputación de la marca.",
        "Entraba en las conversaciones de las cuentas grandes del mundo estudiantil en los primeros minutos, aportando algo sin sonar a anuncio.",
      ],
    },
    {
      titulo: "Decidir con datos",
      resumen: "BXT (Bluesky, X y Threads) era mi bebé, y cada mes le hacía su informe: qué había pasado y, sobre todo, por qué.",
      puntos: [
        "En X, responder a cuentas grandes daba diez veces más impresiones que publicar contenido propio. Así que dejé de publicar a diario y de copiar lo mismo en las tres redes: menos monólogo y más conversación.",
        "En Threads, una cuenta que empezó de cero, llegamos a 3.030 visitas en un mes y a 365 seguidores. Y un hallazgo que me cambió el tono: el público real era latinoamericano y de 25 a 34 años, cuando yo pensaba en universitarios españoles. Así que empecé a hablarle a quien de verdad estaba ahí.",
        "En TikTok la gente se iba en el primer segundo. El «reto del baño» retuvo 8 segundos de media frente a uno o dos del resto, así que pasamos a vídeos más cortos, en series y con un gancho directo desde el principio.",
      ],
    },
    {
      titulo: "Entender antes de publicar",
      resumen: "Antes de lanzarme, ordenarlo todo (por colores, claro).",
      puntos: [
        "Analicé a cinco competidores y dibujé el recorrido de cinco tipos de usuario para saber qué necesitaba cada uno.",
        "Para los centros educativos, dividí el sector educativo español en trece nichos y prioricé dónde había más oportunidad.",
        "Propuse cuatro pilares de contenido para hablar a los estudiantes: el producto, lo viral, su día a día y el lado humano de la marca. Y un calendario editorial con más de cien fechas de seis países, categorizado para que fuera lo más útil y visual posible.",
      ],
    },
    {
      titulo: "Una campaña por país",
      resumen: "Cada país tiene su calendario de exámenes y su jerga, y cada campaña salía justo cuando a ese país le tocaba sufrir.",
      puntos: [
        "La admisión a la universidad en Perú, el ICFES en Colombia, los primeros parciales en Argentina, el EXANI en México y la PAU en España.",
        "Cada una con su concepto, su jerga y su momento, y con vídeos, carruseles, emails y códigos de descuento. Algunas están en Las piezas.",
        "Para los centros educativos, secuencias de siete mensajes por LinkedIn y email.",
      ],
    },
  ],
  enMovil: true,
  piezas: {
    titulo: "Piezas publicadas",
    texto: "Algunos de los vídeos que guioné, grabé y edité yo. Alguno no lo vio ni mi madre (y eso que nos seguía); otro llegó a las 36.000 visualizaciones.",
    videos: [
      {
        src: video("youtube-36k.mp4"),
        titulo: "Probé todas las IA para estudiar: 36.000 visualizaciones",
        red: "YouTube Shorts",
        original: "https://www.youtube.com/shorts/DuHQNrGzdFo",
      },
      {
        src: video("tiktok-gracioso.mp4"),
        titulo: "POV: Medicina y el tutorial prohibido",
        red: "TikTok",
        original: "https://www.tiktok.com/@studia.community/video/7612978259646598422",
      },
      {
        src: video("tiktok-relatable.mp4"),
        titulo: "POV: terminas de subrayar y toca estudiar",
        red: "TikTok",
        original: "https://www.tiktok.com/@studia.community/video/7638539708414430486",
      },
      {
        src: video("tiktok-dia-1.mp4"),
        titulo: "Día 1 de 7: el reto del baño",
        red: "TikTok",
        original: "https://www.tiktok.com/@studia.community/video/7610360156085406998",
      },
      {
        src: video("reel-producto.mp4"),
        titulo: "POV: todo un año en dos semanas",
        red: "Instagram",
        original: "https://www.instagram.com/reel/DX8zu2kSd4Y/",
      },
      {
        src: video("reel-relatable.mp4"),
        titulo: "POV: estudiante promedio en mayo",
        red: "Instagram",
        original: "https://www.instagram.com/reel/DYeR5pDSIwk/",
      },
    ],
    masEnlaces: [
      { red: "TikTok", titulo: "El evento canónico de todo estudiante post-vacaciones", href: "https://www.tiktok.com/@studia.community/video/7625555265248578838" },
      { red: "Instagram", titulo: "Se acabó el momento aesthetic de subrayar", href: "https://www.instagram.com/reel/DYMNOOmSYXB/" },
      { red: "Instagram", titulo: "Aprobar sin renunciar a tu vida social", href: "https://www.instagram.com/reel/DYy5fj-yMYr/" },
    ],
  },
  piezasExtra: [
    {
      id: "guiones",
      nombre: "Guiones",
      intro: "Antes de grabar, cada vídeo tenía su guion: qué se ve, qué se oye y qué pone en pantalla. Dos de los que escribí.",
      tarjetas: [
        {
          etiqueta: "TikTok · bucle de 5 a 7 segundos",
          titulo: "El horóscopo del estudiante",
          lineas: [
            "Objetivo: que la gente lea la descripción (más tiempo de retención, y el algoritmo te premia) y guarde el post.",
            "En pantalla: «Dime qué tipo de estudiante eres y te digo tu hack 👇».",
            "En la descripción, seis tipos de estudiante y su herramienta. «El Gambler: ¿te la juegas a que “eso no cae”? Tu hack: Simulacro de Examen. Deja de jugar a la lotería […].»",
          ],
        },
        {
          etiqueta: "TikTok · humor",
          titulo: "El síndrome de Diógenes",
          lineas: ["Esa mentira que nos contamos con los apuntes: «los guardo por si los necesito». Para publicar justo el día del último examen."],
          escenas: [
            { momento: "Gancho", texto: "POV: Terminas los exámenes 🚮" },
            { momento: "La duda", texto: "Pero... ¿y si los necesito en 2035? 🤡" },
            { momento: "La mentira", texto: "«Por si acaso» = Nunca 🗑️" },
            { momento: "Cierre", texto: "Etiqueta a tu amigo" },
          ],
        },
      ],
    },
    {
      id: "campanas",
      nombre: "Campañas",
      intro: "Un concepto para cada país, con su momento, su jerga y su miedo.",
      tarjetas: [
        {
          etiqueta: "Perú · admisión a la universidad",
          titulo: "«Entrena el examen real»",
          lineas: [
            "Miles de aspirantes para una sola vacante: estudiar mucho no basta, hay que entrenar como te van a evaluar.",
            "«Tu vacante no depende de la suerte. Depende de cómo entrenes.»",
          ],
        },
        {
          etiqueta: "Colombia · ICFES y oposiciones",
          titulo: "«No es cuánto estudias. Es cómo llegas al examen»",
          lineas: [
            "Gancho: «¿Sabes qué es peor que perder el bus en la cara? La sensación de que no llegas al examen.»",
            "«Un mal puntaje no te quita estudiar. Te quita elegir.»",
          ],
        },
        {
          etiqueta: "Argentina · primeros parciales",
          titulo: "«No estaba muerto, estaba de parranda»",
          lineas: [
            "La resurrección académica: quien desaparece en marzo y se despierta con un parcial y 300 páginas de apuntes. Vídeos, comentarios en redes y este email.",
          ],
          email: {
            asunto: "⚠️ RECREO TERMINADO: O leés 300 páginas este finde, o activás Stud-IA.",
            cuerpo: [
              "¡Hola [Nombre]!",
              "Seamos sinceros, marzo fue una joda. Reencuentros, feriados, mates, apuntes sin leer… y el cuaderno de la facu más vacío que la heladera un domingo a la noche.",
              "Todo bien. A todos nos pasa. El problema es que los parciales ya están acá.",
              "No estabas muerto. Estabas de parranda. Ahora toca sobrevivir al parcial.",
            ],
            boton: "RESUCITAR MI CURSADA",
          },
        },
      ],
    },
    {
      id: "voz",
      nombre: "Voz de marca",
      intro: "Para X, Threads y Bluesky escribí la ficha de personalidad de la marca: quién es, cómo habla y cómo no.",
      cita: "El Rebelde Sabio: «No venimos a sustituirte. Venimos a acompañarte.»",
      sliders: [
        { nombre: "Humor", valor: 4 },
        { nombre: "Formalidad", valor: 1 },
        { nombre: "Tecnicismo", valor: 2 },
        { nombre: "Empatía", valor: 5, nota: "Nuestro diferencial" },
      ],
      pares: [
        { no: "«Algoritmo de optimización cognitiva»", si: "«Así aprende mejor tu cerebro (y con menos sufrimiento)»" },
        { no: "«Tienes que organizarte mejor»", si: "«Si hoy no te da la cabeza, es normal. Vamos paso a paso.»" },
        { no: "«Haz esto para que no te pillen»", si: "«Entiéndelo en 5 minutos y vete a descansar con la conciencia tranquila»" },
      ],
    },
  ],
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
    "Que en una startup no hay semanas para sopesar la decisión perfecta. Sigo prefiriendo los proyectos «cocinados a fuego lento», y es algo en lo que quiero mejorar.",
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
  nota: "Las piezas son extractos de mi trabajo. El análisis de competencia, la matriz de nichos y las secuencias B2B se quedan en Stud-IA.",
};
