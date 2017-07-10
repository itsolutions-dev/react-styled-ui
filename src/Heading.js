// @flow

import React from 'react';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Heading3 from './Heading3';
import Heading4 from './Heading4';
import Heading5 from './Heading5';
import Heading6 from './Heading6';

const headings = [
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
];

type HeadingProps = {
  size: 1 | 2 | 3 | 4 | 5 | 6,
};

const Heading = ({ size = 1, ...others }: HeadingProps) => {
  const Component = headings[size - 1];
  return <Component {...others} />;
};

export default Heading;
