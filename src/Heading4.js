import styled, { css } from './styledComponent';
import { getTextColor, getColorWithAlpha, getOpacity } from './utils/';

const Heading4 = styled({
  component: 'h4',
  style: css`
    font-size: ${props => props.theme.h4.fontSize};
    font-weight: ${props => props.theme.h4.fontWeight};
    line-height: ${props => props.theme.h4.lineHeight};
    color: ${props => getColorWithAlpha(getTextColor(props), getOpacity(props, 0.54))};
  `,
});

export default Heading4;
