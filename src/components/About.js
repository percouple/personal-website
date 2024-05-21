import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div id="about" style={{ scrollMarginTop: "10vh", paddingLeft: "3rem" }}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div className="about-text">About me</div>
      </div>
      <div className="welcome-card">
        <div className="about-card">
          <div className="about-paragraph">
            I’m a professional software engineer interested in creating
            experiences that educate and simplify. I'm all about small tweaks
            that make the little things in life just a bit better.
            <br>
            </br>
            <br>
            </br>
            Through my skills gained as a professional musician and educator,
            I’m uniquely suited to learning and perfecting new technologies,
            assisting and educating others, and creating refined, polished
            products that stand up to rigorous testing.
          </div>
        </div>
        <div className="portrait-container">
          <img
            className="portrait-card"
            src="/photos/portrait.jpeg"
            alt="portrait"
          ></img>
          <div className="portrait-liner"></div>
          <div className="portrait-liner-background"></div>
        </div>
      </div>
    </div>
  );
}
