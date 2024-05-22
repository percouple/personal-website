import React from "react";
import styled from "styled-components";
import GoButton from "./GoButton";
import GitHubLink from "./GitHubLink";

const StyledLinkContainer = styled.div``;

export default function LinkContainer({ entry, isRight }) {
  if (isRight) {
    return (
      <StyledLinkContainer>
        {entry.url && <GoButton entry={entry} />}
        {entry.githubUrl && <GitHubLink entry={entry} />}
      </StyledLinkContainer>
    );
  } else {
    return (
      <StyledLinkContainer>
        <GitHubLink entry={entry}/>
        <GoButton entry={entry}/>
      </StyledLinkContainer>
    );
  }
}
