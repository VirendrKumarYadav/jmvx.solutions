import React from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/JMV Light Ver.svg"
const Header = () => {
  return (
    <header>
      <img className="logo" alt="Logo" src={logo}/>
      <nav>
        <ul className="list-nav-bars">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <IoLogoTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
