import React from 'react';
import   {
    AddingTableButton,
    AddingTableScale,
    AddingTableRubric,
  } from './components/Forms';

import './form-builder.less';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <h3><strong>Multiple Choice</strong></h3>
      <AddingTableButton />
      <hr className="dark" />
      <h3><strong>Matrix Question</strong></h3>
      <AddingTableScale />
      <hr className="dark" />
      <h3><strong>Rubric Question</strong></h3>
      <AddingTableRubric />
    </div>
  </div>
)
