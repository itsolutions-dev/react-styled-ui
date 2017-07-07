import styled from 'styled-components';
import {
  getTextColor,
  getOpacity,
} from './utils/';

const Label = styled.label`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};
`;

export default Label;
