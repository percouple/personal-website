import React from "react";
import Project from "./Projects Components/Project";
import { projectsData } from "../data/site-data";
import '../styles/projects.css';

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
