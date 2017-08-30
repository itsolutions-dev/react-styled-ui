import styled, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
} from './utils/';

const Label = styled({
  component: 'progress',
  style: css`
    display: block;
    height: 6px;
    border-radius: ${props => props.theme.radius};
    overflow: hidden;
    appearance: none;
    &::-webkit-progress-bar {
      background: ${props => props.background !== undefined ? props.background : getBackgroundColor(props)};
    }
    &::-webkit-progress-value {
      background: ${props => props.color !== undefined ? props.color : getTextColor(props)};
    }
    &::-moz-progress-bar {
      background: ${props => props.color !== undefined ? props.color : getTextColor(props)};
    }
  `,
});

export default Label;
