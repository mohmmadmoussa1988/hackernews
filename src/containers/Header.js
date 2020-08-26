import React, { useState,useEffect,memo } from 'react';
import {TopHeader} from '../styles/HeaderStyles';
import {Logo} from '../components/Logo.js';
import {HeaderNav} from './Nav';
import {FilterBox} from './FilterBox.js';
import { Container, Row, Col } from 'reactstrap';

export const Header = ()=>{

    return(
       <TopHeader>
           <Container>
               <Row>
                   <Col xs="2"><Logo /></Col>
                   <Col xs="8"><HeaderNav /></Col>     
                   <Col xs="2"><FilterBox /></Col>
                </Row>
           </Container>
      {/*   <logo />
        <Nav/> */}
    </TopHeader>
    )
}
   