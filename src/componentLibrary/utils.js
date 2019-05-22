import chroma from 'chroma-js';
import { get } from 'lodash';

/**
 * Adjusts a given color's luminance so that it is appropriately (according to
 * a desired contrast ratio) contasts a second, fixed color.
 *
 * @param {string} color Color to adjust
 * @param {string} [fixedColor="white"] Color to contrast against
 * @param {number} [contrastRatio=4.5]
 *    Desired ratio of contrast, with a default based on a WCAG standard:
 *    https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast
 * @return {string} The color adjusted for contrast
 */
export const adjustColorToContrast = (
  color,
  fixedColor = 'white',
  contrastRatio = 4.5,
) => {
  const baseLum = chroma(fixedColor).luminance();

  // Based on the contrast ratio formula here:
  // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
  const maxContrastedLum = ((baseLum + 0.05) / contrastRatio) - 0.05;
  const minContrastedLum = ((baseLum + 0.05) * contrastRatio) - 0.05;

  const lum = chroma(color).luminance();
  if (lum < baseLum && lum > maxContrastedLum) {
    return chroma(color).luminance(maxContrastedLum);
  } else if (lum >= baseLum && lum < minContrastedLum) {
    return chroma(color).luminance(minContrastedLum);
  }
  return color;
};

/** Shim for chroma.alpha */
export const alphaColor = (color, factor) => chroma(color).alpha(factor).css();

/** Shim for chroma.darken */
export const darkenColor = (color, factor) => chroma(color).darken(factor).css();

/** Select the appropriate color from the theme */
export const pickColor = (props, colorKey = 'color') => (
  get(props, `theme.colors.${get(props, colorKey)}`)
);

/** Select the appropriate contrasting color from the theme */
export const pickContrastingColor = (props, colorKey = 'color') => (
  get(props, `theme.contrastingColors.${get(props, colorKey)}`)
);
