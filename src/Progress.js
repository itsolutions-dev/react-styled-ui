import styledComponent, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
} from './utils/';

const Label = styledComponent('progress', css`
  display: block;
  height: 6px;
  border-radius: ${props => props.theme.radius};
  overflow: hidden;
  appearance: none;
  &::-webkit-progress-bar {
    background-color: ${props => getBackgroundColor(props)};
  }
  &::-webkit-progress-value {
    background-color: ${props => getTextColor(props)};
  }
  &::-moz-progress-bar {
    background-color: ${props => getBackgroundColor(props)};
  }
`);

export default Label;
