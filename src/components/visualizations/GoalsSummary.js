import React, {Component} from 'react';
import chroma from 'chroma-js';
import truncate from 'truncate';
import Chart from 'chart.js';

import './goals-summary.less'

const sampleData = [
  [
    { score: 5, count: 23 },
    { score: 4, count: 4 },
    { score: 3, count: 12 },
    { score: 2, count: 7 },
    { score: 1, count: 14 }
  ],
  [
    { score: 5, count: 56 },
    { score: 4, count: 34 },
    { score: 3, count: 12 },
    { score: 2, count: 21 },
    { score: 1, count: 6 }
  ]
];

const rubricText = {
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
    <GoalSummary
      columnClass="col-md-6"
      data={sampleData[0]}
      targetDataSlice={[4,5]}
      rubricSize="short"
      text="of our community members expressed a strong interest in this amazing topic."
    />
    <GoalSummary
      columnClass="col-md-6"
      data={sampleData[1]}
      targetDataSlice={[1,2,3]}
      rubricSize="long"
      text="of our community members expressed a less than appropriate level of admiration for our beloved leader."
      borderColor="rgb(229, 144, 98)"
    />
  </div>
)

const getSlicePercentage = (data = [], scoresForSlice = []) => {
  const filteredData =  data.filter(datum => scoresForSlice.includes(datum.score));
  console.log(filteredData);
  return Math.round((getTotal(filteredData) / getTotal(data)) * 100);
};

const getTotal = (data) => {
  let total = 0;
  data.forEach((datum) => total = total + datum.count);
  return total;
}

class GoalSummary extends Component {
  componentDidMount() {
    const percent = getSlicePercentage(this.props.data, this.props.targetDataSlice);
    const ctx = this.refs.goalSummaryChart.getContext('2d');
    return new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percent, 100 - percent],
          backgroundColor: ['rgb(31, 175, 132)', '#bbb']
        }],
        labels: ['', '']
      },
      options: {cutoutPercentage: 70, animation: false, showTooltips: false }
    });
  }
  render(){
    const { columnClass, data, borderColor } = this.props;
    const total = getTotal(data)
    const percentage = getSlicePercentage(data, this.props.targetDataSlice);
    return (
      <div className={`${columnClass}`}>
        <div className="goal-summary">
          <div className="goal-summary__title">
            <div className="goal-summary__chart">
              <canvas ref="goalSummaryChart" width="80" height="80"></canvas>
            </div>
            <h3 className="goal-summary__percentage" style={{background: `#bbb linear-gradient(to right, #bbb 50%, @c2 50%)`}}><strong>{percentage}%</strong></h3>
            <h4><strong>{this.props.text}</strong></h4>
          </div>
          <div className="goal-summary__content">
            <Histogram
              data={data}
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

class Histogram extends Component {
  render(){
    const { total } = this.props;
    const colorArr = scale.colors(this.props.data.length);
    return (
      <div className="summary-histogram">
        {
          this.props.data
            .map((datum, index) =>
              <HistogramBar
                active={this.props.targetDataSlice.includes(datum.score)}
                index={index}
                datum={datum}
                total={total}
                colorArr={colorArr}
                rubricText={this.props.rubricText[index]}
              />)
        }
        <div className="text-center meta"><span style={{opacity: .5}}>Total</span> {total}</div>
      </div>
    )
  }
};

const HistogramBar = ({index, datum, total, colorArr, active, rubricText}) => (
  <div className="summary-histogram__item">
    <div className="summary-histogram__range">{truncate(rubricText, 50) }</div>
    <div className="summary-histogram__bar-wrapper"><div className={`summary-histogram__bar ${active && 'active'}`} style={{width: `${(datum.count / total) * 100}%`, background: colorArr[index]}}></div></div>
    <div className="summary-histogram__count meta">{datum.count} <span style={{opacity: .5}}>({`${Math.round((datum.count / total) * 100)}%`})</span></div>
  </div>
);