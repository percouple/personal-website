import React from "react";
import styled from "styled-components";
import arrowIcon from "../../data/icons/arrow-32px-tan.svg";

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