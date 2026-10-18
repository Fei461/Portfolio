import { brujaRoja } from "./bruja-roja";
import { magicair } from "./magicair";
import { tfgBbva } from "./tfg-bbva";
import { iberia } from "./iberia";
import { verdes } from "./verdes";
import { santander } from "./santander";
import { studIa } from "./stud-ia";
import { talixea } from "./talixea";
import type { CasoCompleto } from "./tipos";
import { warriorsArena } from "./warriors-arena";

export type { CasoCompleto } from "./tipos";

export const casos: Record<string, CasoCompleto> = Object.fromEntries(
  [studIa, tfgBbva, talixea, magicair, santander, iberia, brujaRoja, warriorsArena, ...verdes].map((c) => [c.slug, c]),
);
