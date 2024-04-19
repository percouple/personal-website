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

const ImageCard = styled.img`
    max-width: 200px;
    max-height: auto;
`;

export default function About () {

    return (
        <StyledWelcomeCard>
            <AboutCard>
                <div>About</div>
                <span>I did some stuff and some things for people and did music and stuff</span>
            </AboutCard>
            <ImageCard src="/photos/portrait.jpeg"></ImageCard>
        </StyledWelcomeCard>
    )
}