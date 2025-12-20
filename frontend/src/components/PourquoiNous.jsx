import React from "react";
import femmmeSourientes from "../assets/image/Femmes.png";

const PourquoiNous = () => {
  return (
    <div>
      <div>
        <h1>
          Nous fournissons un service comptable et fiscal de haute qualité
        </h1>
        <p>
          Au-delà des chiffres, AS Consulting est un cabinet d’expertise
          comptable qui place l’humain au cœur de son accompagnement et se
          consacre pleinement à la réussite de ses clients.
        </p>

        <h2>Meilleur service comptable</h2>
        <p>
          Libérez-vous des contraintes comptables : notre service de tenue de
          livres assure une gestion claire, fiable et sans stress
        </p>
        <h3>Meilleur service comptable</h3>
        <p>
          Nous produisons des documents comptables de haute qualité pour
          accompagner votre croissance et vos ambitions entrepreneuriales.
        </p>
      </div>
      <div>
        <img src={femmmeSourientes} alt="femme sourinets au bureau" />
      </div>
    </div>
  );
};

export default PourquoiNous;
