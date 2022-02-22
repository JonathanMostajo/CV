import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Volunteer from "./components/Volunteer";
import { CV } from "./CV/CV";
import Experience from "./components/Experience";

const { hero, education, languages, experience, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <h2>About me</h2>
      <About hero={hero} />
      <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
      <div className="divs">
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <h2>Languages</h2>
      <div className="divs">
      <Languages languages={languages} />
      </div>
      <h2>Volunteer</h2>
      <Volunteer volunteer={volunteer} />
    </div>
  );
}

export default App;
