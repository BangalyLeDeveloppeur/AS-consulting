import React from "react";
import feuilleMain from "../assets/image/main.png";

const Apropos = () => {
  return (
    <div>
      <div className="cadreParagraphe">
        <h1>
          Des documents comptables fiables pour soutenir la réussite de votre
          entreprise.
        </h1>
      </div>
      <img src={feuilleMain} alt="les feuiles deans les mains" />
    </div>
  );
};

export default Apropos;
