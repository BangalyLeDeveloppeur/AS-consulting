import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(" Voici le contenu de votre ", services);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services");
      setServices(res.data);
    } catch (error) {
      console.log("voici  votre erreur", error);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="service cad">
      <div className="service-titre">
      <h1>Nos services</h1>
      <p>
        Au-delà des chiffres, AS consulting est un cabinet d’expertise comptable
        offrant un service humain et se soucie de votre succès.
      </p>
      </div>
      <div className="container text-center">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {services.map((service) => (
      <div key={service.id} className="col">
        <div className="card cadre-service">
          <div className="card-body d-flex flex-column">
            <h2 className="card-title">{service.titre}</h2>
            <p className="card-text">{service.description}</p>
            <div className="mt-auto pt-3">
              <button className="btn btn decouvrez">
                Découvrir <i className="bi bi-chevron-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Services;
