import styled from 'styled-components';
import {
    getTextColor,
    getBackgroundColor,
    getOpacity,
    getBorder,
} from './utils/';

const Select = styled.select`
  box-shadow: none;
  border: 1px solid ${props => getBorder(props)};
  border-radius: 0;
  height: 30px;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  opacity: ${props => getOpacity(props)};
`;

export default Select;