import React from "react";
import { NavLink } from "react-router-dom";
import Logoas from "../assets/image/Logo.png";
import LogoFacebook from "../assets/image/logos_facebook.png";
import Logowthatsapp from "../assets/image/logos_whatsapp-icon.png";
import LogoLinkedin from "../assets/image/skill-icons_linkedin.png";

const Navigation = () => {
  return (
    <div>
      <div className="lienSociaux">
        <img src={LogoFacebook} alt="logo facebook" />
        <img src={Logowthatsapp} alt="logo facebook" />
        <img src={LogoLinkedin} alt="logo facebook" />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bmn">
        <div className="container-fluid">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand asLlogo">
            <img src={Logoas} alt="logo as consulting" />
          </NavLink>

          {/* Bouton hamburger Bootstrap */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu principal */}
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto navMenu">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  end
                >
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Apropos"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  A PROPOS
                </NavLink>
              </li>
              {/* Menu déroulant Bootstrap natif */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="offresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES{" "}
                </a>
                <ul
                  className="dropdown-menu menu-deroulent"
                  aria-labelledby="offresDropdown"
                >
                  <li>
                    <NavLink
                      to="/comptabilite"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                    >
                      GESTION COMPTABLE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/entreprise"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                    >
                      CREATION ET GESTION D'ENTREPRISE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/fiscal"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                    >
                      CONSEIL FISCAL
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/formation"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                    >
                      FORMATION ET ACCOMPAGNEMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/conseil"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                    >
                      CONSEIL EN GESTION
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/form"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
