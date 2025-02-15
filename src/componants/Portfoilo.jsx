import React from "react";

import Work1 from "../assets/img/Work-1.jpg";
import Work2 from "../assets/img/Work-2.jpg";
import Work3 from "../assets/img/Work-3.jpg";

const portfolioData = [
  { images: [Work1, Work1, Work1, Work1] },
  { images: [Work2, Work2, Work2, Work2] },
  { images: [Work3, Work3, Work3, Work3] },
];

const Portfolio = () => {
  return (
    <section className="work" id="portfolio">
      <div className="container">
        <h2 className="title services__title">
          Take a look at <span className="title__bold">our work</span>
        </h2>
        <p className="descr services__descr">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at
          asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.
        </p>
        <div className="gallery">
          {portfolioData.map((row, rowIndex) => (
            <div className="line" key={rowIndex}>
              {row.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  loading="lazy"
                  src={image}
                  width="263"
                  height="237"
                  alt="Example of our work"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
