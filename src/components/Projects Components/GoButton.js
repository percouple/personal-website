import React from "react";
import styled from "styled-components";
import arrowIcon from "../../data/icons/arrow-32px-tan.svg";

const LinkButton = styled.button`
  padding-top: 0.3rem;
  background-color: var(--tertiary-highlight-color);
  color: var(--primary-color);
  border: #222222 2px solid;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background-color: #317a23;
    box-shadow: 0px 4px 0px #000000;
    transform: translateY(-4px);
  }
`;

export default function GoButton ({entry}) {

  const clickHandler = () => {
    window.location.href = entry.url;
  };

    return (
    <LinkButton onClick={clickHandler}>
        <img src={arrowIcon} alt="Arrow link to project page"></img>
      </LinkButton>
      )
}