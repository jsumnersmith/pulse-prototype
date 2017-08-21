import React from 'react';

export const multipleChoiceForm = (
    <div>
    <fieldset>
      <label>Prompt</label>
      <input className="form-control"/>
    </fieldset>
    <hr className="dark" />
    <div className="form-builder__scaled-questions">
      <div className="form-builder__scaled-question">
        <fieldset>
          <label>Option Name</label>
          <input className="form-control"/>
        </fieldset>
      </div>
      <button className="btn btn-block btn-trans btn-primary"><i className="fa fa-plus"/> Add New Option</button>
    </div>
  </div>
)

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