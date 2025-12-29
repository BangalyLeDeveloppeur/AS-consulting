import React from "react";
import { Link } from "react-router-dom";
import Logofacebook from "../assets/image/logos_facebook.png";
import LogoWhatsapp from "../assets/image/logos_whatsapp-icon.png";
import LogoInsta from "../assets/image/skill-icons_instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Liens rapides */}
        <div className="footer-section">
          <h4>Liens rapides</h4>
          <ul className="liens-rapides">
            <a>
              <li className="liens-rapides">Home</li>
            </a>
            <li className="liens-rapides">A propos</li>
            <li className="liens-rapides">Services</li>
            <li className="liens-rapides">Contact</li>
          </ul>
        </div>
        {/* Adresse */}
        <div className="footer-section">
          <h4>Adresse</h4>
          <ul className="footer-section-adressee">
            <li>Guinée Conakry</li>
            <li>+224-669-03-02-19 <br />+224-612-14-24-24</li>
            <li>Kobayah derière lsa station total</li>
            <li>Info@ASconsulting.com</li>
            <li>Siège Kobayah</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-section">
          <h4>Réseaux sociaux</h4>
          <div className="footer-reseaux">
            <img src={Logofacebook} alt="Facebook" width="30" />
            <img src={LogoWhatsapp} alt="instatgram" width="30" />
            <img src={LogoInsta} alt="instatgram" width="30" />
          </div>
          <Link to={"/Contact"}>
            <button className="savoirPlusF">Contact</button>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>TeraWeb. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
