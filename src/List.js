import styledComponent, { css } from './styledComponent';
import { getBackgroundColor, getTextColor } from './utils/';

const List = styledComponent('ul', css`
  margin: 0 1em;
  background: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
`);

export default List;
