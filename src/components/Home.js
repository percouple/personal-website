import React from "react";
import "../styles/home.css";

// const StyledIntroContainer = styled.div`
//   margin-top: 10rem;
//   margin-bottom: 15rem;
//   background-color: #222222;
//   padding-right: 13px;
//   padding-bottom: 13px;
//   padding-left: 110px;
//   min-width: max-content;
//   scroll-margin-top: 25vh;
// `;

// const StyledWelcomeParagraph = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   font-size: 1.25rem;
//   text-align: right;
//   max-width: 700px;
// `;

// const StyledCorner = styled.div`
//   position: absolute;
//   width: 384px;
//   height: 46px;
//   top: 344px;
//   background-color: #5C95FF;
//   z-index: -1;
//   margin-left: 135px;
// `;

// const HeroName = styled.h1`
//   color: #F17F29;
//   text-shadow: 3px 2px 0 #BDC4A7;
//   font-size: 8rem;
//   margin: 0;
// `;

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
