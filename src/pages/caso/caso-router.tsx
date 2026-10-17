import { useParams } from "react-router-dom";
import { casos } from "@/data/casos";
import { CaseStudyPage } from "@/pages/case-study-page";
import { CasoPage } from "./caso-page";

// Los casos migrados usan la plantilla nueva; el resto, la página anterior
// hasta que se rehagan.
export function CasoRouter() {
  const { slug = "" } = useParams();
  const caso = casos[slug];
  return caso ? <CasoPage caso={caso} /> : <CaseStudyPage />;
}
