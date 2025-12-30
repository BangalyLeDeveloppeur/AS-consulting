import React from "react";
import Hommes from "../assets/image/hommes.png";

const ConseilGest = () => {
  return (
    <div className="Compta">
      <div className="cadreParagraphe comp">
        <h1>
          Gestion de Patrimoine & Protection de Votre Patrimoine : Sécurité et
          Croissance sur le Long Terme
        </h1>
      </div>
      <img src={Hommes} alt="Des hommes a table" />
      <h2>Conseil en gestion</h2>
      <div className="gestion">
        <p>
          Chez AS-consulting, nous comprenons que la réussite de votre
          entreprise est indissociable de la construction et de la protection de
          votre patrimoine personnel. <br /> Nous vous accompagnons au-delà du cadre
          purement entrepreneurial pour sécuriser et faire fructifier l'ensemble
          de vos actifs, avec une vision globale et une stratégie sur mesure.
        </p>
      </div>
      <button className="btn-nous bt">Prendre rendez-vous</button>
    </div>
  );
};

export default ConseilGest;
