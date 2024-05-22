import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="intro-container">
      <div id="home" className="home-container">
        <div className="title-text">
          <h3
            style={{
              marginBottom: "0px",
              fontStyle: "italic",
              fontSize: "2rem",
            }}
          >
            Hello, I'm
          </h3>
          <div className="hero-name">Caleb.</div>
        </div>
        <div className="welcome-paragraph">
          I'm a software developer eager to craft engaging experiences tailored
          for entry-level learners. <br></br>
          <br></br>Currently, I'm building projects geared towards expanding my
          proficiency across various coding languages and platforms, enriching
          my versatility in software development.
        </div>
      </div>
    </div>
  );
}
