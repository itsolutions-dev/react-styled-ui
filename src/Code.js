import styled, { css } from './styledComponent';
import { getTextColor } from './utils/';

const Code = styled({
  component: 'code',
  style: css`
    font-family: monospace;
    color: ${props => getTextColor(props)};
  `,
});

export default Code;
