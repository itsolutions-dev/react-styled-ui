import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
} from './utils/';

const Card = styled({
  component: 'div',
  style: css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: ${props => getSizeOrDefault(props.width, '300px')};
    border-radius: 4px;
    box-shadow: inset 0 0 0px 0px #dee1e3, 0 0 14px #dee1e3;
  `,
});

export default Card;
