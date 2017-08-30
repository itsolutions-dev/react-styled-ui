import styled, { css } from './styledComponent';
import { getTextColor } from './utils/';

const Divider = styled({
  component: 'hr',
  style: css`
    border: 0;
    border-bottom-width: ${props => props.size !== undefined ? props.size : '1px'};
    border-bottom-style: solid;
    border-bottom-color: ${props => props.color !== undefined ? props.color : getTextColor(props)};
  `,
});

export default Divider;
