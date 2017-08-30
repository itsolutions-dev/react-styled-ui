import styledComponent, { css } from './styledComponent';
import { getTextColor, getBackgroundColor } from './utils/';

const Message = styledComponent('div', css`
  display: flex;
  align-items: center;
  min-height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
`);

export default Message;
