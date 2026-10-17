import type { CasoCompleto } from "./tipos";

// Fuente: plan de distribución individual del curso de RTVE
// «Producción y estrategia de contenidos para plataformas OTT».
export const warriorsArena: CasoCompleto = {
  slug: "warriors-arena",
  titulo: "Warriors Arena",
  parecia: "Parecía un concurso de pruebas físicas.",
  era: "Era un plan para venderlo por el mundo: qué plataforma primero, cuándo la tele y quién después.",
  ficha: [
    { etiqueta: "Qué", valor: "Plan de distribución de un formato de entretenimiento" },
    { etiqueta: "Dónde", valor: "Curso de RTVE sobre estrategia de contenidos para plataformas OTT, 2025" },
    { etiqueta: "Equipo", valor: "Individual" },
    { etiqueta: "Formato", valor: "Diez episodios de 75 minutos" },
  ],
  marcador: [
    { cifra: "10 M€", texto: "de presupuesto para la primera temporada" },
    { cifra: "40", texto: "territorios como objetivo al acabar la temporada" },
    { cifra: "10 M", texto: "de espectadores acumulados como meta" },
    { cifra: "18", texto: "meses para convertirlo en un formato global de referencia" },
  ],
  contexto: {
    titulo: "Un formato que se entiende sin idioma",
    parrafos: [
      "Warriors Arena es un concurso físico de gran presupuesto: participantes de distintos países se enfrentan a pruebas de fuerza, resistencia, habilidad, estrategia y agilidad en una arena diseñada para llevarlos al límite.",
      "Lo que lo hace vendible fuera es que el espectáculo físico se entiende sin conocer el idioma, se adapta a cada cultura, funciona igual en plataformas que en televisión y tiene una estética de cine. Mi trabajo era decidir cómo y a quién venderlo.",
    ],
  },
  cronograma: {
    titulo: "Tres ventanas, en este orden",
    intro:
      "Primero el alcance global, después la audiencia local y, al final, mantener vivo el formato. El orden de las ventanas es la estrategia.",
    meses: 30,
    tramos: [
      {
        nombre: "Ventana 1: OTT global",
        desde: 0,
        hasta: 12,
        texto: "Estreno simultáneo en varios territorios para presentarlo como un evento internacional. De 6 a 12 meses, según contrato.",
      },
      {
        nombre: "Ventana 2: televisión",
        desde: 12,
        hasta: 18,
        texto: "Cadenas nacionales en territorios clave, como España o Corea del Sur, para llegar a un público más amplio y menos digital.",
      },
      {
        nombre: "Ventana 3: gratuitas y nicho",
        desde: 19,
        hasta: 30,
        abierto: true,
        texto: "Plataformas con publicidad y plataformas de nicho cuando se liberan los derechos de televisión, desde el mes 19.",
      },
    ],
  },
  reparto: {
    titulo: "Dónde va el dinero",
    intro: "El reparto del presupuesto de la primera temporada.",
    total: "10 millones de euros",
    partes: [
      { nombre: "Producción", pct: 65 },
      { nombre: "Marketing y promoción", pct: 15 },
      { nombre: "Postproducción", pct: 10 },
      { nombre: "Distribución y ventas", pct: 5 },
      { nombre: "Contingencias", pct: 5 },
    ],
  },
  bloques: [
    {
      titulo: "Fijar objetivos",
      resumen: "Un objetivo principal y cuatro que se pueden medir.",
      puntos: [
        "Principal: posicionarlo como formato global de referencia en 18 meses.",
        "Cerrar un acuerdo con una OTT en seis meses como máximo y lograr un ROI del 25 % en los primeros 18 meses.",
        "Reunir 10 millones de espectadores acumulados en 40 territorios y asegurar la segunda temporada en los seis meses posteriores al estreno.",
      ],
    },
    {
      titulo: "Elegir a los compradores",
      resumen: "Cada uno compra por una razón distinta.",
      puntos: [
        "Netflix: alcance global y experiencia en el género; Warriors Arena se presenta como sucesor de Ultimate Beastmaster.",
        "Prime Video: inversión en contenido local y la puerta a spin-offs por países.",
        "La 1: segunda ventana para un público más variado, con promoción cruzada en RTVE Play.",
        "SBS y KBS: Corea del Sur, líder en este tipo de concursos, con una versión adaptada. Martial Arts+: contenido extra para un nicho ya interesado.",
      ],
    },
    {
      titulo: "Diseñar un modelo mixto",
      resumen: "Ingresos inmediatos sin cerrar la puerta al largo plazo.",
      puntos: [
        "Paquetes por territorio que combinan OTT global y regional, televisión abierta y plataformas gratuitas.",
        "Derechos secundarios no exclusivos y opción de remake local, con el mismo concepto adaptado a cada cultura.",
        "Promoción en redes antes, durante y después de la emisión, y un pitch distinto para cada mercado.",
      ],
    },
    {
      titulo: "Ir a los mercados",
      resumen: "Donde se compra y se vende entretenimiento.",
      puntos: [
        "MIPCOM y MIPTV en Cannes, MIPCancún para el mercado hispanohablante, el European Film Market de la Berlinale y NATPE.",
        "Antes del lanzamiento: teasers para ferias, campaña digital anticipada, negociación con la OTT y relaciones públicas internacionales.",
      ],
    },
    {
      titulo: "Medirlo",
      resumen: "KPIs para saber si el plan funciona.",
      puntos: [
        "Territorios vendidos, audiencia total, visualizaciones y tiempo de visionado por usuario.",
        "Retención, engagement digital, ROI y tasa de renovación de temporada.",
      ],
    },
  ],
  tatami: {
    termino: "",
    titulo: "Las decisiones que ordenan el plan",
    intro: "En distribución, dónde y cuándo te colocas decide cuánto llegas.",
  },
  caidas: [
    {
      titulo: "Primero lo global",
      texto:
        "Estrenar a la vez en muchos territorios crea la sensación de evento. Por eso la primera ventana es para las plataformas internacionales.",
    },
    {
      titulo: "Después lo local",
      texto:
        "La televisión y las versiones por país llegan cuando el formato ya tiene nombre, para sumar públicos que no están en las plataformas.",
    },
    {
      titulo: "Guardar derechos",
      texto:
        "Vender los derechos secundarios sin exclusividad permite seguir vendiendo el formato después de la primera temporada.",
    },
  ],
  aprendizajes: [
    "En distribución, el orden importa tanto como el destino.",
    "Cada comprador necesita una razón distinta para el mismo producto.",
    "Los derechos que no vendes en exclusiva siguen trabajando para ti.",
  ],
  nota: "Plan individual del curso de RTVE. Warriors Arena es un formato ficticio; sus imágenes promocionales se crearon con IA.",
};
