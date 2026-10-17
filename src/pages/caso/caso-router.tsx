import { useParams } from "react-router-dom";
import { casos } from "@/data/casos";
import { NotFoundPage } from "@/pages/not-found-page";
import { CasoPage } from "./caso-page";

export function CasoRouter() {
  const { slug = "" } = useParams();
  const caso = casos[slug];
  return caso ? <CasoPage caso={caso} /> : <NotFoundPage />;
}
