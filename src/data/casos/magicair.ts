import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/magicair/${file}`;

// MagicAir: aerolínea ficticia. Fuentes: «Construyendo la reputación» y «Diseño de
// estrategia de respuesta a crisis reputacional mediante la SCCT» (RRPP Especializadas, URJC).

export const magicair: CasoCompleto = {
  slug: "magicair",
  titulo: "MagicAir",
  era: "Una crisis de reputación a punto de estallar: una aerolínea que presume de transparente aplicando lo que el público lee como un coste oculto.",
  ficha: [
    { etiqueta: "Qué", valor: "Estrategia de relaciones públicas y plan de crisis" },
    { etiqueta: "Dónde", valor: "Relaciones Públicas Especializadas, Grado URJC, 2025" },
    { etiqueta: "Equipo", valor: "Siete personas" },
    { etiqueta: "Me encargué de", valor: "El contexto, el diagnóstico, los objetivos y parte de la ficha de la empresa" },
  ],
  contexto: {
    titulo: "Una norma europea, una crisis propia",
    parrafos: [
      "MagicAir es una aerolínea low cost que creamos basándonos en Ryanair, siendo hasta el nombre una adaptación. Una nueva normativa europea la obliga a cambiar su política de equipaje de mano, y parte del público lo lee como un coste oculto para ganar más dinero.",
      "Lo trabajamos en dos tiempos. Primero, cómo anunciar el cambio sin dañar la reputación. Después, qué hacer cuando la crisis ya ha estallado: clasificarla con la Situational Crisis Communication Theory (SCCT) y elegir cómo responder.",
      "El riesgo de fondo era una brecha de identidad: lo que la empresa dice ser, transparente y empática, frente a lo que algunos públicos creen que demuestra.",
    ],
  },
  mapa: {
    titulo: "Quién importa cuando estalla la crisis",
    intro:
      "Con la crisis, los públicos cambian de sitio según su poder, su legitimidad y su urgencia (el modelo de prominencia de Mitchell, Agle y Wood). Elige un tipo de público.",
    grupos: [
      {
        tipo: "Definitivos",
        atributos: ["poder", "legitimidad", "urgencia"],
        miembros: [
          { nombre: "Consumidores.", texto: "Pueden dañar la reputación con un boicot y se sienten engañados por la incoherencia entre lo que la marca dice y lo que hace." },
          { nombre: "Medios de comunicación.", texto: "Pasan de dominantes a definitivos: la crisis tiene valor noticioso y quieren ser los primeros en contarla." },
          { nombre: "Asociaciones de consumidores.", texto: "Ganan legitimidad al ponerse del lado de los clientes." },
          { nombre: "Consejo de administración.", texto: "A su poder y su legitimidad se suma la urgencia por frenar la crisis cuanto antes." },
        ],
      },
      {
        tipo: "Dominantes",
        atributos: ["poder", "legitimidad"],
        miembros: [
          { nombre: "Tribunales.", texto: "Mantienen su poder y su legitimidad legal, pero ya no tienen urgencia: la norma está aplicada." },
          { nombre: "Organismos reguladores.", texto: "Igual que los tribunales: conservan su autoridad y pierden la urgencia." },
        ],
      },
      {
        tipo: "Peligrosos",
        atributos: ["poder", "urgencia"],
        miembros: [
          { nombre: "Accionistas y fondos.", texto: "De inactivos a peligrosos: una crisis de reputación puede devaluar las acciones." },
        ],
      },
      {
        tipo: "Dependientes",
        atributos: ["legitimidad", "urgencia"],
        miembros: [
          { nombre: "Empleados.", texto: "Reciben las quejas de primera mano y su clima laboral empeora." },
          { nombre: "Sindicatos.", texto: "De discrecionales a dependientes: la presión y la carga de trabajo les dan urgencia." },
        ],
      },
      {
        tipo: "Discrecionales",
        atributos: ["legitimidad"],
        miembros: [
          { nombre: "ONG medioambientales.", texto: "Su interés sigue siendo la sostenibilidad; la crisis les afecta poco." },
        ],
      },
    ],
  },
  bloques: [
    {
      titulo: "La ficha de la empresa",
      resumen: "Cada persona escribió la suya y nos quedamos con lo mejor de todas.",
      puntos: [
        "Valores como la innovación, la comunicación abierta y la trazabilidad, y un estilo de comunicación propio.",
        "Una identidad minimalista: el blanco roto y la tipografía.",
        "También hubo propuestas de logo; las mías están en las piezas.",
      ],
    },
    {
      titulo: "Antes de la crisis",
      resumen: "Primero tocaba anunciar el cambio.",
      puntos: [
        "Nos propusimos aplicar la nueva política en el 100 % de las rutas en doce meses, que el 75 % de los clientes la conociera antes de empezar y que el 15 % de las menciones fueran positivas.",
        "Dimos a cada público su tono: fáctico y luego emocional con los clientes, formal con las asociaciones de consumidores y negociador con los reguladores.",
        "Propusimos lobbismo directo con un position paper y acuerdos con los organismos institucionales.",
      ],
    },
    {
      titulo: "Cuando estalla",
      resumen: "Clasificar la crisis para saber cómo responder.",
      puntos: [
        "Según la SCCT era una crisis del clúster de víctima, porque el origen es externo: una norma europea.",
        "Pero clientes y asociaciones culpaban a la empresa, así que podía acabar en una responsabilidad mayor si no se gestionaba bien.",
        "Respondimos con una estrategia de disminución, en concreto de excusa: rueda de prensa, redes y web, dos portavoces y un lenguaje claro, honesto y cercano.",
      ],
    },
    {
      titulo: "Medir",
      resumen: "Cómo saber si estaba funcionando.",
      puntos: [
        "Reducir en nueve meses la responsabilidad que atribuyen los consumidores y subir un 20 % la cobertura neutral o positiva en tres.",
        "Con rutas adaptadas, encuestas de pulso, Net Promoter Score, seguimiento de medios y CRM.",
      ],
    },
  ],
  imagenes: {
    titulo: "Mis propuestas de logo",
    texto: "Las ideas de logo que propuse para la marca. No terminaron saliendo.",
    items: [
      { src: img("logo-1.jpg"), alt: "Logo MagicAir en letra manuscrita con un avión oscuro y una estela de estrellas", pie: "Letra manuscrita y una estela de estrellas." },
      { src: img("logo-2.jpg"), alt: "La misma propuesta de logo con el avión en dorado", pie: "La misma idea, con el avión en dorado." },
      { src: img("logo-3.jpg"), alt: "Logo MagicAir con un avión azul y dorado sobre el nombre", pie: "Un avión azul y dorado sobre el nombre." },
      { src: img("logo-4.jpg"), alt: "Logo MagicAir con alas azules, estrellas doradas y el nombre en dorado", pie: "Alas, estrellas y el nombre en dorado." },
    ],
  },
  aprendizajes: [
    "La coherencia con la identidad de marca es lo que decide si un cambio se lee como oportunidad o como amenaza.",
    "Una crisis en la que la empresa es víctima puede acabar siendo culpa suya si no se gestiona bien.",
  ],
  nota: "MagicAir es una marca ficticia creada para la asignatura. Trabajo académico en equipo.",
};
