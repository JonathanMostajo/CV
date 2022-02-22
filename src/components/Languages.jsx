import React from "react";
import "./Languages.css";

const Languages = ({ languages }) => {
  console.log(languages);
  return (
    <div className="languages">
      {languages.map((item) => {
        return (
          <div className="languages-card" key={JSON.stringify(item)}>
            <p className="name"> {item.language}</p>
            <p>✏️{item.wrlevel}</p>
            <p>💭{item.splevel}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
