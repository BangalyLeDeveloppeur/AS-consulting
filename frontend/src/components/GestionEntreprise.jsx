import React from "react";
import { Link } from "react-router-dom";
import Brochure from "../assets/image/Brochure.webp";

const GestionEntreprise = () => {
  return (
    <div className="Compta">
      <div className="cadreParagraphe comp">
        <h1>Le bon statut, les bonnes décisions, le bon départ</h1>
      </div>
      <img src={Brochure} alt="livre" />
      <h2>Création est gestion d’entreprise</h2>
      <div className="creation-entreprise">
        <p>
          AS-consulting vous accompagne dès la création de votre entreprise en
          simplifiant le choix du statut juridique et les formalités
          administratives. Grâce à notre expertise, vous démarrez rapidement,
          évitez les erreurs coûteuses et lancez votre activité sur des bases
          solides.
        </p>
      </div>
      <div className="gest">
        <Link to= "/form">
        <button className="btn-nous bt ">Prendre rendez-vous</button>
        </Link>
      </div>
    </div>
  );
};

export default GestionEntreprise;
