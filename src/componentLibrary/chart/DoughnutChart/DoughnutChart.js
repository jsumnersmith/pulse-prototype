import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const TextLocation = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
  INSIDE: 'inside',
};

const getTotalHeight = ({ showText, textLocation, fontSize, size }) => {
  if (showText) {
    switch (textLocation) {
      case TextLocation.TOP:
      case TextLocation.BOTTOM:
        return (size + (fontSize * 2) + 15);
      default:
        return size;
    }
  }
  return size;
};

const getTotalWidth = ({ showText, textLocation, fontSize, size }) => {
  if (showText) {
    switch (textLocation) {
      case TextLocation.LEFT:
      case TextLocation.RIGHT:
        return (size + (fontSize * 2) + 15);
      case TextLocation.TOP:
      case TextLocation.BOTTOM:
        return size * 2;
      default:
        return size;
    }
  }
  return size;
};

const getMargin = location => ({ showText, textLocation }) => {
  if (!showText) {
    return null;
  }

  switch (textLocation) {
    case [location]:
      return '0';
    default:
      return 'auto';
  }
};

const deriveFlexType = ({ textLocation }) => {
  switch (textLocation) {
    case TextLocation.TOP:
    case TextLocation.BOTTOM:
      return 'column nowrap';
    default:
      return 'row nowrap';
  }
};

const derivePosition = ({ showText, textLocation }) => {
  if (showText) {
    if (textLocation === TextLocation.INSIDE) {
      return 'absolute';
    }
    return 'relative';
  }
  return 'absolute';
};

const deriveFontSize = ({ autoscaleText, chartSize, fontSize, strokeWidth, textLocation }) => {
  if (autoscaleText && textLocation === TextLocation.INSIDE) {
    // assumes that em-square is sized (fontSize * 1.5) x fontSize on avg
    // and a maximum of 4 characters
    return ((chartSize - (strokeWidth * 2)) / 4) * 1.5;
  }

  return fontSize;
};

const getChartSize = ({ chartSize }) => chartSize;
const getTrackFill = ({ trackFill, theme }) => theme.colors[trackFill] || trackFill;
const getStrokeWidth = ({ strokeWidth }) => strokeWidth;
const getIndicatorFill = ({ indicatorFill, theme }) => theme.colors[indicatorFill] || indicatorFill;
const getStrokeValue = ({ strokeValue }) => strokeValue || 0;
const getCircumference = ({ circumference }) => circumference || 10000;
const getTextColor = ({ textColor, theme }) => theme.colors[textColor] || textColor;

const Chart = styled.svg`
  position: relative;
  margin-left: ${getMargin(TextLocation.LEFT)};
  margin-right: ${getMargin(TextLocation.RIGHT)};
  margin-top: ${getMargin(TextLocation.TOP)};
  margin-bottom: ${getMargin(TextLocation.BOTTOM)};
  height: ${getChartSize}px;
  width: ${getChartSize}px;
`;

const Track = styled.circle`
  fill: transparent;
  stroke: ${getTrackFill};
  stroke-width: ${getStrokeWidth};
`;

const Indicator = styled.circle`
  fill: transparent;
  stroke: ${getIndicatorFill};
  stroke-width: ${getStrokeWidth};
  stroke-dasharray: ${getStrokeValue} ${getCircumference};
  transition: ${({ loading }) => (loading ? 'none' : 'stroke-dasharray .3s ease')};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// autoscale text inside the chart to prevent overflow
const PercentText = styled.strong`
  display: ${({ showText }) => (showText ? 'block' : 'none')};
  font-size: ${deriveFontSize}px;
  font-weight: 900;
  color: ${getTextColor};
  position: ${derivePosition};
  margin-left: ${getMargin(TextLocation.LEFT)};
  margin-right: ${getMargin(TextLocation.RIGHT)};
  margin-top: ${getMargin(TextLocation.TOP)};
  margin-bottom: ${getMargin(TextLocation.BOTTOM)};
`;

const Wrapper = styled.span`
  position: relative;
  display: flex;
  flex-flow: ${deriveFlexType};
  align-items: center;
  justify-content: center;
  height: ${getTotalHeight}px;
  width: ${getTotalWidth}px;
`;

const LoadingSpinner = styled.div`
  ${({ loading }) => loading && css`animation: ${rotate} 1.5s linear infinite;`}
  fill: transparent;
  height: ${getChartSize}px;
  width: ${getChartSize}px;
`;

const DoughnutChart = ({
  loading,
  totalPercentage,
  chartSize,
  strokeWidth,
  indicatorFill,
  trackFill,
  textColor,
  shouldShowText,
  textLocation,
  fontSize,
  autoscaleText,
}) => {
  const percentage = loading ? 25 : totalPercentage;
  const halfSize = (chartSize * 0.5);
  const radius = halfSize - (strokeWidth * 0.5);
  const circumference = 2 * Math.PI * radius;
  const strokeValue = ((percentage * circumference) / 100);
  const rotateVal = `rotate(-90 ${halfSize},${halfSize})`;
  const showText = loading ? false : shouldShowText;
  const props = {
    indicatorFill,
    loading,
    strokeWidth,
    strokeValue,
    textColor,
    textLocation,
    showText,
    chartSize,
    trackFill,
    fontSize,
    autoscaleText,
  };

  const renderTextFirst = textLocation === TextLocation.LEFT || textLocation === TextLocation.TOP;
  const percentText = !loading && (
    <PercentText {...props}>
      {`${Math.round(totalPercentage, 0)}%`}
    </PercentText>
  );

  return (
    <Wrapper size={chartSize} fontSize={fontSize} showText={showText} textLocation={textLocation}>
      {renderTextFirst && percentText}
      <LoadingSpinner {...props}>
        <Chart {...props}>
          <Track r={radius} cx={halfSize} cy={halfSize} transform={rotateVal} {...props} />
          <Indicator r={radius} cx={halfSize} cy={halfSize} transform={rotateVal} {...props} />
        </Chart>
      </LoadingSpinner>
      {!renderTextFirst && percentText}
    </Wrapper>
  );
};

DoughnutChart.propTypes = {
  loading: PropTypes.bool,
  totalPercentage: PropTypes.number,
  chartSize: PropTypes.number,
  strokeWidth: PropTypes.number,
  shouldShowText: PropTypes.bool.isRequired,
  textLocation: PropTypes.oneOf(Object.values(TextLocation)),
  indicatorFill: PropTypes.string,
  trackFill: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  autoscaleText: PropTypes.bool,
};

DoughnutChart.defaultProps = {
  loading: false,
  totalPercentage: 0,
  chartSize: 50,
  strokeWidth: 5,
  textLocation: TextLocation.INSIDE,
  shouldShowText: true,
  indicatorFill: 'blue',
  trackFill: 'grayLight',
  textColor: 'grayDark',
  fontSize: 12,
  autoscaleText: true,
};

export default DoughnutChart;
