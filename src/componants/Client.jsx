import React from "react";
import Client1 from "../assets/img/Clients-1.webp"
import Client2 from "../assets/img/Clients-2.webp"
import Client3 from "../assets/img/Clients-3.webp"
import Client4 from "../assets/img/Clients-4.webp"
import Client5 from "../assets/img/Clients-5.webp"




const clientsData = [
  { image: Client1, alt: "Chanel", width: 170, height: 30 },
  { image: Client2, alt: "Zara", width: 170, height: 30 },
  { image:Client3, alt: "Guerlain", width: 170, height: 35 },
  { image:Client4, alt: "Lancome", width: 170, height: 30 },
  { image:Client5, alt: "Lacoste", width: 170, height: 30 },
];

const Clients = () => {
  return (
    <section className="clients section__black" id="clients">
      <div className="container">
        <h2 className="title title__white clients__title">
          Some of <span className="title__bold">our clients</span>
        </h2>
        <div className="clients__inner">
          {clientsData.map((client, index) => (
            <img
              key={index}
              loading="lazy"
              src={client.image}
              className="clients__image"
              width={client.width}
              height={client.height}
              alt={client.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

