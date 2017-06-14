import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes.js';

export default ({open, toggle = () => {}}) => (
  <nav className={`${open ? "active" : ""} ku-navigation cl-sidebar text-left`}>
    <div className="cl-navblock">
      <ul className="cl-vnavigation">
        {
          routes.filter(el => el.linkName).map(route => {
            return <li onClick={toggle} key={route.linkName}><Link to={route.path} >{route.linkName}</Link></li>
          })
        }
      </ul>
    </div>
  </nav>
)