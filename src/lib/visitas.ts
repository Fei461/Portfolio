// Contador de visitas sin cookies (GoatCounter, https://www.goatcounter.com). Panel: https://larafeijoo.goatcounter.com
// No guarda cookies ni datos personales: cuenta páginas, de dónde llega la gente, el tipo de dispositivo,
// el país y lo que se toca. No hace falta aviso de cookies.
//
// Las visitas se envían directamente al panel, sin cargar el script de GoatCounter (gc.zgo.at): muchos
// bloqueadores y redes lo cortan, y así el contador funciona igual. En local (npm run dev) no se cuenta nada.
const PANEL = "https://larafeijoo.goatcounter.com/count";

type Visita = { path: string; title?: string; event?: boolean };

const activo = import.meta.env.PROD;

/** Este navegador no cuenta: la propia Lara, tras abrir la web una vez con ?soyyo, o un robot. */
function seSalta() {
  if (navigator.webdriver) return true;
  try {
    return localStorage.getItem("skipgc") === "t";
  } catch {
    return false;
  }
}

/** De dónde llega: ?ref=cv / ?ref=linkedin si viene en el enlace; si no, la página anterior. */
function origen() {
  const q = new URLSearchParams(location.search);
  return q.get("ref") ?? q.get("utm_source") ?? document.referrer;
}

function enviar(v: Visita) {
  if (!activo || seSalta()) return;
  const datos: Record<string, string> = {
    p: v.path,
    t: v.title ?? v.path,
    s: `${screen.width},${screen.height},${window.devicePixelRatio || 1}`,
    rnd: Math.random().toString(36).slice(2),
  };
  if (v.event) datos.e = "true";
  else {
    const r = origen();
    if (r) datos.r = r;
    if (location.search) datos.q = location.search;
  }
  const url = `${PANEL}?${new URLSearchParams(datos)}`;
  if (navigator.sendBeacon?.(url)) return;
  new Image().src = url;
}

/** Una página vista: la ruta, sin parámetros. */
export function contarPagina(ruta: string, titulo: string) {
  enviar({ path: ruta, title: titulo });
}

/** Algo que se ha tocado: «Descarga del CV», «Pestaña · /trabajo/stud-ia · Me llevo»… */
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

/** Se pone en marcha una sola vez, al arrancar la web. */
export function iniciarVisitas() {
  // ?soyyo en la dirección: este navegador deja de contar (para no contarse una misma). Funciona también en local.
  if (new URLSearchParams(location.search).has("soyyo")) {
    try {
      localStorage.setItem("skipgc", "t");
    } catch {
      /* sin almacenamiento, no pasa nada */
    }
  }
  if (activo) escucharClics();
}
