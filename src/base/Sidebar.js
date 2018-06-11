import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import routes from '../routes.js';
import Collapsible from 'react-collapsible';

import './submenu.less'

const topLevelLinks = routes.filter(el => el.linkName && !el.parent);
const nestedLinks = _.chain(routes)
                      .filter(el => el.linkName && el.parent)
                      .groupBy('parent')
                      .value();

const iconLookup = (name) => {
  if (name === 'Apps') {
    return 'fa-dashboard';
  } else if (name === 'Components') {
    return 'fa-cog';
  } else if (name === 'Styles') {
    return 'fa-paint-brush';
  } else {
    return 'fa-home';
  }
}

export default ({open, toggle = () => {}}) => (
  <nav className={`${open ? "active" : ""} ku-navigation text-left`}>
    <div className="cl-navblock">
      <ul className="cl-vnavigation">
        {
          topLevelLinks.map(route => {
            return <li onClick={toggle} key={route.linkName} className="ku-navigation__menu-item"><Link to={route.path} className="meta"><i className={`fa circle-icon--no-border circle-icon--small ${iconLookup('')}`} style={{width: 15}}/> <strong>{route.linkName}</strong></Link></li>
          })
        }
        {
          _.map(nestedLinks, (nestedItems, name) => {
            return (
              <li className="ku-navigation__menu-item" key={`nested-${name}`}>
                <Collapsible transitionTime={200} trigger={<a className="meta"><i className={`fa ${iconLookup(name)} circle-icon--no-border circle-icon--small`} style={{width: 15}}/> <strong>{name}</strong> <i className="fa fa-chevron-down ku-navigation__menu-toggle" /></a>}>
                  <div className="ku-navigation__submenu">
                    <Subnav navItems={nestedItems} toggle={toggle}/>
                  </div>
                </Collapsible>
              </li>
            )
          })
        }
      </ul>
    </div>
  </nav>
)

const Subnav = ({navItems, toggle}) => (
  <div>
    {
      navItems.map(route => {
        return <span onClick={toggle} key={route.linkName} className="ku-navigation__submenu-item"><Link to={route.path} >{route.linkName}</Link></span>
      })
    }
  </div>
)