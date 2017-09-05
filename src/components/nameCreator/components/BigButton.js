import React from 'react';
import './bigButton.less';

export default ({iconClass, title, description}) => (
  <div className="btn-huge">
    <i className={`fa ${iconClass} btn-huge__icon`} />
    <div className="btn-huge__content">
      <h4 className="btn-huge__title"><strong>{title}</strong></h4>
      <p className="btn-huge__description">{description}</p>
    </div>
  </div>
)