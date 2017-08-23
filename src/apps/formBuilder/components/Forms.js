import React, { Component } from 'react';
import _ from 'lodash';
import AddingTable from './AddingTable';

export const openResponseForm = (
  <div>
    <fieldset>
      <label>Prompt</label>
      <input className="form-control"/>
    </fieldset>

    <fieldset>
      <label>Short Desription</label>
      <input className="form-control"/>
    </fieldset>
  </div>
)

export const scaledMatrixForm = (
  <div>
    <fieldset>
      <label>Rubric</label>
      <select className="form-control">
        <option>Rubric 1</option>
        <option>Rubric 2</option>
        <option>Rubric 3</option>
        <option>Rubric 4</option>
      </select>
    </fieldset>
    <fieldset>
      <label>Scale Values (1-5)</label>
      <input className="form-control" placeholder="Rubric Value 1"/>
      <input className="form-control" placeholder="Rubric Value 2"/>
      <input className="form-control" placeholder="Rubric Value 3"/>
      <input className="form-control" placeholder="Rubric Value 4"/>
      <input className="form-control" placeholder="Rubric Value 5"/>
    </fieldset>
    <hr className="dark"/>
    <div className="form-builder__scaled-questions">
      <div className="form-builder__scaled-question">
        <fieldset>
          <label>Prompt</label>
          <input className="form-control"/>
        </fieldset>
        <fieldset>
          <label>Goal</label>
          <select className="form-control">
            <option>Goal 1</option>
            <option>Goal 1a</option>
            <option>Goal 1b</option>
            <option>Goal 1c</option>
          </select>
        </fieldset>
      </div>
      <button className="btn btn-block btn-trans btn-primary"><i className="fa fa-plus"/> Add New Prompt and Goal</button>
    </div>
  </div>
)

export const interestsForm = (
  <div>
    <p><i className="fa fa-info-circle orange"/> Select topics in which survey respondents can express interest or ask for further support.</p>
     <fieldset>
      <label>Prompt</label>
      <input className="form-control"/>
    </fieldset>
    <hr />
    <fieldset>
      <label>Topics</label>
    </fieldset>
    <fieldset>
      <label><input type="checkbox" /> Goal 1</label>
    </fieldset>
    <fieldset>
      <label><input type="checkbox" /> Goal 1a</label>
    </fieldset>
    <fieldset>
      <label><input type="checkbox" /> Goal 1b</label>
    </fieldset>
    <fieldset>
      <label><input type="checkbox" /> Goal 1c</label>
    </fieldset>
    <fieldset>
      <label><input type="checkbox" /> Goal 1d</label>
    </fieldset>
    <fieldset>
      <label><input type="checkbox" /> Goal 1e</label>
    </fieldset>
  </div>
);

export const AddingTableExample = () => (
  <AddingTable
    headings={['Options']}
    rows={[
      {
        columns: [
          <input className="form-control" value="I'm feeling fine." />,
        ]
      },
      {
        columns: [
          <input className="form-control" value="I'm not feeling fine." />,
        ]
      }
    ]}
    AddForm={()=> (
      <div className="row" style={{paddingLeft: 27}}>
        <fieldset className="col-md-12">
          <input className="form-control" placeholder="Add Option and Hit Enter To Add Another"/>
          <button type="submit" className="btn btn-block btn-trans btn-primary" style={{marginTop: 10, marginLeft: 0}}>Add Option</button>
        </fieldset>
      </div>
    )}
  />
);

export class AddingTableButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: [
        "I'm feeling fine.",
        "I'm not feeling fine.",
        ""
      ]
    }
    this.addEmptyValue = this.addEmptyValue.bind(this);
  }

  addEmptyValue(){
    const values = _.cloneDeep(this.state.values);
    values.push("");
    console.log("I've added . . . ", values);
    this.setState({values});
  }

  render(){
    const { values } = this.state;
    console.log("One render. . . .", values);
    return (
      <div>
        <AddingTable
          headings={['Options']}
          rows={values.map((value)=>{
            return {
              columns: [
                <input className="form-control" value={value} />,
              ]
            }
          })}
          addOption={this.addEmptyValue}
        />
        <div className="text-right">
          <button className="btn btn-xs btn-default btn-trans" data-toggle="collapse" data-target="#button-sample">Add Options as Text</button>
          <fieldset id="button-sample" className="collapse">
            <textarea className="form-control" value={values.join('\n')}/>
          </fieldset>
        </div>
      </div>
    );
  }
};

