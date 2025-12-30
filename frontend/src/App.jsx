import React from "react";
import Router from "./routes/Router";
import CookieBanner from "../src/components/CookieBanner.jsx";

export default function App() {
  return (
    <>
      <CookieBanner />
      <Router />;
    </>
  );
}
