/* eslint-disable one-var, no-useless-escape, no-underscore-dangle */

import getCSS from './getCSS';

const removeSpaces = string => string.replace(/\s+/g, '');

const toBeAGlobalStyle = (actual) => {
  const css = getCSS();

  return {
    actual,
    pass: removeSpaces(css).indexOf(removeSpaces(actual)) !== -1,
  };
};

export default toBeAGlobalStyle;
