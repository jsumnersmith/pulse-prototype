import React, { Component } from 'react';

const _ = require('lodash');

class GroupingsListTable extends Component {
  renderColumn(list, index) {
    const sortedItems = _.orderBy(list.listItems, ['score', 'name'], ['desc', 'asc']);
    return (
      <table className="no-border list-table-column" key={index}>
        <tbody className="no-border-x no-border-y">
          {
            sortedItems.map((listItem, i) => (
              <tr className="list-table-name-row" key={String(index) + String(i)}>
                <td>
                  <div className={'list-table-score'} style={listItem.iconStyles} />
                  <div className="list-table-teacher">{listItem.teacher}</div>
                </td>
              </tr>
              ))
            }
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div className="list-table-wrapper">
        <table className="list-table no-border table-responsive">
          <thead className="no-border" >
            <tr className="list-table-header" >
              {
                this.props.lists.map(function (list) {
                  return (
                    <th width={this.props.evenColumns ? `${100 / this.props.lists.length}%` : ''}>
                      <div className="list-table-header-cell">
                        {
                          list.simpleTitle
                            ? <span />
                            : <div className="meta list-table-header-cell-meta">
                              <span >{list.listItems.length}</span>
                              <span style={{ color: '#bbb' }}>{this.props.genericQuestionText ? 'selected' : 'interested in'}</span>
                            </div>
                        }
                        <div>{list.title}</div>
                      </div>
                    </th>
                  );
                }, this)
              }
            </tr>
          </thead>
          <tbody >
            <tr className="list-table-content">
              {
                this.props.lists.map(function (list, index) {
                  return <td className={'list-table-content-column'}><div className="list-table-column-wrapper constrained" data-column-wrapper>{this.renderColumn(list, index)}</div></td>;
                }, this)
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default GroupingsListTable;