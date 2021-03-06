import styled, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
  getOpacity,
  getBorder,
} from './utils/';

const Textarea = styled({
  component: 'textarea',
  style: css`
    border: 2px solid ${props => getBorder(props)};
    border-radius: 0;
    background: ${props => getBackgroundColor(props)};
    color: ${props => getTextColor(props)};
    opacity: ${props => getOpacity(props)};
    padding: 8px;
  `,
});

export default Textarea;
