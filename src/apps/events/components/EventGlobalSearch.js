import React, { Component } from 'react';

import _ from 'lodash';
import { DateUtils } from 'react-day-picker';

import { Search } from 'pulse-ui';
import { QuickCard } from './EventCard';

const filterSearch = (query, events) => (
  _.filter(events, (eventItem) => {
    if (new Date(query) && DateUtils.isSameDay(new Date(query), new Date(eventItem.date))) {
      return true;
    }
    return new RegExp(query, 'ig').test(JSON.stringify(eventItem));
  })
);

const isAttending = eventItem => (
  _.includes(_.map(eventItem.attendees, 'id', 1))
);

const renderResult = eventItem => (
  <QuickCard
    sampleEvent={eventItem}
    isAttending={isAttending(eventItem)}
    showAction={false}
    eventLink={`/events/event.html#${eventItem.id}`}
  />
);

class EventGlobalSearch extends Component {
  render() {
    return (
      <div>
        <Search
          filterMethod={filterSearch}
          items={this.props.events}
          renderResultMethod={renderResult}
          placeholder="Search for any event"
        />
      </div>
    );
  }
}

export default EventGlobalSearch;
