import styled, { css } from './styledComponent';
import { getBackgroundColor, getTextColor } from './utils/';

const List = styled({
  component: 'ul',
  style: css`
    margin: 0 1em;
    background: ${props => getBackgroundColor(props)};
    color: ${props => getTextColor(props)};
  `,
});

export default List;
