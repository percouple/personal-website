import React from "react";
import styled from 'styled-components';
import { StyledButton } from "../styles/universalStyles";

const LinkButton = styled(StyledButton)`
    border-width: 0.2rem;
    min-height: 2rem;
    min-width: 10rem;
`

export default function Project({entry}) {
    const clickHandler = () => {
        window.location.href = entry.url
    }

    const image = '../data' + entry.imgUrl;

    // console.log(image)

    return <>
            <img src={image} alt="stuff"></img>
            <h3>{entry.name}</h3>
            <div style={{marginBottom: '1rem', backgroundImage: entry.imgUrl}}>{entry.description}</div>
            <h5>{entry.stack}</h5>
            <LinkButton onClick={clickHandler}>Go to</LinkButton>
        </>
}