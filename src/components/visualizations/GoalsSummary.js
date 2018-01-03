import React, {Component} from 'react';
import chroma from 'chroma-js';

import './goals-summary.less'

const sampleData = [
  [
    { score: 4, count: 43 },
    { score: 3, count: 36 },
    { score: 2, count: 9},
    { score: 1, count: 5 }
  ],
  [
    { score: 4, count: 53 },
    { score: 3, count: 29 },
    { score: 2, count: 8},
    { score: 1, count: 3 }
  ]
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
    <GoalSummary
      columnClass="col-md-6"
      data={sampleData[0]}
      targetDataSlice={[4]}
      rubricSize="reading"
      text="of 2nd grade students were at or above grade level at the beginning of the year."
    />
    <GoalSummary
      columnClass="col-md-6"
      data={sampleData[1]}
      targetDataSlice={[4]}
      rubricSize="reading"
      text="of 2nd grade students are at or above grade level at the end of the year."
      borderColor="rgb(229, 144, 98)"
    />
  </div>
)

const getSlicePercentage = (data = [], scoresForSlice = []) => {
  const filteredData =  data.filter(datum => scoresForSlice.includes(datum.score));
  return Math.round((getTotal(filteredData) / getTotal(data)) * 100);
};

const getTotal = (data) => {
  let total = 0;
  data.forEach((datum) => total = total + datum.count);
  return total;
}

class GoalSummary extends Component {
  render(){
    const { columnClass, data } = this.props;
    const total = getTotal(data)
    const percentage = getSlicePercentage(data, this.props.targetDataSlice);
    return (
      <div className={`${columnClass}`}>
        <div className="goal-summary">
          <div className="goal-summary__title">
            <DonutChartWrapper value={percentage}/>
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
        <div className="text-center meta" style={{marginTop: 5}}><span style={{opacity: .5}}>Total</span> {total}</div>
      </div>
    )
  }
};

const setColorAlpha = (color, alpha) => {
  return chroma(color).alpha(alpha).css();
}

const HistogramBar = ({index, datum, total, colorArr, active, rubricText}) => (
  <div className={`summary-histogram__item ${active && 'active'}`}>
    <div className="summary-histogram__bar-wrapper">
      <div className={`summary-histogram__bar ${datum.count === 0 && "empty"}` } style={{width: `${(datum.count / total) * 100}%`, background: colorArr[index]}}></div>
      <div className={`summary-histogram__bar` } style={{width: `${100 - ((datum.count / total) * 100) }%`, background: '#efefef', textAlign: 'right'}}></div>
      <div  className="summary-histogram__numbers">
        <div className="summary-histogram__count meta">{datum.count}<span className="summary-histogram__numbers-divider"></span> </div>
        <div className="summary-histogram__percent meta" >{`${Math.round((datum.count / total) * 100)}%`}</div>
      </div>
    </div>
    <div className="summary-histogram__range">{rubricText}</div>
  </div>
);

const DonutChartWrapper = ({value}) =>(
  <div className="donutchart-wrapper">
    <DonutChart value={value} />
    <h3 className="goal-summary__percentage"><strong>{value}%</strong></h3>
  </div>
)

class DonutChart extends Component{
  render() {
    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <svg width={this.props.size} height={this.props.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
      </svg>
    );
  }
};

DonutChart.defaultProps = {
  value:0,
  size:80,
  strokewidth:5
}