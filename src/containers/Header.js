import React, { useState,useEffect,memo } from 'react';
import {TopHeader} from '../styles/HeaderStyles';
import {Logo} from '../components/Logo.js';
import {HeaderNav} from './Nav';
import {FilterBox} from '../components/FilterBox.js';
import { Container, Row, Col } from 'reactstrap';

export const Header = ()=>{

    return(
       <TopHeader>
               <Row>
                   <Col xs="3"><Logo /></Col>
                   <Col xs="6"><HeaderNav /></Col>     
                   <Col xs="3"><FilterBox /></Col>
                </Row>
           
    </TopHeader>
    )
}
   