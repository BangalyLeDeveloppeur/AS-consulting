import React from "react";
import Slide from "../components/Slide.jsx";
import Services from "../components/Services.jsx";
import PourquoiNous from "../components/PourquoiNous.jsx";


const Home = () => {
  return (
    <div className="homeContenair">
      <Slide />
      <Services />
      <PourquoiNous />
    </div>
  );
};

export default Home;
