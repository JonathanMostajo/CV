import React from "react";
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="about">
      <div className="card">
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="info"> {item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;