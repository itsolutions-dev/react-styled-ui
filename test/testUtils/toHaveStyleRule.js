/* eslint-disable one-var, no-useless-escape, no-underscore-dangle */

import expect from 'expect';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const findClassName = (actual) => {
  let className = '';

  const component = actual.component || actual;

  // constructor.name doesnt work in older versions of node
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

  // styled components adds the className on the end.
  className = className.split(' ').pop();

  if (actual.modifier) {
    className += actual.modifier;
  }
  return className;
};

const hasStyle = (styles, capture, value) => {
  if (styles && styles[1].match(capture)) {
    const values = styles[1]
      .match(capture)
      .map(r => r.replace(capture, '$1').trim());

    return (
      values &&
      values.some((v) => {
        if (value instanceof RegExp) {
          return v.match(value);
        }

        return v === value;
      })
    );
  }
  return false;
};

expect.extend({
  toHaveStyleRule(selector, value) {
    const className = findClassName(this.actual);
    const css = styleSheet.instance.tags[0].el.innerHTML;
    const styles = new RegExp(`${className}\s?{([^}]*)`, 'g').exec(css);
    const capture = new RegExp(`${selector}:[\s]*([^;]+)`, 'g');
    expect.assert(
      hasStyle(styles, capture, value),
      'Expected %s to have %s matching %s received: %s',
      className,
      selector,
      value,
      (styles && styles[1]) || css,
    );
    return this;
  },
});
