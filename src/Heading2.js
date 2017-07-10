import styled from 'styled-components';
import { getTextColor, getColorWithAlpha } from './utils/';

const Heading1 = styled.h2`
  font-size: ${props => props.theme.h2.fontSize};
  font-weight: ${props => props.theme.h2.fontWeight};
  line-height: ${props => props.theme.h2.lineHeight};
  color: ${props => getColorWithAlpha(getTextColor(props), 0.9)};
`;

export default Heading1;
