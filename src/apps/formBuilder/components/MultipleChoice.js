import React, { Component } from 'react';

export default class MultipleChoiceQuestion extends Component {
  state = {
    active: this.props.options[0]
  }
  isActive(option){
    return this.state.active === option;
  }
  setActive(active){
    this.setState({active});
  }
  render() {
    this.setActive = this.setActive.bind(this);
    return (
      <div className="multiple-choice__question">
        {this.props.options.map((option)=>{
          return <MultipleChoiceOption
            option={option}
            active={this.isActive(option)}
            setActive={this.setActive}
          />
        })}
      </div>
    );
  }
};

const MultipleChoiceOption = ({option, active, setActive}) => (
  <div className="multiple-choice__option" style={{cursor: "pointer"}}onClick={()=>{return active ? setActive('') : setActive(option)}}>
    <RadioToggle active={active} /> <strong>{option}</strong>
  </div>
)

const RadioToggle = ({active}) => (
  <i className={`${active ? 'fas fa-check-circle blue': 'far fa-circle'} radio-toggle`}/>
);