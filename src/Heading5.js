import styledComponent, { css } from './styledComponent';
import { getTextColor, getColorWithAlpha } from './utils/';

const Heading5 = styledComponent('h5', css`
  font-size: ${props => props.theme.h5.fontSize};
  font-weight: ${props => props.theme.h5.fontWeight};
  line-height: ${props => props.theme.h5.lineHeight};
  color: ${props => getColorWithAlpha(getTextColor(props), 0.54)};
`);

export default Heading5;
