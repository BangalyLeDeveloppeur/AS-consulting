import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import { ContentProvider } from "../admin/components/Context.jsx";

const Home           = lazy(() => import("../pages/Home.jsx"));
const PageApropos    = lazy(() => import("../pages/PageApropos.jsx"));
const PageGestion    = lazy(() => import("../pages/PageGestionComptable.jsx"));
const PageEntreprise = lazy(() => import("../pages/PageEntreprise.jsx"));
const ConseilFiscal  = lazy(() => import("../pages/ConseilFiscal.jsx"));
const ConseilGestion = lazy(() => import("../pages/ConseilGestion.jsx"));
const PageFormation  = lazy(() => import("../pages/pageFormaiton.jsx"));
const PageContact    = lazy(() => import("../pages/PageContact.jsx"));

const Login        = lazy(() => import("../admin/components/Login.jsx"));
const HomeAdmin    = lazy(() => import("../admin/pagesAdmin/HomeAdmin.jsx"));
const AproposAdmin = lazy(() => import("../admin/pagesAdmin/AproposAdmin.jsx"));

function PageLoader() {
  return <div className="page-loader" />;
}

export default function Router() {
  return (
    <ContentProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
          <Route path="apropos"      element={<Suspense fallback={<PageLoader />}><PageApropos /></Suspense>} />
          <Route path="comptabilite" element={<Suspense fallback={<PageLoader />}><PageGestion /></Suspense>} />
          <Route path="fiscal"       element={<Suspense fallback={<PageLoader />}><ConseilFiscal /></Suspense>} />
          <Route path="entreprise"   element={<Suspense fallback={<PageLoader />}><PageEntreprise /></Suspense>} />
          <Route path="conseil"      element={<Suspense fallback={<PageLoader />}><ConseilGestion /></Suspense>} />
          <Route path="formation"    element={<Suspense fallback={<PageLoader />}><PageFormation /></Suspense>} />
          <Route path="form"         element={<Suspense fallback={<PageLoader />}><PageContact /></Suspense>} />
        </Route>

        <Route path="/admin"                        element={<Suspense fallback={<PageLoader />}><Login /></Suspense>} />
        <Route path="/admin/pageadmin/homeadmin"    element={<Suspense fallback={<PageLoader />}><HomeAdmin /></Suspense>} />
        <Route path="/admin/pageadmin/aproposadmin" element={<Suspense fallback={<PageLoader />}><AproposAdmin /></Suspense>} />
      </Routes>
    </ContentProvider>
  );
}