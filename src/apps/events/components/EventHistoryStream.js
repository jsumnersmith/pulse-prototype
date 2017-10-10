import React from 'react';
import './eventHistoryStream.less';

export default () => (
  <div style={{marginTop: 40}}>
    <h5 className="event-list-title" style={{background: "#007DA0"}}><i className="fa fa-calendar circle-icon--medium pulse-blue"></i> <strong>Activity</strong></h5>
    <div className="block-flat">
      <div className="event-history-timeline">
        <EventHistoryItem
          icon="fa-pencil"
          date="03/03/17"
        >
          <strong>Joel Smith</strong> submitted this event
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-times red white-text"
          date="03/08/17"
        >
          <strong>Bella Smith</strong> updated the status to <span className="underline--red">Denied</span>.
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-comment"
          date="03/08/17">
          <p><strong>Bella Smith</strong> said</p>
          <div className="event-history-item__blockquote">I think you forgot to include the location. Update and we can approve it!</div>
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-pencil"
          date="03/11/17"
        >
          <strong>Joel Smith</strong> edited this event
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-comment"
          date="03/11/17">
          <p><strong>Joel Smith</strong> said</p>
          <div className="event-history-item__blockquote">OK, I think 've got it all buttoned-up. Let me know if any more changes need to be made.</div>
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-thumbs-up pulse-blue white-text"
          date="04/02/17"
        >
          <strong>Bella Smith</strong> updated the status to <span className="underline--pulse-blue">Approved</span>.
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-comment"
          date="04/02/17">
          <p><strong>Bella Smith</strong> said</p>
          <div className="event-history-item__blockquote">This looks really good.</div>
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-file"
          date="05/08/17">
          <p><strong>Joel Smith</strong> uploaded some files</p>
          <EventHistoryFile
            title={'receipt_1.jpg'}
          />
          <EventHistoryFile
            title={'A Reciept to which I Actually Gave a Real Title'}
          />
          <EventHistoryFile
            title={'credits_certificate.pdf'}
          />
        </EventHistoryItem>
        <EventHistoryItem
          icon="fa-check green white-text"
          date="04/02/17"
        >
          <strong>Bella Smith</strong> updated the status to <span className="underline--green">Confirmed</span>.
        </EventHistoryItem>
      </div>
      <hr/>
      <div style={{paddingLeft: 20, paddingRight: 20 }}>
        <textarea className="form-control"></textarea>
        <button className="btn btn-primary" style={{marginLeft: 0, marginTop: 10}}>Add Comment</button>
      </div>
    </div>
  </div>
)

const EventHistoryItem = ({children, icon, date}) => (
  <div className="event-history-item">
    <div className="event-history-item__date">{date}</div>
    <i className={`fa ${icon} circle-icon--medium event-history-item__icon`} />
    <div className="event-history-item__content">
      {children}
    </div>
  </div>
)

const EventHistoryFile = ({title}) => (
  <div className="event-history-item__file">
    <i className="fa fa-download circle-icon--small"/> <h5>{title}</h5>
  </div>
)