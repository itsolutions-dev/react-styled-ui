import styled, { css } from './styledComponent';
import { getTextColor, getColorWithAlpha, getOpacity } from './utils/';

const Heading1 = styled({
  component: 'h1',
  style: css`
    font-size: ${props => props.theme.h1.fontSize};
    font-weight: ${props => props.theme.h1.fontWeight};
    line-height: ${props => props.theme.h1.lineHeight};
    color: ${props => getColorWithAlpha(getTextColor(props), getOpacity(props))};
  `,
});

export default Heading1;
