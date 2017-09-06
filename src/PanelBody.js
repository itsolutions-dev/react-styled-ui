import styled, { css } from './styledComponent';
import { getBackgroundColor } from './utils/';

const PanelBody = styled({
  component: 'div',
  style: css`
    font-size: 16px;
    text-indent: 20px;
    padding: 18px;
    ${(props) => {
      const color = props.borderColor !== undefined ? props.borderColor : getBackgroundColor(props);
      return `
        border-left: 1px solid ${color};
        border-right: 1px solid ${color};
      `;
    }}
  `,
});

PanelBody.defaultProps = {
  primary: true,
};

export default PanelBody;
