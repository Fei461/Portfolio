import { studIa } from "./stud-ia";
import type { CasoCompleto } from "./tipos";

export type { CasoCompleto } from "./tipos";

export const casos: Record<string, CasoCompleto> = {
  [studIa.slug]: studIa,
};
