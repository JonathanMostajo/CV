import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div className="education">
      {education.map((item) => {
        return (
          <div className="education-card" key={JSON.stringify(item)}>
            <p className="name">📕 {item.name}</p>
            <p>{item.where}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
