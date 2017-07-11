import styledComponent, { css } from './styledComponent';

const Image = styledComponent('img', css`
  display: block;
  max-width: 100%;
  height: auto;
`);

export default Image;
