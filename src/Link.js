import styledComponent, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
  getOpacity,
  getHover,
} from './utils/';

const Link = styledComponent('a', css`
  margin: 0 1em;
  background-color: ${props => props.transparent === true ? 'transparent' : getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};

  &:hover {
    background-color: ${props => props.transparent === true ? 'transparent' : getHover(props)};
  }
`);

export default Link;
