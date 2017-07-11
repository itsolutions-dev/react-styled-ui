import styledComponent, { css } from './styledComponent';

const Text = styledComponent('p', css`
  font-size:12px;
  font-family: sans-serif;
  font-weight: 300;
  line-height:18px;
  padding:22px;
  margin:0;
  color:#999;
`);

export default Text;
