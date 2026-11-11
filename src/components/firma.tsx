import { useId } from "react";
import { FajasObi, NudoObi } from "@/components/judogi";
import "./firma.css";

// El símbolo de Lara: el nudo de su cinturón marrón, el mismo dibujo que llevan los judogis del portfolio,
// con FEIJÓO bordado en una punta. La firma es su nombre con la letra de la portada (clase firma__nombre).

/** El nudo: foto de perfil, marca de agua del CV. Nunca pegado al nombre. */
export function Nudo({ className, titulo }: { className?: string; titulo?: string }) {
  const id = `nudo-${useId().replace(/:/g, "")}`;
  return (
    <svg
      className={className}
      viewBox="95 201 170 104"
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <FajasObi id={id} />
      <NudoObi id={id} />
    </svg>
  );
}
