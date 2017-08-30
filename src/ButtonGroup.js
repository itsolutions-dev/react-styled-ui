import styled, { css } from './styledComponent';

const ButtonGroup = styled({
  component: 'div',
  style: css`
    display: flex;
    flex-direction: ${props => props.vertical === true ? 'column' : 'row'};

    > button {
      margin: 0;
    }
  `,
});

export default ButtonGroup;
