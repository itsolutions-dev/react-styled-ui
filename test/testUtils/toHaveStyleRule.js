/* eslint-disable one-var, no-useless-escape, no-underscore-dangle */

import getCSS from './getCSS';

const testError = {
  pass: false,
};

const findClassName = (actual) => {
  let className = '';

  const component = actual.component || actual;

  if (component.constructor && typeof component.toJSON === 'function') {
    // react test renderer
    className = component.toJSON().props.className;
  } else if (component.node) {
    // enzyme
    if (component.node.className) {
      className = component.node.className;
    } else if (
      actual.node._reactInternalInstance._renderedComponent._instance !== null
    ) {
      className =
        actual.node._reactInternalInstance._renderedComponent._instance.state
          .generatedClassName;
    } else {
      className =
        actual.node._reactInternalInstance._renderedComponent._currentElement
          .props.className;
    }
  }

  className = className.split(' ').pop();

  if (actual.modifier) {
    className += actual.modifier;
  }
  return className;
};

const toHaveStyleRule = (actual, selector, expected) => {
  const className = findClassName(actual);
  const css = getCSS();
  const styles = new RegExp(`${className}\s?{([^}]*)`, 'g').exec(css);
  const capture = new RegExp(`(?:[^\-]|^)${selector}:[\s]*([^;]+)`, 'g');

  const matches = styles && styles[1].match(capture);
  if (!matches) return testError;

  const values = matches.map(r => r.replace(capture, '$1').trim());
  if (!values) return testError;

  return {
    actual: values && values[0],
    pass: values.some(
      v => (expected instanceof RegExp ? v.match(expected) : v === expected),
    ),
  };
};

export default toHaveStyleRule;
