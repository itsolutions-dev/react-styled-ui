import styled, { css } from './styledComponent';
import {
  getTextColor,
  getBackgroundColor,
} from './utils/';

// TODO : get font size from theme: small, medium, large

const Badge = styled({
  component: 'div',
  style: css`
    color: ${props => getTextColor(props)};
    background: ${props => getBackgroundColor(props)};
    font-size: 12px;
    padding: 2px 6px;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    border-radius: ${props => props.theme.radius};
  `,
});

export default Badge;
