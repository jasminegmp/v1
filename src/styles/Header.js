import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Header = styled.h3`
    color: ${colors.lightTurquoise};
    font-size: ${fontSizes.xxlarge};
    font-family: ${fonts.OpenSans};
`

export default Header;