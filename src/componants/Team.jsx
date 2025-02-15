import React from "react";
import image1 from "../assets/img/testimonial-1.jpg";
import image2 from "../assets/img/testimonial-2.jpg";
import image3 from "../assets/img/testimonial-3.jpg";
import image4 from "../assets/img/testimonial-4.jpg";


const teamMembers =[
  {
    name: "Akhilesh Pratap Singh",
    job: "Founder, Designer, BA",
    quote: "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    image: image1,
  },
  {
    name: "Sachin Yadav Makarov",
    job: "Manager, Co-Founder",
    quote: "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    image: image2,
  },
  {
    name: "Virendra Yadav",
    job: "Full Stack Dev, QA Automation Tech Lead",
    quote: "Code is like humor. When you have to explain it, it’s bad. - Cory House",
    image: image3,
  },
  {
    name: "Vipin Yadav",
    job: "QA Automation Engineer",
    quote: "Quality means doing it right when no one is looking. - Henry Ford",
    image: image4,
  }
]
;

const Team = () => {
  return (
    <section className="team section__black">
      <div className="container">
        <h2 className="title team__title title__white">Our Team</h2>
        <div className="cards team__cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="cards__item">
              <div className="image cards__image">
                {member.image && <img loading="lazy" src={member.image} alt={member.name} width="130" height="130" />}
              </div>
              <h3 className="cards__name">{member.name}</h3>
              <p className="cards__job">{member.job}</p>
              <div className="cards__info">{member.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
