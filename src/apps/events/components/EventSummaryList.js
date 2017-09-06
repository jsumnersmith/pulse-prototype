import React, { Component } from 'react';

import _ from 'lodash';
import sampleEvents from './sampleEvents';
import { QuickCard } from './EventCard';
import { colors } from 'pulse-ui/src/deprecated';

class EventSummaryList extends Component {
  isAttending(attendees) {
    if (!this.props.teacher) { return false; }
    return _.includes(_.map(attendees, 'id'), this.props.teacher.id);
  }

  render() {
    const color = colors(5)[this.props.index || 0];
    const events = this.props.events || sampleEvents;
    return (
      <div>
        <div style={{ borderBottom: `3px solid ${color}` }}>
          {
          events.map(sampleEvent => <QuickCard
            sampleEvent={sampleEvent}
            isAttending={this.isAttending(sampleEvent.attendees)}
            showAction={this.props.showAction || false}
            actionLink={'#register'}
            actionTitle={'Sign Up'}
            eventLink={`/events/teacher/event.html#${sampleEvent.id}`}
          />)
        }
        </div>
        <a className="btn btn-block btn-default" href={this.props.url} style={{ marginTop: 10, marginLeft: 0 }}>{this.props.linkText}</a>
      </div>
    );
  }
 }


export default EventSummaryList;
