import styledComponent, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
  getOpacity,
  getBorder,
  getHeight,
} from './utils/';

const Input = styledComponent('input', css`
  box-shadow: none;
  border: 2px solid ${props => getBorder(props)};
  border-radius: 0;
  min-height: ${props => getHeight(props)};
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};

  &::placeholder {
    color: ${props => getTextColor(props)};
    opacity: 0.54;
  }
`);

export default Input;
