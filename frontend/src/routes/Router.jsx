import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//import AdminHome from "../admin/pagesAdmin/adminHome.jsx";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../admin/components/Login.jsx";
import PageApropos from "../pages/PageApropos.jsx";
import PageGestionComptable from "../pages/PageGestionComptable.jsx";
import PageEntreprise from "../pages/PageEntreprise.jsx";
import ConseilFiscal from "../pages/ConseilFiscal.jsx";
import ConseilGestion from "../pages/ConseilGestion.jsx";
import PageFormaiton from "../pages/pageFormaiton.jsx";
import PageContact from "../pages/PageContact.jsx";
import { ContentProvider } from "../admin/components/Context.jsx";

export default function Router() {
  return (
    <ContentProvider>
     

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Apropos" element={<PageApropos />} />
          <Route path="comptabilite" element={<PageGestionComptable />} />
          <Route path="fiscal" element={<ConseilFiscal />} />
          <Route path="entreprise" element={<PageEntreprise />} />
          <Route path="conseil" element={<ConseilGestion />} />
          <Route path="formation" element={<PageFormaiton />} />
          <Route path="form" element={<PageContact />} />
          {/* Route pour la page admin accueil*/}
          <Route path="admin" element={<Login />} />
        </Route>
      </Routes>

      
    </ContentProvider>
  );
}
