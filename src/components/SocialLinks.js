import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import { iconLinks } from "../data/site-data";
import logo from "../data/icons/Logo.png";

const SidebarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding-left: 1rem;
  max-width: 40px;
  background-color: #222222;
  position: sticky;
  top: 3rem;
  z-index: 999;
  max-height: 92vh;
`;

export default function SocialLinks() {
  return (
    <SidebarStyled>
            <img src={logo} alt="personal logo"></img>
        <div>
            {iconLinks.map((icon) => {
                return <IconButton key={icon.id} data={icon} />;
            })}
        </div>
    </SidebarStyled>
  );
}
