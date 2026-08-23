import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function PageLoading() {
  return <main className="min-h-[60vh] bg-background" aria-busy="true" />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <SiteHeader />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trabajo" element={<TrabajoPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/notas" element={<NotasPage />} />
            <Route path="/trabajo/talixea" element={<TalixeaPage />} />
            <Route path="/trabajo/:slug" element={<CaseStudyPage />} />
            <Route path="/cv" element={<CvPage />} />
          </Routes>
        </Suspense>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
