import React, { useState, useEffect } from "react";
import axios from "axios";
////Déclaration de mes states////
const AdSlide = () => {
  const token= localStorage.getItem("token")
  console.log("Ton token actuel est",token)
 

  const [photos, setPhotos] = useState([]);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  ///me permet d'exécuté une quant le composant est monté autrement dit charger mes photos////

  useEffect(() => {
    fetchPhotos();
  }, []);
  ////Cette fonction me permette de récuperer les photos////
  const fetchPhotos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/slide");
      setPhotos(res.data);     
    } catch (error) {
      console.error("Erreur lors du chargement des photos :", error);
    }
  };
  /// la gestion de formulaire/////

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Merci de choisir une image");
      return;
    }
    ///me permet d'envoyer image+texte + titre dans ma requet http(uploard)
    const formData = new FormData();
    formData.append("image", image);
    formData.append("titre", titre);
    formData.append("description", description);
    console.log(formData)

    try {
      await axios.post("http://localhost:5000/api/slide", formData, {
        headers: { Authorization: `Bearer ${token}`},
      });

      setMessage(" Photo ajoutée avec succès !");
      setTitre("");
      setDescription("");
      setImage(null);
      fetchPhotos();
      console.log(formData);
      
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      setMessage(" Erreur lors de l'upload");
    }
  };

  return (
    <div>
      <section className="admin-section">
        <h1 className="titre"> Home du slide d'Accueil</h1>

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

          <div>
            <label>Image :</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button type="submit" className="botton">
            Ajouter
          </button>
        </form>

        {message && <p>{message}</p>}

        <h3>Photos enregistrées :</h3>
      </section>
    </div>
  );
};

export default AdSlide;
