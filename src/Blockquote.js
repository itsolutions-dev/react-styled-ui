import styledComponent, { css } from './styledComponent';
import {
  getColorWithAlpha,
  getBackgroundColor,
  getTextColor,
} from './utils/';

const Blockquote = styledComponent('blockquote', css`
  padding: 10px 10px 10px 20px;
  font-size: ${props => props.theme.font.size};
  color: ${props => getTextColor(props)};
  border-left: 5px solid ${props => getColorWithAlpha(getBackgroundColor(props), 0.3)};
`);

export default Blockquote;
