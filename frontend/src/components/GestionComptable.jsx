import React from "react";
import CalcultriceImg from "../assets/image/Calculatrice.png";
const GestionComptable = () => {
  return (
    <div className="Compta">
      <div className="cadreParagraphe comp">
        <h1>
          Des documents comptables fiables pour soutenir la réussite de votre
          entreprise.
        </h1>
      </div>
      <img src={CalcultriceImg} alt="calculatrice sur la table" />
      <h2>Gestion comptable</h2>
      <div className="gestion">
        <p>
          Un comptable dédié pour une gestion quotidienne simple, fluide et sans
          stress Vous n’avez plus le temps de gérer la comptabilité au jour le
          jour ? Confiez cette mission à un comptable dédié et concentrez-vous
          enfin sur ce qui fait vraiment grandir votre entreprise. <br /> Nous
          prenons en charge l’ensemble de vos opérations comptables quotidiennes
          : enregistrements, classement des pièces, rapprochements bancaires,
          suivi de trésorerie… Tout est géré avec soin, précision et régularité.
          Résultat : une comptabilité toujours à jour, fiable et conforme.{" "}
          <br /> Avec notre accompagnement, vous gagnez du temps, vous réduisez
          vos risques d’erreurs et vous profitez d’une vision claire de votre
          activité. Vous avancez plus sereinement, avec des chiffres précis pour
          piloter votre entreprise et prendre les bonnes décisions. Votre
          comptabilité devient un atout, plus une contrainte.
        </p>
      </div>
      
        <button className="btn-nous bt">Prendre rendez-vous</button>
     
    </div>
  );
};

export default GestionComptable;
