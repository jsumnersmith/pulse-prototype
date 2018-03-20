import React, {Component} from 'react';
import './group-selector.less';

export default ({groups}) =>(
  <div className="group-selector">
    {groups.map(group => <GroupItem group={group} />)}
  </div>
)

class GroupItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
    this.toggleSelected = this.toggleSelected.bind(this);
  }
  toggleSelected(){
    this.setState({selected: !this.state.selected})
  }
  render(){
    const randomNumber = Math.floor(Math.random() * 999) + 100;
    return (
      <div className="group-selector__item" >
        <span onClick={this.toggleSelected} className="group-selector__header">
          <Icon iconName={this.state.selected ? "fa-check-circle green": "fa-circle-thin"}/>
          <h5 className="group-selector__title"><strong>{this.props.group}</strong></h5>
        </span>
        { this.state.selected &&
          <i className="fa fa-chevron-down" style={{float: "right"}} data-toggle="collapse" data-target={`#${randomNumber}`} />
        }
        { this.state.selected &&
          <div className="group-selector__options collapse" id={`${randomNumber}`}>
            <GroupAdminOptions />
          </div>
        }
      </div>
    )
  }
}

const Icon = ({iconName = 'fa-circle-thin'}) => (
  <i className={`group-selector__icon fa ${iconName}`}/>
)

const GroupAdminOptions = () => (
  <div style={{paddingLeft: 15}}>
    <div><input type="checkbox" checked/> Can edit users</div>
    <div><input type="checkbox" checked/> Can share reports with users</div>
    <div><input type="checkbox" checked/> Notified about survey responses</div>
    <div><input type="checkbox" checked/> Notified about event requests</div>
  </div>
)