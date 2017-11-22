// @flow

import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
  getBorder,
  getOpacity,
} from './utils/';

const defaultSize = '66px';
const IconButton = styled({
  component: 'button',
  style: css`
    border: ${props => getBorder(props)};
    ${props => props.backgroundColor == null ? 'background: none' : `background-color: ${props.backgroundColor}`};
    opacity: ${props => getOpacity(props)};
    box-sizing: border-box;
    cursor: pointer;
    margin: 0px;
    padding: 16px;
    outline: none;
    position: relative;
    width: ${props => getSizeOrDefault(props.size, defaultSize)};
    height: ${props => getSizeOrDefault(props.size, defaultSize)};
    border-radius: 99999px;
    &:focus {
      outline: none;
    }
    ${props => props.backgroundColor == null ? `
      &:hover {
        background-color: ${props.backgroundColorHover == null ? '#f5f7f7' : props.backgroundColorHover};
      }
    ` : ''}

  `,
});

export default IconButton;
