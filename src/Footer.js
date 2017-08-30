import styled, { css } from './styledComponent';
import {
  getBackgroundColor,
  getBorder,
} from './utils/';

const Footer = styled({
  component: 'footer',
  style: css`
    padding: 15px;
    background:  ${props => getBackgroundColor(props)};
    border: 1px solid ${props => getBorder(props)};
  `,
});

export default Footer;
