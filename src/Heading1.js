import styled from 'styled-components';
import { getTextColor } from './utils/';

const Heading1 = styled.h1`
  font-size: ${props => props.theme.h1.fontSize};
  font-weight: ${props => props.theme.h1.fontWeight};
  line-height: ${props => props.theme.h1.lineHeight};
  color: ${props => getTextColor(props)};
`;

export default Heading1;
