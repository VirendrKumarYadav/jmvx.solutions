import React from 'react'
import Header from '../componants/Header'
import macImage from "../assets/img/mac.png"

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__left">
            <img loading="lazy" src={macImage} width="506" height="408" alt="MacBook" />
          </div>
          <div className="wrapper__right">
            <h2 className="wrapper__right-title">
              Some words <span className="text-bold">about us</span>
            </h2>
            <p className="wrapper__right-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore error laudantium ullam, dignissimos sed
              tempora rem voluptate delectus ipsam fugiat.
            </p>
            <ul className="list-reset about__right-list">
              <li className="list__item">
                <span className="list__item--bold">Mission — </span>We delivered uniqueness and quality
              </li>
              <li className="list__item">
                <span className="list__item--bold">Skills — </span>Delivered fast and excellent results
              </li>
              <li className="list__item">
                <span className="list__item--bold">Clients — </span>Satisfied clients thanks to our experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About
