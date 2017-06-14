import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.checkActive = this.checkActive.bind(this);
  }

  checkActive(name){
   if (name === this.props.activeName) {
     return 'active';
   }
  }

  render(){
    return (
      <ul className="nav nav-links transparent" style={{marginTop: 20, paddingLeft: 0}}>
        <li className={this.checkActive("home")}>
          <Link to="/events/" className="nav-link"><span>Home</span></Link>
        </li>
        <li className={this.checkActive("browse")}>
          <Link to="/events/browse-upcoming/" className="nav-link"><span>Browse Events</span></Link>
        </li>

        <li className={this.checkActive("manage")}>
          <Link to="/events/manage/" className="nav-link"><span>Manage</span></Link>
        </li>
        <Link to="/events/create" className="btn btn-primary">Add Event</Link>
      </ul>
    )
  }
}