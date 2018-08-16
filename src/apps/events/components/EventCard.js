import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';
import ellipsis from 'text-ellipsis';
import coffee from '../../../images/new_coffee.png';

class EventCard extends Component {
  state = {
    status: 'pending'
  }
  getAttendance() {
    return _.filter(this.props.sampleEvent.attendees, attendee => attendee.confirmed).length || false;
  }
  changeStatus(val){
    this.setState({status: 'pending'})
  }
  render() {
    const { sampleEvent, showAction, actionLink, actionTitle, isAttending, isAdmin, isList } = this.props;
    return (
      <div className="event-card">
        {this.props.isSubmission &&
          <div className={`event-card-submission-header ${this.props.isSubmission && this.state.status}`}>
            <h5 className="event-card-submission-title"><span className="event-card-avatar"><img src={coffee} alt="avatar"/></span> <strong>Joel Smith submitted</strong></h5>
            <DisplayStatus status={this.state.status}/>
          </div>
        }
        <div className="row">
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
                {sampleEvent.external && <h5 className="meta meta-soft"><i className="far fa-external-link"/> Linked Event</h5> }
                <h4 className="event-card-title">{sampleEvent.isCollection && <i className="far fa-clone circle-icon--small purple white-text" />} <strong>{sampleEvent.name}</strong></h4>

                  {
                    (sampleEvent.isCollection && sampleEvent.subEvents) ?
                    <h5>{sampleEvent.subEvents} events in this collection</h5>
                    : <h5 className="event-card-time"><strong>{moment(sampleEvent.date).format('MMMM Do, YYYY')} {sampleEvent.startTime} - {sampleEvent.endTime}</strong></h5>
                  }
                </div>
              <div>
                { sampleEvent.description ? <p className="event-card-description">{sampleEvent.description}</p> : null }
              </div>
              {isAttending &&  <h6 style={{marginTop: 0}} className="col-md-12"><i className="far fa-check circle-icon--small meeting-goals color-text" /> <strong className="green">Registered</strong></h6>}
              <h6 style={{marginTop: 0}} className="col-md-12"><i className="far fa-map-marker circle-icon--small"></i> <strong>{sampleEvent.location}</strong></h6>
              <h6 style={{marginTop: 0}} className="col-md-12"><i className="far fa-user circle-icon--small"></i> <strong>{sampleEvent.leaders}</strong></h6>
              { isAdmin && !this.props.isSubmission && <h6 style={{marginTop: 0}} className="col-md-12"><i className="far fa-check circle-icon--small"></i> <strong>{this.getAttendance()}/{sampleEvent.attendees.length}</strong> Attended</h6> }
              { isAdmin && !this.props.isSubmission && <h6 style={{marginTop: 0}} className="col-md-12"><i className="far fa-eye circle-icon--small"></i> Visible to <strong>{sampleEvent.id === 3 ? "Registered Attendees" : "All"}</strong></h6> }
            </div>
          </div>
          <div className="col-md-4">
            <div className="event-card-actions">
              { showAction ?
                (this.props.isSubmission ? ( isAdmin ? <SubmittedAdminControls updateStatus={(status) => this.setState({status})}/> : <SubmittedUserControls /> ) :
                (sampleEvent.external ? <ExternalControls /> :
                (isAdmin ? <AdminControls isList={isList} actionLink={actionLink} actionTitle={actionTitle} isCollection={sampleEvent.isCollection}/> : <TeacherControls isList={isList} isAttending={isAttending} actionLink={actionLink} actionTitle={actionTitle} isCollection={sampleEvent.isCollection}/>) ) )
              : null }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ExternalControls = () => (
  <div className="event-teacher-control">
    <a className="btn btn-primary" style={{marginLeft: 0}}><i className="far fa-external-link"/> Go Register for Event</a>
    <div className="btn-group btn-block">
      <a className="btn btn-success"><i className="far fa-calendar-check"/> Attendance Tracked</a>
      <a className="btn btn-success dropdown-toggle" data-toggle="dropdown"><i className="far fa-angle-down" /></a>
      <ExternalDropdown />
    </div>
    <a className="btn btn-default btn-trans" style={{marginLeft: 0, marginTop: 5}}><i className="far fa-clipboard" /> Add Your Feedback</a>
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
    const {isList, actionLink, actionTitle, isCollection } = this.props;
    return (
      <div className="event-admin-control text-center">
        {
          isCollection ?
          <Link to={actionLink} className="btn btn-default btn-block"><i className="far fa-clone"/> View Events</Link>
          :
          isList ?
          <Link to={actionLink} className="btn btn-primary btn-block">{actionTitle}</Link>
          :
            <span>
              <div className="event-attendance-code" style={{marginBottom: 10}}>X5fH8Gn</div>
              <div className="btn-group">
                <Link to="/events/admin/edit" className="btn btn-primary"><i className="far fa-pencil" /> Edit Event</Link>
                <a className="btn btn-default dropdown-toggle btn-primary" data-toggle="dropdown"><i className="far fa-angle-down" /></a>
                <AdminDropdown />
              </div>
            </span>
        }
      </div>
    );
  }
}

const TeacherControls = ({ isAttending, isList, actionLink, actionTitle, isCollection}) => (
  <div className="event-teacher-control">
    {
      isAttending ?
        <div>
          { isCollection?
            <Link to={actionLink} className="btn btn-default btn-block"><i className="far fa-clone"/> View Events</Link>
          :
          isList
            ? <div>
                <Link to={actionLink} className="btn btn-primary btn-block">{actionTitle}</Link>
                <div className="event-card-status text-right">
                </div>
              </div>
            : <span>
                <div className="btn-group btn-block">
                  <a className="btn btn-success"><i className="far fa-calendar-check"/> You're Registered</a>
                  <a className="btn btn-success dropdown-toggle" data-toggle="dropdown"><i className="far fa-angle-down" /></a>
                  <UserDropdown />
                </div>
                <a className="btn btn-default btn-trans" style={{marginLeft: 0, marginTop: 5}}><i className="far fa-clipboard" /> Add Your Feedback</a>
              </span>
          }
        </div>
      : <Link to={actionLink} className="btn btn-primary btn-block">{actionTitle}</Link>
    }
  </div>
);

const AdminDropdown = () => (
  <ul className="dropdown-menu dropdown-menu-right" role="menu">
    <li><a><i className="far fa-trash-o"/> Delete Event</a></li>
  </ul>
);

const UserDropdown = () => (
  <ul className="dropdown-menu dropdown-menu-right" role="menu">
    <li><a><i className="far fa-calendar-times"/> Unregister</a></li>
    <li><a><i className="far fa-envelope"/> Request Confirmation</a></li>
  </ul>
);

const ExternalDropdown = () => (
  <ul className="dropdown-menu dropdown-menu-right" role="menu">
    <li><a><i className="far fa-calendar-times"/> Untrack My Attendance</a></li>
  </ul>
);

const SubmittedUserControls = () => (
  <div>
    <Link to={"/events/submit"} className="btn btn-primary btn-block" style={{marginLeft: 0, marginBottom: 15}}><i className="far fa-pencil"/> Edit Submission</Link>
    <Link to={"/"} className="btn btn-danger btn-trans btn-block btn-sm" style={{marginLeft: 0, marginBottom: 10}}><i className="far fa-times"/> Close Submission</Link>
    <UploadTable />
  </div>
)

const DisplayStatus = ({status}) =>(
  <div>
    {status === 'pending' && <h5 style={{color: 'white'}}><strong><i className="far fa-hourglass orange circle-icon--medium white-text" style={{marginRight: 5}}/> Submission Pending</strong></h5>}
    {status === 'approved' && <h5 style={{color: 'white'}}><strong><i className="far fa-thumbs-up pulse-blue circle-icon--medium white-text" style={{marginRight: 5}}/> Submission Approved</strong></h5>}
    {status === 'denied' && <h5 style={{color: 'white'}}><strong><i className="far fa-times red circle-icon--medium white-text" style={{marginRight: 5}}/> Submission Denied</strong></h5>}
    {status === 'confirmed' && <h5 style={{color: 'white'}}><strong><i className="far fa-check green circle-icon--medium white-text"style={{marginRight: 5}}/> Attendance Confirmed</strong></h5>}
    {status === 'closed' && <h5 style={{color: 'white'}}><strong><i className="far fa-minus red circle-icon--medium white-text" style={{marginRight: 5}}/> Submission Closed</strong></h5>}
  </div>
)

class SubmittedAdminControls extends Component {
  state = {
    status: 'pending'
  }
  updateStatus = (e) => {
    console.log(e.target.value);
    this.props.updateStatus(e.target.value)
  }

  render(){
    return(
      <div>
        <label>Change Status</label>
        <select className="form-control" style={{width:"calc(100% - 120px)", marginLeft: 10, display: "inline-block"}} onChange={this.updateStatus}>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="confirmed">Confirmed</option>
          <option value="denied">Denied</option>
          <option value="closed">Closed</option>
        </select>
        <hr />
        <Link to={"/events/submit"} className="btn btn-primary btn-block" style={{marginLeft: 0, marginBottom: 10}}><i className="far fa-pencil"/> Update Submission</Link>
        <UploadTable />
      </div>
    )
  }
}

const UploadTable = () => (
  <div>
  <table className="event-card-file-table">
      <thead style={{background: "#eee"}}>
        <tr><th><strong>Uploaded Files</strong></th></tr>
      </thead>
      <tbody>
        <tr><td><a href="google.com"><i className="far fa-file"/> File Name</a></td></tr>
        <tr><td><a href="google.com"><i className="far fa-file"/> Other File Name</a></td></tr>
      </tbody>
    </table>
  </div>
)

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
            <i className="far fa-check circle-icon--small meeting-goals color-text" /> <strong className="green">Registered</strong>
          </div>
        : null
      }
      { showAction ? (<div className="event-card-actions"> { isAttending ? <h5 className="meta green" style={{ marginBottom: 0 }}><i className="far fa-check" />{"You're Attending"}</h5> : <a href={actionLink} className="btn btn-primary btn-block" style={{ display: 'inline-block', width: 160 }}>{actionTitle}</a> } </div>) : null }
      { sampleEvent.description ? <p>{ellipsis(sampleEvent.description, 200)}</p> : null }
    </Link>
  </div>
 );

export default EventCard;
