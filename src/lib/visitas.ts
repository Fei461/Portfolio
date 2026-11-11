// Contador de visitas sin cookies (GoatCounter, https://www.goatcounter.com).
// No guarda cookies ni datos personales: cuenta páginas, de dónde llega la gente, el tipo de dispositivo,
// el país y lo que se toca. No hace falta aviso de cookies.
//
// Para activarlo: crear la cuenta en goatcounter.com y poner aquí su código (lo que va antes de .goatcounter.com).
// Mientras esté vacío, no se cuenta nada. En local (npm run dev) tampoco se cuenta.
const CODIGO = "larafeijoo";

type Visita = { path: string; title?: string; event?: boolean };
type GoatCounter = { count: (v: Visita) => void };
declare global {
  interface Window {
    goatcounter?: GoatCounter & { no_onload?: boolean };
  }
}

const activo = Boolean(CODIGO) && import.meta.env.PROD;
const pendientes: Visita[] = [];

function enviar(v: Visita) {
  if (!activo) return;
  if (window.goatcounter?.count) window.goatcounter.count(v);
  else pendientes.push(v);
}

/** Una página vista: la ruta, sin parámetros. */
export function contarPagina(ruta: string, titulo: string) {
  enviar({ path: ruta, title: titulo });
}

/** Algo que se ha tocado: «Descarga del CV», «Pestaña · Stud-IA · Me llevo»… */
export function contarEvento(nombre: string) {
  enviar({ path: nombre.slice(0, 120), title: nombre.slice(0, 120), event: true });
}

const texto = (el: Element) => (el.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 60);

/** Escucha los clics de toda la web y cuenta los que dicen algo. */
function escucharClics() {
  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as Element | null)?.closest("a, button");
      if (!el) return;
      const ruta = location.hash.replace(/^#/, "").split("?")[0] || "/";

      const propio = el.getAttribute("data-evento");
      if (propio) return contarEvento(propio);

      if (el.getAttribute("role") === "tab") {
        return contarEvento(`Pestaña · ${ruta} · ${texto(el).replace(/^\d+\s*/, "")}`);
      }

      if (el instanceof HTMLAnchorElement) {
        const href = el.getAttribute("href") ?? "";
        if (href.startsWith("mailto:")) return contarEvento("Escribir por correo");
        if (el.hasAttribute("download") || href.endsWith(".pdf")) return contarEvento("Descarga del CV");
        if (el.host && el.host !== location.host) {
          const destino = `${el.host.replace(/^www\./, "")}${el.pathname.split("/").slice(0, 2).join("/")}`;
          return contarEvento(`Sale a · ${destino} · desde ${ruta}`);
        }
      }
    },
    { capture: true },
  );
}

/** Carga el contador una sola vez, al arrancar la web. */
export function iniciarVisitas() {
  if (!activo) return;
  // ?soyyo en la dirección: este navegador deja de contar (para no contarse una misma).
  if (new URLSearchParams(location.search).has("soyyo")) {
    try {
      localStorage.setItem("skipgc", "t");
    } catch {
      /* sin almacenamiento, no pasa nada */
    }
  }
  window.goatcounter = { ...(window.goatcounter ?? {}), no_onload: true } as Window["goatcounter"];
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = `https://${CODIGO}.goatcounter.com/count`;
  s.dataset.goatcounterSettings = JSON.stringify({ no_onload: true });
  s.onload = () => pendientes.splice(0).forEach((v) => window.goatcounter?.count(v));
  document.head.appendChild(s);
  escucharClics();
}
