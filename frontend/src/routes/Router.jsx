import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../admin/components/Login.jsx";
import HomeAdmin from "../admin/pagesAdmin/HomeAdmin.jsx";

import PageApropos from "../pages/PageApropos.jsx";
import PageGestionComptable from "../pages/PageGestionComptable.jsx";
import PageEntreprise from "../pages/PageEntreprise.jsx";
import ConseilFiscal from "../pages/ConseilFiscal.jsx";
import ConseilGestion from "../pages/ConseilGestion.jsx";
import PageFormaiton from "../pages/pageFormaiton.jsx";
import PageContact from "../pages/PageContact.jsx";
import AproposAdmin from "../admin/pagesAdmin/AproposAdmin.jsx";

import { ContentProvider } from "../admin/components/Context.jsx";

export default function Router() {
  return (
    <ContentProvider>
      <Routes>
        {/* SITE PUBLIC */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apropos" element={<PageApropos />} />
          <Route path="comptabilite" element={<PageGestionComptable />} />
          <Route path="fiscal" element={<ConseilFiscal />} />
          <Route path="entreprise" element={<PageEntreprise />} />
          <Route path="conseil" element={<ConseilGestion />} />
          <Route path="formation" element={<PageFormaiton />} />
          <Route path="form" element={<PageContact />} />
        </Route>

        {/* LOGIN ADMIN */}
        <Route path="/admin" element={<Login />} />

        <Route path="/admin/pageadmin/homeadmin" element={<HomeAdmin />} />
        <Route
          path="/admin/pageadmin/aproposadmin"
          element={<AproposAdmin />}
        />
      </Routes>
    </ContentProvider>
  );
}
