import { useEffect, useState, type RefObject } from "react";

// Cuando una tarjeta tiene más texto del que cabe, el final se difumina y aparece
// un aviso para seguir leyendo. Si ya se ve todo, no se muestra nada.
export function Sigue({ panel, clave }: { panel: RefObject<HTMLElement | null>; clave: string }) {
  const [hayMas, setHayMas] = useState(false);

  useEffect(() => {
    const el = panel.current;
    if (!el) return;
    const medir = () => {
      const mas = el.scrollHeight - el.clientHeight - el.scrollTop > 24;
      setHayMas(mas);
      el.classList.toggle("asalto--sigue", mas);
    };
    medir();
    const t = window.setTimeout(medir, 600);
    el.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    const obs = new ResizeObserver(medir);
    obs.observe(el);
    if (el.firstElementChild) obs.observe(el.firstElementChild);
    return () => {
      window.clearTimeout(t);
      el.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
      obs.disconnect();
      el.classList.remove("asalto--sigue");
    };
  }, [panel, clave]);

  if (!hayMas) return null;
  return (
    <button
      type="button"
      className="sigue"
      onClick={() => panel.current?.scrollBy({ top: panel.current.clientHeight * 0.7, behavior: "smooth" })}
    >
      Sigue leyendo <span aria-hidden="true">↓</span>
    </button>
  );
}
