import React from "react";
import Hommes from "../assets/image/hommes.png";

const AccFiscale = () => {
  return (
    <div className="con Compta">
      <div className="cadreParagraphe comp ">
        <h1>
          Fiscalité optimisée, déclarations automatisées, protection garantie
          lors des contrôles.
        </h1>
      </div>
      <img src={Hommes} alt="Des hommes a table" />
      <h2>Conseil fiscal</h2>
      <div className="creation-entreprise">
        <p>
          AS-consulting est un cabinet d’accompagnement complet qui prend en
          charge toutes vos obligations fiscales et comptables. Ses services
          incluent : Optimisation fiscale, Déclarations obligatoires (TVA, IS,
          IR), Suivi régulier pour assurer la conformité, Assistance en cas de
          contrôle fiscal. <br /> L’objectif est de simplifier la gestion
          administrative, éviter les erreurs coûteuses, maximiser les avantages
          fiscaux et permettre au dirigeant de se concentrer sur le
          développement de l’entreprise, avec une équipe d’experts à ses côtés.
        </p>
      </div>
      <button className="btn-nous bt">Prendre rendez-vous</button>
    </div>
  );
};

export default AccFiscale;
