import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';
import ellipsis from 'text-ellipsis';

class EventCard extends Component {
  getAttendance() {
    return _.filter(this.props.sampleEvent.attendees, attendee => attendee.confirmed).length || false;
  }
  render() {
    const { sampleEvent, showAction, actionLink, actionTitle, isAttending, isAdmin, isList } = this.props;
    return (
      <div className="event-card">
        <Link to={`/events/view/${sampleEvent.id}`}>
          <div className="event-card-date">
            <div className="event-card-date-month">
              {moment(sampleEvent.date).format('MMM')}
            </div>
            <div className="event-card-date-day">{moment(sampleEvent.date).format('DD')}</div>
            <div className="event-card-date-year">{moment(sampleEvent.date).format('YYYY')}</div>
          </div>
          <div className="event-card-header">
            <h4 className="event-card-title"><strong>{sampleEvent.name}</strong></h4>
            <h5 className="event-card-time">
              <strong>{moment(sampleEvent.date).format('MMMM Do, YYYY')} {sampleEvent.startTime} - {sampleEvent.endTime}</strong>
            </h5>
          </div>
          <div className="row event-card-content">
            <div className="col-md-8">
              <div className="col-md-12">
                { sampleEvent.description ? <p className="event-card-description">{sampleEvent.description}</p> : null }
              </div>
              <h6 style={{marginTop: 0}} className="col-md-4"><i className="fa fa-map-marker circle-icon--medium"></i> <strong>{sampleEvent.location}</strong></h6>
              <h6 style={{marginTop: 0}} className="col-md-4"><i className="fa fa-user circle-icon--medium"></i> <strong>{sampleEvent.leaders}</strong></h6>
              <h6 style={{marginTop: 0}} className="col-md-4"><i className="fa fa-check circle-icon--medium"></i> <strong>{this.getAttendance()}/{sampleEvent.attendees.length}</strong> Attended</h6>
            </div>
            <div className="col-md-4">
              { showAction ? (isAdmin ? <AdminControls /> : <TeacherControls isList={isList} isAttending={isAttending} actionLink={actionLink} actionTitle={actionTitle} />) : null }
            </div>


          </div>
        </Link>
      </div>
    );
  }
}

class AdminControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCode: false,
    };
  }
  onClick() {
    this.setState({ showCode: true });
  }
  render() {
    return (
      <div className="event-admin-control text-center">
        <Link to="/events/edit" className="btn btn-primary btn-block"><i className="fa fa-pencil" /> Edit Event</Link>
        <a className="btn btn-default btn-block" style={{ marginLeft: 0, marginTop: 10, display: (!this.state.showCode ? 'block' : 'none') }} onClick={() => this.onClick()}>Generate Attendance Code</a>
        <div className="event-attendance-code" style={{ marginTop: 10, display: (this.state.showCode ? 'block' : 'none') }}>X5fH8Gn</div>
      </div>
    );
  }
}

const TeacherControls = ({ isAttending, isList, actionLink, actionTitle }) => (
  <div className="event-teacher-control">
    {
      isAttending ?
        <div>
          { isList ?
            <Link to={actionLink} className="btn btn-primary">{actionTitle}</Link>
          :
            <div style={{ marginBottom: 10 }}>
              <label>Confirm Attendance</label>
              <input className="form-control" placeholder="Enter code to confirm your attendance." />
            </div>
        }
        <h4 className="green"><strong><i className="fa fa-check" /> {"You're Attending"}</strong></h4>
        </div>
      : <Link to={actionLink} className="btn btn-primary">{actionTitle}</Link>
    }
  </div>
);

export const QuickCard = ({ sampleEvent, isAttending, showAction = false, actionLink = '#actionLink', actionTitle = '', eventLink = '#' }) => (

  <div className="event-card">
    <Link to={`/events/view/${sampleEvent.id}`}>
      <div className={`event-card-header ${showAction ? 'event-card-header--narrow' : ''}`}>
        <h5 className="event-card-time">
          <strong>{moment(sampleEvent.date).format('MMMM Do, YYYY')} {sampleEvent.startTime} - {sampleEvent.endTime}</strong>
        </h5>
        <h4 className="event-card-title"><strong>{sampleEvent.name}</strong></h4>
      </div>
      { showAction ? (<div className="event-card-actions"> { isAttending ? <h5 className="meta green" style={{ marginBottom: 0 }}><i className="fa fa-check" />{"You're Attending"}</h5> : <a href={actionLink} className="btn btn-primary btn-block" style={{ display: 'inline-block', width: 160 }}>{actionTitle}</a> } </div>) : null }
      { sampleEvent.description ? <p>{ellipsis(sampleEvent.description, 200)}</p> : null }
    </Link>
  </div>
 );

export default EventCard;
