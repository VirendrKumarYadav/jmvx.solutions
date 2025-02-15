import React from "react";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container" id="bg-image">
        <h1 className="welcome__title">
          Welcome to <span className="welcome__title--orange">JMVX Solutions</span>
        </h1>
        <p className="welcome__text">
          We are a digital agency with{" "}
          <span className="text-bold">years of experience</span> and with{" "}
          <span className="text-bold">extraordinary people</span>.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
