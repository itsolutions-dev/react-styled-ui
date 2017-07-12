import styledComponent, { css } from './styledComponent';

const BackgroundImage = styledComponent('div', css`
  background-size: cover;
  background-position: center;
  height: 0;
  padding-bottom: ${props => props.ratio !== undefined ? props.ratio * 100 : '100'}%;
  background-image: url(${props => props.src});
`);

export default BackgroundImage;
