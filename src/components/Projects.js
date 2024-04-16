import React from "react";
import Project from './Project';
import { projectsData } from "../data/projects-data";
import styled from "styled-components";

const StyledProject = styled.div`
  padding-left: 18vw;
  padding-right: 18vw;
  text-align: left;
  max-width: 400px;
  min-height: 15rem;
`;

const StyledProject2 = styled.div`
  padding-left: 18vw;  
  padding-right: 18vw;
  text-align: right;
  min-height: 15rem;
  /* max-width: 50vw; */
`;

const StyledProjectContainer = styled.div`
  margin: 4px;
`;

export default function Projects() {
  let firstStyle = false;

  return (
    <StyledProjectContainer>
      {projectsData.map((entry) => {
        firstStyle = !firstStyle;
        if (firstStyle) {
            return <StyledProject key={entry.id}>
            <Project entry={entry} />
          </StyledProject>
        } else {
            return <StyledProject2 key={entry.id}>
            <Project entry={entry} />
          </StyledProject2>
        }
      })}
    </StyledProjectContainer>
  );
}
