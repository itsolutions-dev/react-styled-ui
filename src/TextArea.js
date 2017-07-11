import styledComponent, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
  getOpacity,
} from './utils/';

const TextArea = styledComponent('textarea', css`
  width: 100%;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};
  padding: 8px;
`);

export default TextArea;
