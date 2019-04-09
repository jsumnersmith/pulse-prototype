import React from 'react';
import SubHeader from '../components/SubHeader'

export default () => (
  <div className="wrapper">
    <div>
      <span><i className="far fa-home"/> </span>
      /
      <span className="meta"> Events</span>
    </div>
    <SubHeader activeName="browse" admin={false}/>
    <div className="block-flat"></div>
  </div>
)