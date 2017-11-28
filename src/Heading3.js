import styled, { css } from './styledComponent';
import { getTextColor, getColorWithAlpha, getOpacity } from './utils/';

const Heading3 = styled({
  component: 'h3',
  style: css`
    font-size: ${props => props.theme.h3.fontSize};
    font-weight: ${props => props.theme.h3.fontWeight};
    line-height: ${props => props.theme.h3.lineHeight};
    color: ${props => getColorWithAlpha(getTextColor(props), getOpacity(props, 0.54))};
  `,
});

export default Heading3;
