import styledComponent, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
} from './utils/';

// TODO : get font size from theme: small, medium, large

const Badge = styledComponent('div', css`
  color: ${props => getTextColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  font-size: 12px;
  padding: 2px 6px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
  border-radius: ${props => props.theme.radius};
`);

export default Badge;
