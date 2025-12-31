import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row g-0 shadow rounded-4 overflow-hidden">
              {/* Colonne d'information */}
              <div className="col-md-5 bg-primary text-white p-5 d-flex flex-column">
                <div className="mb-4">
                  <h2 className="fw-bold">Contactez notre équipe</h2>
                  <p className="opacity-75">
                    Notre équipe est à votre disposition pour répondre à toutes
                    vos questions.
                  </p>
                </div>

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

                <form>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <label htmlFor="nom" className="form-label">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nom"
                        name="nom"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="prenom" className="form-label">
                        Prénom
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        name="prenom"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      * Tous les champs sont obligatoires
                    </small>
                    <button type="submit" className="btn btn-primary px-4 py-2">
                      <i className="bi bi-paper-plane me-2"></i>
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
