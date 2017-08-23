import React from 'react';

import Matrix from './Matrix';
import MultipleChoice from './MultipleChoice';

export const MultipleChoicePreview = (
  <div>
    <p className="form-builder__prompt">How are you feeling today?</p>
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
    <p className="form-builder__prompt">Fill out the following based on what you see in the classroom.</p>
    <Matrix />
  </div>
);