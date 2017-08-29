import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="header"><h3>Add Response Configuration</h3></div>
      <div className="content">
        <form style={{marginTop: 20}}>
         <fieldset>
            <label>Short Name</label>
            <input className="form-control"/>
          </fieldset>
          <hr className="dark" />
          <fieldset>
            <label>Column of Unique ID</label>
            <select className="form-control">
              <option>#1 -- Column Text</option>
              <option>#2 -- Column Text</option>
              <option>#3 -- Column Text</option>
              <option>#4 -- Column Text</option>
            </select>
        </fieldset>
        <div style={{marginTop: 20}}>
          <Link to={"/multi-form"} className="btn btn-primary">Save</Link>
        </div>
        </form>

      </div>
    </div>
  </div>
);