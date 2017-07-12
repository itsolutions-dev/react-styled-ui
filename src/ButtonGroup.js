import styledComponent, { css } from './styledComponent';

const ButtonGroup = styledComponent('div', css`
  display: flex;
  flex-direction: ${props => props.vertical === true ? 'column' : 'row'};

  > button {
    margin: 0;
  }
`);

export default ButtonGroup;
