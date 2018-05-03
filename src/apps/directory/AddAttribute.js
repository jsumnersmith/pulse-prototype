import React, { Component } from 'react';
import './directory.less';
import './attribute-form.less';

export default class Edit extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Attribute Type</label>
          <select className="form-control">
            <option>School</option>
            <option>Role</option>
            <option>Grade</option>
            <option>Other</option>
          </select>
        </fieldset>
        <fieldset>
          <label>Attribute Value</label>
          <input className="form-control" placeholder="This will be typeahead to connect with existing values or add a new one."/>
        </fieldset>
        <fieldset>
          <label>Start Date</label>
          <select className="form-control">
            <option>Month</option>
          </select>
          <select className="form-control">
            <option>Day</option>
          </select>
          <select className="form-control">
            <option>Year</option>
          </select>
        </fieldset>
        <fieldset>
          <label>End Date</label>
          <select>
            <option>Month</option>
          </select>
          <select>
            <option>Day</option>
          </select>
          <select>
            <option>Year</option>
          </select>
        </fieldset>
        <div className="text-center" >
          <button className="btn btn-primary">Save</button>
          <button className="btn btn-primary btn-trans">Save and Add Another</button>
          <button className="btn btn-danger btn-trans">Cancel Changes</button>
        </div>
      </form>


    )
  }
};