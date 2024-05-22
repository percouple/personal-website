import styled from "styled-components";

export const StyledInputField = styled.input`
  --primary-color: #222222; /* black */ 
  --secondary-color: #BDC4A7; /* tan */
  --secondary-highlight-color: #317a23; /* Green */
  --tertiary-color: #F17F29; /* orange */
  --tertiary-highlight-color: #5C95FF; /* brue */

  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: solid var(--secondary-color) .1rem;
  outline: none;
  font-family: 'Space Grotesk';

  :focus {
    border-color: transparent;
  }

`;

export const StyledButton = styled.button`
  background-color: var(--tertiary-highlight-color);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #317a23;
  }
  
`;

export const NavButton = styled.button`
  cursor: pointer;
  border: black 2px solid;
  font-family: "Space Grotesk";
  font-weight: 500;
  color: #bdc4a7;
  background-color: #317a23;
  box-shadow: 1px 1px 10px rgba(100, 100, 100, 0.3);
  transition: background-color 0.2s ease, box-shadow 0.2s, color 0.5s ease, transform 0.2s;

  &:hover {
    background-color: #5c95ff;
    box-shadow: 0px 4px 0 #000000;
    color: #222222;
    transform: translate(0px, -4px);
  }
`;