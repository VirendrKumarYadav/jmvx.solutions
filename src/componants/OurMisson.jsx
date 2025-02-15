import React from "react";

const OurMission = () => {
  return (
    <section className="our-mission section__black" id="our-mission">
      <div className="container">
        <h2 className="title title__white our-mission__title">
          <span className="title__bold">Our Mission & Vision</span>
        </h2>
        <p className="swiper__text">
          <strong>JMV Advertising Pvt Ltd</strong> is a full-service marketing agency specializing in
          innovative strategies that combine traditional and digital channels.
        </p>
        <div className="mission-vision">
          <div className="mission swiper__slide">
            <h3 className="title title__white">Our Mission</h3>
            <p className="swiper__text">
              To deliver impactful solutions that enhance brand visibility and engagement.
            </p>
          </div>
          <div className="vision swiper__slide">
            <h3 className="title title__white">Our Vision</h3>
            <p className="swiper__text">
              To lead globally in advertising and integrated marketing services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
