import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
  getBackgroundColor,
} from './utils/';

const PanelFooter = styled({
  component: 'div',
  style: css`
    font-size: 20px;
    font-weight: 500;
    padding: 10px 20px;
    color: ${props => getBackgroundColor(props)};
    ${(props) => {
      const color = props.borderColor !== undefined ? props.borderColor : getBackgroundColor(props);
      return `
        border-top: 1px solid ${color};
        border-left: 1px solid ${color};
        border-bottom: 1px solid ${color};
        border-right: 1px solid ${color};
      `;
    }}
    border-bottom-left-radius: ${props => getSizeOrDefault(props.radius, props.theme.radius)};
    border-bottom-right-radius: ${props => getSizeOrDefault(props.radius, props.theme.radius)};
    border-radius: 0 !important;
  `,
});

PanelFooter.defaultProps = {
  primary: true,
};

export default PanelFooter;
