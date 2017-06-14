import React, { Component } from 'react';

import _ from 'lodash';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import EventCard from './EventCard';
import {colors, SearchWithFilters as SearchInput } from 'pulse-ui';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.filterEvent = this.filterEvent.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      searchQuery: '',
      selectedDay: null,
    };
  }

  onDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  onSearch(e) {
    const value = e.target.value;
    this.setState({
      searchQuery: value,
    });
  }

  getEventsByDate(events) {
    return _(events)
      .filter(eventItem => this.filterEvent(eventItem))
      .groupBy('date')
      .toPairs()
      .value();
  }

  filterEvent(eventItem) {
    if (this.state.selectedDay && !DateUtils.isSameDay(this.state.selectedDay, new Date(eventItem.date))) {
      return false;
    } else if (this.state.searchQuery) {
      return new RegExp(this.state.searchQuery, 'ig').test(JSON.stringify(eventItem));
    }
    return true;
  }

  render() {
    const eventsByDay = this.getEventsByDate(this.props.events);
    const colorsArr = this.props.colors || colors(5);
    const urlPrefix = this.props.urlPrefix || '/events/';
    const isAdmin = this.props.isAdmin;

    return (
      <div className="row">
        <div className="col-md-12">
          <h5 className="event-list-title" style={{background: "#1FAF84"}}><i className="fa fa-calendar circle-icon--medium green"></i> <strong>Search Events</strong></h5>
          <div className="block-flat">
            <div className="content">
              <div className="row" style={{ marginTop: 0 }}>
                <div className="col-md-10">
                  <SearchInput onChange={this.onSearch} />
                </div>
                <div className="col-md-2">
                  <div className="text-center"><a className="btn btn-default btn-block" data-toggle="collapse" data-target="#filtersDropdown">Advanced <i className="fa fa-caret-down" /></a></div>
                </div>
                <div className="col-md-12" style={{ position: 'relative', marginTop: 10 }}>
                  <div className="collapse" style={{ position: 'relative' }} id="filtersDropdown">
                    <div className="col-md-8">Filters</div>
                    <div className="col-md-4">
                      <DayPicker
                        onDayClick={this.onDayClick}
                        selectedDays={[this.state.selectedDay]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          {
            _.map(eventsByDay, ([date, eventsForDay], index) => (<DayOfEvents
              isAdmin={isAdmin}
              key={index}
              date={date}
              events={eventsForDay}
              color={colorsArr[(index % 5)]}
              urlPrefix={urlPrefix}
            />
              ))
          }
        </div>

      </div>
    );
  }
}

const stubIsAttending = id => id === 1;

class DayOfEvents extends Component {
  render() {
    const { date, events, color, urlPrefix, isAdmin } = this.props;
    console.log(`URL prefix is ${urlPrefix}`);
    return (
      <div>
        <p style={{ marginTop: 20, marginBottom: 0, borderBottom: `3px solid ${color}`, paddingBottom: 5 }}><strong>{moment(date).format('dddd MMMM Do, YYYY')}</strong></p>
        { events.map(sampleEvent => (
          <EventCard
            key={isAdmin + sampleEvent.id}
            isList
            isAdmin={isAdmin}
            showAction
            sampleEvent={sampleEvent}
            actionLink={`${urlPrefix}view/${sampleEvent.id}`}
            actionTitle={'See Details'}
            eventLink={`${urlPrefix}view/${sampleEvent.id}`}
            isAttending={stubIsAttending(sampleEvent.id)}
          />
          ),
        ) }
      </div>
    );
  }
 }


export default EventList;
