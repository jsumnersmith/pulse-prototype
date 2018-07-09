import React,  { Component } from 'react';
import coffee from '../images/new_coffee.png';

export default class UserHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownIsOpen: false,
      activeDistrict: 'Irving ISD'
    }
    this.toggleDistrict = this.toggleDistrict.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDistrict = (activeDistrict) => {
    console.log(activeDistrict, "Hello")
    this.setState({activeDistrict})
  };
  toggleDropdown = () => this.setState({dropdownIsOpen: !this.state.dropdownIsOpen});
  render(){
    return (
      <div className="ku-header-profile" >
        <img src={coffee} alt="Sample Avatar" className="ku-header-profile-image" onClick={this.toggleDropdown}/>
        <div className="ku-header-profile-name" onClick={this.toggleDropdown}>
          <h4>Joel Sumner Smith</h4>
          <h6 className="meta meta-soft">{this.state.activeDistrict}</h6>
        </div>
        <DistrictDropDown
          isOpen={this.state.dropdownIsOpen}
          onChange={this.toggleDistrict}
        />
      </div>
    )
  }
}

const DistrictDropDown = ({isOpen, onChange}) => (
  <div className={`ku-header-profile-district-switch ${isOpen && 'active'}`}>
    <div><label>Switch Organzation:</label></div>
    <h6 onClick={() => onChange('Irving ISD')} className="meta meta-soft">Irving ISD</h6>
    <h6 onClick={() => onChange('Dallas ISD')} className="meta meta-soft">Dallas ISD</h6>
  </div>
);