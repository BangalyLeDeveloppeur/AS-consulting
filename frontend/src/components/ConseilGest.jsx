import React from "react";
import { Link } from "react-router-dom";
import Hommes from "../assets/image/hommes.webp";

const ConseilGest = () => {
  return (
    <div className="Compta">
      <div className="cadreParagraphe comp">
        <h1>
          Gestion de patrimoine & protection de votre patrimoine : Sécurité et
          croissance sur le long terme
        </h1>
      </div>
      <img src={Hommes} alt="Des hommes a table" />
      <h2>Conseil en gestion</h2>
      <div className="gestion">
        <p>
          Chez As-consulting, nous comprenons que la réussite de votre
          entreprise est indissociable de la construction et de la protection de
          votre patrimoine personnel. <br /> Nous vous accompagnons au-delà du
          cadre purement entrepreneurial pour sécuriser et faire fructifier
          l'ensemble de vos actifs, avec une vision globale et une stratégie sur
          mesure.
        </p>
      </div>
      <div className="conseilGestion">
        <Link to="/form">
          <button className="btn-nous bt">Prendre rendez-vous</button>
        </Link>
      </div>
    </div>
  );
};

export default ConseilGest;
