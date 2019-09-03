import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/jasminegump_logo.svg';
import styled from "styled-components"; // 💅 yay!
import Heading from '../styles/Heading';


const CustomBox = styled.div`
  border: 1px solid rgb(0, 143, 104);
  padding: 20px;

  h3 {
    color: rgb(109, 182, 91);
    margin: 0 0 10px;
    padding: 0;
  }
`
const StyledLink = styled(Link)`
  color: red;
`

const Image = styled.img`
    display: block;
    width: 10%;
    margin: auto;
`
class SCDemoPage extends React.Component {
  render() {

    return (

        <CustomBox>
            <Image src= {Logo} alt = "Jasmine Gump's logo" />
            <Heading>Banana Milkshakes</Heading>
            <p>We'll definitely need frozen bananas 
            and some milk.</p>
            <StyledLink to="/">To Homepage</StyledLink>
        </CustomBox>
    )
  }
};

export default SCDemoPage;
