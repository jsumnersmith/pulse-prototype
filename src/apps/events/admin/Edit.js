import React from 'react';
import SubHeader from '../components/SubHeader';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import '../events.less';


export default () => (
  <div className="wrapper wrapper--narrow">
    <SubHeader activeName="edit" admin={true}/>
    <div className="block-flat">
      <h3 ><i className="fa fa-calendar circle-icon pulse-blue"></i> <strong> Details</strong></h3>
      <form>
        <fieldset className="form-group">
          <label>Event Name</label>
          <input className="form-control" value="Blended Learning Workshop"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Description</label>
          <textarea className="form-control" placeholder="Event Description">A giddy ATM's sheet comes with it the thought that the mislaid queen is a tray. Unfortunately, that is wrong; on the contrary, a dropping collision is a pantry of the mind. Waxes are enthralled cars. The scooters could be said to resemble cleanly scenes.</textarea>
        </fieldset>
        <fieldset className="form-group">
          <label>Leaders</label>
          <input className="form-control" value="Bella Smith"/>
        </fieldset>
        <hr/>
        <fieldset className="form-group">
          <label>Does this event require external registration?</label>
          <div style={{padding: "5px 0"}}>
            <a className="btn btn-sm btn-success"><i className="fa fa-check"/> Yes, this is an externally linked event</a> <a className="btn btn-sm btn-default btn-trans"><i className="fa fa-times"/> No, this event is just in KickUp</a>
          </div>
          <input className="form-control" value="https://myeventsregistrationurl.com"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Allow users to confirm their own attendance (with confirmation code)?</label>
          <div style={{padding: "5px 0"}}>
            <a className="btn btn-sm btn-default"><i className="fa fa-check"/> Yes, allow user confirmation</a> <a className="btn btn-sm btn-success"><i className="fa fa-times"/> No, I'll manage confirmation</a>
          </div>
        </fieldset>
        <hr/>
        <h3><i className="fa fa-map-marker circle-icon purple"></i> <strong> Time & Location</strong></h3>
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
              <input className="form-control" value="2:30 PM"/>
            </div>
            <div className="col-md-6">
              <label>End Time</label>
              <input className="form-control" value="4:00 PM"/>
            </div>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <label>Location</label>
          <input className="form-control" value="East High School Auditorium"/>
        </fieldset>
        <hr/>
        <h3><i className="fa fa-info circle-icon red"></i> <strong>Meta Data</strong></h3>
        <fieldset className="form-group">
          <span>LIST TABLE</span>
        </fieldset>
        <fieldset className="form-group">
          <span>LIST TABLE</span>
        </fieldset>
        <hr/>
        <h3><i className="fa fa-file-text-o circle-icon yellow"></i> <strong>Feedback</strong></h3>
        <fieldset className="form-group">
          <label>Feedback Form URL</label>
          <input className="form-control" value="http://jotform.com/awesome-feedback-form"/>
        </fieldset>
        <fieldset className="text-center form-group">
          <a href="#submitted" className="btn btn-success"><i className="fa fa-check"></i> Save and Publish Event</a>
          <a href="#invited" className="btn btn-primary"><i className="fa fa-envelope"></i> Invite People</a>
        </fieldset>
      </form>
    </div>
  </div>
)