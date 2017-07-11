import styledComponent, { css } from './styledComponent';
import { getBackgroundColor, getBorder } from './utils/';

const Toolbar = styledComponent('div', css`
  padding: 15px;
  background-color:  ${props => getBackgroundColor(props)};
  border: 1px solid ${props => getBorder(props)};
`);

export default Toolbar;
