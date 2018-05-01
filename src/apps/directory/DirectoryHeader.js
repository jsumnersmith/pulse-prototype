import React from 'react';
import {Link} from 'react-router-dom';
import addressBookIcon from '../../images/address-book-icon.svg';

export default () => (
  <header className="directory-header">
    <h2 className="directory-header__title">
      <img src={addressBookIcon} alt="Address Book" style={{height: 60, width: 'auto'}}/> <strong>Directory</strong>
    </h2>
    <nav className="directory-header__nav">
      <Link className="directory-header__link meta" to={'/directory/'}>Directory</Link>
      <Link className="directory-header__link meta" to={`/directory/entities`}>Entities</Link>
      <Link className="directory-header__link meta" to={`/directory/groups`}>Groups</Link>
      <button className="btn btn-primary btn-flat directory-header__link">Add Person</button>
    </nav>
  </header>
);