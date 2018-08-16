import React, {Component} from 'react';

import MultipleChoiceResult from './components/MultipleChoiceResult';
import GroupingsListTable from './components/GroupingsListTable';

import groupings from './groupings';
import questions from './questions';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <p><i className="orange far fa-info-circle" /> This option would include the groupings widget within each specific multiple choice question.</p>
      <MultipleChoiceResult
        question={questions[0]}
        sliceAmount={3}
        groupingsContent={<GroupingContent />}/>
    </div>
    <div className="block-flat">
      <StandaloneGroupingContent />
    </div>
  </div>
);

const GroupingContent = () => (
  <div style={{padding: 20}}>
    <GroupingsControls complex={false}/>
    <GroupingsListTable
      lists={groupings}
      evenColumns={true}
    />
  </div>
)

const StandaloneGroupingContent = () => (
  <div>
    <p><i className="orange far fa-info-circle" /> This option would be a single grouping comparison tool where users could simply toggle which question they wanted to use as a base comparison.</p>
    <GroupingsControls complex={true}/>
    <GroupingsListTable
      lists={groupings}
      evenColumns={true}
    />
</div>
)

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

  renderComplexSelect(){
    if (this.props.complex){
      return (
        <span>
          <label>Show me answers for </label>
          <select className="form-control" style={{display: "inline-block", maxWidth: 200, marginLeft: 10, marginRight: 10}}>
            <option>What's your favorite sport?</option>
            <option>Who rules the world?</option>
            <option>What time of year is it?</option>
          </select>
          <label>grouped by:</label>
        </span>
      )
    } else return <label>Show me answers grouped by:</label>

  }

  render() {
    return (
      <div className="text-center">
        {this.renderComplexSelect()}
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

