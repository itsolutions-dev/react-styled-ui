import styled, { css } from 'styled-components';
import { getSizeOrDefault } from './utils/';

const getSize = size => getSizeOrDefault(size, '0px');

const getSizesForDimensions = (dimensions, prop, size) => {
  const correctedSize = getSize(size);
  return dimensions.map(x => `
    ${prop}-${x}: ${correctedSize};
  `).join('');
};

const getXSizes = getSizesForDimensions.bind(null, ['left', 'right']);
const getYSizes = getSizesForDimensions.bind(null, ['top', 'bottom']);

const getMarginXSizes = getXSizes.bind(null, 'margin');
const getMarginYSizes = getYSizes.bind(null, 'margin');

const getPaddingXSizes = getXSizes.bind(null, 'padding');
const getPaddingYSizes = getYSizes.bind(null, 'padding');

const sharedProps = [
  {
    prop: 'width',
    getValue: getSize,
  },
  {
    prop: 'height',
    getValue: getSize,
  },
  {
    prop: 'color',
  },
  {
    prop: 'background',
  },
  {
    prop: 'fontSize',
    getValue: getSize,
  },
  {
    prop: 'radius',
    handler: size => `border-radius: ${getSize(size)}`,
  },
  {
    prop: 'opacity',
  },
  {
    prop: 'margin',
    getValue: getSize,
  },
  {
    prop: 'marginTop',
    getValue: getSize,
  },
  {
    prop: 'marginBottom',
    getValue: getSize,
  },
  {
    prop: 'marginLeft',
    getValue: getSize,
  },
  {
    prop: 'marginRight',
    getValue: getSize,
  },
  {
    prop: 'marginX',
    handler: getMarginXSizes,
  },
  {
    prop: 'marginY',
    handler: getMarginYSizes,
  },
  {
    prop: 'padding',
    getValue: getSize,
  },
  {
    prop: 'paddingTop',
    getValue: getSize,
  },
  {
    prop: 'paddingBottom',
    getValue: getSize,
  },
  {
    prop: 'paddingLeft',
    getValue: getSize,
  },
  {
    prop: 'paddingRight',
    getValue: getSize,
  },
  {
    prop: 'paddingX',
    handler: getPaddingXSizes,
  },
  {
    prop: 'paddingY',
    handler: getPaddingYSizes,
  },
];

const common = css`
  ${props => sharedProps.map(({ prop, getValue, handler }) => {
    const value = props[prop];
    if (value === undefined) return '';
    if (handler !== undefined) return handler(value);

    const propName = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
    return `${propName}: ${getValue !== undefined ? getValue(value) : value};`;
  })}
`;

const styledComponent = (tag, template) => (
  styled[tag]`
    ${template}
    ${common}
  `
);

export { css };
export default styledComponent;
