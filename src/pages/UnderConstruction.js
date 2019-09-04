import React from "react";
import styled from 'styled-components';
import Countdown from '../components/Countdown';
import Construction from '../images/under_construction.svg';
import GithubLogo from '../images/Github-Mark-64px.png';
import EudoraLogo from '../images/icon_circle.png';
import MailIcon from '../images/icons8-composing-mail-100.png';
import Heading from '../styles/Heading';
import {WhiteHeader, NavyHeader} from '../styles/Header';
import {IconNonInverted, IconInverted} from '../styles/Icon';
import InlineLink from '../styles/InlineLink';
import { Grid , Icon} from 'semantic-ui-react';

const Image = styled.img`

    width: 100%;
    margin: auto;
`

const Container = styled.div`
    padding: 40px;
`



const UnderConstruction = () => (
    <Grid columns={2} stackable style={{height: '100vh'}}>
        <Grid.Column>
            <Container>
                <Heading style = {{marginTop: "40%"}}>COMING SOON</Heading>
                <WhiteHeader>My website is under construction as it goes through lots of changes. It will be back shortly.
                In the meantime, check out my Github, Eudora or email me.</WhiteHeader>
                <InlineLink href="https://github.com/jasminegmp" target="_blank"><IconInverted src= {GithubLogo}/></InlineLink>
                <InlineLink href="https://eudora.app/" target="_blank"><IconNonInverted src= {EudoraLogo}/></InlineLink>
                <InlineLink href="mailto:jasminegmp@gmail.com" target="_blank"><IconInverted src = {MailIcon}/></InlineLink>
            </Container>
        </Grid.Column>
        <Grid.Column style = {{background: "#FFFFFF"}}>
            <Container>
                <NavyHeader style = {{marginTop: "40%", textAlign: "center"}}>Will be back in...</NavyHeader>
                <Countdown timeTillDate = "Oct 4 19"/>
                <Image src= {Construction} alt = "Under construction image" />
            </Container>
        </Grid.Column>
    </Grid>
);


export default UnderConstruction;