// @flow

import React from 'react';
import styled, { css, keyframes } from './styledComponent';
import {
  getBackgroundColor,
  getSizeOrDefault,
} from './utils/';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 69, 200;
    stroke-dashoffset: -55px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

const LoaderContainer = styled({
  component: 'div',
  style: css`
    position: relative;
    width: ${props => getSizeOrDefault(props.size, '100px')};

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }

    > svg {
      animation: ${rotate} 2s linear infinite;
      height: 100%;
      transform-origin: center center;
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }

    > svg > circle {
      animation: ${dash} 1.5s ease-in-out infinite;
      stroke: ${props => props.color !== undefined ? props.color : getBackgroundColor(props)};
      stroke-width: ${props => props.thickness};
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
    }
  `,
});

type LoaderProps = {
  thickness: number,
};

const Loader = (props: LoaderProps) =>
  <LoaderContainer {...props}>
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" strokeMiterlimit="10" />
    </svg>
  </LoaderContainer>;

Loader.defaultProps = {
  primary: true,
  thickness: 4,
};

export default Loader;
