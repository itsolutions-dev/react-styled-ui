// @flow

import React from 'react';
import styled, { css } from './styledComponent';
import {
  guid,
  getTextColor,
  getBackgroundColor,
} from './utils/';

const ToggleContainer = styled({
  component: 'div',
  style: css`
    display: flex;
    justify-content: left;
    align-items: left;

    > input[type=checkbox]{
      height: 0;
      width: 0;
      visibility: hidden;
    }

    > label {
      cursor: pointer;
      text-indent: -9999px;
      width: 45px;
      height: 24px;
      background: grey;
      display: block;
      border-radius: 100px;
      position: relative;
    }

    > label:after {
      content: '';
      position: absolute;
      top: 2.5px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: ${props => getTextColor(props)};
      border-radius: 90px;
      transition: 0.3s;
    }

    > input:checked + label {
      background: ${props => getBackgroundColor(props)};
    }

    > input:checked + label:after {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }

    > label:active:after {
      width: 30px;
    }
  `,
});

type ToggleProps = {
  // eslint-disable-next-line
  id?: any,
  primary: boolean,
};

const Toggle = (props: ToggleProps) => {
  const { id, ...others } = props;
  const toggleId = id === undefined ? guid() : id;
  return (
    <ToggleContainer {...others}>
      <input type="checkbox" id={toggleId} {...others} />
      <label htmlFor={toggleId} />
    </ToggleContainer>
  );
};

Toggle.defaultProps = {
  primary: true,
};

export default Toggle;
