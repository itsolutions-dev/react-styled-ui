import styledComponent, { css } from './styledComponent';

const Tooltip = styledComponent('div', css`
  display: inline-block;
  position: relative;
  color: inherit !important;
  background: transparent !important;

  &::before {
    display: none;
    content: "${props => props.text !== undefined ? props.text : ''}";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, -4px);
    white-space: nowrap;
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    color: ${props => props.color !== undefined ? props.color : '#fff'};
    background: ${props => props.background !== undefined ? props.background : '#000'};
    border-radius: ${props => props.theme.radius};
  }

  &::after {
    display: none;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 8px);
    content: " ";
    border-width: 6px;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${props => props.background !== undefined ? props.background : '#000'};
  }

  &:hover {
    &::before, &::after {
      display: block;
    }
  }
`);

export default Tooltip;
