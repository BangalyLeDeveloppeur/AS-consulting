import React from "react";
import { Link } from "react-router-dom";
import NousImg from "../assets/image/FeuileCalcule.webp";

const QuiSomme = () => {
  return (
    <div className="apropos">
      <h1>Apropos de nous</h1>
      <article className="aproposParagraphe">
        <div>
          <p>
            AS-Consulting est un cabinet fiscal et financier ouvert depuis
            janvier 2020. Il propose à une clientèle exigeante des services
            spécialisés et hautement qualifiés dans les domaines de la fiscalité
            et de la planification financière. <br /> Nos collaborateurs
            analysent en profondeur chaque situation fiscale et patrimoniale
            afin de proposer des conseils personnalisés et des solutions
            adaptées. <br /> Nous offrons également l’avantage d’un
            accompagnement en français, en anglais et en langues nationales.
          </p>
          <Link to="/form">
            <button className="btn-nous prendreRendeVous">Prendre rendez-vous</button>
          </Link>
        </div>
        <img src={NousImg} alt="main sur ordinateur" />
      </article>
    </div>
  );
};

export default QuiSomme;
