import toHaveStyleRule from './toHaveStyleRule';
import toBeAGlobalStyle from './toBeAGlobalStyle';

expect.extend({
  toHaveStyleRule(actual, selector, expected) {
    const test = toHaveStyleRule(actual, selector, expected);

    return {
      ...test,
      message: `Expected ${selector} matching ${expected} received: ${test.actual}`,
    };
  },
  toBeAGlobalStyle(actual) {
    const test = toBeAGlobalStyle(actual);

    return {
      ...test,
      message: `Expected global styles to contain: ${test.actual}`,
    };
  },
});

// extend
/* expect.extend({
  toHaveStyleRule(selector, expected) {
    const test = testStyleRule(this.actual, selector, expected);

    expect.assert(
      test.pass,
      'Expected %s matching %s received: %s',
      selector,
      expected,
      test.actual,
    );
    return this;
  },
}); */
