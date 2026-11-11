import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/scroll-progress";
import { contarPagina } from "@/lib/visitas";

const TrabajoPage = lazy(() =>
  import("@/pages/trabajo/trabajo-page").then(({ TrabajoPage }) => ({ default: TrabajoPage })),
);
const SobrePage = lazy(() =>
  import("@/pages/sobre/sobre-page").then(({ SobrePage }) => ({ default: SobrePage })),
);
const CasoRouter = lazy(() =>
  import("@/pages/caso/caso-router").then(({ CasoRouter }) => ({ default: CasoRouter })),
);
// Hoja de la firma: solo en local (npm run dev), no se publica.
const FirmaPage = import.meta.env.DEV
  ? lazy(() => import("@/pages/firma/firma-page").then(({ FirmaPage }) => ({ default: FirmaPage })))
  : null;
// Piezas de LinkedIn (banner y posts): solo en local, no se publican.
const MarcaPage = import.meta.env.DEV
  ? lazy(() => import("@/pages/marca/marca-page").then(({ MarcaPage }) => ({ default: MarcaPage })))
  : null;
const MinutoPage = lazy(() =>
  import("@/pages/minuto/minuto-page").then(({ MinutoPage }) => ({ default: MinutoPage })),
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
        {MarcaPage && (
          <Route
            path="/marca/:pieza"
            element={
              <Suspense fallback={null}>
                <MarcaPage />
              </Suspense>
            }
          />
        )}
        {FirmaPage && (
          <Route
            path="/firma"
            element={
              <Suspense fallback={null}>
                <FirmaPage />
              </Suspense>
            }
          />
        )}
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </HashRouter>
  );
}

function MainLayout() {
  const { pathname } = useLocation();
  // El barrido no se ve al entrar en la web, solo al cambiar de pantalla.
  const anterior = useRef(pathname);
  const [barrido, setBarrido] = useState(0);
  // Cada pantalla cuenta como una visita (el título lo pone la página al cargar, por eso se espera un poco).
  useEffect(() => {
    const t = window.setTimeout(() => contarPagina(pathname, document.title), 800);
    return () => window.clearTimeout(t);
  }, [pathname]);
  useEffect(() => {
    if (anterior.current === pathname) return;
    anterior.current = pathname;
    window.scrollTo(0, 0);
    setBarrido((n) => n + 1);
  }, [pathname]);
  return (
    <div className="dojo min-h-screen">
      <ScrollProgress />
      {barrido > 0 && <div className="barrido" key={barrido} aria-hidden="true" />}
      <SiteHeader />
      <div id="contenido" tabIndex={-1}>
        <AppErrorBoundary>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<InicioPage />} />
              <Route path="/trabajo" element={<TrabajoPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/sobre-mi" element={<SobrePage />} />
              {/* En voz alta se quitó (menos es más): sus enlaces llevan a la portada. La página sigue en
                  src/pages/sobre/notas-page.tsx por si vuelve. */}
              <Route path="/en-voz-alta" element={<Navigate to="/" replace />} />
              <Route path="/notas" element={<Navigate to="/" replace />} />
              <Route path="/trabajo/:slug" element={<CasoRouter />} />
              <Route path="/minuto" element={<MinutoPage />} />
              <Route path="/cv" element={<CvPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AppErrorBoundary>
      </div>
    </div>
  );
}

export default App;
