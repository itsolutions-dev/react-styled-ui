import styled, { css } from './styledComponent';
import {
  getBorder,
  getSizeOrDefault,
} from './utils/';

const defaultWidth = '1px';

const Border = styled({
  component: 'div',
  style: css`
    border-style: ${props => props.borderStyle};
    border-top-width: ${props => props.top !== undefined ? getSizeOrDefault(props.top, defaultWidth) : 0};
    border-bottom-width: ${props => props.bottom !== undefined ? getSizeOrDefault(props.bottom, defaultWidth) : 0};
    border-left-width: ${props => props.left !== undefined ? getSizeOrDefault(props.left, defaultWidth) : 0};
    border-right-width: ${props => props.right !== undefined ? getSizeOrDefault(props.right, defaultWidth) : 0};
    border-color: ${props => props.color !== undefined ? props.color : getBorder(props)};
    color: inherit !important;
  `,
});

Border.defaultProps = {
  borderStyle: 'solid',
};

export default Border;
