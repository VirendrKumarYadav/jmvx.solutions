import React from "react";
import FacebookIcon from "../assets/img/facebook.png";
import TwitterIcon from "../assets/img/twitter.png";
import GoogleIcon from "../assets/img/google.png";
import LinkedinIcon from "../assets/img/linkedin.png";
import DribbbleIcon from "../assets/img/dribbble.png";

const socialLinks = [
  { href: "#", src: FacebookIcon, alt: "Facebook" },
  { href: "#", src: TwitterIcon, alt: "Twitter" },
  { href: "#", src: GoogleIcon, alt: "Google" },
  { href: "#", src: LinkedinIcon, alt: "LinkedIn" },
  { href: "#", src: DribbbleIcon, alt: "Dribbble" },
];

const Footer = () => {
  return (
    <footer className="footer section__black">
      <div className="container">
        <div className="social">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="social__link">
              <img loading="lazy" src={link.src} width="33" height="33" alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

