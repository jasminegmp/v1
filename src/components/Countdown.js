import React from "react";
import moment from 'moment';
import styled from 'styled-components';
import theme from '../styles/theme';
const { colors, fontSizes, fonts } = theme;

//Help from https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${fonts.Nunito};
`
const CountdownContainer = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`

const CountdownUnit = styled.div`
    font-size: ${fontSizes.small};
    font-family: ${fonts.Nunito};
    color: ${colors.navy};
    text-transform: uppercase;
    text-align: center;
    
`

const CountdownItem = styled.div`
    color: ${colors.navy};
    font-size: ${fontSizes.h3};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    font-family: ${fonts.Nunito};
    margin-top: 20px;
`

class Countdown extends React.Component {
	state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined
	}
	
	componentDidMount() {
        
        this.interval = setInterval(() => {
            const {timeTillDate} = this.props;
            const then = moment(timeTillDate, "MMM Do YY");
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');
            this.setState({ days, hours, minutes, seconds });
        }, 1000);

	}

	componentWillUnmount() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	}
	
	render() {
        const {days, hours, minutes, seconds} = this.state;
		
		return (
            <Container>
                <CountdownContainer>
                    <CountdownUnit>days</CountdownUnit>
                    <CountdownItem>{days}</CountdownItem>
                </CountdownContainer>
                <CountdownContainer>
                    <CountdownUnit>hours</CountdownUnit>
                    <CountdownItem>{hours}</CountdownItem>
                </CountdownContainer>
                <CountdownContainer>
                    <CountdownUnit>minutes</CountdownUnit>
                    <CountdownItem>{minutes}</CountdownItem>
                </CountdownContainer>
                <CountdownContainer>
                    <CountdownUnit>seconds</CountdownUnit>
                    <CountdownItem>{seconds}</CountdownItem>
                </CountdownContainer>
            </Container>

		);
	}
}

export default Countdown;