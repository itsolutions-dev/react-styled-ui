import styled from 'styled-components';
import { getTextColor } from './utils/';

const Code = styled.code`
  font-family: monospace;
  color: ${props => getTextColor(props)};
`;

export default Code;
