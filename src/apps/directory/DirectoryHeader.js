import React from 'react';
import {Link} from 'react-router-dom';
import addressBookIcon from '../../images/address-book-icon.svg';

export default () => (
  <header className="directory-header">
    <h2 className="directory-header__title">
      <img src={addressBookIcon} alt="Address Book" style={{height: 60, width: 'auto'}}/> <strong>Directory</strong>
    </h2>
    <nav className="directory-header__nav">
      <Link className="directory-header__link meta" to={'/directory/'}>People</Link>
      <Link className="directory-header__link meta" to={`/directory/entities`}>Other</Link>
      <Link className="directory-header__link meta" to={`/directory/groups`}>Groups</Link>
      <div className="btn-group" style={{marginLeft: 15}}>
        <button className="btn btn-primary btn-flat directory-header__link" data-toggle="dropdown">Add <i className="far fa-caret-down" /></button>
        <ul className="dropdown-menu">
          <li><Link to={'/directory/invite'}><i className="far fa-user circle-icon--small circle-icon--no-border" style={{marginRight: 5}}/> <strong>Invite People</strong></Link></li>
          <li><Link to={'/directory/groups/edit/0'}><i className="far fa-users circle-icon--small circle-icon--no-border" style={{marginRight: 5}}/> <strong>Add Group</strong></Link></li>
          <li><Link to={'/directory/upload'}><i className="far fa-upload circle-icon--small circle-icon--no-border" style={{marginRight: 5}}/> <strong>Upload CSV</strong></Link></li>
        </ul>
      </div>
    </nav>
  </header>
);