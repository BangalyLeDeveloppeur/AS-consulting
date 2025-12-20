import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from "../components/Footer.jsx";



const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;