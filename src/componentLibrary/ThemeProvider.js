import chroma from 'chroma-js';
import { mapValues } from 'lodash';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import tokens from '@kickup/pulse-style-tokens';

const findContrastingColor = color => (
  chroma(color).luminance() >= 0.5
    ? tokens.colors.grayDark
    : tokens.colors.white
);

const theme = {
  colors: tokens.colors,
  contrastingColors: mapValues(tokens.colors, findContrastingColor),
  fonts: tokens.typography.fonts,
  fontSizes: tokens.typography.fontSizes,
  fontWeights: tokens.typography.fontWeights,
  letterSpacings: tokens.typography.letterSpacings,
  lineHeights: tokens.typography.lineHeights,
  space: tokens.spacing,
};

export default ({ children }) => ( // eslint-disable-line react/prop-types
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
