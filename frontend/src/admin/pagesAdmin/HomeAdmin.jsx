import React from "react";
import AdminLayout from "../layout/AdminLayout";
import AdSlide from "../components/AdSlide.jsx";
import Services from "../components/Services.jsx";

const HomeAdmin = () => {
  return (
    <div>
      <AdminLayout />
      <AdSlide />
      <Services />
    </div>
  );
};

export default HomeAdmin;
