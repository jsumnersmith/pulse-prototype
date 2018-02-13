import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import sampleUsers from './users.js';


import './directory.less';

export default class Edit extends Component {
  render() {
    const id = this.props.match.params.id;
    const user = sampleUsers.find(user => String(user.id) === String(id));
    return (
      <div className="wrapper">
        <DirectoryHeader/>
          <Link className="btn btn-back btn-default" to={`/directory/edit/${user.id}`} >Back to User</Link>
          <div className="block-flat" style={{marginTop: 10}}>
            Attributes
          </div>
      </div>
    )
  }
};