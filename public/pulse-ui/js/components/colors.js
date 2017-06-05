'use strict';

var chroma = require('chroma-js');
var _ = require('lodash');

module.exports = function (dataLength) {
  var baseColors = ['#337AB7', '#8B698E', '#A84343', '#CCB657', '#1FAF84'];

  var localizedColorMultiplier = function localizedColorMultiplier(colors) {
    var colorsWithShades = [];
    var loopCount = dataLength / colors.length;

    _.each(colors, function (colorVal) {
      var colorScale = chroma.bezier(['lightyellow', colorVal]).scale().colors(loopCount + 1);
      colorScale.reverse();
      for (var i = 0; i < loopCount; i++) {
        // eslint-disable-line no-plusplus
        colorsWithShades.push(colorScale[i]);
      }
    });

    return colorsWithShades;
  };

  return localizedColorMultiplier(baseColors);
};

module.exports.rubric = function (scale) {
  var rubricColors = ['#E59062', '#FFD299', '#F3F9C5', '#82CCB2', '#1FAF84'];

  if (scale === 4) {
    rubricColors.splice(2, 1);
  }
  if (scale === 3) {
    rubricColors = [rubricColors[0], rubricColors[2], rubricColors[4]];
  }
  if (scale === 2) {
    rubricColors = [rubricColors[0], rubricColors[4]];
  }
  return rubricColors;
};