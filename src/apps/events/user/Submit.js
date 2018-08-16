import React from 'react';
import SubHeader from '../components/SubHeader';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import '../events.less';

export default () => (
  <div className="wrapper wrapper--narrow">
    <SubHeader />
    <div className="block-flat">
      <h3 ><i className="far fa-calendar-alt circle-icon pulse-blue"></i> <strong> Details</strong></h3>
      <form>
        <fieldset className="form-group">
          <label>Event Name</label>
          <input className="form-control" placeholder="Event Name"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Description</label>
          <textarea className="form-control" placeholder="Event Description"></textarea>
        </fieldset>
        <fieldset className="form-group">
          <label>Leaders</label>
          <input className="form-control" placeholder="Event Leaders"/>
        </fieldset>
        <hr/>
        <h3><i className="far fa-map-marker-alt circle-icon purple"></i> <strong> Time & Location</strong></h3>
        <fieldset className="form-group">
          <label>Date</label>
          <DatePicker
            selected={moment()}
            onChange={()=>{console.log("I changed")}}
            className={"form-control"}
          />
          <div className="row">
            <div className="col-md-6">
              <label>Start Time</label>
              <input className="form-control" placeholder="Start Time"/>
            </div>
            <div className="col-md-6">
              <label>End Time</label>
              <input className="form-control" placeholder="End Time"/>
            </div>
          </div>
          <label>Total Hours</label>
          <input className="form-control" placeholder="Total Hours"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Location</label>
          <input className="form-control" placeholder="Event Location"/>
        </fieldset>
        <hr />
        <h3><i className="far fa-file-text circle-icon green"></i> <strong> Documentation</strong></h3>
        <fieldset className="form-group">
          <label>Add Link</label>
          <input className="form-control" placeholder="Event Location"/>
          <label>Upload File</label>
          <input className="form-control" placeholder="This will be a file uploader"/>
        </fieldset>
        <hr/>
        <h3><i className="far fa-info circle-icon red"></i> <strong>Meta Data</strong></h3>
        <fieldset className="form-group">
          <span>LIST TABLE</span>
        </fieldset>
        <fieldset className="form-group">
          <span>LIST TABLE</span>
        </fieldset>
        <fieldset className="text-center form-group">
          <a href="#submitted" className="btn btn-success"><i className="far fa-check"></i> Save and Publish Event</a>
          <a href="#invited" className="btn btn-primary"><i className="far fa-envelope"></i> Invite People</a>
        </fieldset>
      </form>
    </div>
  </div>
)