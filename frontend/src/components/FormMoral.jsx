import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const FormMoral = () => {
  const [nomEntreprise, setNomEntreprise] = useState("");
  const [secteurActivite, setSecteurActivite] = useState("");
  const [siegeEntreprise, setSiegeEntreprise] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      type_personne: "morale",
      nom_entreprise: nomEntreprise,
      secteur_activite: secteurActivite,
      siege_entreprise: siegeEntreprise,
      telephone,
      email,
      message,
    };

    try {
      await axios.post("http://localhost:5000/api/contacts", data);

      // Reset
      setNomEntreprise("");
      setSecteurActivite("");
      setSiegeEntreprise("");
      setTelephone("");
      setEmail("");
      setMessage("");

      setNotice(
        "Merci de nous avoir contactés. Notre équipe vous répondra rapidement.",
      );

      setTimeout(() => setNotice(""), 5000);
    } catch (error) {
      console.log("Erreur :", error);
      setNotice("Une erreur s'est produite lors de l'envoi.");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="shadow rounded-4 p-4 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Nom de l'entreprise</label>
              <input
                type="text"
                className="form-control"
                value={nomEntreprise}
                onChange={(e) => setNomEntreprise(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Secteur d'activité</label>
              <input
                type="text"
                className="form-control"
                value={secteurActivite}
                onChange={(e) => setSecteurActivite(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mt-3">
              <label className="form-label">Siège de l'entreprise</label>
              <input
                type="text"
                className="form-control"
                value={siegeEntreprise}
                onChange={(e) => setSiegeEntreprise(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mt-3">
              <label className="form-label">Téléphone</label>
              <input
                type="text"
                className="form-control"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Votre message</label>
            <textarea
              className="form-control"
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

            <button type="submit" className="btn btn-primary px-4">
              Envoyer
            </button>
          </div>

          {notice && <p className="mt-3 text-success">{notice}</p>}
        </form>
      </div>
    </div>
  );
};

export default FormMoral;
