import styledComponent, { css } from './styledComponent';
import {
  getTextColor,
  getOpacity,
} from './utils/';

const InlineText = styledComponent('span', css`
  padding-bottom: 5px;
  font-weight: ${props => (props.important ? '800' : '400')};
  background: transparent;
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};
`);

export default InlineText;
