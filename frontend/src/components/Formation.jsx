import React from "react";
import styloImg from "../assets/image/Calculatrice.png";
const Formation = () => {
  return (
    <div>
      <div>
        <h1>Notre Expertise au Service de Votre Performance</h1>
        <img src={styloImg} alt="style sur la feuille" />
      </div>
      <p>
        Chez AS-consulting, nous croyons que la performance financière passe
        aussi par la maîtrise de vos outils et la montée en compétence de vos
        équipes. Nous ne nous contentons pas de vous fournir des chiffres ; nous
        vous donnons les clés pour les comprendre et les exploiter au quotidien.
        Les outils comptables et de gestion (logiciels de paie, ERP, tableaux de
        bord) ne doivent pas être une source de complexité. Nous les rendons
        accessibles et utiles pour tous les membres de votre organisation.
      </p>
      <button className="btn-nous">Prendre rendez-vous</button>
    </div>
  );
};

export default Formation;
