import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slide = () => {
  const [slidePhoto, setSlidePhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  //  Défilement automatique toutes les 3 secondes
  useEffect(() => {
    if (slidePhoto.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidePhoto.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slidePhoto]);

  //  Boutons6§/< suivant / précédent
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidePhoto.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidePhoto.length) % slidePhoto.length
    );
  };
  const currentPhoto = slidePhoto[currentIndex];
  console.log(currentPhoto);

  return (
    <div className="Container-slide">
      <div className="cadrebassin">
        <div className="cadreImage">
          {currentPhoto && (
            <>
              <img
                src={`http://localhost:5000${currentPhoto.image}`}
                alt={currentPhoto.description}
              />
              <div className="cadreParagraphe">
                <h1>{currentPhoto.titre}</h1>
                <p>{currentPhoto.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="cadreFac">
        <button onClick={prevSlide} aria-label="Image précédente">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={nextSlide} aria-label="Image suivante">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <button className="savoirPlus">Prendre rendez-vous</button>
    </div>
  );
};

export default Slide;
