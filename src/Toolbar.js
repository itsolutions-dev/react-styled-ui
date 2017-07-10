import styled from 'styled-components';
import { getBackgroundColor, getBorder } from './utils/';

const Toolbar = styled.div`
  padding: 15px;
  background-color:  ${props => getBackgroundColor(props)};
  border: 1px solid ${props => getBorder(props)};
`;

export default Toolbar;
