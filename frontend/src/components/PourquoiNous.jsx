import React from "react";
import { Link } from "react-router-dom";
import femmmeSourientes from "../assets/image/Femmes.webp";

const PourquoiNous = () => {
  return (
    <div className="card cdrNous">
      <h1>Pourquoi nous choisir</h1>
      <section className="choix">
        <div className="choix-texte">
          <h2>Un service comptable et fiscal de qualité</h2>
          <p>
            Au-delà des chiffres, AS-Consulting est un cabinet d’expertise{" "}
            <br />
            comptable qui place l’humain au cœur de son accompagnement <br />
            et se consacre pleinement à la réussite de ses clients.
          </p>

          <h3>Meilleur service comptable</h3>
          <p>
            Libérez-vous des contraintes comptables: Notre service de tenue{" "}
            <br /> de livres assure une gestion claire, fiable et sans stress.
          </p>
          <h3>Meilleur service comptable</h3>
          <p>
            Nous produisons des documents comptables de haute qualité pour
            accompagner votre croissance et vos ambitions entrepreneuriales.
          </p>
          <Link to="/form">
            <button className="savoirPlus rendezVous">Prendre rendez-vous</button>
          </Link>
        </div>
        <div>
          <img src={femmmeSourientes} alt="femme sourinets au bureau" />
        </div>
      </section>
    </div>
  );
};

export default PourquoiNous;
