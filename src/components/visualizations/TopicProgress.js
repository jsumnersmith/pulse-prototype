import React, {Component} from 'react';
import chroma from 'chroma-js';
import { VictoryChart, VictoryLine, VictoryScatter, VictoryArea, VictoryAxis } from 'victory';

import './goals-summary.less'

const sampleData = [
  {
    date: 'Oct 2017',
    scores: [
      { score: 4, count: 43 },
      { score: 3, count: 28 },
      { score: 2, count: 60},
      { score: 1, count: 21 }
    ],
  },
  {
    date: 'Feb 2018',
    scores: [
      { score: 4, count: 49 },
      { score: 3, count: 30 },
      { score: 2, count: 59},
      { score: 1, count: 14 }
    ],
  },
  {
    date: 'Jun 2018',
    scores: [
      { score: 4, count: 51 },
      { score: 3, count: 60 },
      { score: 2, count: 33},
      { score: 1, count: 8 }
    ],
  }

];

const rubricText = {
  reading: [
    "At or above grade level",
    "1 Level below",
    "2 Levels below",
    "More than 2 Levels below"
  ],
  short: [
    "Highly Effective",
    "Effective",
    "Minimally Effective",
    "Ineffective",
    "Not Attempting"
  ],
  long: [
    "Students reach a better understanding or consensus based on evidence and opinions provided by others. Students hold each member of the group accountable by using questioning strategies and evidence. The conversation is respectful and courteous.",
    "Students ask for and offer evidence to support claims. However, members continue to maintain initial beliefs or positions about a topic without considering the arguments of others. The conversation is generally respectful but some members may not participate.",
    "There is a process in place for accountable talk. However, student dialogue is limited and there are minimal efforts to support statements, opinions, or claims. The conversation is generally respectful, but is often dominated by one member of the group.",
    "No clear process is in place to facilitate accountable talk. Lack of structure is evidenced by students who are off task, in conflict, or are unable to complete tasks.",
    "No clear process is in place to facilitate accountable talk. Lack of structure is evidenced by students who are off task, in conflict, or are unable to complete tasks."
  ]
}

const scale = chroma.scale(['#1FAF84', '#82CCB2', '#F3F9C5', '#FFD299', '#E59062']);

export default () => (
  <div className="row" style={{marginBottom: 20}}>
    <TopicProgress
      columnClass="col-md-12"
      data={sampleData}
      targetDataSlice={[3,4]}
      rubricSize="reading"
      topic="Period 1 F&P Status Relative to Target"
      textLabel="2nd grade students within 1 level of grade level target throughout the school year."
    />

  </div>
)

const getSlicePercentage = (scores = [], scoresForSlice = []) => {
  const filteredData =  scores.filter(score => scoresForSlice.includes(score.score));
  return Math.round((getScoresTotal(filteredData) / getScoresTotal(scores)) * 100);
};

const getScoresTotal = (scores) => {
  let total = 0;
  scores.forEach(score => total = total + score.count);
  return total;
}

const getLineChartData = (data= [], scoresForSlice = []) => {
  return data.map(datum => {
    return {
      x: datum.date,
      y: getSlicePercentage(datum.scores, scoresForSlice)}
  });
}

const getTotal = (data) => {
  let total = 0;
  if (data.scores) {
    data.scores.forEach(score => total = total + score.count)
  } else {
    data.forEach(datum => datum.scores.forEach(score => total = total + score.count));
  }
  return total;
}

class TopicProgress extends Component {
  render(){
    const { columnClass, data, topic, targetDataSlice } = this.props;
    const total = getTotal(data);
    const lineChartData = getLineChartData(data, targetDataSlice);
    return (
      <div className={`${columnClass}`}>
        <div className="goal-summary" style={{padding: 20}}>
          <div className="text-center">
            <h3><strong>{this.props.textLabel}</strong></h3>
          </div>
          <div>
            <VictoryChart
              domainPadding={{y: 0, x: 15}}
              width={800}
            >
              {/* Y Axis */}
              <VictoryAxis
                dependentAxis
                tickValues={[25, 50, 75, 100]}
                tickFormat={(t)=>`${t}%`}
                style={{
                  axis: { stroke: "none" },
                  tickLabels: {
                    fontSize: 8,
                    fontWeight: 700,
                    fontFamily: '"Lato", sans-serif',
                  },
                  grid: { stroke: "#eee", strokeWidth: '1px' }
                }}
              />
              {/* X Axis */}
              <VictoryAxis
                crossAxis
                style={{
                  axis: { stroke: "none" },
                  tickLabels: {
                    fontSize: 8,
                    fontWeight: 700,
                    fontFamily: '"Lato", sans-serif',
                  }
                }}
              />
              <VictoryLine
                domain={{y: [0, 100]}}
                height={200}
                data={lineChartData}
                style={{
                  data: { stroke: "#007DA0", strokeWidth: '3px' }
                }}
                labels={(d) => d}
                labelComponent={<LineGraphLabel />}
              />
              <VictoryArea
                domain={{y: [0, 100]}}
                height={200}
                data={lineChartData}
                style={{
                  data: { fill: "#007DA0", fillOpacity: .2, strokeWidth: 3}
                }}
              />
              <VictoryScatter
                domain={{y: [0, 100]}}
                data={lineChartData}
                size={5}
                style={{
                  data: { stroke: "#007DA0", strokeWidth: 3, fill: '#fff' }
                }}
              />
            </VictoryChart>
          </div>
          <div className="goal-summary__content">
            <h5 className="text-center"><strong>{ topic }</strong></h5>
            <BasicRubric
              rubricLength={4}
              sampleData={data[0]}
              total={total}
              rubricText={rubricText[this.props.rubricSize]}
              targetDataSlice={this.props.targetDataSlice}
            />
          </div>
        </div>
      </div>
   )
  }
};

class LineGraphLabel extends Component {
  render() {
    const {x, y, datum } = this.props;
    console.log(this.props);
    return (
      <text y={y} x={x-8} fontSize={10} fontWeight={700}>{datum.y}%</text>
    )
  }
}

const RubricBand = ({index, colorArr, active, rubricText}) => (
  <div className={`summary-histogram__item ${active && 'active'}`}>
    <div className="summary-histogram__bar-wrapper">
      <div className={`summary-histogram__bar`} style={{width: `100%`, background: colorArr[index]}}></div>
    </div>
    <div className="summary-histogram__range">{rubricText}</div>
  </div>
);

class BasicRubric extends Component {
  render(){
    const { total } = this.props;
    const colorArr = scale.colors(this.props.rubricLength);
    return (
      <div className="summary-histogram">
        {
          this.props.sampleData.scores
            .map((datum, index) =>
              <RubricBand
                active={this.props.targetDataSlice.includes(datum.score)}
                index={index}
                colorArr={colorArr}
                rubricText={this.props.rubricText[index]}
              />)
        }
        <div className="text-center meta" style={{marginTop: 5}}><span style={{opacity: .5}}>Total</span> {total}</div>
      </div>
    )
  }
};