import styledComponent, { css } from './styledComponent';
import {
  getTextColor,
  getOpacity,
  getHover,
} from './utils/';

const Link = styledComponent('a', css`
  text-decoration:none;
  font-size: ${props => props.theme.font.size};
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};

  &:hover{
    color: ${props => getHover(props)};
  }
`);

export default Link;
