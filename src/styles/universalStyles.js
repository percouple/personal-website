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

export const StyledProject = styled.div`
  padding: 2rem;
  size: auto;
  box-shadow: 10px 10px 0 var(--secondary-highlight-color);
  margin-bottom: 2rem;
`;
