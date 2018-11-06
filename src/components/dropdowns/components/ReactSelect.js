import React from 'react';
import Select from 'react-select';
import tokens from '@kickup/pulse-style-tokens';
import chroma from 'chroma-js';
import { relative } from 'path';

const sampleOptions = [
  {value: 'item1', label: 'Item 1'},
  {value: 'item2', label: 'Item 2'},
  {value: 'item3', label: 'Item 3'}
];

const styles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? `1px solid ${tokens.colors.pulseBlue}` : `1px solid ${tokens.colors.grayMediumLight}`,
    transition: `border .1s ease-in-out`,
    zIndex: 1,
  }),
  container: (provided, state) => ({
    ...provided,
    boxShadow: (state.isFocused || state.isHovered) ? `0px 0px 0px 1px ${tokens.colors.pulseBlue}` : `0px 0px 0px 1px ${tokens.colors.grayMediumLight}`,
    transition: `box-shadow .1s ease-in-out`,
    fontWeight: 500,
    fontSize: 16,
    color: tokens.colors.grayDark,
    background: state.isFocused ? chroma(tokens.colors.pulseBlue).alpha(.9).css() : tokens.colors.white
  }),
  menu: (provided) => ({
    ...provided,
    top: "-37px",
    left: "-8px",
    paddingTop: 70,
    width: 'calc(100% + 16px)',
    border: `2px solid ${tokens.colors.grayLight}`,
    boxShadow: `0px 5px 10px ${chroma(tokens.colors.grayMediumDark).alpha(0.25).css()}`,
    zIndex: 0
  }),
  menuList: (provided) => ({
    ...provided,
    paddingBottom: 0
  }),
  placeholder: (provided) => ({
    ...provided,
    color: tokens.colors.grayMedium,
    fontWeight: 600
  })
}

export default ({label="React Select", placeholder = "Select an option"}) => (
  <div>
    <label style={{zIndex: 2, position: 'relative', marginBottom: 5}}>{label}</label>
    <Select
      placeholder={placeholder}
      isClearable
      label="Single select"
      options={sampleOptions}
      styles={styles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          text: tokens.colors.grayDark,
          primary: tokens.colors.pulseBlue,
          primary75: chroma(tokens.colors.pulseBlue).alpha(.3).css(),
          primary50: chroma(tokens.colors.pulseBlue).alpha(.2).css(),
          primary25: tokens.colors.grayLight,
          danger: tokens.colors.red,
          dangerLight:  chroma(tokens.colors.red).brighten(.5)
        }
      })}
    />
  </div>
);