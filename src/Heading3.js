import styledComponent, { css } from './styledComponent';
import { getTextColor, getColorWithAlpha } from './utils/';

const Heading3 = styledComponent('h3', css`
  font-size: ${props => props.theme.h3.fontSize};
  font-weight: ${props => props.theme.h3.fontWeight};
  line-height: ${props => props.theme.h3.lineHeight};
  color: ${props => getColorWithAlpha(getTextColor(props), 0.54)};
`);

export default Heading3;
