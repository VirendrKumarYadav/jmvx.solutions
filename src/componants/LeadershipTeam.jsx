import React from "react";

const LeadershipTeam = () => {
  return (
    <section className="leadership-team section__black" id="leadership">
      <div className="container">
        <h2 className="title title__white leadership-team__title">
          <span className="title__bold">Our</span> Leadership Team
        </h2>
        <div className="leadership-team__members">
          <div className="leadership-team__member">
            <h3 className="leadership-team__name">Akhilesh Pratap Singh</h3>
            <p className="leadership-team__role">
              <span className="grey__bold">Founder,</span> Expert in transformative marketing strategies.
            </p>
          </div>
          <div className="leadership-team__member">
            <h3 className="leadership-team__name">Sachin Yadav</h3>
            <p className="leadership-team__role">
              <span className="grey__bold">Co-Founder,</span> Visionary strategist driving impactful technology campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
