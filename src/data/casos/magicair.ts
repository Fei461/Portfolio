import type { CasoCompleto } from "./tipos";

const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/magicair/${file}`;

// MagicAir: aerolínea ficticia. Fuentes: «Construyendo la reputación» y «Diseño de
// estrategia de respuesta a crisis reputacional mediante la SCCT» (RRPP Especializadas, URJC).

export const magicair: CasoCompleto = {
  slug: "magicair",
  titulo: "MagicAir",
  parecia: "Parecía la enésima presentación de aerolíneas de la carrera (la cuarta, como mínimo).",
  era: "Era inventarnos una aerolínea tan coherente que después nos costó provocarle una crisis.",
  ficha: [
    { etiqueta: "Qué", valor: "Estrategia de relaciones públicas y plan de crisis" },
    { etiqueta: "Dónde", valor: "Relaciones Públicas Especializadas, Grado URJC, 2025" },
    { etiqueta: "Equipo", valor: "Siete personas" },
    { etiqueta: "Mi parte", valor: "El contexto, el diagnóstico, los objetivos, parte de la ficha de la empresa y una de las respuestas de la rueda de prensa" },
  ],
  contexto: {
    titulo: "Una norma europea, una crisis propia",
    parrafos: [
      "MagicAir es una aerolínea low cost que creamos basándonos en Ryanair, siendo hasta el nombre una adaptación. Una nueva normativa europea la obliga a cambiar su política de equipaje de mano, y parte del público lo lee como un coste oculto para ganar más dinero.",
      "Lo trabajamos en dos tiempos. Primero, cómo anunciar el cambio sin dañar la reputación. Después, qué hacer cuando la crisis ya ha estallado: saber cuánta culpa nos atribuía la gente y elegir cómo responder.",
      "El riesgo de fondo era una brecha de identidad: lo que la empresa dice ser, transparente y empática, frente a lo que algunos públicos creen que demuestra.",
      "Para entonces estábamos ya «locas desquiciadas»: llevábamos presentaciones de aerolíneas en por lo menos cuatro asignaturas. Y lo gracioso es que la primera parte consistía en crear la empresa entera, sin saber que después tendríamos que provocarle una crisis. La teníamos tan bien montada y éramos tan coherentes que costó encontrarle un problema: acabamos inventándonos uno con las nuevas medidas de las maletas.",
      "MagicAir fue la última de una larga serie de trabajos que nos dejaron preparadas para trabajar en una aerolínea desde todos los prismas. Lo irónico es que en cuatro años nunca cogimos un avión todas juntas.",
    ],
  },
  mapa: {
    titulo: "Quién importa cuando estalla la crisis",
    intro:
      "Con la crisis, cada público cambia de sitio según tres cosas: el poder que tiene para influir, la legitimidad de lo que reclama y la urgencia con que lo reclama. Elige un tipo de público.",
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
      titulo: "La marca",
      resumen: "Cada persona escribió su ficha de empresa y nos quedamos con lo mejor de todas.",
      puntos: [
        "Valores como la innovación, la comunicación abierta y la trazabilidad, y un estilo de comunicación propio.",
        "Una identidad minimalista: el blanco roto y la tipografía.",
        "También hubo propuestas de logo; las mías están en las piezas.",
      ],
    },
    {
      titulo: "Antes de la crisis",
      resumen: "Anunciar una norma que nadie quiere oír.",
      puntos: [
        "Nos pusimos objetivos concretos: aplicar la nueva política en todas las rutas en un año, que tres de cada cuatro clientes la conocieran antes de empezar y que al menos el 15 % de las menciones fueran positivas.",
        "Cada público necesitaba su tono: primero los datos y luego la emoción con los clientes, formal con las asociaciones de consumidores y negociador con los reguladores.",
        "Y defender nuestra postura ante las instituciones con un documento de posición y acuerdos con los organismos.",
      ],
    },
    {
      titulo: "Cuando estalla",
      resumen: "Saber cuánta culpa nos atribuye la gente para elegir cómo responder.",
      puntos: [
        "Usamos la teoría situacional de la comunicación de crisis (SCCT), que clasifica una crisis según cuánta responsabilidad atribuye el público a la empresa.",
        "La norma venía de Europa, así que MagicAir era, en principio, víctima. Pero clientes y asociaciones la culpaban a ella, y una crisis así puede acabar siendo culpa tuya si no se gestiona bien.",
        "Respondimos rebajando la responsabilidad: recordar que el cambio venía impuesto, en una rueda de prensa, en redes y en la web, con dos portavoces y un lenguaje claro, honesto y cercano.",
      ],
    },
    {
      titulo: "Medir",
      resumen: "Cómo saber si estaba funcionando.",
      puntos: [
        "Reducir en nueve meses la responsabilidad que atribuyen los consumidores y subir un 20 % la cobertura neutral o positiva en tres.",
        "Con encuestas, Net Promoter Score, seguimiento de medios y CRM.",
      ],
    },
  ],
  imagenes: {
    titulo: "Mis logos",
    texto: "Las ideas de logo que propuse para la marca. No terminaron saliendo.",
    items: [
      { src: img("logo-1.jpg"), alt: "Logo MagicAir en letra manuscrita con un avión oscuro y una estela de estrellas", pie: "Letra manuscrita y una estela de estrellas." },
      { src: img("logo-2.jpg"), alt: "La misma propuesta de logo con el avión en dorado", pie: "La misma idea, con el avión en dorado." },
      { src: img("logo-3.jpg"), alt: "Logo MagicAir con un avión azul y dorado sobre el nombre", pie: "Un avión azul y dorado sobre el nombre." },
      { src: img("logo-4.jpg"), alt: "Logo MagicAir con alas azules, estrellas doradas y el nombre en dorado", pie: "Alas, estrellas y el nombre en dorado." },
    ],
  },
  piezasExtra: [
    {
      id: "rueda-de-prensa",
      nombre: "Rueda de prensa",
      intro: "Para la rueda de prensa preparamos las preguntas más difíciles que podían hacernos y una respuesta para cada una. Este bloque lo preparé yo.",
      tarjetas: [
        {
          etiqueta: "Preguntas y respuestas · para el CEO",
          titulo: "Sobre el lucro y los «costes ocultos»",
          escenas: [
            {
              momento: "Pregunta",
              texto: "«Muchos usuarios y asociaciones de consumidores sienten que esta “tasa por equipaje de mano” es en realidad una excusa para aumentar sus beneficios y maquillar un coste oculto. ¿Es esta medida una forma de compensar ingresos?»",
            },
            {
              momento: "Respuesta",
              texto: "«Quiero ser tajante en esto: esta modificación no nace de una decisión interna para obtener mayor beneficio económico, sino de una obligación regulatoria externa. Rechazamos la idea de que sea un “coste oculto”. Al contrario, lo hemos comunicado precisamente para ser transparentes. De hecho, para equilibrar el impacto en el viajero, hemos aplicado simultáneamente una disminución del coste de la maleta facturada.»",
            },
          ],
        },
      ],
    },
  ],
  aprendizajes: [
    "La coherencia con la identidad de marca es lo que decide si un cambio se lee como oportunidad o como amenaza.",
    "Una crisis en la que la empresa es víctima puede acabar siendo culpa suya si no se gestiona bien.",
    "Que una marca bien construida es difícil de romper: la coherencia también protege en una crisis.",
  ],
  nota: "MagicAir es una marca ficticia creada para la asignatura. Trabajo académico en equipo.",
};
