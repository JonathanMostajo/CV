import React from "react";
import "./Volunteer.css";

const Volunteer = ({ volunteer }) => {
  console.log(volunteer);
  return (
    <div className="volunteer">
      {volunteer.map((item) => {
        return (
          <div className="card" key={JSON.stringify(item)}>
            <p className="name"> {item.name}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Volunteer;