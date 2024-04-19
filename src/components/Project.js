import React from "react";
import styled from "styled-components";
import goButton from "../data/icons/arrow-32px-tan.svg";
import githubIcon from "../data/icons/github-32px-tan.svg";

const LinkButton = styled.button`
  padding-top: 0.3rem;
  background-color: var(--tertiary-highlight-color);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 10px;

  &:hover {
    background-color: #317a23;
  }
`;

export default function Project({ entry, isRight }) {
  const clickHandler = () => {
    window.location.href = entry.url;
  };

  return (
    <>
      <h3>{entry.name}</h3>
      <div style={{ marginBottom: "1rem", backgroundImage: entry.imgUrl }}>
        {entry.description}
      </div>
      <h5>{entry.stack}</h5>
      <LinkButton onClick={clickHandler} >
        <img src={goButton} alt="Arrow link to project page"></img>
      </LinkButton>
      {entry.githubUrl ? (
        <LinkButton style={{order: isRight ? 2 : 1}}>
          <img src={githubIcon} alt="Github Icon"></img>
        </LinkButton>
      ) : (
        <></>
      )}
    </>
  );
}
