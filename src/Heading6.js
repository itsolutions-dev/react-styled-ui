import styled from 'styled-components';
import { getTextColor, getColorWithAlpha } from './utils/';

const Heading5 = styled.h6`
  font-size: ${props => props.theme.h6.fontSize};
  font-weight: ${props => props.theme.h6.fontWeight};
  line-height: ${props => props.theme.h6.lineHeight};
  color: ${props => getColorWithAlpha(getTextColor(props), 0.54)};
`;

export default Heading5;
