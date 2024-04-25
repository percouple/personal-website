import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import { iconLinks } from '../data/site-data';

const SidebarStyled = styled.div`
    padding-left: 1rem;

    background-color: #222222;
    position: sticky;
    top: 3rem;
    z-index: 999;
    height: 200px;
`;

export default function SocialLinks () {

    return ( 
    <SidebarStyled>
        {iconLinks.map((icon) => {
            return <IconButton key={icon.id} data={icon}/>
          })}
    </SidebarStyled>
    )
}