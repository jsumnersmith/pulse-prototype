import React, {Component} from 'react';
import { GroupingsListTable } from 'pulse-ui';

import groupings from './groupings';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <GroupingsControls />
      <GroupingsListTable
        lists={groupings}
        evenColumns={true}
      />
    </div>
  </div>
);

const options = {
  "Grade": ["1", "2", "3"],
  "School": ["HS", "ES", "MS"],
  "Role": ["English", "History", "Science"],
  "Time of Year": ["Fall", "Winter", "Spring"],
  "What's your favorite sport?": ["Cricket", "Bowling", "Judo"],
  "Who rules the world?": ["Girls"],
  "What time of year is it?": ["Summmer", "School"]
}

class GroupingsControls extends Component {
  state = {
    active: "Grade"
  }
  onChange(active){
    this.setState({active})
  }
  renderOptions(){
    return (
      <div style={{marginTop:10, marginBottom: 10}}>
        <button className="btn btn-sm btn-primary">All</button>
        { options[this.state.active].map((option) => <button className="btn btn-sm btn-default">{option}</button>) }
      </div>
    )
  }
  render() {
    return (
      <div className="text-center">
        <label>Show me answers grouped by:</label>
        <select className="form-control" style={{display: "inline-block", maxWidth: 200, marginLeft: 10}} onChange={(e)=>{this.onChange(e.target.value)}}>
          <option>Grade</option>
          <option>School</option>
          <option>Role</option>
          <option>Time of Year</option>
          <optgroup label="Answers to">
            <option>What's your favorite sport?</option>
            <option>Who rules the world?</option>
            <option>What time of year is it?</option>
          </optgroup>
        </select>
        {this.renderOptions()}
      </div>
    );
  }
}

