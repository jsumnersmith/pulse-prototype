import React, { Component } from 'react';

import _ from 'lodash';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import EventCard from './EventCard';
import {colors, SearchWithFilters as SearchInput } from 'pulse-ui';

import './dayPicker.less';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.filterEvent = this.filterEvent.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
    this.toggleUpcoming = this.toggleUpcoming.bind(this);
    this.setUpcoming = this.setUpcoming.bind(this);
    this.getModifiers = this.getModifiers.bind(this);
    this.state = {
      searchQuery: '',
      selectedDay: new Date(),
      upcoming: true
    };
  }

  onDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? new Date() : day,
    });
  }

  onSearch(e) {
    const value = e.target.value;
    this.setState({
      searchQuery: value,
    });
  }

  getEventsByDate(events) {
    const order = this.state.upcoming ? 'asc' : 'desc';
    return _(events)
      .filter(eventItem => this.filterEvent(eventItem))
      .groupBy('date')
      .toPairs()
      .orderBy(item => item[0], order)
      .value();
  }

  filterEvent(eventItem) {
    const sortMethod = (day1, day2) => {
      if (this.state.upcoming) {
        return DateUtils.isDayAfter(day1, day2);
      } else {
        return DateUtils.isDayBefore(day1, day2);
      }
    }
    if (this.state.selectedDay && !(DateUtils.isSameDay(this.state.selectedDay, new Date(eventItem.date)) || sortMethod(new Date(eventItem.date), this.state.selectedDay))) {
      return false;
    } else if (this.state.searchQuery) {
      return new RegExp(this.state.searchQuery, 'ig').test(JSON.stringify(eventItem));
    }
    return true;
  }

  toggleUpcoming(){
    this.setState({ upcoming: !this.state.upcoming })
  }

  setUpcoming(e){
    const value = e.target.value === 'true' ? true : false ;
    this.setState({ upcoming: value });
  }

  getModifiers(){
    const modifier = {};
    modifier[this.state.upcoming ? 'after' : 'before'] = this.state.selectedDay;
    return { inRange: modifier }
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h4 style={{marginBottom: 30}}><strong>Showing events <span className="underline underline--pulse-blue">{`${this.state.upcoming ? 'after' : 'before'}`}</span> {moment(this.state.selectedDay).format('MMMM Do YYYY')}.</strong> <i style={{color: '#aaa'}} className={`fa ${this.state.upcoming ? 'fa-sort-amount-asc' : 'fa-sort-amount-desc'}`}/></h4>
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
        <div className="col-md-4">
          <div className="block-flat text-center" style={{marginTop: 48, marginLeft: 40, borderTop: "3px solid #007DA0"}}>
            <div style={{marginBottom: 10}}><label>Show Me events</label></div>
            <div className="btn-group text-center" style={{width: "100%"}}>
              <a className={`btn btn-sm btn-${this.state.upcoming ? 'default' : 'primary'}`} style={{width: '48%'}} onClick={this.toggleUpcoming}><i className="fa fa-angle-left"/> Before</a>
              <a className={`btn btn-sm btn-${this.state.upcoming ? 'primary' : 'default'}`} style={{width: '48%'}} onClick={this.toggleUpcoming}>After <i className="fa fa-angle-right"/></a>
            </div>
            <DayPicker
              onDayClick={this.onDayClick}
              selectedDays={[this.state.selectedDay]}
              modifiers={this.getModifiers()}
            />

          </div>
        </div>
      </div>
    );
  }
}

const stubIsAttending = id => id === 1;

class DayOfEvents extends Component {
  render() {
    const { date, events, color, urlPrefix, isAdmin } = this.props;
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
