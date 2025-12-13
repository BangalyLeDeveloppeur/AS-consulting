import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
