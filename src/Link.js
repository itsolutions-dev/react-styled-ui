import styled from 'styled-components';
import {
  getTextColor,
  getBackgroundColor,
  getOpacity,
  getHover,
} from './utils/';

const Link = styled.a`
  margin: 0 1em;
  background-color: ${props => props.transparent === true ? 'transparent' : getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};

  &:hover {
    background-color: ${props => props.transparent === true ? 'transparent' : getHover(props)};
  }
`;

export default Link;
