import styledComponent, { css } from './styledComponent';
import { getBackgroundColor, getTextColor } from './utils/';

const List = styledComponent('li', css`
  margin: 0 1em;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
`);

export default List;
