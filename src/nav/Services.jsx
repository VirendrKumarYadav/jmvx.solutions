import React from "react";
import { FaBullhorn, FaChartLine, FaCalendarCheck, FaComments, FaCogs, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn />,
    title: "Advertising & Branding",
    description: "Transform your brand into an unforgettable experience! Our advertising and branding strategies combine creativity with data-driven insights, delivering visually stunning and high-impact campaigns.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description: "Boost your online presence with expert digital marketing! We specialize in SEO, social media, content marketing, and paid ads to drive engagement, increase conversions, and grow your brand.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Exhibition & Event Management",
    description: "We bring events to life with flawless planning and seamless execution. From corporate to grand exhibitions, we craft immersive experiences that captivate audiences and leave a lasting impression.",
  },
  {
    icon: <FaComments />,
    title: "Public Relations (PR)",
    description: "We amplify your brand’s voice with strategic PR solutions. From media outreach to reputation management, we ensure your story is heard, fostering trust and strong audience connections.",
  },
  {
    icon: <FaCogs />,
    title: "Technology Solutions",
    description: "Stay ahead with cutting-edge technology! Our solutions include web and app development, AI-driven automation, and IT consulting to streamline operations and enhance user experiences.",
  },
  {
    icon: <FaCode />,
    title: "Custom Web Development",
    description: "Our custom web development services cover both front-end and back-end solutions. Whether enhancing an existing app or developing software, we create scalable, high-performance applications.",
  },
];

const servicesData = [
  {
    title: "Web Design",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum erat eu lectus hendrerit.",
    image: "img/Services-1.png",
    alt: "computer",
    width: 55,
    height: 55,
  },
  {
    title: "Mobile Apps",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum erat eu lectus hendrerit.",
    image: "img/Services-2.png",
    alt: "mobile phone",
    width: 33,
    height: 33,
  },
  {
    title: "Photography",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum erat eu lectus hendrerit.",
    image: "img/Services-3.png",
    alt: "camera",
    width: 50,
    height: 50,
  },
  {
    title: "Marketing",
    description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum erat eu lectus hendrerit.",
    image: "img/Services-4.png",
    alt: "megaphone",
    width: 45,
    height: 45,
  },
];

const Services = () => {
  return (
    <section className="services pt-5 pb-5" id="services">
      <div className="container">
        <div className="section-head">
          <h1>Our Services</h1>
          <p>
            We help you build high-quality digital solutions and deliver a wide range of professional services.
            Our team provides world-class solutions tailored to your business needs.
          </p>
        </div>

        {/* Service Icons Section */}
        <div className="row services-container">
          {services.map((service, index) => (
            <div className="col-lg-4 col-sm-6" key={index} data-aos="flip-right">
              <div className="service-item">
                <span className="icon">{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image-Based Services Section */}
        <div className="cards services__cards">
          {servicesData.map((service, index) => (
            <div key={index} className="cards__item services-cards__item">
              <div className="circle">
                <img
                  loading="lazy"
                  src={service.image}
                  className="image services__image"
                  width={service.width}
                  height={service.height}
                  alt={service.alt}
                />
              </div>
              <h3 className="cards__title">{service.title}</h3>
              <p className="cards__descr">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
