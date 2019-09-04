import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const InlineLink = styled.a`
  margin-right: 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: ${colors.babyBlue};
  &:hover,
  &:focus,
  &:active {
    color: ${colors.lightTurquoise};
    outline: 0;
  }
  `
export default InlineLink;