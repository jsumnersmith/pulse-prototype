import React, { Component } from 'react';
import sampleUsers from './users.js';
import DirectoryHeader from './DirectoryHeader';
import { Link } from 'react-router-dom';
import { Tag } from '@kickup/pulse-ui/src/deprecated';
import coffee from '../../images/new_coffee.png';
import './profile.less';

export default class Profile extends Component {
  render(){
    const id = this.props.match.params.id;
    const user = sampleUsers.find(user => String(user.id) === String(id));
    return (
      <div className="wrapper">
        <DirectoryHeader/>
        <Link className="btn btn-back btn-default" to={'/directory'} >Back to Directory</Link>
        <div className="row">
          <div className="block-flat col-md-4" style={{marginTop: 10, padding: '20px 0 0'}}>
            <div className="profile__header">
              <img src={coffee} className="profile__avatar" alt={user.name}/>
              <h3 className="profile__title"><strong>{user.name}</strong></h3>
              <h5><i className="far fa-envelope-o" style={{marginRight: 5}}/> {user.email}</h5>
            </div>
            <div className="profile__tags">
              <div className="text-center"><label>Attributes</label></div>
              <Tag name={`${user.school}`}/>
              <Tag name={`${user.grade}`}/>
              <Tag name={`${user.role}`}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}