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
    <div className="service">
      <h1>Nos services</h1>
      <p>
        Au-delà des chiffres, AS consulting est un cabinet d’expertise comptable
        offrant un service humain et se soucie de votre succès.
      </p>
      {services.map((service) => (
        <article>

        <div className="service-container">
        <div key={service.id}>
          <h2>{service.titre}</h2>
          <p>{service.description}</p>
        </div>
        </div>
        </article>
      ))}
    </div>
  );
};

export default Services;
