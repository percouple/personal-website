import React from "react";
import styled from "styled-components";

export const IconButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default function IconButton({data}) {
    
  const followLink = () => {
    window.open(data.url, '_blank');
  };

  return (
    <IconButtonStyle onClick={followLink}>
      <img src={data.icon} alt={data.alt}></img>
    </IconButtonStyle>
  );
}
