import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 10px;
    background-color: transparent;
    color: rgb(89, 178, 129);
    border: solid rgb(89, 178, 129) .2rem;
    min-height: 2rem;
    min-width: 10rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(54, 56, 68);
    }
`

export default function Project({entry}) {
    const clickHandler = () => {
        window.location.href = entry.url
    }

    return <>
            <h3>{entry.name}</h3>
            <div style={{marginBottom: '1rem'}}>{entry.description}</div>
            <StyledButton onClick={clickHandler}>Go to</StyledButton>
        </>
}