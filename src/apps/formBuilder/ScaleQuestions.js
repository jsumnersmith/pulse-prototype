import React from 'react';

import Rubric from './components/Rubric';
import Matrix from './components/Matrix';


export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <Matrix />
      <hr className="dark" />
      <Rubric />
    </div>
  </div>
)

