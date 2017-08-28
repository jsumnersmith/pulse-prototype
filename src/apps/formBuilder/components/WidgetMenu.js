import React from 'react';

export default ({isActive}) => (
  <div className={`form-builder__widget-menu ${isActive ? 'active' : ''}`}>
    <div className="form-builder__widget-menu-content">
      <SideBarItem
        title="Text"
        iconClass="text"
      />
      <SideBarItem
        title="Scaled Questions Matrix"
        iconClass="heatmap"
      />
      <SideBarItem
        title="Multiple Choice Question"
        iconClass="multiple-choice"
      />
      <SideBarItem
        title="Interest Question"
        iconClass="interests"
      />
      <SideBarItem
        title="Open Response Question"
        iconClass="open-responses"
      />
    </div>
  </div>
);

const SideBarItem = ({title, iconClass}) => (
  <div className="form-builder__sidebar-item" draggable="true">
    <span className={`form-builder__sidebar-item-icon ${iconClass}`}/><strong className="form-builder__sidebar-item-title">{title}</strong>
  </div>
)