import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPhysique from "./Form.jsx"; 

const FormulaireContact = () => {
  const [typePersonne, setTypePersonne] = useState("");
  const [notice, setNotice] = useState("");

  const handleTypeChange = (e) => {
    setTypePersonne(e.target.value);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row g-0 shadow rounded-4 overflow-hidden">

              {/* Colonne information */}
              <div className="col-md-5 bg-primary text-white p-5 d-flex flex-column">
                <h2 className="fw-bold">Contactez notre équipe</h2>
                <p className="opacity-75">
                  Nos experts se tiennent à votre disposition pour vous accompagner.
                </p>

                <div className="mt-auto">
                  <h5 className="fw-semibold mb-3">
                    <i className="bi bi-telephone me-2"></i>
                    Autres moyens de contact
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-envelope me-2"></i>
                      contact@entreprise.com
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-phone me-2"></i>
                      +224-669-03-02-19 <br />
                      +224-612-14-24-24
                    </li>
                    <li>
                      <i className="bi bi-clock me-2"></i>
                      Lun-Ven: 9h-18h
                    </li>
                  </ul>
                </div>
              </div>

              {/* Colonne formulaire */}
              <div className="col-md-7 bg-white p-5">
                <h3 className="mb-4 text-secondary">Envoyez-nous un message</h3>

                {/* Sélecteur */}
                <div className="mb-4">
                  <label htmlFor="type" className="form-label">
                    <strong>Vous êtes ?</strong>
                  </label>
                  <select
                    id="type"
                    className="form-select"
                    value={typePersonne}
                    onChange={handleTypeChange}
                  >
                    <option value="">-- Veuillez choisir une option --</option>
                    <option value="personne-physique">Personne physique</option>
                    <option value="personne-morale">Personne morale</option>
                  </select>
                </div>

                {/* Chargement dynamique des composants */}
                {typePersonne === "personne-physique" && <FormPhysique />}

                {typePersonne === "personne-morale" && (
                  <p className="text-muted">
                    👉 Le formulaire Personne morale arrive bientôt
                  </p>
                )}

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
