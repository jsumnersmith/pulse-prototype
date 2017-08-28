import React from 'react';

import Rubric from './components/Rubric';
import Matrix from './components/Matrix';
import MultipleChoice from './components/MultipleChoice';

import { standardRubrics, longRubrics } from './components/rubricData';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <h4><strong>MultipleChoice</strong></h4>
      <MultipleChoice options={["I am feeling fine.", "I am not feeling fine."]} />
      <hr className="dark" />
      <h4><strong>Simple Matrix</strong></h4>
      <Matrix />
      <hr className="dark" />
      <h4><strong>Simple Rubric</strong></h4>
      <Rubric data={standardRubrics}/>
      <hr className="dark" />
      <h4><strong>Collaborative Practice: A Longer Rubric</strong></h4>
      <Rubric data={longRubrics}/>
    </div>
  </div>
)

