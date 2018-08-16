import React, { Component } from 'react';
import './list-table.less';

export default class List extends Component {
  render() {
    const { list } = this.props;
    const randomNumber = Math.floor(Math.random() * 999) + 100;
    return (
      <div className="list-table-wrapper">
        <div className="list-table-header">{list.title}</div>
        <table className="no-border list-table">
          <tbody className="no-border-x no-border-y">
            {
              list.items.map((item, i) => (
                <tr className="list-table-name-row" key={String(i)}>
                  <td>
                    <input type="checkbox" />
                    <div className="list-table-teacher">{item.name}{item.options && <span data-toggle="collapse" data-target={`#${String(i)}${randomNumber}`} style={{float: 'right'}}><i className="far fa-chevron-down" /></span>}</div>
                    {item.options && <div className="collapse" id={`${String(i)}${randomNumber}`}>
                      {item.options}
                    </div>}
                  </td>
                </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    );
  }
};

