import React from "react";
import AdminLayout from "../layout/AdminLayout";
import AdSlide from "../components/adSlide";
import Services from "../components/Services";

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
