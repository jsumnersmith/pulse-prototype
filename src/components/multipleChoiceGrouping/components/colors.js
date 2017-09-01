import chroma from 'chroma-js';

export default (dataLength) => {
  const baseColors = [
    '#337AB7',
    '#8B698E',
    '#A84343',
    '#CCB657',
    '#1FAF84',
  ];

  const loopCount = dataLength / baseColors.length;

  return baseColors.reduce((acc, colorVal) => {
    const colorScale = chroma
      .bezier(['lightyellow', colorVal])
      .scale()
      .colors(loopCount + 1)
      .reverse();

    return [
      ...acc,
      colorScale[0],
    ];
  }, []);
};

export const rubric = (scale) => {
  const rubricColors = [
    '#E59062',
    '#FFD299',
    '#F3F9C5',
    '#82CCB2',
    '#1FAF84',
  ];

  if (scale === 4) {
    return [rubricColors[0], rubricColors[1], rubricColors[3], rubricColors[4]];
  } else if (scale === 3) {
    return [rubricColors[0], rubricColors[2], rubricColors[4]];
  } else if (scale === 2) {
    return [rubricColors[0], rubricColors[4]];
  }
  return rubricColors;
};