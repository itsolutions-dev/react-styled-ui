// @flow

import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
  getBackgroundColor,
  getBorder,
  getOpacity,
} from './utils/';

const defaultSize = '66px';
const IconButton = styled({
  component: 'button',
  style: css`
    border: ${props => getBorder(props)};
    background-color: ${props => getBackgroundColor(props)};
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
  `,
});

export default IconButton;
