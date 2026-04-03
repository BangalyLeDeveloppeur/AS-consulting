import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPhysique from "./Form.jsx";
import FormMoral from "./FormMoral.jsx";

const FormulaireContact = () => {
  const [typePersonne, setTypePersonne] = useState("");
  const [notice, setNotice] = useState("");

  const handleTypeChange = (e) => {
    setTypePersonne(e.target.value);
  };

  return (
    <div className="bg-light" style={{ minHeight: "100vh", width: "100%" }}>
      {/* Supprimez les conteneurs restrictifs */}
      <div className="container-fluid py-5">
        {/* Une seule row centrée mais plus large */}
        <div className="row justify-content-center mx-0">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8">
            {/* Votre carte prend presque toute la largeur */}
            <div className="row g-0 shadow rounded-4 overflow-hidden">
              {/* Colonne gauche - informations (plus large) */}
              <div className="col-md-5 bg-primary text-white p-4 p-xl-5 d-flex flex-column">
                <h2 className="fw-bold mb-3">Contactez notre équipe</h2>
                <p className="opacity-75 mb-4">
                  Nos experts se tiennent à votre disposition pour vous
                  accompagner.
                </p>

                {/* Espacement automatique */}
                <div className="mt-auto">
                  <h5 className="fw-semibold mb-3">
                    <i className="bi bi-telephone me-2"></i>
                    Autres moyens de contact
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-center">
                      <i className="bi bi-envelope me-2"></i>
                      contact@asconsulting-guinea.com
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <i className="bi bi-phone me-2 mt-1"></i>
                      <span>
                        +224-669-03-02-19 <br />
                        +224-612-14-24-24
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock me-2"></i>
                      Lun-Ven: 9h-16h
                    </li>
                  </ul>
                </div>
              </div>

              {/* Colonne droite - formulaire (plus large) */}
              <div className="col-md-7 bg-white p-4 p-xl-5">
                <h3 className="mb-4 text-secondary">Envoyez-nous un message</h3>

                {/* Sélecteur */}
                <div className="mb-4">
                  <label htmlFor="type" className="form-label fw-bold">
                    Vous êtes ?
                  </label>
                  <select
                    id="type"
                    className="form-select"
                    value={typePersonne}
                    onChange={handleTypeChange}
                  >
                    <option value="">Choisissez une option</option>
                    <option value="personne-physique">Personne physique</option>
                    <option value="personne-morale">Personne morale</option>
                  </select>
                </div>

                {/* Formulaires dynamiques */}
                {typePersonne === "personne-physique" && <FormPhysique />}
                {typePersonne === "personne-morale" && <FormMoral />}
                {notice && <p className="text-success mt-3">{notice}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireContact;
