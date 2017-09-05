import styled, { css } from './styledComponent';
import { getSizeOrDefault } from './utils/';

const Fixed = styled({
  component: 'div',
  style: css`
    position: fixed;
    ${props => props.top !== undefined ? `top: ${getSizeOrDefault(props.top, 0)};` : ''}
    ${props => props.bottom !== undefined ? `bottom: ${getSizeOrDefault(props.bottom, 0)};` : ''}
    ${props => props.left !== undefined ? `left: ${getSizeOrDefault(props.left, 0)};` : ''}
    ${props => props.right !== undefined ? `right: ${getSizeOrDefault(props.right, 0)};` : ''}
  `,
});

export default Fixed;
