import React, { Component } from 'react';

import { Table, Column, Cell } from 'fixed-data-table';
import { Search } from 'pulse-ui';

class AttendanceTable extends Component {
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
    const rowsHeight = ((this.props.sampleEvent.attendees.length * 55) + 57);
    const windowHeight = (window.innerHeight * 0.9);
    this.setState({
      height: rowsHeight < windowHeight ? rowsHeight : windowHeight,
    });
  }
  render() {
    const { sampleEvent } = this.props;
    return (
      <div ref={(wrapper) => { this.wrapper = wrapper; }}>
        <label style={{ marginTop: 10 }}>Add Attendees</label>
        <Search placeholder={'Begin typing to add a person to the attendance list.'} />
        <div style={{marginTop: 5, marginBottom: 10}} className="text-right">
          <label>1 user has not received email notification.</label><button className="btn btn-sm btn-default btn-trans">Send Email Notfication</button>
        </div>
        <Table
          rowHeight={55}
          rowsCount={sampleEvent.attendees.length}
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
                <strong>{sampleEvent.attendees[rowIndex].name}</strong>
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
            header={<Cell>Notified</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <div className="text-center">
                  {
                      sampleEvent.attendees[rowIndex].confirmed
                      ? <i className="fa fa-check circle-icon--small green" />
                      : <i className="fa fa-times circle-icon--small" />
                    }
                </div>
              </Cell>
              )}
            width={100}
          />
          <Column
          header={<Cell>Confirmed</Cell>}
          allowCellsRecycling
          cell={({ rowIndex, ...props }) => (
            <Cell {...props}>
              <div className="text-center">
                {
                    sampleEvent.attendees[rowIndex].confirmed
                    ? <i className="fa fa-check circle-icon--small green" />
                    : <i className="fa fa-times circle-icon--small" />
                  }
              </div>
            </Cell>
            )}
          width={100}
        />
          <Column
            header={<Cell>Attendance</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <div className="text-center" style={{ paddingRight: 5 }}>
                  {
                      sampleEvent.attendees[rowIndex].confirmed
                      ? <a className="btn btn-danger btn-trans btn-sm btn-block" style={{ marginLeft: 0 }}><i className="fa fa-times" /> Reset Attendence</a>
                      : <a className="btn btn-success btn-trans btn-sm btn-block" style={{ marginLeft: 0 }}><i className="fa fa-check" /> Confirm Attendence</a>
                  }
                </div>
              </Cell>
              )}
            width={200}
          />
          <Column
            header={<Cell>Registration</Cell>}
            allowCellsRecycling
            cell={({ rowIndex, ...props }) => (
              <Cell {...props}>
                <div className="text-center" style={{ paddingRight: 5 }}>
                  <a className="btn btn-default btn-trans btn-sm btn-block" style={{ marginLeft: 0 }}><i className="fa fa-calendar-times-o" /> Unregister</a>
                </div>
              </Cell>
              )}
            width={150}
          />
        </Table>

      </div>
    );
  }
}


export default AttendanceTable;
