import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo-head";

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        meta={{
          title: "Página no encontrada | Lara Feijóo",
          description: "La página solicitada no está disponible.",
          canonical: `${window.location.origin}${window.location.pathname}`,
        }}
      />
      <main className="section-shell min-h-[60vh] flex items-center">
        <section className="section-inner max-w-2xl" aria-labelledby="not-found-title">
          <p className="eyebrow mb-4">404</p>
          <h1 id="not-found-title" className="display-headline text-5xl md:text-6xl">
            Página no encontrada
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="px-5 py-3 bg-primary text-primary-foreground font-medium">
              Volver a Inicio
            </Link>
            <Link to="/trabajo" className="px-5 py-3 border border-foreground/30 font-medium">
              Ver trabajo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
