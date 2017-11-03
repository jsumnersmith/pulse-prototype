import React from 'react';
import './stacked-bar-chart.less';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="stacked-bar-chart">
        <div className="stacked-bar-chart__row">
          <div className="stacked-bar-chart__label">
            Blended Learning
          </div>
          <div className="stacked-bar-chart__bar-container">
            <div className="stacked-bar-chart__bar blue" style={{width: "80%"}}></div>
            <div className="stacked-bar-chart__count">80 hours</div>
          </div>
        </div>
        <div className="stacked-bar-chart__row">
        <div className="stacked-bar-chart__label">
            Technology Integration
          </div>
          <div className="stacked-bar-chart__bar-container">
            <div className="stacked-bar-chart__bar purple" style={{width: "60%"}}></div>
            <div className="stacked-bar-chart__count">60 hours</div>
          </div>
        </div>
      </div>
    </div>
    <div className="block-flat">
      <div className="stacked-bar-chart">
        <div className="stacked-bar-chart__controls">
          <div className="stacked-bar-chart__controls-item">
            <label>Show me hours by</label>
            <select className="form-control">
              <option>Topics</option>
              <option>State Standard</option>
              <option>Subject Focus</option>
              <option>Location</option>
              <option>Event</option>
              <option>School</option>
              <option>Grade</option>
              <option>Role</option>
            </select>
          </div>
          <div className="stacked-bar-chart__controls-item">
            <label>segmented by</label>
            <select className="form-control">
              <option>Topics</option>
              <option>State Standard</option>
              <option>Subject Focus</option>
              <option>Location</option>
              <option>Event</option>
              <option>School</option>
              <option selected="true">Grade</option>
              <option>Role</option>
            </select>
          </div>
        </div>
        <div className="stacked-bar-chart__row">
          <div className="stacked-bar-chart__label">
            Blended Learning
          </div>
          <div className="stacked-bar-chart__bar-container">
            <div className="stacked-bar-chart__bar blue" style={{width: "20%"}}></div>
            <div className="stacked-bar-chart__bar purple" style={{width: "30%"}}></div>
            <div className="stacked-bar-chart__bar red" style={{width: "30%"}}></div>
            <div className="stacked-bar-chart__count">80 hours</div>
          </div>
        </div>
        <div className="stacked-bar-chart__row">
          <div className="stacked-bar-chart__label">
              Technology Integration
            </div>
            <div className="stacked-bar-chart__bar-container">
            <div className="stacked-bar-chart__bar blue" style={{width: "10%"}}></div>
            <div className="stacked-bar-chart__bar purple" style={{width: "30%"}}></div>
            <div className="stacked-bar-chart__bar red" style={{width: "20%"}}></div>
            <div className="stacked-bar-chart__count">60 hours</div>
            </div>
          </div>
        </div>
        <div className="stacked-bar-chart__key">
          <div className="stacked-bar-chart__key-item">
            <div className="stacked-bar-chart__key-color blue"></div>
            <div className="stacked-bar-chart__key-label">2nd Grade</div>
          </div>
          <div className="stacked-bar-chart__key-item">
            <div className="stacked-bar-chart__key-color purple"></div>
            <div className="stacked-bar-chart__key-label">3rd Grade</div>
          </div>
          <div className="stacked-bar-chart__key-item">
            <div className="stacked-bar-chart__key-color red"></div>
            <div className="stacked-bar-chart__key-label">4th Grade</div>
          </div>
        </div>
    </div>
  </div>
);