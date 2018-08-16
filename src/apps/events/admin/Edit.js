import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Collapsible from 'react-collapsible';
import '../events.less';

export default class EditForm extends Component {
  constructor(props){
    super(props);
    this.toggleAdvanced = this.toggleAdvanced.bind(this);
    this.toggleMeta = this.toggleMeta.bind(this);
    this.state = {
      advancedOpen: false,
      metaOpen: false
    };
  }
  toggleAdvanced(){
    this.setState({advancedOpen: !this.state.advancedOpen});
  }
  toggleMeta(){
    this.setState({metaOpen: !this.state.metaOpen});
  }
  render(){
    return (
      <div className="wrapper wrapper--narrow">
        <SubHeader activeName="create" admin={true}/>
        <div className="block-flat">
          <h3 ><i className="far fa-calendar-alt circle-icon pulse-blue"></i> <strong> Details</strong></h3>
          <form>
            <fieldset className="form-group">
              <label>Event Name</label>
              <input className="form-control" value="Blended Learning Workshop"/>
            </fieldset>
            <fieldset className="form-group">
              <label>Description</label>
              <textarea className="form-control" placeholder="Event Description">
                A giddy ATM's sheet comes with it the thought that the mislaid queen is a tray. Unfortunately, that is wrong; on the contrary, a dropping collision is a pantry of the mind. Waxes are enthralled cars. The scooters could be said to resemble cleanly scenes.
              </textarea>
            </fieldset>
            <fieldset className="form-group">
              <label>Leaders</label>
              <input className="form-control"value="Bella Smith"/>
            </fieldset>
            <hr/>
            <h3><i className="far fa-map-marker circle-icon purple"></i> <strong> Time & Location</strong></h3>
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
                  <input className="form-control" value="2:00 PM"/>
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
            <h3><i className="far fa-file-text-o circle-icon yellow"></i> <strong>Feedback</strong></h3>
            <fieldset className="form-group">
              <label>Feedback Form URL</label>
              <input className="form-control" value="http://jotform.com/awesome-feedback-form"/>
            </fieldset>
            <hr/>
            <Collapsible
              trigger={<h3 style={{cursor: "pointer"}}><i className="far fa-info circle-icon red"></i> <strong>Meta Data</strong> <i className={`far fa-${this.state.metaOpen ? "minus" : "plus"}`} style={{marginLeft: 10, opacity: ".6"}}/></h3>}
              onOpen={this.toggleMeta}
              onClose={this.toggleMeta}
            >
              <fieldset className="form-group">
                <span>LIST TABLE</span>
              </fieldset>
              <fieldset className="form-group">
                <span>LIST TABLE</span>
              </fieldset>
            </Collapsible>
            <hr/>
            <Collapsible
              trigger={<h3 style={{cursor: "pointer"}}><i className="far fa-gear circle-icon green"></i> <strong> Advanced Settings</strong> <i className={`far fa-${this.state.advancedOpen ? "minus" : "plus"}`} style={{marginLeft: 10, opacity: ".6"}}/></h3>}
              onOpen={this.toggleAdvanced}
              onClose={this.toggleAdvanced}
            >
              <div>
                <fieldset className="form-group">
                  <label>Allow users to confirm their own attendance (with confirmation code)?</label>
                  <div style={{padding: "5px 0"}}>
                    <a className="btn btn-sm btn-primary"><i className="far fa-check"/> Yes</a> <a className="btn btn-sm btn-default"><i className="far fa-times"/> No, I'll manage confirmation</a>
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <label>Should all users see this event?</label>
                  <div style={{padding: "5px 0"}}>
                    <a className="btn btn-sm btn-primary"><i className="far fa-check"/> Yes</a> <a className="btn btn-sm btn-default"><i className="far fa-times"/> No, only show to registered users</a>
                  </div>
                </fieldset>
                <fieldset className="form-group">
                  <label>Does this event require external registration?</label>
                  <div style={{padding: "5px 0"}}>
                    <a className="btn btn-sm btn-default"><i className="far fa-check"/> Yes</a> <a className="btn btn-sm btn-primary"><i className="far fa-times"/> No, this event is just in KickUp</a>
                  </div>
                  <input className="form-control" placeholder="Enter the URL for the event's registration page" style={{display: "none"}}/>
                </fieldset>
              </div>
            </Collapsible>
            <hr/>
            <fieldset className="text-center form-group">
              <a href="#submitted" className="btn btn-success"><i className="far fa-check"></i> Save and Publish Event</a>
              <a href="#invited" className="btn btn-primary"><i className="far fa-envelope"></i> Invite People</a>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}