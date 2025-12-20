import React from "react";
import NousImg from "../assets/image/Black White Bold Modern Studio Logo (1) 1.png"

const QuiSomme = () => {
  return (
    <div>
      <h1>Apropos de nous</h1>
      <div>
        <p>
          AS-Consulting est un cabinet fiscal et financier ouvert depuis janvier
          2020. Il propose à une clientèle exigeante des services spécialisés et
          hautement qualifiés dans les domaines de la fiscalité et de la
          planification financière. Nos collaborateurs analysent en profondeur
          chaque situation fiscale et patrimoniale afin de proposer des conseils
          personnalisés et des solutions adaptées. Nous offrons également
          l’avantage d’un accompagnement en français, en anglais et en langues
          nationales.
        </p>
         <button className="btn-nous">Prendre rendez-vous</button>
      </div>
<img src={NousImg} alt="" />
    </div>
  );
};

export default QuiSomme;
