import React from 'react';
import Header from './Header.js';
import routes from '../routes.js';

import { HashRouter as Router, Route } from 'react-router-dom';

export default () => (
  <div>
    <Router>
      <div>
        <Header />
        <div className="">
          { routes.map(route => <Route {...route} key={`route-${route.linkName}`}/>) }
        </div>
      </div>
    </Router>
  </div>
)