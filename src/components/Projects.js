import React from "react";
import Project from "./Projects Components/Project";
import { projectsData } from "../data/site-data";
import styled from "styled-components";

const LeftProject = styled.div`
  padding: 2rem;
  size: auto;
  box-shadow: 10px 10px 0 var(--tertiary-color);
  margin-bottom: 2rem;
  text-align: left;
  background-color: #bdc4a7;
  color: #222222;
  margin-right: 10vw;
  margin-top: 2rem;
`;

const RightProject = styled.div`
  padding: 2rem;
  size: auto;
  box-shadow: 10px 10px 0 var(--secondary-highlight-color);
  margin-bottom: 2rem;
  text-align: right;
  background-color: #2e2e2e;
  margin-left: 10vw;
  margin-top: 2rem;
`;

const StyledProjectContainer = styled.div`
  display: flex;
  max-width: 900px;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 10rem;
  flex-direction: column;
`;

const ProjectHeader = styled.h2`
  margin-top: 15rem;
  scroll-margin-top: 5rem;
  margin-left: 1rem;
`;

export default function Projects() {
  return (
    <div>
      <ProjectHeader id="projects">
        Here's what I've been working on:
      </ProjectHeader>
      <StyledProjectContainer>
        {projectsData.map((entry, index) => {
          if (index % 2 === 0) {
            return (
              <LeftProject key={entry.id}>
                <Project entry={entry} isRight={false} />
              </LeftProject>
            );
          } else {
            return (
              <RightProject key={entry.id}>
                <Project entry={entry} isRight={true} />
              </RightProject>
            );
          }
        })}
      </StyledProjectContainer>
    </div>
  );
}
