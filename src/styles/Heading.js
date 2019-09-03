import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h1`
    color: ${colors.lightTurquoise};
    font-size: ${fontSizes.h1};
    font-family: ${fonts.OpenSans};
`

export default Heading;