import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
  getTextColor,
  getBackgroundColor,
} from './utils/';

const PanelHeader = styled({
  component: 'div',
  style: css`
    font-size: 24px;
    font-weight: 600;
    padding: 20px;
    color: ${props => getTextColor(props)};
    ${(props) => {
      const color = props.borderColor !== undefined ? props.borderColor : getBackgroundColor(props);
      return `
        background: ${color};
        border: 1px solid ${color};
      `;
    }}
    border-top-left-radius: ${props => getSizeOrDefault(props.radius, props.theme.radius)};
    border-top-right-radius: ${props => getSizeOrDefault(props.radius, props.theme.radius)};
  `,
});

PanelHeader.defaultProps = {
  primary: true,
};

export default PanelHeader;
