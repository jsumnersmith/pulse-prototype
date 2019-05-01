import React from 'react';
import { ContentBlock } from '../../componentLibrary/layout'
import tokens from '@kickup/pulse-style-tokens';
import { VictoryChart, VictoryStack, VictoryBar, VictoryAxis, VictoryGroup} from 'victory';
import { random } from 'lodash';
import {colors} from '@kickup/pulse-ui/src/deprecated';




const StackedBarChart = ({x,y}) => (
  <ContentBlock
    headingText="Coaching Time Spend"
    mb={ tokens.spacing[2] }
  >
    <VictoryChart
      height={200}
    >
      <VictoryAxis
        dependentAxis
        tickValues={data[y]}
        width={400}
        style={{
          tickLabels: {fontSize: 4},
          grid: {strokeWidth: 0}
        }}
      />
        <VictoryStack
          horizontal
          colorScale={colors(data[x].length)}
          style={{
            parent: {
              border: "none"
            },
            data: {
              fillOpacity: 0.75, stroke: "white", strokeWidth: 2
            },
            labels: {
              fontSize: 10, fill: tokens.colors.grayDark, padding: 5
            },
            grid: {strokeWidth: 0}
          }}
        >
          { renderBarsWithData(x, y) }
        </VictoryStack>
    </VictoryChart>
  </ContentBlock>
);

export default StackedBarChart;

const renderBarsWithData = (x,y) => {
  const bars = data[x].map((stackItem, index) => {
    let barData = data[y].map((barItem, i) => {
      return { x: i+1, y: random(5,20) }
    });
    console.log(barData);
    return <VictoryBar
      key={index}
      data={ barData}
   />
  })
  return bars;
};

const data = {
  audience: [
    'Direct Teacher Support',
    'Planning for Teacher Support',
    'Direct Student Support',
    'Other Administrative'
  ],
  focus: [
    'Device Operations',
    'Student Agency',
    'Family and Community Partnerships',
    'Tier 1 Instruction',
    'Learning Habits and Expectations'
  ],
  month: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
};