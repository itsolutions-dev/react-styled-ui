import styledComponent, { css } from './styledComponent';
import {
  getBackgroundColor,
  getBorder,
} from './utils/';

const Footer = styledComponent('footer', css`
  padding: 15px;
  background-color:  ${props => getBackgroundColor(props)};
  border: 1px solid ${props => getBorder(props)};
`);

export default Footer;
