import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
} from './utils/';

const Container = styled({
  component: 'div',
  style: css`
    padding-left: 3px;
    padding-right: 3px;
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => getSizeOrDefault(props.maxWidth, '1024px')};
  `,
});

export default Container;
