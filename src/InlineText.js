import styled from 'styled-components';
import {
  getTextColor,
  getOpacity,
} from './utils/';

const InlineText = styled.span`
  padding-bottom: 5px;
  font-weight: ${props => (props.important ? '800' : '400')};
  background: transparent;
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};
`;

export default InlineText;
