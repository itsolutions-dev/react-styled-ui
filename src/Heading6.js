import styled, { css } from './styledComponent';
import { getTextColor, getColorWithAlpha, getOpacity } from './utils/';

const Heading5 = styled({
  component: 'h6',
  style: css`
    font-size: ${props => props.theme.h6.fontSize};
    font-weight: ${props => props.theme.h6.fontWeight};
    line-height: ${props => props.theme.h6.lineHeight};
    color: ${props => getColorWithAlpha(getTextColor(props), getOpacity(props, 0.54))};
  `,
});

export default Heading5;
