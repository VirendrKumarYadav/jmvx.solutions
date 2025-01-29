import React from "react";
import logo from "../assets/JMV Dark Ver.svg";
import founderImg from "../assets/JMV-logo.jpg";
import cofounderImg from "../assets/JMV-logo.jpg";

const JMVAdvertising = () => {
  return (
    <section className="jmv-container">
      <div className="jmv-header">
        <img src={logo} alt="JMV Advertising Logo" className="jmv-logo" />
        <h1>JMV Advertising</h1>
        <p className="jmv-tagline">"Empowering Brands, Transforming Businesses"</p>
      </div>

      <div className="jmv-founders">
        <div className="founder-card">
          <img src={founderImg} alt="Akhilesh Pratap Singh" className="founder-img" />
          <h3>Akhilesh Pratap Singh</h3>
          <p>Founder</p>
        </div>

        <div className="founder-card">
          <img src={cofounderImg} alt="Sachin Yadav" className="founder-img" />
          <h3>Sachin Yadav</h3>
          <p>Co-Founder</p>
        </div>
      </div>
    </section>
  );
};

export default JMVAdvertising;
