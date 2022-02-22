import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
      <div className="experience">
        {experience.map((item) => {
          return (
            <div className="experience-card" key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
          
        })}
      </div>
  );
};

export default Experience;