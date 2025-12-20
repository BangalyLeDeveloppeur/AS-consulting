import React from "react";
import CalcultriceImg from "../assets/image/Calculatrice.png";
const GestionComptable = () => {
  return (
    <div>
      <div>
        <h1>
          Des documents comptables fiables pour soutenir la réussite de votre
          entreprise.
        </h1>
        <img src={CalcultriceImg} alt="calculatrice sur la table" />
      </div>
      <p>
        Un comptable dédié pour une gestion quotidienne simple, fluide et sans
        stress Vous n’avez plus le temps de gérer la comptabilité au jour le
        jour ? Confiez cette mission à un comptable dédié et concentrez-vous
        enfin sur ce qui fait vraiment grandir votre entreprise. Nous prenons en
        charge l’ensemble de vos opérations comptables quotidiennes :
        enregistrements, classement des pièces, rapprochements bancaires, suivi
        de trésorerie… Tout est géré avec soin, précision et régularité.
        Résultat : une comptabilité toujours à jour, fiable et conforme. Avec
        notre accompagnement, vous gagnez du temps, vous réduisez vos risques
        d’erreurs et vous profitez d’une vision claire de votre activité. Vous
        avancez plus sereinement, avec des chiffres précis pour piloter votre
        entreprise et prendre les bonnes décisions. Votre comptabilité devient
        un atout, plus une contrainte.
      </p>
       <button className="btn-nous">Prendre rendez-vous</button>
    </div>
  );
};

export default GestionComptable;
