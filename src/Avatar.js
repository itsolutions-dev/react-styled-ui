import styledComponent, { css } from './styledComponent';
import {
  getSizeOrDefault,
} from './utils/';

const defaultSize = '40px';

const Avatar = styledComponent('img', css`
  width: ${props => getSizeOrDefault(props.size, defaultSize)};
  height: ${props => getSizeOrDefault(props.size, defaultSize)};
  border-radius: ${props => getSizeOrDefault(props.radius, '99999px')};
`);

export default Avatar;
