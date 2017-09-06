import styled, { css } from './styledComponent';
import {
  getBorder,
  getBackgroundColor,
} from './utils/';

const Progress = styled({
  component: 'progress',
  style: css`
    display: block;
    height: 6px;
    border-radius: ${props => props.theme.radius};
    overflow: hidden;
    appearance: none;
    &::-webkit-progress-bar {
      background: ${props => props.background !== undefined ? props.background : getBorder(props)};
    }
    &::-webkit-progress-value {
      background: ${props => props.color !== undefined ? props.color : getBackgroundColor(props)};
    }
    &::-moz-progress-bar {
      background: ${props => props.color !== undefined ? props.color : getBackgroundColor(props)};
    }
  `,
});

Progress.defaultProps = {
  primary: true,
};

export default Progress;
