// Fuente única de los datos personales (Sobre mí y CV). Origen: CV de octubre de 2026.
// Sin teléfono, fecha de nacimiento ni correo de la universidad: la web es pública.

export type Hito = { periodo: string; titulo: string; lugar: string; detalle?: string };

export const perfil = {
  nombre: "Lara Feijóo",
  titular: "Estudiante del Máster en Comunicación Publicitaria",
  resumen:
    "Me interesan especialmente la gestión de la reputación, la percepción de marca, las relaciones públicas, la comunicación corporativa y la comunicación interna.",
  lugar: "Galapagar, Madrid",
  email: "lara.feijoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/lara-feijoo",

  experiencia: [
    {
      periodo: "Enero a mayo de 2026",
      titulo: "Prácticas en el departamento de marketing",
      lugar: "Stud-IA",
      detalle:
        "Estrategia de campañas, creación de contenido, análisis de mercado y de la competencia, y gestión de la reputación.",
    },
    {
      periodo: "Octubre de 2022 a junio de 2025",
      titulo: "Profesora de artes marciales",
      lugar: "Guerreros Galapagar",
    },
    {
      periodo: "Junio de 2021 a agosto de 2025",
      titulo: "Monitora de campamento de verano",
      lugar: "Guerreros Galapagar",
    },
  ] satisfies Hito[],

  formacion: [
    {
      periodo: "Desde septiembre de 2026",
      titulo: "Máster en Comunicación Publicitaria",
      lugar: "Universidad Carlos III de Madrid",
    },
    {
      periodo: "Septiembre de 2022 a junio de 2026",
      titulo: "Grado en Publicidad y Relaciones Públicas",
      lugar: "Universidad Rey Juan Carlos",
      detalle: "Nota media de 8,62 y seis matrículas de honor.",
    },
    {
      periodo: "Septiembre de 2019 a mayo de 2021",
      titulo: "Bachillerato de Excelencia",
      lugar: "IES Diego Velázquez",
    },
    {
      periodo: "Septiembre de 2012 a junio de 2021",
      titulo: "Programa PEAC",
      lugar: "PEAC Madrid Oeste",
      detalle: "Alumni en la actualidad.",
    },
  ] satisfies Hito[],

  cursos: [
    {
      periodo: "Junio a octubre de 2025",
      titulo: "Producción y estrategia de contenidos para plataformas OTT",
      lugar: "RTVE",
    },
    {
      periodo: "Octubre de 2024 a agosto de 2025",
      titulo: "Comunicación, Marketing e Imagen corporativa",
      lugar: "Ayuntamiento de Galapagar",
    },
    {
      periodo: "Octubre y noviembre de 2024",
      titulo: "Inteligencia artificial en medios de comunicación",
      lugar: "RTVE",
    },
  ] satisfies Hito[],

  premios: [{ titulo: "Primer premio del Ideathon de Innovación", lugar: "Universidad Rey Juan Carlos" }],

  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "C1" },
    { idioma: "Catalán", nivel: "B2" },
    { idioma: "Francés", nivel: "B1" },
  ],

  competencias: [
    "Compromiso",
    "Buen trabajo bajo presión",
    "Adaptabilidad",
    "Visión crítica y creativa",
    "Gestión eficaz del tiempo",
    "Habilidades sociales",
  ],

  aficiones: [
    "Artes marciales: cinturón marrón de judo y azul de taekwondo",
    "Aprender",
    "Viajar",
    "Naturaleza",
  ],
};
