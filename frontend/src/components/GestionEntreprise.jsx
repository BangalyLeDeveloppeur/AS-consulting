import React from "react";
import Brochure from "../assets/image/Brochure.png";

const GestionEntreprise = () => {
  return (
    <div>
      <h1>Le bon statut, les bonnes décisions, le bon départ</h1>
      <img src={Brochure} alt="livre" />
      <p>
        AS-Consulting vous accompagne dès la création de votre entreprise en
        simplifiant le choix du statut juridique et les formalités
        administratives. Grâce à notre expertise, vous démarrez rapidement,
        évitez les erreurs coûteuses et lancez votre activité sur des bases
        solides.
      </p>
      <button className="btn-nous">Prendre rendez-vous</button>
    </div>
  );
};

export default GestionEntreprise;
