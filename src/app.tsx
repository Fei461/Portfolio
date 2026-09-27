import { Component, lazy, Suspense, type ErrorInfo, type ReactNode } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";

const HomePage = lazy(() =>
  import("@/pages/home-page").then(({ HomePage }) => ({ default: HomePage })),
);
const TrabajoPage = lazy(() =>
  import("@/pages/trabajo-page").then(({ TrabajoPage }) => ({ default: TrabajoPage })),
);
const SobrePage = lazy(() =>
  import("@/pages/sobre-page").then(({ SobrePage }) => ({ default: SobrePage })),
);
const NotasPage = lazy(() =>
  import("@/pages/notas-page").then(({ NotasPage }) => ({ default: NotasPage })),
);
const TalixeaPage = lazy(() =>
  import("@/pages/talixea-page").then(({ TalixeaPage }) => ({ default: TalixeaPage })),
);
const CaseStudyPage = lazy(() =>
  import("@/pages/case-study-page").then(({ CaseStudyPage }) => ({ default: CaseStudyPage })),
);
const CvPage = lazy(() =>
  import("@/pages/cv-page").then(({ CvPage }) => ({ default: CvPage })),
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
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <SiteHeader />
        <AppErrorBoundary>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trabajo" element={<TrabajoPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/sobre-mi" element={<SobrePage />} />
              <Route path="/notas" element={<NotasPage />} />
              <Route path="/trabajo/talixea" element={<TalixeaPage />} />
              <Route path="/trabajo/:slug" element={<CaseStudyPage />} />
              <Route path="/cv" element={<CvPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AppErrorBoundary>
        <SiteFooter />
      </div>
    </HashRouter>
  );
}

export default App;
