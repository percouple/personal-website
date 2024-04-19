import React from "react";
import styled from "styled-components";

const StyledWelcomeCard = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    margin: 2rem;
`;

const AboutCard = styled.span`
    display: flexbox;
    text-align: left;
    background-color: #BDC4A7;
    color: #222222;
    padding: 4px;
    margin-bottom: 3rem;
    max-width: 33vw;
`;

const PortraitCard = styled.img`
    max-width: 200px;
    max-height: auto;
    box-shadow: 10px 10px 0 0 #ffffff;
    padding: 10px;
    border: solid #5C95FF 4px;
    border-radius: 5%;
    z-index: 1;
`;

const PortraitCardBoxShadow = styled.div`

`

export default function About () {

    return (
        <StyledWelcomeCard>
            <AboutCard>
                <div>About</div>
                <span>I did some stuff and some things for people and did music and stuff</span>
            </AboutCard>
            <PortraitCardBoxShadow>
                <PortraitCard src="/photos/portrait.jpeg"></PortraitCard>
            </PortraitCardBoxShadow>
        </StyledWelcomeCard>
    )
}