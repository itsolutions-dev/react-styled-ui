// @flow

import React from 'react';
import styled, { css } from './styledComponent';
import {
  getSizeOrDefault,
} from './utils/';

const defaultSize = '40px';
const defaultRadius = '99999px';

type AvatarProps = {
  src: string,
  alt: string,
  children: any,
};

const Avatar = styled({
  component: 'div',
  props: {
    children: ({ src, alt, children }: AvatarProps) => (
      src == null ? children : <img src={src} alt={alt || src} />
    ),
  },
  style: css`    
    ${props => (props.src == null ? `
      width: ${getSizeOrDefault(props.size, defaultSize)};
      height: ${getSizeOrDefault(props.size, defaultSize)};
      border-radius: ${getSizeOrDefault(props.radius, defaultRadius)}; 
      color: ${(props.color == null ? 'rgb(255, 255, 255)' : props.color)};
      background-color: ${(props.backgroundColor == null ? 'rgb(188, 188, 188)' : props.backgroundColor)} !important;
      font-size: ${getSizeOrDefault(props.fontSize, '20px')};
      user-select: none;
      align-items: center;
      justify-content: center;
      display: inline-flex;
    ` : `
      > img {
        width: ${getSizeOrDefault(props.size, defaultSize)};
        height: ${getSizeOrDefault(props.size, defaultSize)};
        border-radius: ${getSizeOrDefault(props.radius, defaultRadius)};
        display: inline-flex;
      } 
    `)} 
  `,
});

export default Avatar;
