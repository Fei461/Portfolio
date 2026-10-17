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
    { etiqueta: "Mi papel", valor: "Contenido, comunidad, estrategia y campañas B2C y B2B" },
  ],
  marcador: [
    { cifra: "80.000", texto: "estudiantes activos al mes al terminar mis prácticas" },
    { cifra: "70+", texto: "países, de España a Latinoamérica" },
    { cifra: "36.000", texto: "visualizaciones de uno de mis vídeos en YouTube" },
    { cifra: "3", texto: "redes a mi cargo: X, Threads y Bluesky" },
  ],
  contexto: {
    titulo: "Una startup pequeña, a propósito",
    parrafos: [
      "Stud-IA convierte los apuntes del propio estudiante en flashcards, mapas mentales y simulacros de examen. Tiene dos negocios que hablan de forma muy distinta: los estudiantes (B2C) y los centros educativos (B2B).",
      "Podía haber elegido una gran empresa con un nombre bonito para el CV. Preferí un equipo de menos de diez personas donde lo que hiciera se notara desde el primer día. Y no me quedé en enviar la solicitud: busqué al equipo de comunicación y les escribí directamente.",
      "Además, era mi propio público. Empecé con los exámenes finales a tres semanas y el TFG a dos meses: el agobio que tenía que comunicar lo estaba viviendo.",
    ],
  },
  bloques: [
    {
      titulo: "Investigar el mercado",
      resumen: "Antes de publicar nada, entender a la competencia y a quién le hablábamos.",
      puntos: [
        "Benchmark de cinco competidores en Instagram, revisado unas dos veces al mes: formatos, ganchos, estructura de los vídeos, cadencia y engagement.",
        "Hallazgo: funcionaban los vídeos que enseñaban una función concreta con un gancho de dolor. Con el tiempo, el humor y la música adecuada conectaban todavía más.",
        "Customer Journey Map de cinco tipos de usuario, desde quien se registra y no prueba nada hasta el suscriptor activo, para diseñar cuestionarios dentro de la plataforma.",
        "Para B2B, el sector educativo español dividido en trece nichos y priorizado con una matriz de puntuación de cuatro criterios.",
      ],
    },
    {
      titulo: "Crear contenido",
      resumen: "Todo el proceso, del guion a la edición, y después medir.",
      puntos: [
        "Guiones desglosados por partes, tiempos, acción, audio y texto en pantalla, cada uno dentro de un pilar de contenido.",
        "Grabación y edición propias, más carruseles pensados para guardarse, distintos para estudiantes y para centros.",
        "Adaptación de cada pieza al tono de cada red: Instagram, TikTok, YouTube, X, Threads y Bluesky.",
        "Métricas a diario, repaso semanal con mi responsable y un informe mensual de fortalezas y debilidades por red.",
      ],
    },
    {
      titulo: "Cuidar la comunidad y la reputación",
      resumen: "La parte que la competencia tenía abandonada.",
      puntos: [
        "Respuestas a las reseñas de Trustpilot, que además usábamos como buzón de sugerencias.",
        "Community management en cinco redes, con un tono distinto para quien tenía miedo a un examen y para quien dudaba de la ética de estudiar con IA.",
        "Comentarios en los primeros minutos en cuentas grandes del mundo estudiantil, y búsqueda de conversaciones por palabras clave para aportar sin sonar a venta.",
      ],
    },
    {
      titulo: "Ordenar la estrategia",
      resumen: "Las herramientas que sostenían el trabajo del día a día.",
      puntos: [
        "Cuatro pilares de contenido para B2C: Producto, Viralidad, Lifestyle y Humanización.",
        "Una ficha de personalidad de marca para X, Threads y Bluesky: arquetipo, tono, palabras clave y palabras prohibidas.",
        "Un calendario editorial con más de cien fechas en los seis países con más usuarios, clasificadas por momento del embudo y ángulo de comunicación.",
      ],
    },
    {
      titulo: "Lanzar campañas",
      resumen: "Lo más parecido a lo que estudié, con plazos de startup.",
      puntos: [
        "B2C: dos campañas pequeñas al mes entre marzo y mayo, planificadas en febrero a partir del calendario de exámenes de cada país, con vídeos, carruseles, comentarios, email y códigos de descuento.",
        "Medición de interacciones, nuevos usuarios y conversión a premium; los resultados de las primeras campañas mejoraron las últimas.",
        "B2B: secuencias de siete mensajes por LinkedIn y email para cuatro nichos prioritarios, cada una con su objetivo, su tono y su narrativa.",
      ],
    },
  ],
  piezas: {
    titulo: "Piezas publicadas",
    texto: "Algunos de los vídeos que guioné, grabé y edité. Se reproducen aquí aunque desaparezcan de las redes.",
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
        "Las campañas de marzo y abril nacieron con presupuesto para medios pagados. Cuando ya estaban pensadas, hubo que rehacerlas para que fueran solo orgánicas. Aprendí que una estrategia no es un documento intocable: es un mapa que se vuelve a dibujar con el contexto.",
    },
    {
      titulo: "De «huevito» a llevar tres redes",
      texto:
        "Al principio me presentaba como «huevito» y me callaba por miedo a decir una tontería. El punto de inflexión fue proponer reactivar X y Threads: la idea cuajó, llegué a la siguiente reunión con una propuesta completa para esas dos redes y Bluesky, y me quedé a cargo de ellas.",
    },
    {
      titulo: "Medir sin estadísticas",
      texto:
        "Bluesky no ofrecía estadísticas propias y en X faltaban datos sin cuenta premium. Llevé un registro manual de las interacciones para encontrar patrones a base de observar.",
    },
  ],
  cita: {
    texto:
      "Lara demostró ser una persona responsable, creativa y con una excelente actitud de aprendizaje y adaptación a un entorno dinámico y exigente como el de una startup.",
    autor: "Diego López de Aragón",
    cargo: "Cofundador y CMO de Stud-IA, en su carta de recomendación",
  },
  aprendizajes: [
    "Solo aprendes de lo que te atreves a decir en voz alta.",
    "Lo urgente y lo importante no son lo mismo, y el día hay que ordenarlo por las dos cosas.",
    "Coordinar un equipo repartido en tres husos horarios es estrategia, no logística.",
    "En la carrera una campaña tiene meses; en una startup, el tiempo es un recurso más.",
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
