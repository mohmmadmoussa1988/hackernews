import React from 'react';
import {  Nav, NavItem, NavLink } from 'reactstrap';
import {HeaderNavStyle} from '../styles/HeaderStyles';
import { useLocation} from "react-router";

export const HeaderNav = ()=>{
    let location = useLocation();
    return(
        <HeaderNavStyle>
          <Nav>
          <NavItem className={`${location.pathname==='/' ? "active" : ""}`}>
            <NavLink href="/" >New Articles</NavLink>
          </NavItem>
          <NavItem className={`${location.pathname==='/top-articles' ? "active" : ""}`}>
            <NavLink href="/top-articles">Top Articles</NavLink>
          </NavItem>
        </Nav>
      </HeaderNavStyle>
    
    )
}
   