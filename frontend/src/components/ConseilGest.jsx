import React from "react";
import Hommes from "../assets/image/hommes.png";

const ConseilGest = () => {
  return (
    <div>
      <h1>
        Gestion de Patrimoine & Protection de Votre Patrimoine : Sécurité et
        Croissance sur le Long Terme
      </h1>
      <img src={Hommes} alt="Des hommes a table" />
      <p>
        Chez AS-consulting, nous comprenons que la réussite de votre entreprise
        est indissociable de la construction et de la protection de votre
        patrimoine personnel. Nous vous accompagnons au-delà du cadre purement
        entrepreneurial pour sécuriser et faire fructifier l'ensemble de vos
        actifs, avec une vision globale et une stratégie sur mesure.
      </p>
      <button className="btn-nous">Prendre rendez-vous</button>
    </div>
  );
};

export default ConseilGest;
