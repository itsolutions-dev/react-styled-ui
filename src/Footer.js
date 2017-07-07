import styled from 'styled-components';
import { getBackgroundColor, getBorder } from './utils/';

const Footer = styled.footer`
  padding: 15px;
  background-color:  ${props => getBackgroundColor(props)};
  border: 1px solid ${props => getBorder(props)};
`;

export default Footer;
