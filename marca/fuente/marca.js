// Piezas comunes del kit: el monograma y el titular que se ajusta solo a su caja.

// Monograma «LF»: letras dibujadas a mano y un cinturón marrón que sale de detrás de la L
// y se ata a la F, donde hace de brazo central. Se dibuja en SVG para no depender de la fuente.
// Con la clase mono--tinta sale a un solo color (útil para sellos y fondos oscuros).
const L = "M15 10h18v62h19v18H15z";
const F = "M57 10h36v17H75v63H57z";
let monos = 0;

function monograma() {
  const id = `mono-hueco-${++monos}`;
  return `
<svg class="mono__svg" viewBox="0 0 100 100" aria-hidden="true">
  <mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
    <rect width="100" height="100" fill="#fff"/>
    <path d="${L}" fill="#000" stroke="#000" stroke-width="5" stroke-linejoin="miter"/>
  </mask>
  <g class="mono__obi" mask="url(#${id})">
    <g transform="rotate(-3 60 50)">
      <path d="M22 44H90L88 55H22Z"/>
      <path class="mono__pespunte" d="M22 47.6h67M22 51.4h66"/>
    </g>
  </g>
  <path class="mono__letras" d="${L}${F}"/>
</svg>`;
}

document.querySelectorAll(".mono").forEach((m) => {
  m.insertAdjacentHTML("beforeend", monograma());
  m.setAttribute("role", "img");
  m.setAttribute("aria-label", "Monograma de Lara Feijóo");
});

// Un titular con data-ajustar crece hasta llenar su caja sin desbordarla,
// así la plantilla aguanta titulares cortos y largos sin tocar el CSS.
function ajustar(el) {
  const caja = el.parentElement;
  let min = 40;
  let max = Number(el.dataset.ajustar) || 260;
  while (max - min > 1) {
    const t = (min + max) / 2;
    el.style.fontSize = `${t}px`;
    const cabe = el.scrollWidth <= caja.clientWidth && el.offsetHeight <= caja.clientHeight;
    if (cabe) min = t;
    else max = t;
  }
  el.style.fontSize = `${min}px`;
}

// Con un interlineado tan apretado, el fondo de cada línea taparía las letras de la de
// arriba. Por eso el fondo va en una copia invisible del titular, debajo del texto.
function capaDeFondo(el) {
  const capa = el.cloneNode(true);
  capa.removeAttribute("data-ajustar");
  capa.classList.add("titular--fondo");
  capa.setAttribute("aria-hidden", "true");
  el.classList.add("titular--texto");
  if (getComputedStyle(el.parentElement).position === "static") {
    el.parentElement.style.position = "relative";
  }
  el.after(capa);
  return capa;
}

document.fonts.ready.then(() => {
  document.querySelectorAll("[data-ajustar]").forEach((el) => {
    ajustar(el);
    if (el.hasAttribute("data-fondo")) {
      const capa = capaDeFondo(el);
      capa.style.fontSize = el.style.fontSize;
      capa.style.top = `${el.offsetTop}px`;
      capa.style.left = `${el.offsetLeft}px`;
      capa.style.width = `${el.offsetWidth}px`;
    }
  });
  document.body.dataset.listo = "1";
});
