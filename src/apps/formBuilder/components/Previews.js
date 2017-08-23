import React from 'react';

import Matrix from './Matrix';
import MultipleChoice from './MultipleChoice';

export const MultipleChoicePreview = (
  <div>
    <MultipleChoice options={["I am feeling fine.", "I am not feeling fine."]} />
  </div>
);

export const OpenResponsePreview = (
  <div>
    <p className="form-builder__prompt">What are some general other comments?</p>
    <textarea className="form-control" rows="5"/>
  </div>
);

export const MatrixScalePreview = (
  <div>
  <Matrix />
  </div>
);