import type { CasoCompleto } from "./tipos";

// TFG individual. Fuente: «Percepción y renovación de la identidad corporativa:
// el caso de BBVA tras la crisis financiera» (URJC, curso 2025-2026).
const img = (file: string) => `${import.meta.env.BASE_URL}assets/casos/tfg-bbva/${file}`;

export const tfgBbva: CasoCompleto = {
  slug: "tfg-bbva",
  titulo: "BBVA tras 2008",
  parecia: "Parecía el TFG de la hija de dos empleados de BBVA.",
  era: "Era medir, con 248 respuestas de dentro y de fuera, si la gente ya le ha perdonado 2008 al banco. Spoiler: todavía no del todo.",
  ficha: [
    { etiqueta: "Qué", valor: "Trabajo de Fin de Grado sobre identidad y reputación corporativa" },
    { etiqueta: "Dónde", valor: "Grado URJC, 2026" },
    { etiqueta: "Equipo", valor: "Individual" },
    { etiqueta: "Método", valor: "Análisis documental, dos encuestas y una entrevista en profundidad" },
  ],
  marcador: [
    { cifra: "248", texto: "respuestas: 103 de dentro del banco y 145 de fuera" },
    { cifra: "0,68", texto: "puntos separan la reputación vista por el público interno (4,19) y por el externo (3,51)" },
  ],
  contexto: {
    titulo: "¿Se ha cerrado la herida de 2008?",
    parrafos: [
      "El TFG (o «la T palabra», como lo llamaba yo) nace de las ganas de tratar todo lo que más me había enganchado en la carrera: la comunicación corporativa y la reputación de marca. Lo admito, fui por terreno conocido. No por vaguería, sino porque sentía que así podía llegar a gente que aportaba muchísimo.",
      "Tras la crisis financiera, la banca perdió la confianza de la gente. BBVA respondió con un restyling, una apuesta por la sostenibilidad y proyectos de contenido como Aprendemos Juntos. Quería saber si todo eso había funcionado de verdad, y medirlo desde los dos lados: una encuesta al público interno y otra al externo, con las mismas preguntas.",
      "Mis padres movieron la encuesta entre sus contactos, y así llegó a Ana, responsable de marca y contenidos de BBVA y una de las creadoras de Aprendemos Juntos. Ella misma se ofreció a ayudarme como fuera.",
      "Y, a riesgo de cruzar la línea, la razón real de esta investigación es una niña que crecía pegando cromos de la Liga BBVA con su madre, que plantó árboles junto a su padre con un chaleco azul enorme y que fue con su hermano a una charla de ciberseguridad de la empresa (de la que no consiguieron sacarnos nada, salvo que hacíamos judo juntos). Esa niña soy yo: hija de dos empleados de BBVA. Sé que lo que hacen es cierto, como también lo es que tienen un problema de comunicación.",
    ],
  },
  retoPie: "La nube de palabras de las respuestas abiertas de las dos encuestas: «social», «sostenibilidad», «valores», «transparencia» o «confianza», entre las que más se repiten.",
  brecha: {
    titulo: "Lo que se ve desde dentro y desde fuera",
    intro: "Cada atributo, puntuado de 1 a 5 por el público interno (quienes trabajan en BBVA) y por el externo. La línea roja es la distancia entre los dos. Toca una fila para ver por qué.",
    dentro: "Público interno",
    fuera: "Público externo",
    items: [
      {
        atributo: "Reputación actual",
        dentro: 4.19,
        fuera: 3.51,
        porQue: "Dentro se valora el nuevo relato de marca. Fuera, la memoria de 2008 sigue actuando como una barrera que impide que los mensajes positivos calen del todo.",
      },
      {
        atributo: "Compromiso ético con la sociedad",
        dentro: 4.16,
        fuera: 3.08,
        porQue: "Casi veinte años después sigue viva la sensación de que en la crisis se socializaron las pérdidas. Una respuesta de fuera: «BBVA es un banco. Y existe como entidad para ganar dinero».",
      },
      {
        atributo: "Trato justo a los clientes",
        dentro: 4.1,
        fuera: 3.05,
        porQue: "La marca todavía no se ha despegado de las prácticas del sector. Y a la Generación X, la más golpeada por la crisis, el paso de la sucursal a la app le suena a pérdida de cercanía: «Me sentí que estaba en una tienda».",
      },
      {
        atributo: "Acciones sociales",
        dentro: 4.56,
        fuera: 3.81,
        porQue: "Es lo mejor valorado fuera. Aprendemos Juntos funciona como escudo reputacional, y su credibilidad está en que nunca ha intentado vender nada.",
      },
      {
        atributo: "Integración de la IA",
        dentro: 4.64,
        fuera: 3.15,
        porQue: "Dentro es una herramienta que quita tareas rutinarias. Fuera se asocia a perder calidad en la atención: «La incorporación de la IA está bien para respuestas cortas, pero no es sustitución de ayuda de un agente especializado».",
      },
      {
        atributo: "Compromiso con el medio ambiente",
        dentro: 4.33,
        fuera: 3.03,
        porQue: "Dentro se ven los cambios de primera mano; fuera solo llega el mensaje publicitario, y muchos lo leen como greenwashing. «Si quieren parecer sostenibles y ecofriendly, ¿por qué usan IA?».",
      },
    ],
  },
  bloques: [
    {
      titulo: "La pregunta",
      resumen: "Si la identidad que BBVA dice tener coincide con la imagen que percibe la gente.",
      puntos: [
        "Quería saber si el branded content, el restyling y la apuesta por la sostenibilidad habían servido para algo más que para quedar bien: si habían devuelto la confianza que se perdió en 2008.",
        "Lo concreté en cuatro preguntas: cuánta distancia hay entre dentro y fuera, cómo cambia según la edad, el género o el cargo, qué peso tiene Aprendemos Juntos y si la IA y la sostenibilidad se ven como un valor o como algo que deshumaniza.",
      ],
    },
    {
      titulo: "Cómo lo medí",
      resumen: "Números para saber qué pasa, y palabras para entender por qué.",
      puntos: [
        "Primero, los documentos: el manual de marca, los informes de banca responsable, el caso de Aprendemos Juntos y lo que otros trabajos académicos habían escrito sobre el banco desde 2008.",
        "Después, dos encuestas gemelas, con las mismas preguntas de 1 a 5 y preguntas abiertas: 103 respuestas de dentro y 145 de fuera.",
        "Y por último, la parte que más disfruto: el análisis. Medias para medir la brecha, correlaciones para ver qué pesa más en la reputación y la dispersión para ver cuánto se polarizan las opiniones. Las respuestas abiertas, agrupadas por temas, me dieron el porqué de cada nota.",
      ],
    },
    {
      titulo: "La entrevista",
      resumen: "Todo lo que no cabe en un papel.",
      puntos: [
        "Sentía que toda esa información cuantitativa se complementaría muy bien con alguien que trabaja en reputación de marca. Encontrar fecha costó, con exámenes de por medio.",
        "Cuando por fin la tuvimos, yo iba con un guion bien preparado. Pero no fue así la cosa: Ana me contó todo lo que no cabe en un papel, casi como si se lo estuviera contando a una amiga tomándose un café.",
        "Me habló con tanto cariño y profundidad de Aprendemos Juntos que decidí convertirlo en una pieza clave del estudio.",
      ],
    },
    {
      titulo: "Cada público ve un banco distinto",
      resumen: "Por edad, por género y por cargo.",
      puntos: [
        "La Generación X, la que más sufrió la crisis, es la más crítica. La Z valora la identidad visual, pero castiga la IA, y los Baby Boomers son los más positivos.",
        "Fuera, hombres y mujeres puntúan casi igual; la mayor diferencia está en el medio ambiente, donde ellas son más exigentes.",
        "Dentro, los técnicos, el grueso de la organización, son los más críticos y piden menos comunicaciones y mejor agrupadas. Los becarios, que llegan atraídos por la imagen tecnológica y sostenible del banco, son los más críticos con la sostenibilidad y la diversidad.",
        "Conclusión: BBVA no gestiona una única reputación, sino muchas a la vez.",
      ],
    },
    {
      titulo: "Aprendemos Juntos",
      resumen: "El proyecto del que Ana me habló con tanto cariño.",
      puntos: [
        "Nació al pasar del patrocinio a la utilidad: dejaron de ser «la Liga BBVA» para ser útiles a la gente.",
        "Llegaron a rechazar contactos que venían de presidencia para no «sacar la patita de banco».",
        "Nadie, de las 248 personas encuestadas, cree que afecte para mal a la reputación del banco. Funciona como un escudo.",
        "Ana guarda un pósit que dice «Os amo BBVA, gracias por ayudarme tanto». ¿En qué momento alguien le dice a un banco que le quiere?",
      ],
    },
    {
      titulo: "Lo que concluí",
      resumen: "El problema no es lo que BBVA hace, sino que no se ve.",
      puntos: [
        "La brecha existe, pero el pronóstico es bueno: dentro la cultura está arraigada y, fuera, los jóvenes la valoran bien.",
        "El cambio más significativo no fue el restyling, sino replantearse el propósito: pasar de querer ser conocido a querer ser útil.",
        "Le falta contar sus intangibles en medios ganados y pagados, no solo las condiciones de sus productos, y ser coherente antes de incorporar novedades como la IA. Contar lo que ya hace sería la mejor forma de cerrar la brecha.",
      ],
    },
  ],
  imagenes: {
    titulo: "Las piezas",
    texto: "Algunos de los gráficos que saqué de las dos encuestas. Lo que más me gustó fue ver cómo cada número escondía una historia.",
    items: [
      {
        src: img("aprendemos-juntos.jpg"),
        alt: "Dos gráficos circulares: el 96,2 % del público interno y el 80 % del externo cree que Aprendemos Juntos afecta positivamente a la reputación de BBVA",
        pie: "¿Afecta Aprendemos Juntos a la reputación de BBVA? Para bien, según el 96,2 % de dentro y el 80 % de fuera. Nadie dijo que para mal.",
      },
      {
        src: img("identidad-ia.jpg"),
        alt: "Gráfico de barras que compara la identidad visual y la integración de la IA según el público interno y el externo",
        pie: "Identidad visual e integración de la IA: donde más se separan dentro y fuera.",
      },
      {
        src: img("medio-ambiente.jpg"),
        alt: "Gráfico de barras del compromiso con el medio ambiente: 4,33 en el público interno y 3,03 en el externo",
        pie: "Compromiso con el medio ambiente: 4,33 dentro y 3,03 fuera.",
      },
      {
        src: img("por-cargo.jpg"),
        alt: "Gráfico de líneas con la valoración de la IA, la sostenibilidad, las redes sociales y la diversidad según el cargo",
        pie: "Dentro, por cargo: los becarios son los más críticos con la sostenibilidad y la diversidad.",
      },
    ],
  },
  cita: {
    texto: "La raíz de la brecha reputacional no consiste en la falta de acciones y estrategias, sino en la no muestra de las mismas.",
    autor: "Lara Feijóo Vázquez",
    cargo: "Discusión final del TFG",
  },
  aprendizajes: [
    "Lo que más me ha gustado descubrir: cuando BBVA se lanzó a la piscina, no sabía si tendría agua.",
    "Que hace falta valor y visión analítica para saber qué tendencias aplicar a cada caso, sin tocar los cimientos que funcionan.",
    "Que la invisibilidad de las buenas acciones es un arma de doble filo: les da credibilidad, pero quien está fuera no se entera.",
    "Que la reputación se construye lentamente y, a veces, depende de cosas que la marca no controla.",
  ],
};
