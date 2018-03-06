import React, { Component } from 'react';

import _ from 'lodash';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import EventCard from './EventCard';
import {colors, SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';

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
    this.matchesFilters = this.matchesFilters.bind(this);
    this.state = {
      searchQuery: '',
      selectedDay: new Date(),
      upcoming: true,
      filters: []
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
    if (this.state.filters.length > 0 && !this.matchesFilters(eventItem, this.state.filters)){
      return false;
    }
    if (this.state.selectedDay && !(DateUtils.isSameDay(this.state.selectedDay, new Date(eventItem.date)) || sortMethod(new Date(eventItem.date), this.state.selectedDay))) {
      return false;
    } else if (this.state.searchQuery) {
      return new RegExp(this.state.searchQuery, 'ig').test(JSON.stringify(eventItem));
    }
    return true;
  }

  matchesFilters(sampleEvent, filters){
    const filterGroupCount = _(filters).groupBy('type').keys().value().length;
    const matches =  _(filters)
      .groupBy('type')
      .map((values, name) => {
        if (name === 'Workshop Type') {
          return [true];
        } else {
          return values.map(value => sampleEvent.meta.includes(value))
        }
      })
      .flatten()
      .filter(item => item !== false)
      .value()
    console.log(matches, filterGroupCount, sampleEvent.meta)
    return matches.length === filterGroupCount;

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

  getFilteredEventsByMeta(){
    return this.props.events;
  }

  render() {
    const filteredEvent = this.props.events;
    const eventsByDay = this.getEventsByDate(filteredEvent);
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
                <div className="col-md-12">
                  <SearchInput onChange={this.onSearch} />
                </div>
                <div className="col-md-12" style={{ position: 'relative', marginTop: 10 }}>
                    <div>
                      <Filters events={this.props.events} onChange={(filters) => this.setState({filters})} />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
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
        <div className="col-md-3">
          <div className="block-flat text-center" style={{marginTop: 85, marginLeft: 0, borderTop: "3px solid #007DA0"}}>
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

class Filters extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilters: []
    }
    this.getFilters = this.getFilters.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.isActive = this.isActive.bind(this);
  }
  toggleFilter(filter){
    let {activeFilters} = this.state;
    if (activeFilters.includes(filter)){
      this.setState({activeFilters: _.without(activeFilters, filter)}, () => this.props.onChange(this.state.activeFilters));
    } else {
      this.setState({activeFilters: activeFilters.concat([filter])}, () => this.props.onChange(this.state.activeFilters));
    }
  }
  getFilters(){
    return _(this.props.events)
      .map('meta')
      .flatten()
      .uniqWith(_.isEqual)
      .groupBy('type')
      .value()
  }
  isActive(filter) {
    return this.state.activeFilters.includes(filter);
  }
  render(){
    const filters = this.getFilters();
    return (
      <div>
        {
          _.map(filters, (filterSet, filterName) => <div className="col-md-4">
              <label>{filterName}</label>
              <ul style={{padding: '5px 0px', margin: 0}}>
                {filterSet.map(filter => <li onClick={()=>this.toggleFilter(filter)} style={{listStyle: 'none', paddingLeft: 0, cursor: 'pointer'}}>
                    {this.isActive(filter) ? <i className="fa fa-check-square-o"/> : <i className="fa fa-square-o" style={{marginRight: 2}} />} {filter.name}
                  </li>)}
              </ul>
            </div>)
        }
      </div>
    )
  }
}

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
