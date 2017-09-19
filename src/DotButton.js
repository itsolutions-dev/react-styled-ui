import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
} from './utils';

const defaultSize = '16px';

const DotButton = styled({
  component: 'button',
  style: css`
    padding: 0;
    border-width: 4px;
    border-style: solid;
    border-color: transparent;
    background-clip: padding-box;
    border-radius: 99999px;
    appearance: none;
    width: ${props => getSizeOrDefault(props.size, defaultSize)};
    height: ${props => getSizeOrDefault(props.size, defaultSize)};
    background-color: ${props => props.active ? 'currentColor' : 'rgba(0,0,0,0.25)'};

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0.25;
    }
  `,
});

export default DotButton;
