import React from 'react';
import LogoImage from '../assets/logo.png';
import {HeaderLogo} from '../styles/HeaderStyles.js';
export const Logo = ()=>{

    return(
        <HeaderLogo>
        <img src={LogoImage} alt="logo" /> <span>Hacker News API</span>
        </HeaderLogo>
    )   
}
   