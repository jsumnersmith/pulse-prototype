import React from 'react';
import Header from './Header.js';
import routes from '../routes.js';
import ThemeProvider from '../componentLibrary/ThemeProvider';

import { HashRouter as Router, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-pro/css/all.css';

export default () => (
  <div>
    <Router>
      <ThemeProvider>
        <div>
          <Header />
          <div className="">
            { routes.map(route => <Route {...route} key={`route-${route.path}`}/>) }
          </div>
        </div>
      </ThemeProvider>
    </Router>
  </div>
)