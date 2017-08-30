import styled, { css } from './styledComponent';
import { getTextColor, getColorWithAlpha } from './utils/';

const Heading3 = styled({
  component: 'h3',
  style: css`
    font-size: ${props => props.theme.h3.fontSize};
    font-weight: ${props => props.theme.h3.fontWeight};
    line-height: ${props => props.theme.h3.lineHeight};
    color: ${props => getColorWithAlpha(getTextColor(props), 0.54)};
  `,
});

export default Heading3;
