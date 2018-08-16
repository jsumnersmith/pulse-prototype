import React, { Component } from 'react';

import { Table, Column, Cell } from 'fixed-data-table';
import moment from 'moment';

class EventTable extends Component {
  constructor(props) {
    super(props);
    this.setWidth = this.setWidth.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.setHeightAndWidth = this.setHeightAndWidth.bind(this);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this.setHeightAndWidth();
    window.addEventListener('resize', this.setHeightAndWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeightAndWidth);
  }

  setHeightAndWidth() {
    this.setWidth();
    this.setHeight();
  }

  setWidth() {
    this.setState({
      width: this.wrapper.offsetWidth,
    });
  }

  setHeight() {
    const rowsHeight = ((this.props.events.length * 55) + 57);
    const windowHeight = (window.innerHeight * 0.9);
    this.setState({
      height: rowsHeight < windowHeight ? rowsHeight : windowHeight,
    });
  }

  render(){
    const {events} = this.props;
    return (
      <div className="table-wrapper" ref={(wrapper) => { this.wrapper = wrapper; }}>
        <Table
          rowHeight={55}
          rowsCount={this.props.events.length}
          headerHeight={55}
          width={this.state.width}
          height={this.state.height}
        >
          <Column
            header={<Cell>Date</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>{moment(events[rowIndex].date).format('MM/DD/YYYY')}</strong>
              </Cell>
              )}
            width={100}
          />
          <Column
            flexGrow={3}
            header={<Cell>Event </Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>{events[rowIndex].name}</strong>
              </Cell>
              )}
            width={100}
          />
          <Column
            header={<Cell>Hours</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>{events[rowIndex].hours}</strong>
              </Cell>
              )}
            width={100}
          />
          <Column
            flexGrow={3}
            header={<Cell>Location</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>{events[rowIndex].location}</strong>
              </Cell>
              )}
            width={150}
          />
          <Column
            flexGrow={3}
            header={<Cell>Leader</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>{events[rowIndex].leaders}</strong>
              </Cell>
              )}
            width={100}
          />
          <Column
            header={<Cell>Attendance Confirmed?</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <div className="text-center"><i className="far fa-check circle-icon--small green" /></div>
              </Cell>
              )}
            width={100}
          />
        </Table>
      </div>
    );
  }
}

export default EventTable;
