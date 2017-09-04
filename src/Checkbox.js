// @flow

import React from 'react';
import styled, { css, keyframes } from './styledComponent';
import {
  guid,
  getBorder,
  getBackgroundColor,
} from './utils/';

const shrinkBounce = keyframes`
  0%{
    transform: scale(1);
  }
  33%{    
    transform: scale(.85);
  }
  100%{
    transform: scale(1);    
  }
`;

const check = keyframes`
  0%{
    width: 0;
    height: 0;
    border-color: #fff;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  33%{
    width: .2em;
    height: 0;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  100%{    
    width: .2em;
    height: .5em;    
    border-color: #fff;
    transform: translate3d(0,-.5em,0) rotate(45deg);
  }
`;

const CheckboxContainer = styled({
  component: 'div',
  style: css`
    display: flex;
    flex-direction: column;
    padding: 0.5em;

    & * {
      box-sizing: border-box;
      user-select: none;
    }

    > input[type=checkbox]{ 
      visibility: hidden;
    }

    > input[type=checkbox] + label{
      position: relative;
      display: flex;
      margin: .6em 0;
      align-items: center;
      color: #fff;
      transition: color 250ms cubic-bezier(.4,.0,.23,1);
    }

    > input[type=checkbox] + label > span{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1em;
      width: 20px;
      height: 20px;
      background: transparent;
      border: 2px solid ${props => getBorder(props)};
      border-radius: 2px;
      cursor: pointer;  
      transition: all 250ms cubic-bezier(.4,.0,.23,1);
    }

    > input[type=checkbox] + label:hover, input[type=checkbox]:focus + label{
      color: #fff;
    }

    > input[type=checkbox] + label:hover > span, input[type=checkbox]:focus + label > span{
      background: rgba(255,255,255,.1);
    }

    > input[type=checkbox]:checked + label > span{
      border: .6em solid ${props => getBackgroundColor(props)};
      animation: ${shrinkBounce} 200ms cubic-bezier(.4,.0,.23,1);
    }

    > input[type=checkbox]:checked + label > span:before{
      content: '';
      position: absolute;
      top: .5em;
      left: .25em;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: ${check} 125ms 250ms cubic-bezier(.4,.0,.23,1) forwards;
    }
  `,
});

type CheckboxProps = {
  // eslint-disable-next-line
  id?: any,
  primary: boolean,
};

const Checkbox = (props: CheckboxProps) => {
  const { id, ...others } = props;
  const checkboxId = id === undefined ? guid() : id;
  return (
    <CheckboxContainer {...others}>
      <input type="checkbox" id={checkboxId} {...others} />
      <label htmlFor={checkboxId}>
        <span />
      </label>
    </CheckboxContainer>
  );
};

Checkbox.defaultProps = {
  primary: true,
};

export default Checkbox;
