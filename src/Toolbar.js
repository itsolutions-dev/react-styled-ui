import styled, { css } from './styledComponent';
import { getBackgroundColor } from './utils/';

const Toolbar = styled({
  component: 'div',
  style: css`
    display: flex;
    min-height: 48px;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    background:  ${props => getBackgroundColor(props)};
  `,
});

export default Toolbar;
