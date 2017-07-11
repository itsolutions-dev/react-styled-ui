import styled, { css } from 'styled-components';

const sharedProps = ['color', 'background'];

const common = css`
  ${props => sharedProps.map((x) => {
    const propName = x.replace(/([A-Z])/g, '-$1').toLowerCase();
    return props[x] !== undefined ? `${propName}: ${props[x]};` : '';
  })}
`;

const styledComponent = (tag, template) => (
  styled[tag]`
    ${common}
    ${template}
  `
);

export { css };
export default styledComponent;
