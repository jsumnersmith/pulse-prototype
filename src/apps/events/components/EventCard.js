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
      <div className="event-card row">
        <div className="col-md-8">
          <div className="event-card-date">
            <div className="event-card-date-month">
              {moment(sampleEvent.date).format('MMM')}
            </div>
            <div className="event-card-date-day">{moment(sampleEvent.date).format('DD')}</div>
            <div className="event-card-date-year">{moment(sampleEvent.date).format('YYYY')}</div>
          </div>
          <div className=" event-card-content">
            <div className="event-card-header">
              {sampleEvent.external && <h5 className="meta meta-soft"><i className="fa fa-external-link"/> Linked Event</h5> }
              <h4 className="event-card-title"><strong>{sampleEvent.name}</strong></h4>
              <h5 className="event-card-time">
                <strong>{moment(sampleEvent.date).format('MMMM Do, YYYY')} {sampleEvent.startTime} - {sampleEvent.endTime}</strong>
              </h5>
            </div>
            <div>
              { sampleEvent.description ? <p className="event-card-description">{sampleEvent.description}</p> : null }
            </div>
            <h6 style={{marginTop: 0}} className="col-md-4"><i className="fa fa-map-marker circle-icon--medium"></i> <strong>{sampleEvent.location}</strong></h6>
            <h6 style={{marginTop: 0}} className="col-md-4"><i className="fa fa-user circle-icon--medium"></i> <strong>{sampleEvent.leaders}</strong></h6>
            <h6 style={{marginTop: 0}} className="col-md-4"><i className="fa fa-check circle-icon--medium"></i> <strong>{this.getAttendance()}/{sampleEvent.attendees.length}</strong> Attended</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="event-card-actions">
            { showAction ?
              (sampleEvent.external ? <ExternalControls /> :
              (isAdmin ? <AdminControls isList={isList} actionLink={actionLink} actionTitle={actionTitle}/> : <TeacherControls isList={isList} isAttending={isAttending} actionLink={actionLink} actionTitle={actionTitle} />) )
            : null }
          </div>
        </div>
      </div>
    );
  }
}

const ExternalControls = () => (
  <div className="event-teacher-control">
    <a className="btn btn-primary" style={{marginLeft: 0}}><i className="fa fa-external-link"/> Go Register for Event</a>
    <div className="btn-group btn-block">
      <a className="btn btn-success"><i className="fa fa-calendar-check-o"/> Attendance Tracked</a>
      <a className="btn btn-success dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down" /></a>
      <ExternalDropdown />
    </div>
    <a className="btn btn-default btn-trans" style={{marginLeft: 0, marginTop: 5}}><i className="fa fa-clipboard" /> Add Your Feedback</a>
  </div>
)

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
    const {isList, actionLink, actionTitle } = this.props;
    return (
      <div className="event-admin-control text-center">
        { isList ?
          <Link to={actionLink} className="btn btn-primary btn-block">{actionTitle}</Link>
          :
            <span>
              <div className="event-attendance-code" style={{marginBottom: 10}}>X5fH8Gn</div>
              <div className="btn-group">
                <Link to="/events/admin/edit" className="btn btn-primary"><i className="fa fa-pencil" /> Edit Event</Link>
                <a className="btn btn-default dropdown-toggle btn-primary" data-toggle="dropdown"><i className="fa fa-angle-down" /></a>
                <AdminDropdown />
              </div>
            </span>
        }
      </div>
    );
  }
}

const TeacherControls = ({ isAttending, isList, actionLink, actionTitle }) => (
  <div className="event-teacher-control">
    {
      isAttending ?
        <div>

          { isList
            ? <div>
                <Link to={actionLink} className="btn btn-primary btn-block">{actionTitle}</Link>
                <div className="event-card-status text-right">
                  <i className="fa fa-check circle-icon--small meeting-goals color-text" /> <strong className="green">Registered</strong>
                </div>
              </div>
            : <span>
                <div className="btn-group btn-block">
                  <a className="btn btn-success"><i className="fa fa-calendar-check-o"/> You're Registered</a>
                  <a className="btn btn-success dropdown-toggle" data-toggle="dropdown"><i className="fa fa-angle-down" /></a>
                  <UserDropdown />
                </div>
                <a className="btn btn-default btn-trans" style={{marginLeft: 0, marginTop: 5}}><i className="fa fa-clipboard" /> Add Your Feedback</a>
              </span>
          }
        </div>
      : <Link to={actionLink} className="btn btn-primary btn-block">{actionTitle}</Link>
    }
  </div>
);

const AdminDropdown = () => (
  <ul className="dropdown-menu dropdown-menu-right" role="menu">
    <li><a><i className="fa fa-trash-o"/> Delete Event</a></li>
  </ul>
);

const UserDropdown = () => (
  <ul className="dropdown-menu dropdown-menu-right" role="menu">
    <li><a><i className="fa fa-calendar-times-o"/> Unregister</a></li>
    <li><a><i className="fa fa-envelope"/> Request Confirmation</a></li>
  </ul>
);

const ExternalDropdown = () => (
  <ul className="dropdown-menu dropdown-menu-right" role="menu">
    <li><a><i className="fa fa-calendar-times-o"/> Untrack My Attendance</a></li>
  </ul>
);

export const QuickCard = ({ sampleEvent, isAttending, showAction = false, actionLink = '#actionLink', actionTitle = '', eventLink = '#' }) => (

  <div className="event-card event-card--quick">
    <Link to={eventLink}>
      <div className={`event-card-header ${showAction ? 'event-card-header--narrow' : ''}`}>
        <h5 className="event-card-time">
          <strong>{moment(sampleEvent.date).format('MMMM Do, YYYY')} {sampleEvent.startTime} - {sampleEvent.endTime}</strong>
        </h5>
        <h4 className="event-card-title"><strong>{sampleEvent.name}</strong></h4>
      </div>
      {
        isAttending ?
          <div className="event-card-status--quick">
            <i className="fa fa-check circle-icon--small meeting-goals color-text" /> <strong className="green">Registered</strong>
          </div>
        : null
      }
      { showAction ? (<div className="event-card-actions"> { isAttending ? <h5 className="meta green" style={{ marginBottom: 0 }}><i className="fa fa-check" />{"You're Attending"}</h5> : <a href={actionLink} className="btn btn-primary btn-block" style={{ display: 'inline-block', width: 160 }}>{actionTitle}</a> } </div>) : null }
      { sampleEvent.description ? <p>{ellipsis(sampleEvent.description, 200)}</p> : null }
    </Link>
  </div>
 );

export default EventCard;
