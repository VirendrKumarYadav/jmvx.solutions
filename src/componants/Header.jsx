import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import logo from "../assets/JMV Dark Ver.svg"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container header__container">
        {/* Logo */}
        <a href="#" className="header__logo">
          <img className="logo" alt="Logo" src={logo} />
        </a>

        {/* Burger Button */}
        <button 
          className={`burger ${isOpen ? "open" : ""}`} 
          aria-label="Toggle navigation menu" 
          onClick={toggleMenu}
        >
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav ${isOpen ? "nav--open" : ""}`} title="Main Menu">
          <ul className="list-nav-bars">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/share/1BdTCWKTcZ/" target="_blank" rel="noopener noreferrer">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/jmvx-s/" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin />
              </a>
            </li>
            <li>
              <a href="https://x.com/jmvxsolut25?t=tDf9A_OziyCkiTPSPN049A&s=08" target="_blank" rel="noopener noreferrer">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="http://instagram.com/jmvx.solutions25/?utm_source=qr&igsh=MXZuZWVvbXlqYndzeg%3D%3D#" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
