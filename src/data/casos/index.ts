import { brujaRoja } from "./bruja-roja";
import { iberia } from "./iberia";
import { marrones } from "./marrones";
import { santander } from "./santander";
import { studIa } from "./stud-ia";
import { talixea } from "./talixea";
import type { CasoCompleto } from "./tipos";
import { warriorsArena } from "./warriors-arena";

export type { CasoCompleto } from "./tipos";

export const casos: Record<string, CasoCompleto> = Object.fromEntries(
  [studIa, talixea, santander, iberia, brujaRoja, warriorsArena, ...marrones].map((c) => [c.slug, c]),
);
