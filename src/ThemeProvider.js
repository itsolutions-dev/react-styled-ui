// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import deepMerge from './deepMerge';

const defaultTheme = {
  radius: 8,
  spacing: {
    margin: 8,
    padding: 8,
    iconSize: 24,
    borderSize: 1,
    shadowSize: 1,
  },
  font: {
    size: 16,
    weight: 200,
    lineHeight: 18,
    family: 'Roboto, sans-serif',
  },
  h1: {
    size: 32,
    weight: 900,
    lineHeight: 64,
  },
  h2: {
    size: 24,
    weight: 700,
    lineHeight: 32,
  },
  h3: {
    size: 18,
    weight: 500,
    lineHeight: 24,
  },
  selected: {
    size: 0,
    weight: 10,
    lineHeight: 0,
  },
  hover: {
    size: 0,
    weight: 10,
    lineHeight: 0,
  },
  transitions: {
    in: undefined,
    out: undefined,
  },
  palette: {
    default: 'green',
    defaultText: 'white',
    defaultDisabled: undefined,
    defaultHover: undefined,
    defaultSelected: undefined,
    primary: 'red',
    primaryText: 'white',
    primaryDisabled: undefined,
    primaryHover: undefined,
    primarySelected: undefined,
    secondary: 'blue',
    secondaryText: 'white',
    secondaryDisabled: undefined,
    secondaryHover: undefined,
    secondarySelected: undefined,
    disabled: 'lightgray',
    shadow: 'black',
  },
};

const getTheme = deepMerge.bind(null, defaultTheme);

export default ({ theme = {}, ...others }: { theme: Object }) => (
  <ThemeProvider theme={getTheme(theme)} {...others} />
);
