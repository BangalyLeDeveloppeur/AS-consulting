import React, { useState, useEffect } from "react";
import axios from "axios";
////Déclaration de mes states////
const Services = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  /// la gestion de formulaire/////

  const handleSubmit = async (e) => {
    e.preventDefault();
    ///me permet d'envoyer image+texte + titre dans ma requet http(uploard)
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    console.log(formData);

    try {
      await axios.post("http://localhost:5000/api/services", formData);

      setMessage(" Photo ajoutée avec succès !");
      setTitre("");
      setDescription("");
      console.log(formData);
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      setMessage(" Erreur lors de l'upload");
    }
  };

  return (
    <div>
      <section className="admin-section">
        <h1 className="titre"> Home du services</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Titre :</label>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description :</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="botton">
            Ajouter
          </button>
        </form>

        {message && <p>{message}</p>}

        <h3>Services enregistrées :</h3>
      </section>
    </div>
  );
};

export default Services;
