import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          Au-delà des chiffres, AS Consulting est un cabinet d’expertise <br />{" "}
          comptable offrant un service humain et se soucie de votre succès.
        </p>
      </div>
      <div className="container text-center t-container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {services.map((service) => (
            <div key={service.id} className="col">
              <div className="card cadre-service">
                <div className="card-body d-flex flex-column">
                  <h2 className="card-title">{service.titre}</h2>
                  <p className="card-text">{service.description}</p>
                  <div className="mt-auto pt-3">
                    <Link
                      to={
                        service.id === 3
                          ? "/comptabilite"
                          : service.id === 4
                            ? "/entreprise"
                            : service.id === 5
                              ? "/fiscal"
                              : service.id === 6
                                ? "/conseil"
                                : service.id === 7
                                  ? "/formation"
                                  : "/"
                      }
                      className="btn btn decouvrez"
                    >
                      Découvrir
                    </Link>
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
