import styledComponent, { css } from './styledComponent';
import { getTextColor } from './utils/';

const Code = styledComponent('code', css`
  font-family: monospace;
  color: ${props => getTextColor(props)};
`);

export default Code;
