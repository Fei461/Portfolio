// Trae a la web el texto de mis publicaciones de LinkedIn a partir de su enlace.
//
//   node scripts/notas-linkedin.mjs                       → completa las que aún no tienen texto
//   node scripts/notas-linkedin.mjs <enlace> <tema> [título] → añade una nueva y la completa
//   (con NOTA_TEXTO=… se usa ese texto en vez de leerlo de LinkedIn)
//
// Los datos viven en src/data/notas-linkedin.json. LinkedIn no deja leer el perfil sin
// iniciar sesión, pero cada publicación pública sí se puede leer por su enlace.
import { readFile, writeFile } from "node:fs/promises";

const archivo = new URL("../src/data/notas-linkedin.json", import.meta.url);
const temas = ["Prácticas", "Proyectos", "Marcas", "Comportamiento", "Aprendizaje"];

const lista = JSON.parse(await readFile(archivo, "utf8"));
const [enlace, tema, titulo] = process.argv.slice(2);

if (enlace) {
  if (!/^https:\/\/([a-z]+\.)?linkedin\.com\/(posts|feed\/update)\//.test(enlace)) {
    throw new Error(`No parece el enlace de una publicación de LinkedIn: ${enlace}`);
  }
  if (!temas.includes(tema)) throw new Error(`El tema tiene que ser uno de estos: ${temas.join(", ")}`);
  const limpio = enlace.split("?")[0];
  if (!lista.some((n) => n.url === limpio)) {
    // Si LinkedIn no deja leerla, vale con pegar el texto (variable NOTA_TEXTO).
    const pegado = process.env.NOTA_TEXTO?.trim() ? parrafos(process.env.NOTA_TEXTO) : undefined;
    lista.push({ url: limpio, categoria: tema, ...(titulo ? { titulo } : {}), ...(pegado ? { texto: pegado } : {}) });
    if (pegado && !titulo) lista.at(-1).titulo = pegado[0].slice(0, 80);
  }
}

// Párrafos tal y como los escribo: cada salto de línea es un párrafo. Fuera hashtags y enlaces acortados.
function parrafos(texto) {
  return texto
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.replace(/\s*\(?https?:\/\/lnkd\.in\/\S+?\)?(?=[\s.,;]|$)/g, "").trim())
    .filter((l) => l && !/^(#\S+\s*)+$/.test(l) && !/^hashtag/i.test(l));
}

async function leer(url) {
  const r = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36",
      "accept-language": "es-ES,es;q=0.9",
    },
    redirect: "follow",
  });
  if (!r.ok) throw new Error(`LinkedIn respondió ${r.status} para ${url}`);
  const html = await r.text();
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let d;
    try {
      d = JSON.parse(json);
    } catch {
      continue;
    }
    if (d["@type"] === "SocialMediaPosting" && d.articleBody) {
      return { texto: parrafos(d.articleBody), fecha: d.datePublished?.slice(0, 10), titular: d.headline };
    }
  }
  throw new Error(`No he encontrado el texto de ${url} (¿es pública?)`);
}

let cambios = 0;
for (const nota of lista) {
  if (nota.texto?.length) continue;
  const { texto, fecha, titular } = await leer(nota.url);
  nota.texto = texto;
  if (fecha) nota.fecha = fecha;
  if (!nota.titulo) nota.titulo = (titular || texto[0]).replace(/\s*\.\.\.$/, "").slice(0, 80);
  cambios++;
  console.log(`✓ ${nota.titulo} (${nota.fecha ?? "sin fecha"}, ${texto.length} párrafos)`);
}

await writeFile(archivo, JSON.stringify(lista, null, 2) + "\n");
console.log(cambios ? `${cambios} nota(s) nuevas.` : "No había nada nuevo.");
