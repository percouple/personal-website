import React from "react";
import Project from "./Project";
import { projectsData } from "../data/projects-data";
import styled from "styled-components";
import { StyledProject } from "../styles/universalStyles";

const LeftProject = styled(StyledProject)`
  text-align: left;
  max-width: 400px;
`;

const RightProject = styled(StyledProject)`
  text-align: right;
  /* max-width: 50vw; */
`;

const StyledProjectContainer = styled.div`
  margin: 4px;
`;

export default function Projects() {
  return (
    <StyledProjectContainer>
      {projectsData.map((entry, index) => {
        if (index % 2 === 0) {
          return (
            <LeftProject key={entry.id}>
              <Project entry={entry} />
            </LeftProject>
          );
        } else {
          return (
            <RightProject key={entry.id}>
              <Project entry={entry} />
            </RightProject>
          );
        }
      })}
    </StyledProjectContainer>
  );
}
