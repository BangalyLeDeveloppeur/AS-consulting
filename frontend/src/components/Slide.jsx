import React, { useState, useEffect } from "react";
import axios from "axios";

const Slide = () => {
  const [slidePhoto, setSlidePhotos] = useState([]);

  console.log(slidePhoto);

  const fetchPhotos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/slide");
      setSlidePhotos(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des photos :", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      {slidePhoto.map((slide) => (
        <div key={slide.id}>
          <img src={`http://localhost:5000${slide.image}`} alt={slide.titre} />
          <h1>{slide.titre}</h1>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Slide;
