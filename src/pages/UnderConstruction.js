import React from "react";
import styled from 'styled-components';
import Construction from '../images/under_construction.svg';
import Heading from '../styles/Heading';
import Header from '../styles/Header';


const Image = styled.img`
    display: block;
    width: 50%;
    margin: auto;
`
const Container = styled.div`
    text-align: center;
`

const UnderConstruction = () => (
    <Container>
        <Heading >COMING SOON</Heading>
        <Header>My website is under construction as it goes through lots of changes!</Header>
        <Image src= {Construction} alt = "Under construction image" />

    </Container>
);


export default UnderConstruction;