export class AddingTableScale extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: [
        "DIFFERENTIATION: Differentiating lessons based on student readiness, interest or other factors.",
        "RIGOR: Implementing lessons and activities that consistently require rigorous thinking of students.",
        "FORMATIVE ASSESSMENT: Checking for understanding throughout the lesson using information deliberate methods (such as questioning or short tasks).",
        "ADJUSTING INSTRUCTION: Using formative assessment data to make in-the-moment instructional adjustments and provide feedback.",
        ""
      ]
    }
    this.addEmptyValue = this.addEmptyValue.bind(this);
  }

  addEmptyValue(){
    const values = _.cloneDeep(this.state.values);
    values.push("");
    this.setState({values});
  }

  render(){
    const { values } = this.state;
    console.log("One render. . . .", values);
    return (
      <div>
        <AddingTable
          headings={['Question Text', 'Related Topic']}
          rows={values.map((value)=>{
            return {
              columns: [
                <input className="form-control" value={value} />,
                <GoalsSelect />
              ]
            }
          })}
          addOption={this.addEmptyValue}
        />
        <div className="text-right">
          <button className="btn btn-xs btn-default btn-trans" data-toggle="collapse" data-target="#button-sample">Add Options as Text</button>
          <fieldset id="button-sample" className="collapse">
            <textarea className="form-control" value={values.join('\n')}/>
          </fieldset>
        </div>
      </div>
    );
  }
};

const GoalsSelect = () => (
  <select className="form-control">
    <option>Goal 1</option>
    <option>Goal 2</option>
    <option>Goal 3</option>
    <option>Goal 4</option>
  </select>
)

export class AddingTableRubric extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: [
        "DIFFERENTIATION: Differentiating lessons based on student readiness, interest or other factors.",
        "RIGOR: Implementing lessons and activities that consistently require rigorous thinking of students.",
        "FORMATIVE ASSESSMENT: Checking for understanding throughout the lesson using information deliberate methods (such as questioning or short tasks).",
        "ADJUSTING INSTRUCTION: Using formative assessment data to make in-the-moment instructional adjustments and provide feedback.",
        ""
      ]
    }
    this.addEmptyValue = this.addEmptyValue.bind(this);
  }

  addEmptyValue(){
    const values = _.cloneDeep(this.state.values);
    values.push("");
    this.setState({values});
  }

  render(){
    const { values } = this.state;
    console.log("One render. . . .", values);
    return (
      <div>
        <AddingTable
          headings={['Question Text', 'Related Topic', 'Rubric/Scale']}
          rows={values.map((value)=>{
            return {
              columns: [
                <input className="form-control" value={value} />,
                <GoalsSelect />,
                <RubricSelect />
              ]
            }
          })}
          addOption={this.addEmptyValue}
        />
        <div className="text-right">
          <button className="btn btn-xs btn-default btn-trans" data-toggle="collapse" data-target="#button-sample">Add Options as Text</button>
          <fieldset id="button-sample" className="collapse">
            <textarea className="form-control" value={values.join('\n')}/>
          </fieldset>
        </div>
      </div>
    );
  }
};

const RubricSelect = () => (
  <select className="form-control">
    <option>Rubric 1</option>
    <option>Rubric 2</option>
    <option>Rubric 3</option>
    <option>Rubric 4</option>
  </select>
);

export const multipleChoiceForm = (
    <div>
    <fieldset>
      <label>Prompt</label>
      <input className="form-control" value="How are you feeling today?"/>
    </fieldset>
    <hr className="dark" />
    <AddingTableExample />
  </div>
)
