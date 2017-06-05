import React from 'react';
import { Link } from 'react-router-dom';

export default ({open, toggle = () => {}}) => (
  <nav className={`${open ? "active" : ""} ku-navigation cl-sidebar text-left`}>
    <div className="cl-navblock">
      <ul className="cl-vnavigation">
        <li onClick={toggle}><Link to="/" >Home</Link></li>
        <li onClick={toggle}><Link to="/report-builder" >Report Builder</Link></li>
      </ul>
    </div>
  </nav>
)