import React from "react";
import { Link } from "react-router-dom";
import Logofacebook from "../assets/image/logos_facebook.png";
import LogoWhatsapp from "../assets/image/logos_whatsapp-icon.png";
import LogoInsta from "../assets/image/skill-icons_instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns ftr">
        {/* Liens rapides */}
        <div className="footer-section">
          <h4>Liens rapides</h4>
          <ul className="liens-rapides">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Apropos">A propos</Link>
            </li>
            <li>
              <Link to="/form">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Adresse */}
        <div className="footer-section">
          <h4>Adresse</h4>
          <ul className="footer-section-adressee">
            <li>Guinée Conakry</li>
            <li>
              +224-669-03-02-19 <br />
              +224-612-14-24-24
            </li>
            <li>Kobayah derrière la station Total</li>
            <li>Contact@asconsulting-guinea.com</li>
            <li>Siège Kobayah</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-section">
          <h4>Réseaux sociaux</h4>

          <div className="footer-reseaux">
            <a
              href="https://www.facebook.com/share/1AeAq771LH/?mibextid=wwXIfr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Logofacebook} alt="Facebook" width="30" />
            </a>

            <a
              href="https://wa.me/224669030219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LogoWhatsapp} alt="Whatsapp" width="30" />
            </a>

            <a href="#">
              <img src={LogoInsta} alt="Instagram" width="30" />
            </a>
          </div>

          <Link to="/form" className="savoirPlusF">
            Contact
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Asconsulting. Tous droits réservés.</span>
      </div>
    </footer>
  );
};

export default Footer;
