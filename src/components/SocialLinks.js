import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import { iconLinks } from "../data/site-data";

const SidebarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #222222;
  position: sticky;
  top: 4rem;
  z-index: 999;
  max-height: 92vh;
`;

export default function SocialLinks() {
  return (
    <SidebarStyled>
      {/* <img src={logo} alt="personal logo"></img> */}
      <div>
        {iconLinks.map((icon) => {
          return <IconButton key={icon.id} data={icon} />;
        })}
      </div>
    </SidebarStyled>
  );
}
