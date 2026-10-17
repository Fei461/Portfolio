import { brujaRoja } from "./bruja-roja";
import { iberia } from "./iberia";
import { verdes } from "./verdes";
import { santander } from "./santander";
import { studIa } from "./stud-ia";
import { talixea } from "./talixea";
import type { CasoCompleto } from "./tipos";
import { warriorsArena } from "./warriors-arena";

export type { CasoCompleto } from "./tipos";

export const casos: Record<string, CasoCompleto> = Object.fromEntries(
  [studIa, talixea, santander, iberia, brujaRoja, warriorsArena, ...verdes].map((c) => [c.slug, c]),
);
