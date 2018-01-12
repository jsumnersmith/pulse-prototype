import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Table, Column, Cell } from 'fixed-data-table';
import { Search } from '@kickup/pulse-ui/src/deprecated';

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
    const { sampleEvent, match } = this.props;
    return (
    <div>
      <div ref={(wrapper) => { this.wrapper = wrapper; }}>
        <label style={{ marginTop: 10 }}>Add Attendees</label>
        <Search placeholder={'Begin typing to add a person to the attendance list.'} />
        <div style={{marginTop: 5, marginBottom: 10, position: 'relative'}} className="text-right">
          <label>1 user has not received a registration email notification.</label>
          <button className="btn btn-sm btn-default btn-trans" data-toggle="modal" data-target="#attendance-modal">Review and Send</button>
          <button className="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown">Options <i className="fa fa-caret-down" /></button>
          <ul className="dropdown-menu dropdown-menu-right" role="menu">
            <li><a data-toggle="modal" data-target="#bulk-modal">Bulk Register Users</a></li>
            <li><Link to={match.url + '/sheet'}>Printable Sign-in Sheet</Link></li>
          </ul>
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
      <div className="modal modal-background colored-header primary fade in" id="attendance-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h3 className="text-center">Review and Send Registration Notifications</h3>
              <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
            </div>
            <div className="modal-body text-left">
              <div>
                <p>The following <span className="underline--green">1</span> user hasn't received a registration email notification.</p>
                <table className="no-border">
                  <thead className="no-border">
                    <tr>
                      <th><strong>User</strong></th>
                      <th><strong>Email</strong></th>
                    </tr>
                  </thead>
                  <tbody className="no-border-y">
                    <tr>
                      <th style={{fontWeight: "normal", padding: 8}}>Joel Smith</th>
                      <th style={{fontWeight: "normal", padding: 8}}>jsumnersmith@gmail.com</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success btn-flat md-close btn-block" data-dismiss="modal">Send Registration Notifications</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal modal-background colored-header primary fade in" id="bulk-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h3 className="text-center">Bulk Register Attendees</h3>
              <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
            </div>
            <div className="modal-body text-left">
              <div>
                <label>Add attendees' emails separated by commas</label>
                <textarea className="form-control"></textarea>
                <p className="red-text" style={{marginTop: 10, marginBottom: 5}}><i className="fa fa-warning" /> The following emails were not added: email@adress.com, other@address.com</p>
                <p className="green"><i className="fa fa-check-circle" /> Successfully added 3,456 emails.</p>
              </div>
            </div>
            <div className="modal-footer text-right">
            <button type="button" className="btn btn-default btn-trans btn-flat md-close" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary btn-flat md-close" data-dismiss="modal">Add Attendees</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default AttendanceTable;
