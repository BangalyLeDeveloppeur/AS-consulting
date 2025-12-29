import axios from "axios";
import React, { useEffect, useState } from "react";

const Temoignage = () => {
  const [avis, setAvis] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchTemoignages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/temoignages");
      setAvis(res.data);
    } catch (error) {
      console.log("Une erreur s'est produite", error);
    }
  };

  // Chargement des témoignages
  useEffect(() => {
    fetchTemoignages();
  }, []);

  // Défilement automatique
  useEffect(() => {
    if (avis.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === avis.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [avis]);

  if (avis.length === 0) {
    return <p>Chargement des témoignages...</p>;
  }

  return (
    <div className="avis-client">
      <h1>Avis clients</h1>

      <div className="card cadre-service avis">
        <h2>{avis[index].titre}</h2>
        <p>{avis[index].description}</p>
      </div>
    </div>
  );
};

export default Temoignage;
