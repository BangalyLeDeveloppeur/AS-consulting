import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("prenom", prenom);
    formData.append("message", message);
    formData.append("email", email);

    try {
      await axios.post("http://localhost:5000/api/contact", formData, {});

      setNom("");
      setPrenom("");
      setEmail("");
      setMessage("");

      setNotice(
        "Merci d'avoir nous contacter notre équipe vous contactera dans les plus brefs délais !"
      );

      setTimeout(() => {
        setNotice("");
      }, 5000);
    } catch (error) {
      console.log("Une erreur s'est produite", error);
      setNotice("Une erreur s'est produite lors de l'envoi du formulaire.");
    }
  };

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
                    Nos experts se tiennent à votre disposition pour vous
                    accompagner et répondre à toutes vos questions avec
                    précision.
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

                <form onSubmit={handleSubmit}>
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
                        value={nom}
                        required
                        onChange={(e) => setNom(e.target.value)}
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
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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
                  <p>{notice}</p>
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
