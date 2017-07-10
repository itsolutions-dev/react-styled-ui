import styled from 'styled-components';
import { getTextColor, getColorWithAlpha } from './utils/';

const Heading5 = styled.h5`
  font-size: ${props => props.theme.h5.fontSize};
  font-weight: ${props => props.theme.h5.fontWeight};
  line-height: ${props => props.theme.h5.lineHeight};
  color: ${props => getColorWithAlpha(getTextColor(props), 0.54)};
`;

export default Heading5;
