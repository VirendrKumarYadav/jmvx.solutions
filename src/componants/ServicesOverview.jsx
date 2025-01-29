import React from "react";
import brandingIcon from "../assets/ad-branding.png";
import marketingIcon from "../assets/digital-marketing.png";
import eventIcon from "../assets/event-management.png";
import prIcon from "../assets/public-relations.png";
import techIcon from "../assets/tech-solutions.png";

const services = [
  { id: 1, name: "Advertising & Branding", icon: brandingIcon },
  { id: 2, name: "Digital Marketing", icon: marketingIcon },
  { id: 3, name: "Exhibition & Event Management", icon: eventIcon },
  { id: 4, name: "Public Relations", icon: prIcon },
  { id: 5, name: "Technology Solutions", icon: techIcon },
];

const ServicesOverview = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.icon} alt={service.name} className="service-icon" />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
