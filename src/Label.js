import styled, { css } from './styledComponent';
import {
  getTextColor,
  getOpacity,
} from './utils/';

const Label = styled({
  component: 'label',
  style: css`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: ${props => getTextColor(props)};
    opacity: ${props => getOpacity(props)};
  `,
});

export default Label;
