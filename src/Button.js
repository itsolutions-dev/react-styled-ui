import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
  getBackgroundColor,
  getTextColor,
  getOpacity,
  getBorder,
  getHover,
} from './utils/';

const Button = styled({
  component: 'button',
  style: css`
    padding: 8px 16px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: ${props => props.theme.font.size};
    background: ${props =>
      props.reverse === true ? getTextColor(props) : getBackgroundColor(props)};
    color: ${props =>
      props.reverse === true ? getBackgroundColor(props) : getTextColor(props)};
    opacity: ${props => getOpacity(props)};
    border: ${props =>
      props.reverse === true ? '0' : `2px solid ${getBorder(props)}`};
    ${props => props.radius !== undefined ? `border-radius: ${getSizeOrDefault(props.radius, '8px')}` : ''};
    &:hover {
      ${props => props.reverse === true ? `color: ${getHover(props)}` : ''};
      ${props => props.reverse === true ? '' : `background: ${getHover(props)}`};
    }
    &:focus {
      outline: none;
    }
  `,
});

export default Button;
