import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const FormMoral = () => {
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
        "Merci d'avoir nous contacter notre équipe vous contactera dans les plus brefs délais !",
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
    <div className="row justify-content-center">
      <div className="row g-0 shadow rounded-4 overflow-hidden">
        {/* Colonne formulaire */}

        <h3 className="mb-4 text-secondary">Envoyez-nous un message</h3>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-sm-6">
              <label htmlFor="nom" className="form-label">
                Nom de votre entreprise
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
                Secteur d'activité
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
            <div className="col-sm-6">
              <label htmlFor="prenom" className="form-label">
                Siège de votre entreprise
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
  );
};

export default FormMoral;
