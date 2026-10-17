import type { CasoCompleto } from "./tipos";

// Casos breves (cinturón marrón). Fuente: los PDF de cada entrega.
const img = (slug: string, file: string) => `${import.meta.env.BASE_URL}assets/casos/${slug}/${file}`;

export const ryanair: CasoCompleto = {
  slug: "ryanair",
  titulo: "Ryanair",
  parecia: "Parecía un problema de mensajes.",
  era: "Era un problema de pertenencia: una plantilla que no se siente reconocida.",
  ficha: [
    { etiqueta: "Qué", valor: "Plan de comunicación interna" },
    { etiqueta: "Dónde", valor: "Grado en Publicidad y RRPP, URJC" },
    { etiqueta: "Equipo", valor: "Grupo 11" },
    { etiqueta: "Mi parte", valor: "Diagnóstico y propuesta, en equipo" },
  ],
  marcador: [
    { cifra: "20 %", texto: "de actitudes negativas de la plantilla a invertir en dos años" },
    { cifra: "55 %", texto: "de empleados que conozcan las actividades de la empresa" },
    { cifra: "40 %", texto: "de empleados que reconozcan los logros" },
    { cifra: "1", texto: "reunión al mes con los sindicatos" },
  ],
  contexto: {
    titulo: "Mirar hacia dentro",
    parrafos: [
      "El diagnóstico de responsabilidad social mostraba una compañía volcada en lo externo, con la normativa ISO y su camino hacia el Net Zero, mientras las condiciones laborales seguían siendo mejorables.",
      "El reto era darle la vuelta: que la comunicación empezara por quienes vuelan cada día con la marca.",
    ],
  },
  bloques: [
    {
      titulo: "Mapear a quién importa",
      resumen: "Stakeholders según poder, legitimidad y urgencia.",
      puntos: [
        "Un mapa de públicos con accionistas, reguladores, sindicatos, ONG, consumidores y trabajadores, y lo que espera cada uno.",
        "De la plantilla: buen clima laboral, respeto por su trabajo y posibilidades de crecer y formarse.",
      ],
    },
    {
      titulo: "Reconocer y acoger",
      resumen: "Acciones, no solo mensajes.",
      puntos: [
        "Los Cabin Crew Awards como unos Óscar de Ryanair en Montecarlo, con fiesta temática, cena de gala y entradas VIP para el Gran Premio de Fórmula 1 como premio.",
        "Team building al aire libre, un desayuno de bienvenida, un kit de bienvenida y un programa de mentoría entre compañeros para reducir la rotación temprana.",
      ],
    },
    {
      titulo: "Informar",
      resumen: "Canales para contarse cosas.",
      puntos: [
        "«Historias con Altura», un podcast con vivencias y anécdotas de la plantilla que completa la revista interna.",
        "Una intranet que digitaliza la acogida, avisa en tiempo real y conecta a los empleados entre sí.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      { src: img("ryanair", "stakeholders.png"), alt: "Mapa de stakeholders de Ryanair en tres círculos: poder, legitimidad y urgencia", pie: "El mapa de stakeholders." },
      { src: img("ryanair", "premios.jpg"), alt: "Diapositiva de los Cabin Crew Awards de Ryanair", pie: "Los Cabin Crew Awards." },
      { src: img("ryanair", "acogida.jpg"), alt: "Carteles de una regata por equipos y de un desayuno de bienvenida", pie: "Team building y desayuno de bienvenida." },
      { src: img("ryanair", "kit-buddy.jpg"), alt: "Kit de bienvenida con taza y sudadera, y una mentora con un nuevo empleado", pie: "Kit de bienvenida y programa de mentoría." },
    ],
  },
  aprendizajes: [
    "La comunicación interna empieza por escuchar a quien menos poder tiene en el mapa.",
    "Reconocer es una acción, no un mensaje.",
  ],
  nota: "Propuesta académica en equipo (Grupo 11, Grado URJC), sin relación con Ryanair.",
};

export const torrons: CasoCompleto = {
  slug: "el-regalo-no-deseado",
  titulo: "Torrons Vicens",
  parecia: "Parecía una campaña de turrón para Navidad.",
  era: "Era hablarle a la Generación Z de prejuicios: no todo es lo que parece.",
  ficha: [
    { etiqueta: "Qué", valor: "Propuesta creativa para Sinergia, de Torrons Vicens" },
    { etiqueta: "Dónde", valor: "Grado en Publicidad y RRPP, URJC" },
    { etiqueta: "Equipo", valor: "Cuatro personas" },
    { etiqueta: "Mi parte", valor: "Concepto, narrativa y soportes, en equipo" },
  ],
  contexto: {
    titulo: "Un turrón que no parece turrón",
    parrafos: [
      "Sinergia es una línea de turrones creada con chefs de alta cocina. Para muchos jóvenes, el turrón es un dulce de Navidad y poco más.",
      "El insight venía de ellos mismos: «Muchas veces no me muestro como soy en realidad por miedo a ser juzgado». Igual que el producto, juzgado por fuera y distinto por dentro.",
    ],
  },
  bloques: [
    {
      titulo: "El concepto",
      resumen: "El regalo no deseado.",
      puntos: [
        "Inspirado en el trampantojo: detrás de cada envoltorio inesperado hay un regalo esperando a ser descubierto, como detrás de cada persona.",
        "Un mensaje para la Generación Z: la verdadera esencia está en el interior.",
      ],
    },
    {
      titulo: "Los soportes",
      resumen: "Que el público descubra la segunda lectura.",
      puntos: [
        "Una marquesina holográfica que cambia según desde dónde se mira: «¿Lo quieres?» y, del otro lado, «¿A que ahora sí?».",
        "Street marketing con un vagón de metro decorado por dentro, un vídeo para YouTube y un anuncio para redes sociales.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      { src: img("torrons", "storyboard.png"), alt: "Storyboard ilustrado del vídeo para YouTube", pie: "Storyboard del vídeo para YouTube." },
      { src: img("torrons", "marquesina.png"), alt: "Marquesina holográfica de Sinergia con dos imágenes según el lado desde el que se mira", pie: "La marquesina holográfica." },
      { src: img("torrons", "metro.png"), alt: "Interior de un vagón de metro decorado para la campaña", pie: "El metro decorado por dentro." },
    ],
  },
  aprendizajes: [
    "Un insight personal funciona mejor que uno de producto cuando le hablas a una generación.",
    "Si la idea va de mirar dos veces, los soportes tienen que obligar a hacerlo.",
  ],
  nota: "Propuesta académica en equipo (Grado URJC), sin relación con Torrons Vicens.",
};

export const mms: CasoCompleto = {
  slug: "m-and-ms",
  titulo: "M&M's Premium",
  parecia: "Parecían unos M&M's más caros.",
  era: "Era convencer a un adulto de que un caramelo de colores puede ser un lujo.",
  ficha: [
    { etiqueta: "Qué", valor: "Campaña de lanzamiento en España, trabajando como agencia" },
    { etiqueta: "Dónde", valor: "Grado en Publicidad y RRPP, URJC" },
    { etiqueta: "Equipo", valor: "Agencia Mairaky, siete personas" },
    { etiqueta: "Mi parte", valor: "Directora de planificación estratégica" },
  ],
  contexto: {
    titulo: "La versión adulta de una marca divertida",
    parrafos: [
      "M&M's se asocia a diversión y a compartir. Su línea Premium cambia el registro: acabado marmolado, glaseado brillante, colores como el menta o el azul real, rellenos más suaves y un envase que se vuelve a cerrar.",
      "Montamos una agencia, Mairaky, con cuentas, planificación estratégica y creatividad. Yo dirigía planificación: el público, los insights y la oferta diferencial.",
    ],
  },
  bloques: [
    {
      titulo: "Mi parte: planificación estratégica",
      resumen: "Del público a la promesa.",
      puntos: [
        "Buyer personas con educación, aficiones, pertenencias e idiomas, como un empleado de 28 años del sector financiero.",
        "La promesa: exclusividad, alta gama y calidad. El reason why: colores llamativos y un relleno suave propio de los bombones. El support: el envase.",
        "La respuesta al insight, «placer adulto»: un capricho elegido, frente al M&M's divertido de siempre.",
      ],
    },
    {
      titulo: "El resto de la agencia",
      resumen: "Del contrabriefing al spot.",
      puntos: [
        "Cuentas: un contrabriefing de trece puntos, de la competencia a los imperativos legales y el timing.",
        "Creatividad: la alta costura como territorio, con lanzamiento en la Semana de la Moda de Madrid, carteles para exterior y un spot ambientado en una joyería: «Con M&M's Premium acertarás seguro».",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      { src: img("m-and-ms", "insights.jpg"), alt: "Ficha de buyer persona con educación, aficiones, pertenencias e idiomas", pie: "Una de las fichas de público de planificación." },
      { src: img("m-and-ms", "cartel.jpg"), alt: "Boceto de cartel con un bolso del que caen M&M's y el texto «¿Eres un Premium victim?»", pie: "Cartel para exterior: «¿Eres un Premium victim?»." },
      { src: img("m-and-ms", "concept-board.jpg"), alt: "Concept board del spot de televisión ambientado en una joyería", pie: "Concept board del spot de 15 segundos." },
    ],
  },
  aprendizajes: [
    "Lo premium se demuestra en el detalle, no en el adjetivo.",
    "Planificar es decidir para quién es, antes de pensar cómo decirlo.",
  ],
  nota: "Propuesta académica en equipo (Grado URJC), sin relación con Mars.",
};

export const tourCdc: CasoCompleto = {
  slug: "tour-cdc-dana",
  titulo: "Tour C de C",
  parecia: "Parecía una app de citas.",
  era: "Era una forma de contar una propuesta publicitaria en vídeo, con el lenguaje de Tinder.",
  ficha: [
    { etiqueta: "Qué", valor: "Pieza en vídeo: un Tinder publicitario" },
    { etiqueta: "Formato", valor: "Vídeo" },
  ],
  contexto: {
    titulo: "Un Tinder publicitario",
    parrafos: ["La propuesta se presenta como si fuera una app de citas: deslizar para descubrirla."],
  },
  bloques: [],
  piezas: {
    titulo: "El vídeo",
    texto: "La pieza completa.",
    videos: [
      { src: img("tour-cdc", "tinder-publicitario.mp4"), titulo: "Tinder publicitario", red: "Vídeo" },
    ],
  },
  aprendizajes: ["Un formato que todo el mundo conoce es un atajo para que se entienda la idea."],
};

export const revista: CasoCompleto = {
  slug: "revista-super-pop",
  titulo: "Revista Super Pop",
  parecia: "Parecía una revista adolescente.",
  era: "Era un análisis de liderazgo y temperamento con los personajes de Mean Girls.",
  ficha: [
    { etiqueta: "Qué", valor: "Análisis de liderazgo en formato revista" },
    { etiqueta: "Dónde", valor: "Máster en Comunicación Publicitaria, UC3M" },
    { etiqueta: "Equipo", valor: "Grupo 7, cuatro personas" },
    { etiqueta: "Formato", valor: "Revista con índice, pósters y pasatiempos" },
  ],
  contexto: {
    titulo: "Cómo reinar en el instituto",
    parrafos: [
      "Ocho personajes de Mean Girls analizados según su estilo de liderazgo (Goleman y otros, 2002), su temperamento (Cloninger y otros, 1993) y cómo evolucionan a lo largo de la película.",
      "En lugar de un informe, una revista juvenil de los dos mil: la forma ya cuenta de qué va.",
    ],
  },
  bloques: [
    {
      titulo: "El análisis",
      resumen: "De la abeja reina a la profesora coach.",
      puntos: [
        "Regina George, líder autoritaria cuyo poder se derrumba cuando pierde el estatus que lo sostenía.",
        "Cady Heron, de cauta a líder democrática; Janis Ian, líder timonel; Gretchen Wieners, que no busca liderar sino pertenecer; y la señora Norbury, líder coach.",
      ],
    },
    {
      titulo: "La forma",
      resumen: "Una revista que se lee con ganas.",
      puntos: [
        "Portada, índice, pósters oficiales, fichas de evolución de cada personaje y un repaso final.",
        "Una página de «¿Qué has aprendido?» con sopa de letras y laberinto para cerrar el análisis.",
      ],
    },
  ],
  imagenes: {
    titulo: "Algunas páginas",
    vertical: true,
    items: [
      { src: img("revista-super-pop", "portada.jpg"), alt: "Portada de la revista: Mean Girls, especial liderazgo, cómo reinar en el instituto", pie: "La portada." },
      { src: img("revista-super-pop", "regina.jpg"), alt: "Página dedicada a Regina George, la abeja reina", pie: "Regina George." },
      { src: img("revista-super-pop", "poster.jpg"), alt: "Póster de Las Plásticas", pie: "Póster central." },
      { src: img("revista-super-pop", "repaso.jpg"), alt: "Página de repaso con los tipos de líder de cada personaje", pie: "El repaso de liderazgos." },
    ],
  },
  aprendizajes: ["La forma también comunica: un marco teórico se lee mejor si apetece leerlo."],
  nota: "Trabajo académico de máster. Las imágenes de la película se usan con fines académicos.",
};

export const bbva: CasoCompleto = {
  slug: "bbva",
  titulo: "BBVA",
  parecia: "Parecía una campaña sobre fraude digital.",
  era: "Era una campaña contra la confianza excesiva de los jóvenes en sí mismos.",
  ficha: [
    { etiqueta: "Qué", valor: "Plan estratégico publicitario, «Cibersencillo»" },
    { etiqueta: "Dónde", valor: "Grado en Publicidad y RRPP, URJC" },
    { etiqueta: "Equipo", valor: "Seis personas" },
    { etiqueta: "Público", valor: "Jóvenes de 18 a 30 años" },
  ],
  contexto: {
    titulo: "Creerse a salvo",
    parrafos: [
      "Crecía la oleada de fraudes y una de sus causas era la confianza de los jóvenes en sí mismos. El objetivo: concienciarlos de usar la tecnología de forma responsable.",
    ],
  },
  bloques: [
    {
      titulo: "Conocer al público",
      resumen: "Dos personas, dos formas de confiarse.",
      puntos: [
        "Javier, 26 años, «el hambriento digital»: «La tecnología es mi mejor amiga».",
        "Laura, 19, «la ingenua»: «Acepto las cookies sin leerlas».",
      ],
    },
    {
      titulo: "La idea",
      resumen: "Protege tu Sagrada Privacidad.",
      puntos: [
        "Un juego con la Sagrada Familia de Barcelona para hablar de lo que hay que proteger.",
        "Un tono cercano, empático y asertivo, con mensajes de seguridad, cotidianidad y transparencia, sobre todo en digital.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      { src: img("bbva", "persona.jpg"), alt: "Ficha de Javier, 26 años, el hambriento digital", pie: "Javier, uno de los dos perfiles." },
      { src: img("bbva", "sagrada-privacidad.jpg"), alt: "Pieza «Protege tu Sagrada Privacidad» con la Sagrada Familia", pie: "«Protege tu Sagrada Privacidad»." },
    ],
  },
  aprendizajes: ["Para que alguien se proteja, primero tiene que dejar de sentirse a salvo."],
  nota: "Proyecto académico en equipo (Grado URJC), sin relación con BBVA.",
};

export const oreo: CasoCompleto = {
  slug: "oreo",
  titulo: "Oreo",
  parecia: "Parecía un plan de medios.",
  era: "Era reconectar a una generación con la galleta de su infancia sin que se sintiera culpable.",
  ficha: [
    { etiqueta: "Qué", valor: "Plan de medios" },
    { etiqueta: "Cuándo", valor: "Mayo de 2025, Grado URJC" },
    { etiqueta: "Equipo", valor: "Cuatro personas" },
    { etiqueta: "Mi parte", valor: "Plan completo, en equipo" },
  ],
  marcador: [
    { cifra: "10 %", texto: "de alcance orgánico progresivo de la audiencia útil en 12 meses" },
    { cifra: "10 %", texto: "de nuevos clientes en 12 meses" },
    { cifra: "20 %", texto: "más de notoriedad en nueve meses" },
    { cifra: "60 %", texto: "del público alcanzado al menos seis veces" },
  ],
  contexto: {
    titulo: "Un capricho sin culpa",
    parrafos: [
      "Empezamos por auditar las redes de Oreo y sus submarcas: cuáles estaban activas, cuáles apenas publicaban y en cuáles ni siquiera había cuenta.",
      "El insight de nuestra buyer persona, Valentina, 23 años: «No busco consumir productos perfectos, busco momentos auténticos que me hagan desconectar, reírme y ser yo misma, como cuando era pequeña».",
    ],
  },
  bloques: [
    {
      titulo: "Ordenar por embudo",
      resumen: "Cada fase con su objetivo, su táctica, su KPI y su modelo de compra.",
      puntos: [
        "Awareness: exterior en mupis, vallas y transporte; redes propias e influencers en Instagram y TikTok; display y programática.",
        "Consideración: contenido en YouTube, TikTok, X e Instagram con tutoriales, retos y colaboraciones.",
        "KPIs como cobertura, frecuencia, VTR, interacciones y tráfico, y compra a CPM o coste fijo.",
      ],
    },
    {
      titulo: "El mensaje",
      resumen: "Sin culpa y sin reglas.",
      puntos: ["«Da igual cómo te la comas, siempre será Oreo»."],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      { src: img("oreo", "persona.jpg"), alt: "Ficha de la buyer persona Valentina, 23 años", pie: "Valentina, la buyer persona." },
      { src: img("oreo", "grafica.jpg"), alt: "Gráfica con una mano sujetando una Oreo y el texto «Da igual cómo te la comas, siempre será Oreo»", pie: "La gráfica de campaña." },
    ],
  },
  aprendizajes: ["Un plan de medios empieza por la persona, no por los soportes."],
  nota: "Proyecto académico en equipo (Grado URJC), sin relación con Mondelēz.",
};

export const marrones = [ryanair, torrons, mms, tourCdc, revista, bbva, oreo];
