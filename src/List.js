import styled from 'styled-components';
import { getBackgroundColor, getTextColor } from './utils/';

const List = styled.ul`
  margin: 0 1em;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
`;

export default List;
