import { useEffect } from "react";
import {
  CabeceraGrado,
  CasosBlancos,
  CasosMarrones,
  CasosNegros,
} from "@/components/cinturones";
import { proyectos } from "@/data/proyectos";

export function TrabajoPage() {
  useEffect(() => {
    document.title = "Proyectos de Lara Feijóo";
  }, []);

  return (
    <main className="dojo-seccion trabajo">
      <h1 className="trabajo-titulo">Proyectos</h1>
      <p className="dojo-entradilla">
        {proyectos.length} trabajos ordenados como en el dojo: por el grado que demuestran. Los de
        cinturón negro están en el orden en que te los enseñaría en una entrevista.
      </p>

      <section className="dojo-grado" aria-label="Cinturón negro">
        <CabeceraGrado cinturon="negro" as="h2" />
        <CasosNegros titulo="h3" />
      </section>

      <section className="dojo-grado" aria-label="Cinturón marrón">
        <CabeceraGrado cinturon="marron" as="h2" />
        <CasosMarrones conTipo />
      </section>

      <section className="dojo-grado" aria-label="Cinturón blanco">
        <CabeceraGrado cinturon="blanco" as="h2" />
        <CasosBlancos detalle />
      </section>

      <p className="trabajo-proximo">
        En camino: Pluvielle, una marca de lujo del máster, en cuanto entregue su plan de medios.
      </p>
    </main>
  );
}
