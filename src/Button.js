import styled from 'styled-components';
import {
  getBackgroundColor,
  getTextColor,
  getOpacity,
  getBorder,
  getHover,
} from './utils/';

const Button = styled.button`
  padding: 6px 12px;
  margin-left:5px;
  font-size: ${props => props.theme.font.size};
  background-color: ${props =>
    props.reverse === true ? getTextColor(props) : getBackgroundColor(props)};
  color: ${props =>
    props.reverse === true ? getBackgroundColor(props) : getTextColor(props)};
  opacity: ${props => getOpacity(props)};
  border: ${props =>
    props.reverse === true ? '0' : `2px solid ${getBorder(props)}`};
  &:hover {
    ${props => props.reverse === true ? `color: ${getHover(props)}` : ''};
    ${props => props.reverse === true ? '' : `background-color: ${getHover(props)}`};
  }
  &:focus {
    outline:0;
  }
`;

export default Button;
