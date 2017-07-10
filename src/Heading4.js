import styled from 'styled-components';
import { getTextColor, getColorWithAlpha } from './utils/';

const Heading4 = styled.h4`
  font-size: ${props => props.theme.h4.fontSize};
  font-weight: ${props => props.theme.h4.fontWeight};
  line-height: ${props => props.theme.h4.lineHeight};
  color: ${props => getColorWithAlpha(getTextColor(props), 0.54)};
`;

export default Heading4;
