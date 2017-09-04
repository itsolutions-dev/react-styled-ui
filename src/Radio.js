// @flow

import React from 'react';
import styled, { css, keyframes } from './styledComponent';
import {
  guid,
  getBorder,
  getBackgroundColor,
} from './utils/';

const toggleKeyframe = keyframes`
  0% {
    opacity: .2;
    transform: scale(1.5);
  }

  50% {
    opacity: .05;
    transform: scale(1);
  }

  100% {
    transform: none;
  }
`;

const RadioContainer = styled({
  component: 'div',
  style: css`
    display: flex;
    flex-direction: column;
    padding: 0.5em;

    & * {
      box-sizing: border-box;
      user-select: none;
    }

    > input[type=radio]{
      visibility: hidden;
    }

    > input[type=radio] + label {
      position: relative;
      display: flex;
      margin: .6em 0;
      align-items: center;
      color: transparent;
      transition: color 250ms cubic-bezier(.4,.0,.23,1);
    }


    > input[type=radio] + label > span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1em;
      width: 20px;
      height: 20px;
      background: transparent;
      border: 2px solid ${props => getBorder(props)};
      border-radius: 20px;
      cursor: pointer;
      transition: all 250ms cubic-bezier(.4,.0,.23,1);
    }

    > input[type=radio] + label:hover > span, input[type=radio]:focus + label > span {
      background: rgba(255,255,255,.1);
    }

    > input[type=radio]:checked + label > span {
      border-color: ${props => getBackgroundColor(props)};
      border-style: solid;
      border-width: 6px;
      animation: ${toggleKeyframe} 300ms cubic-bezier(.4,.0,.23,1);
      box-shadow: inset 0 0 0 .4em white,0 0 0 .3em;
      animation-iteration-count: 1;
    }
  `,
});

type RadioProps = {
  // eslint-disable-next-line
  id?: any,
  primary: boolean,
};

const Radio = (props: RadioProps) => {
  const { id, ...others } = props;
  const radioId = id === undefined ? guid() : id;
  return (
    <RadioContainer {...others}>
      <input type="radio" id={radioId} {...others} />
      <label htmlFor={radioId}>
        <span />
      </label>
    </RadioContainer>
  );
};

Radio.defaultProps = {
  primary: true,
};

export default Radio;
