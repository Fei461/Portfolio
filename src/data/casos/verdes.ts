import type { CasoCompleto } from "./tipos";

// Casos breves (cinturón verde). Ryanair vive aquí, pero ya es un caso completo. Fuente: los PDF de cada entrega.
const img = (slug: string, file: string) => `${import.meta.env.BASE_URL}assets/casos/${slug}/${file}`;

export const ryanair: CasoCompleto = {
  slug: "ryanair",
  titulo: "Ryanair",
  parecia: "Parecía un problema de mensajes.",
  era: "Era un problema de pertenencia: una plantilla que no se siente reconocida.",
  ficha: [
    { etiqueta: "Qué", valor: "Diagnóstico de identidad, imagen y reputación, y plan de comunicación interna" },
    { etiqueta: "Dónde", valor: "Gestión de la Comunicación, Grado URJC, 2025" },
    { etiqueta: "Equipo", valor: "Ocho personas" },
    { etiqueta: "Fuentes", valor: "Entrevistas a tripulantes y personal de tierra, prensa e Indeed" },
  ],
  contexto: {
    titulo: "Mirar hacia dentro",
    parrafos: [
      "Ryanair está bien posicionada en el mercado, pero arrastra problemas de reputación, sobre todo con su propia plantilla. Nuestro trabajo empezó por ahí: comparar lo que la compañía dice ser con lo que viven quienes trabajan en ella.",
      "Además de informes, prensa y portales de empleo, hablamos con tripulantes y personal de tierra. Las quejas se repetían: sueldos por debajo de lo prometido, contratos inestables y una comunicación interna que solo baja de arriba abajo.",
      "El reto era darle la vuelta: que la comunicación empezara por quienes vuelan cada día con la marca.",
    ],
  },
  bloques: [
    {
      titulo: "Diagnosticar",
      resumen: "Identidad, imagen, competencia y reputación interna.",
      puntos: [
        "Imagen deseada, real y construida, y comparación con Vueling, EasyJet, Iberia Express y Wizz Air.",
        "Un análisis de brecha entre lo que la compañía dice y lo que vive la plantilla: conciliación frente a productividad extrema, bienestar frente a acoso, entorno dinámico frente a sobrecarga.",
      ],
    },
    {
      titulo: "Plantear la estrategia",
      resumen: "Primero cerrar la brecha, después diferenciarse.",
      puntos: [
        "Una estrategia en cuatro pasos: identificación, diferenciación, referencia y preferencia, con la conciliación como atributo diferenciador.",
        "Objetivo: invertir en dos años el 20 % de las actitudes negativas de la plantilla, medido con encuestas de satisfacción semestrales.",
        "Una reunión mensual entre dirección, sindicatos y grupos de trabajadores.",
      ],
    },
    {
      titulo: "Mapear a quién importa",
      resumen: "Públicos según poder, legitimidad y urgencia.",
      puntos: [
        "Un mapa con accionistas, reguladores, sindicatos, autoridades aeroportuarias, proveedores, comunidades locales y pasajeros.",
        "De la plantilla: buen clima laboral, respeto por su trabajo y posibilidades de crecer y formarse.",
      ],
    },
    {
      titulo: "Reconocer y acoger",
      resumen: "Acciones, no solo mensajes.",
      puntos: [
        "Los Cabin Crew Awards como unos Óscar de Ryanair en Montecarlo, con cena de gala y entradas para el Gran Premio de Fórmula 1 como premio.",
        "Regatas por equipos, un desayuno de bienvenida, un kit «Welcome on board» y un programa de mentoría para reducir la rotación temprana.",
      ],
    },
    {
      titulo: "Informar",
      resumen: "Canales para contarse cosas.",
      puntos: [
        "«Historias con Altura», un podcast con vivencias de la plantilla.",
        "SkyNews, la revista interna, y una intranet que digitaliza la acogida y conecta a los empleados entre sí.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      { src: img("ryanair", "mapa-publicos.jpg"), alt: "Diagrama de tres círculos, poder, legitimidad y urgencia, con los públicos de Ryanair", pie: "El mapa de públicos." },
      { src: img("ryanair", "podcast.jpg"), alt: "Cartel del podcast Historias con Altura con una chica hablando ante un micrófono", pie: "«Historias con Altura», el podcast interno." },
      { src: img("ryanair", "skynews.jpg"), alt: "Portada de la revista interna SkyNews de Ryanair", pie: "SkyNews, la revista interna." },
      { src: img("ryanair", "skynews-dentro.jpg"), alt: "Páginas interiores de SkyNews con historias de empleados", pie: "Historias de la plantilla, dentro de la revista." },
      { src: img("ryanair", "bienvenida.jpg"), alt: "Kit de bienvenida de Ryanair con caja, taza, libreta y carta", pie: "El kit «Welcome on board»." },
      { src: img("ryanair", "premios.jpg"), alt: "Diapositiva de los Cabin Crew Awards de Ryanair", pie: "Los Cabin Crew Awards." },
      { src: img("ryanair", "acogida.jpg"), alt: "Carteles de una regata por equipos y de un desayuno de bienvenida", pie: "Regata y desayuno de bienvenida." },
      { src: img("ryanair", "kit-buddy.jpg"), alt: "Kit de bienvenida con taza y sudadera, y una mentora con un nuevo empleado", pie: "El programa de mentoría." },
    ],
  },
  aprendizajes: [
    "La comunicación interna empieza por escuchar a quien menos poder tiene en el mapa.",
    "Reconocer es una acción, no un mensaje.",
    "Una brecha no se cierra con mensajes: se cierra cambiando lo que la gente vive.",
  ],
  nota: "Propuesta académica en equipo (Grado URJC), sin relación con Ryanair.",
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
      "El brief parecía sencillo: enamorar a la Generación Z para que comprara turrón de alta calidad. El problema, un precio poco asequible para una generación que mira el bolsillo. Y para ellos Sinergia, la línea creada con chefs de alta cocina, era un dulce de Navidad y poco más.",
      "El insight venía de ellos mismos: «Muchas veces no me muestro como soy en realidad por miedo a ser juzgado». Igual que el producto, juzgado por fuera y distinto por dentro.",
      "Todavía hoy, cada vez que paso por delante de su escaparate en Gran Vía, me acuerdo de este reto.",
    ],
  },
  bloques: [
    {
      titulo: "El concepto",
      resumen: "El regalo no deseado.",
      puntos: [
        "Inspirado en el trampantojo: detrás de cada envoltorio inesperado hay un regalo esperando a ser descubierto, como detrás de cada persona.",
        "Un mensaje para la Generación Z: la verdadera esencia está en el interior.",
        "Dos pilares: romper la estacionalidad, para que el turrón sea un postre de todo el año, y dar profundidad al mensaje atacando los prejuicios.",
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
  era: "Era una forma de conectar a agencias y anunciantes con los creativos afectados por la DANA.",
  ficha: [
    { etiqueta: "Qué", valor: "Propuesta para el Tour c de c 2025 del Club de Creatividad" },
    { etiqueta: "Brief", valor: "Dar visibilidad a los profesionales creativos afectados por la DANA" },
    { etiqueta: "Equipo", valor: "Individual" },
    { etiqueta: "Resultado", valor: "No fue seleccionada, y la sigo defendiendo" },
  ],
  contexto: {
    titulo: "El pueblo salva al pueblo",
    parrafos: [
      "Cuando la DANA arrasó la Comunidad Valenciana, desde Madrid solo pude donar productos de primera necesidad. Se me quedó la espinita de qué más habría podido hacer con los recursos adecuados.",
      "Un mes después, el Club de Creatividad lanzó el Tour c de c 2025 con un brief centrado precisamente en eso: dar visibilidad a los creativos afectados. Ahí encontré el momento de darle forma a la idea.",
    ],
  },
  bloques: [
    {
      titulo: "La idea",
      resumen: "Un Tinder publicitario.",
      puntos: [
        "Una base de datos para que agencias y anunciantes conecten con los profesionales damnificados de la zona.",
        "Un matching que va más allá del CV: portfolio visible, likes y comentarios, como en una app de citas.",
      ],
    },
  ],
  piezas: {
    titulo: "El vídeo",
    texto: "La propuesta completa, en vídeo.",
    videos: [{ src: img("tour-cdc", "tinder-publicitario.mp4"), titulo: "Tinder publicitario", red: "Vídeo" }],
  },
  aprendizajes: [
    "Un formato que todo el mundo conoce es un atajo para que se entienda la idea.",
    "No ganar no le quita valor a haber intentado aportar una solución.",
  ],
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

export const pluvielle: CasoCompleto = {
  slug: "pluvielle",
  titulo: "Pluvielle",
  parecia: "Parecía una alfombrilla de baño.",
  era: "Era una marca de lujo que convierte un objeto cotidiano en arte que se colecciona.",
  ficha: [
    { etiqueta: "Qué", valor: "Identidad de marca y marketing mix" },
    { etiqueta: "Dónde", valor: "Máster en Comunicación Publicitaria, UC3M, 2026" },
    { etiqueta: "Equipo", valor: "En equipo" },
    { etiqueta: "Idioma", valor: "Trabajo en inglés" },
  ],
  contexto: {
    titulo: "Del baño a la galería",
    parrafos: [
      "Pluvielle parte de la «artificación» de Kapferer: sacar un objeto corriente de su categoría y tratarlo como arte. Las alfombrillas son de diatomita, que absorbe y seca al instante, y cada colección la firma un artista: diez piezas numeradas.",
      "Solo se compran en persona, en pop-ups de una semana en galerías de ciudades de lujo, con tres días de exposición privada antes de abrir la venta.",
      "El nombre une pluvia, lluvia en latín, con el sufijo francés -elle, y el logo son dos gotas que, juntas, forman una P.",
    ],
  },
  bloques: [
    {
      titulo: "Identidad",
      resumen: "Lujo silencioso.",
      puntos: [
        "Tonos tierra, como la diatomita de la que sale el producto.",
        "Una serif sofisticada para el logotipo y un packaging minimalista inspirado en las grandes casas de lujo.",
      ],
    },
    {
      titulo: "Marketing mix",
      resumen: "Escasez y experiencia.",
      puntos: [
        "Colecciones limitadas por temporada y venta solo en galería.",
        "Su promesa: el toque efímero de la lluvia, esculpido en diatomita.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    items: [
      { src: img("pluvielle", "alfombra.jpg"), alt: "Alfombrilla de diatomita con una ilustración de figuras de colores, de 50 por 25 centímetros", pie: "Una pieza de la colección." },
      { src: img("pluvielle", "packaging.jpg"), alt: "Caja de presentación de Pluvielle con la alfombrilla y el texto de la artista", pie: "El packaging." },
      { src: img("pluvielle", "galeria.jpg"), alt: "Galería de noche con invitados alrededor de las alfombrillas expuestas", pie: "El pop-up en galería." },
      { src: img("pluvielle", "caja.jpg"), alt: "Caja abierta con papel de seda estampado y el sello de las dos gotas", pie: "El detalle del sello." },
    ],
  },
  aprendizajes: ["El lujo no está solo en el objeto, sino en cómo se llega a él."],
  nota: "Marca ficticia creada para el máster. Trabajo académico en equipo.",
};

export const verdes = [ryanair, torrons, mms, tourCdc, revista, bbva, oreo, pluvielle];
