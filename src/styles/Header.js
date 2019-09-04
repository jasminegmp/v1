import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const WhiteHeader = styled.h3`
    color: ${colors.white};
    font-size: ${fontSizes.large};
    font-family: ${fonts.OpenSans};
`

const NavyHeader = styled.h3`
    color: ${colors.navy};
    font-size: ${fontSizes.large};
    font-family: ${fonts.OpenSans};
`

export {WhiteHeader, NavyHeader};