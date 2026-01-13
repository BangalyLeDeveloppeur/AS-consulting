import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import AdminHome from "../admin/pagesAdmin/adminHome.jsx";
import PageApropos from "../pages/PageApropos.jsx";
import PageGestionComptable from "../pages/PageGestionComptable.jsx";
import PageEntreprise from "../pages/PageEntreprise.jsx";
import ConseilFiscal from "../pages/ConseilFiscal.jsx";
import ConseilGestion from "../pages/ConseilGestion.jsx";
import PageFormaiton from "../pages/pageFormaiton.jsx";
import PageContact from "../pages/PageContact.jsx";

export default function Router() {
  return (
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
        <Route path="admin" element={<AdminHome />} />
      </Route>
    </Routes>
  );
}
