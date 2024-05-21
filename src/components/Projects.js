import React from "react";
import Project from "./Projects Components/Project";
import { projectsData } from "../data/site-data";
import styled from "styled-components";
import '../styles/projects.css';

// const LeftProject = styled.div`
//   padding: 2rem;
//   box-shadow: -4px 4px var(--tertiary-color);
//   margin-bottom: 2rem;
//   text-align: left;
//   background-color: #bdc4a7;
//   border: 2px solid #222222;
//   color: #222222;
//   margin-right: 10vw;
//   margin-top: 2rem;
//   font-size: 1.25rem;
//   transition: box-shadow 0.2s, transform 0.2s;

//   &:hover {
//     box-shadow: -14px 8px var(--tertiary-color);
//     transform: translate(10px, -10px);
//   }
// `;

// const RightProject = styled.div`
//   padding: 2rem;
//   box-shadow: 4px 4px var(--secondary-highlight-color);
//   transition: box-shadow 0.2s, transform 0.2s;
//   margin-bottom: 2rem;
//   text-align: right;
//   background-color: #2e2e2e;
//   border: 2px solid #222222;
//   margin-left: 10vw;
//   margin-top: 2rem;
//   font-size: 1.25rem;

//   &:hover {
//     box-shadow: 14px 8px var(--secondary-highlight-color);
//     transform: translate(-10px, -10px);
//   }
// `;

// const StyledProjectContainer = styled.div`
//   display: flex;
//   max-width: 900px;
//   margin-left: 3rem;
//   margin-right: 3rem;
//   margin-bottom: 10rem;
//   flex-direction: column;
// `;

// const ProjectHeader = styled.h2`
//   margin-top: 15rem;
//   scroll-margin-top: 5rem;
//   margin-left: 1rem;
// `;

export default function Projects() {
  return (
    <div>
      <h2 className="project-header" id="projects">
        Here's what I've been working on:
      </h2>
      <div className="project-container">
        {projectsData.map((entry, index) => {
          if (index % 2 === 0) {
            return (
              <div className="left-project" key={entry.id}>
                <Project entry={entry} isRight={false} />
              </div>
            );
          } else {
            return (
              <div className="right-project" key={entry.id}>
                <Project entry={entry} isRight={true} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
