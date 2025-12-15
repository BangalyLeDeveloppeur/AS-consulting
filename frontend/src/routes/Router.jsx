import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import AdminHome from "../admin/pagesAdmin/adminHome.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element ={<AdminHome />} />
      </Route>
    </Routes>
  );
}
