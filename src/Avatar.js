import styledComponent, { css } from './styledComponent';

const getSize = (props) => {
  const { size } = props;
  let result = '40px';
  if (typeof size === 'string') {
    result = size;
  } else if (typeof size === 'number') {
    result = `${size}px`;
  }
  return result;
};

const Avatar = styledComponent('img', css`
  width: ${props => getSize(props)};
  height: ${props => getSize(props)};
  border-radius: ${props => props.radius !== undefined ? getSize(props.radius) : '99999px'};
`);

export default Avatar;
