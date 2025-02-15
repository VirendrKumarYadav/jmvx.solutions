import React from "react";
import image1 from "../assets/ad-branding.png";
import image2 from "../assets/digital-marketing.png";
import image3 from "../assets/public-relations.png";

const teamMembers = [
  {
    name: "Vlad Ivanov",
    job: "Designer",
    quote: "Do not seek to change what has come before. Seek to create that which has not.",
    image: image1, 
  },
  {
    name: "Bogdan Makarov",
    job: "Manager",
    quote: "Do not seek to change what has come before. Seek to create that which has not.",
    image: image2,
  },
  {
    name: "Pavel Konov",
    job: "Copywriter",
    quote: "Do not seek to change what has come before. Seek to create that which has not.",
    image: image3,
  },
  {
    name: "Max Belov",
    job: "SEO",
    quote: "Do not seek to change what has come before. Seek to create that which has not.",
    image: image1,
  },
];

const CarouselComponent = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {teamMembers.map((member, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="carousel-content">
              <img src={member.image} className="carousel-image" alt={member.name} />
              <div className="carousel-caption">
                <h3 className="carousel-name">{member.name}</h3>
                <p className="carousel-job">{member.job}</p>
                <blockquote className="carousel-quote">{member.quote}</blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
