import React, { Component } from 'react';
import './rubricColors.less';
import _ from 'lodash';
import chroma from 'chroma-js';

const scale = chroma.scale(['#E59062', '#FFD299', '#F3F9C5', '#82CCB2', '#1FAF84']);
const scaleFour = chroma.scale(['#E59062', '#FFD299', '#82CCB2', '#1FAF84']);

export default class RubricColors extends Component {
  getBlocks(count){
    const fakeArray = new Array(count);
    const itemsArray = [];
    const colorsArray = count === 4 ? scaleFour.colors(count) : scale.colors(count);

    _.map(fakeArray, (val, index) => {
      console.log(count, index);
      itemsArray.push(<div className="rubric-color" style={{background: colorsArray[index]}}>{index + 1}</div>);
    });
    return itemsArray;
  }

  render(){
    return (
      <div className="wrapper">
        <div className="block-flat">
          <h3><strong>2 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(2), (block) => block)}
          </div>
          <h3><strong>3 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(3), (block) => block)}
          </div>
          <h3><strong>4 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(4), (block) => block)}
          </div>
          <h3><strong>5 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(5), (block) => block)}
          </div>
          <h3><strong>6 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(6), (block) => block)}
          </div>
          <h3><strong>7 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(7), (block) => block)}
          </div>
          <h3><strong>8 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(8), (block) => block)}
          </div>
          <h3><strong>9 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(9), (block) => block)}
          </div>
          <h3><strong>10 Point</strong></h3>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(10), (block) => block)}
          </div>
          <div className="rubric-color-wrapper">
            {_.map(this.getBlocks(20), (block) => block)}
          </div>
        </div>
      </div>
    );
  }
}