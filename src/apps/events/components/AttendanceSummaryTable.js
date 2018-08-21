import React, { Component } from 'react';

import { Table, Column, Cell } from 'fixed-data-table';
import _ from 'lodash';


import MultiSelectField from './MultiSelectField';

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
    this.isBreakdownActive = this.isBreakdownActive.bind(this);
    this.onMultiSelectChange = this.onMultiSelectChange.bind(this);
    this.state = {
      width: 0,
      height: 0,
      currentBreakdown: ["1"]
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

  onMultiSelectChange(currentBreakdown){
    console.log(currentBreakdown);
    this.setState({currentBreakdown})
  }

  isBreakdownActive(val){
    return _.includes(this.state.currentBreakdown, val.toString());
  }

  render() {
    const { events } = this.props;
    const teachers = getTeachers(events);
    return (
      <div ref={(wrapper) => { this.wrapper = wrapper; }}>
        <h5 className="event-list-title" style={{background: "#8B698E"}}>
          <div style={{display:"inline-block", width: "calc(100% - 400px)"}}>
            <i className="far fa-check circle-icon--medium purple color-text"></i>
            <strong>Attendance Log</strong>
          </div>
          <span style={{display: "inline-block", width: 400}}>
            <label style={{display: "inline-block", color: "white"}}>Breakdown hours by</label>
            <span style={{display: "inline-block", width: 240, marginLeft: 10}}>
              <MultiSelectField
                label=""
                name="hoursBreakDown"
                onChange={this.onMultiSelectChange}
                options={[
                  { name: "In/Out District", id: "1" },
                  { name: "Event Type", id: "2" },
                ]}
                showActions={false}
                value={[ "1" ]}
              />
            </span>
          </span>
        </h5>
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
          { this.isBreakdownActive(1) &&
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
          }
          { this.isBreakdownActive(1) &&
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
          }
          { this.isBreakdownActive(2) &&
            <Column
              header={<Cell>PLC</Cell>}
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
          }
          { this.isBreakdownActive(2) &&
            <Column
              header={<Cell>Workshop</Cell>}
              allowCellsRecycling
              cell={({ rowIndex, ...props }) => (
                <Cell {...props}>
                  <div className="text-center">
                    <strong>{teachers[rowIndex].name.length + 3}</strong>
                  </div>
                </Cell>
                )}
              width={100}
            />
          }
          { this.isBreakdownActive(2) &&
            <Column
              header={<Cell>Coaching</Cell>}
              allowCellsRecycling
              cell={({ rowIndex, ...props }) => (
                <Cell {...props}>
                  <div className="text-center">
                    <strong>{teachers[rowIndex].name.length + 2}</strong>
                  </div>
                </Cell>
                )}
              width={100}
            />
          }
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
