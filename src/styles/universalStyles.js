import styled from "styled-components";

export const StyledInputField = styled.input`
  border-radius: 6px;
  background-color: transparent;
  color: rgb(150, 150, 150);
  border: solid rgb(89, 178, 129) 0.15rem;
  outline: none;

  :focus {
    border-color: transparent;
  }
`;

export const StyledProject = styled.div`
  padding-left: 18vw;
  padding-right: 18vw;
  text-align: left;
  min-height: 15rem;
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  background-color: transparent;
  color: rgb(89, 178, 129);
  border: solid rgb(89, 178, 129);
  cursor: pointer;
  transition: border-color 0.2s ease;

  /* &:hover {
    border-color: rgba(89, 178, 129, 0.5);
    border-width: 100px;
  } */
  &::before,
  &::after {
    content:'';
    position: absolute;
    background-color: rgba(89, 178, 129, 0.5); /* Adjust border color */
    transition: all 0.2s ease; /* Add transition effect */
  }

  /* Initial state of pseudo-elements */
  &::before {
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
  }

  &::after {
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
  }

  /* Hover effect */
  &:hover::before {
    width: 100%; /* Grow width to cover the button */
  }

  &:hover::after {
    width: 100%; /* Grow width to cover the button */
    transition-delay: 0.2s; /* Delay transition to start after ::before */
  }

  /* Recede back after hovering off */
  &:not(:hover)::before {
    width: 0; /* Reset width to 0 */
  }

  &:not(:hover)::after {
    width: 0; /* Reset width to 0 */
  }
`;
