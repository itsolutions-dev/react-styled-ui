import styled from 'styled-components';
import {
  getTextColor,
  getBackgroundColor,
  getOpacity,
} from './utils/';

const TextArea = styled.textarea`
  width: 100%;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};
  padding: 8px;
`;

export default TextArea;
