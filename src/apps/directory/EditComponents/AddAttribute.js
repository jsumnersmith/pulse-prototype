import React, { Component } from 'react';
import './attribute-form.less';

export default class Edit extends Component {
  render() {
    return (
      <form className="attribute-form">
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
        <fieldset className="attribute-form__dates">
          <label>Start Date</label>
          <div className="row">
            <div className="col-md-4">
              <select className="form-control ">
                <option>Month</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-control col-md-4">
                <option>Day</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-control col-md-4">
                <option>Year</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="attribute-form__dates">
          <label>End Date</label>
          <div className="row">
            <div className="col-md-4">
              <select className="form-control ">
                <option>Month</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-control col-md-4">
                <option>Day</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-control col-md-4">
                <option>Year</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>


    )
  }
};