import React from "react";
import Project from "./Project";
import { projectsData } from "../data/site-data";
import styled from "styled-components";
import { StyledProject } from "../styles/universalStyles";

const LeftProject = styled(StyledProject)`
  text-align: left;
  background-color: #bdc4a7;
  color: #222222;
  margin-right: 10vw;
  margin-top: 2rem;
`;

const RightProject = styled(StyledProject)`
  text-align: right;
  background-color: #2E2E2E;
  margin-left: 10vw;
  margin-top: 2rem;
`;

const StyledProjectContainer = styled.div`
  display: flex;
  max-width: 900px;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 10vh;
  margin-bottom: 10vh;
  flex-direction: column;
`;

export default function Projects() {
  return (
    <StyledProjectContainer>
      {projectsData.map((entry, index) => {
        if (index % 2 === 0) {
          return (
            <LeftProject key={entry.id}>
              <Project entry={entry} isRight={false}/>
            </LeftProject>
          );
        } else {
          return (
            <RightProject key={entry.id}>
              <Project entry={entry} isRight={true}/>
            </RightProject>
          );
        }
      })}
    </StyledProjectContainer>
  );
}
