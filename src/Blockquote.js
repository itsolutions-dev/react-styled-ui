import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
  getColorWithAlpha,
  getBackgroundColor,
  getTextColor,
} from './utils/';

const Blockquote = styled({
  component: 'blockquote',
  style: css`
    padding: 10px 10px 10px 20px;
    font-size: ${props => getSizeOrDefault(props.size, props.theme.font.size)};
    color: ${props => getTextColor(props)};
    border-left: 5px solid ${props => getColorWithAlpha(getBackgroundColor(props), 0.3)};
  `,
});

export default Blockquote;
