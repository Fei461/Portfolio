import { Component, lazy, Suspense, type ErrorInfo, type ReactNode } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";

const TrabajoPage = lazy(() =>
  import("@/pages/trabajo/trabajo-page").then(({ TrabajoPage }) => ({ default: TrabajoPage })),
);
const SobrePage = lazy(() =>
  import("@/pages/sobre/sobre-page").then(({ SobrePage }) => ({ default: SobrePage })),
);
const NotasPage = lazy(() =>
  import("@/pages/sobre/notas-page").then(({ NotasPage }) => ({ default: NotasPage })),
);
const CasoRouter = lazy(() =>
  import("@/pages/caso/caso-router").then(({ CasoRouter }) => ({ default: CasoRouter })),
);
const CvPage = lazy(() =>
  import("@/pages/sobre/cv-page").then(({ CvPage }) => ({ default: CvPage })),
);
const InicioPage = lazy(() =>
  import("@/pages/inicio/inicio-page").then(({ InicioPage }) => ({ default: InicioPage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/not-found-page").then(({ NotFoundPage }) => ({ default: NotFoundPage })),
);

function PageLoading() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center bg-background px-8"
      aria-busy="true"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
        Cargando portfolio...
      </p>
    </main>
  );
}

type AppErrorBoundaryProps = { children: ReactNode };
type AppErrorBoundaryState = { hasError: boolean };

class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // The recovery UI below intentionally avoids exposing implementation details.
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-[60vh] items-center justify-center bg-background px-8 text-center">
          <div>
            <p className="font-serif text-2xl text-foreground">
              No se ha podido cargar el portfolio.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 border border-foreground/30 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Recargar página
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/prototipo" element={<Navigate to="/" replace />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </HashRouter>
  );
}

// Las pantallas del dojo (portada, proyectos y casos) caben enteras en la ventana;
// el pie solo acompaña a las páginas de lectura.
const conPie = ["/notas", "/cv"];

function MainLayout() {
  const { pathname } = useLocation();
  return (
    <div className="dojo min-h-screen">
      <ScrollProgress />
      <SiteHeader />
      <div id="contenido" tabIndex={-1}>
        <AppErrorBoundary>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<InicioPage />} />
              <Route path="/trabajo" element={<TrabajoPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/sobre-mi" element={<SobrePage />} />
              <Route path="/notas" element={<NotasPage />} />
              <Route path="/trabajo/:slug" element={<CasoRouter />} />
              <Route path="/cv" element={<CvPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AppErrorBoundary>
      </div>
      {conPie.includes(pathname) && <SiteFooter />}
    </div>
  );
}

export default App;
