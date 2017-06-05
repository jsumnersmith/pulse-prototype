import React from 'react';
import Header from './Header.js';
import Home from '../apps/home/index';
import ReportBuilder from '../apps/reportBuilder/index';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => (
  <div>
    <Router>
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/report-builder" component={ReportBuilder} />
        </div>
      </div>
    </Router>
  </div>
)