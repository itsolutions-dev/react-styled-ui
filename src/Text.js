import styled, { css } from './styledComponent';
import {
  getTextColor,
  getSizeOrDefault,
} from './utils/';

const Text = styled({
  component: 'p',
  style: css`
    font-size: ${props => getSizeOrDefault(props.size, props.theme.font.size)};
    font-family: ${props => props.theme.font.family};
    font-weight: ${props => props.bold === true ? 'bold' : props.theme.font.weight};
    line-height: ${props => getSizeOrDefault(props.lineHeight, props.theme.font.lineHeight)};
    ${(props) => {
      let align;
      if (props.left === true) align = 'left';
      if (props.right === true) align = 'right';
      if (props.center === true) align = 'center';
      if (props.justify === true) align = 'justify';
      if (align === undefined) return '';
      return `text-align: ${align};`;
    }}
    ${props => props.caps === true ? `
      text-transform: uppercase;
      letter-spacing: .2em;
    ` : ''}
    color: ${props => getTextColor(props)};
    margin: 0;
  `,
});

export default Text;
