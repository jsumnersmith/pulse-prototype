import React, { Component } from 'react';

import { Table, Column, Cell } from 'fixed-data-table';
import _ from 'lodash';

function getTeachers(events) {
  return _.chain(events)
    .flatMap('attendees')
    .uniqBy('name')
    .value();
}

class AttendanceSummaryTable extends Component {
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
    const rowsHeight = ((getTeachers(this.props.events).length * 55) + 57);
    const windowHeight = (window.innerHeight * 0.9);
    this.setState({
      height: rowsHeight < windowHeight ? rowsHeight : windowHeight,
    });
  }

  render() {
    const { events } = this.props;
    const teachers = getTeachers(events);
    return (
      <div ref={(wrapper) => { this.wrapper = wrapper; }}>
        <Table
          rowHeight={55}
          rowsCount={teachers.length}
          headerHeight={55}
          width={this.state.width}
          height={this.state.height}
        >
          <Column
            flexGrow={4}
            header={<Cell>Name</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>{teachers[rowIndex].name}</strong>
              </Cell>
              )}
            width={150}
          />
          <Column
            flexGrow={4}
            header={<Cell>School</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>East High School</strong>
              </Cell>
              )}
            width={150}
          />
          <Column
            flexGrow={4}
            header={<Cell>Grade</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>12</strong>
              </Cell>
              )}
            width={150}
          />
          <Column
            flexGrow={4}
            header={<Cell>Role</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <strong>English Teacher</strong>
              </Cell>
              )}
            width={150}
          />
          <Column
            header={<Cell>In Organization</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <div className="text-center">
                  <strong>{teachers[rowIndex].name.length}</strong>
                </div>
              </Cell>
              )}
            width={100}
          />
          <Column
            header={<Cell>Out of Organization</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <div className="text-center">
                  <strong>{teachers[rowIndex].name.length + 10}</strong>
                </div>
              </Cell>
              )}
            width={100}
          />
          <Column
            header={<Cell>Total Hours</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <div className="text-center">
                  <strong>{teachers[rowIndex].name.length + teachers[rowIndex].name.length + 10}</strong>
                </div>
              </Cell>
              )}
            width={100}
          />
        </Table>
      </div>
    );
  }
}

export default AttendanceSummaryTable;
