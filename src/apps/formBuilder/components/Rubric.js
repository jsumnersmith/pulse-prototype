import React, {Component} from 'react';


export default ({data}) => (
  <div>
    <table className="scale-table scale-table__rubric">
      <tbody>
        { data.map((datum)=> <TableRow {...datum}/>) }
      </tbody>
    </table>
  </div>
);

class TableRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: null
    }
    this.checkActive = this.checkActive.bind(this);
    this.setCheckbox = this.setCheckbox.bind(this);
  }
  checkActive(index){
    return index === this.state.activeIndex;
  }
  setCheckbox(index){
    if (this.checkActive(index)){
      this.setState({activeIndex: null});
      return;
    } else {
      this.setState({activeIndex: index});
    }
  }
  render(){
    return (
      <tr>
        <td>{this.props.text}</td>
        {
          this.props.rubrics.map((value, index)=>{
            return <td onClick={()=>{this.setCheckbox(index)}} className={`rubric-box ${this.checkActive(index) ?  'rubric-box__active': null}`}>
              {this.checkActive(index) && <i className="far fa-check-circle blue rubric-box__check"/> }
              {value}
            </td>
          })
        }
      </tr>
    )
  }
}