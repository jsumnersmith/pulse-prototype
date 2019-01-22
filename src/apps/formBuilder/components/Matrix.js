import React, {Component } from 'react';

import _ from 'lodash';

import './scales.less';

export default () => (
  <div>
    <table className="scale-table scale-table__matrix">
      <thead>
        <tr>
          <th className="empty">
          </th>
          <th className="scale-table__score-column">N/A (not observed)</th>
          <th className="scale-table__score-column">Not Attempting</th>
          <th className="scale-table__score-column">Ineffective</th>
          <th className="scale-table__score-column">Minimally Effective</th>
          <th className="scale-table__score-column">Effective</th>
          <th className="scale-table__score-column">Highly Effective</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          text="DIFFERENTIATION: Differentiating lessons based on student readiness, interest or other factors."
          count={6}
        />
        <TableRow
          text="RIGOR: Implementing lessons and activities that consistently require rigorous thinking of students."
          count={6}
        />
        <TableRow
          text="FORMATIVE ASSESSMENT: Checking for understanding throughout the lesson using information deliberate methods (such as questioning or short tasks)."
          count={6}/>
        <TableRow
          text="ADJUSTING INSTRUCTION: Using formative assessment data to make in-the-moment instructional adjustments and provide feedback."
          count={6}/>
      </tbody>
    </table>
  </div>
);

const RadioToggle = ({active}) => (
  <i className={`${active ? 'fas fa-check-circle blue': 'far fa-circle'} radio-toggle`}/>
);

class TableRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: null
    }
    this.checkActive = this.checkActive.bind(this);
    this.setCheckbox = this.setCheckbox.bind(this);
  }
  checkActive(index){
    return index === this.state.activeIndex;
  }
  setCheckbox(index){
    if (this.checkActive(index)){
      this.setState({activeIndex: null});
      return;
    } else {
      this.setState({activeIndex: index});
    }
  }
  render(){
    return (
      <tr>
        <td>{this.props.text}</td>
        {
          _.fill(new Array(this.props.count), 'filler', 0, this.props.count).map((value, index)=>{
            return <td onClick={()=>{this.setCheckbox(index)}}><RadioToggle active={this.checkActive(index)} /></td>
          })
        }
      </tr>
    )
  }
}