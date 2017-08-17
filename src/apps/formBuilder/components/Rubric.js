import React, {Component} from 'react';
const rubricList = [
  "N/A (not observed)",
  "Not Attempting",
  "Ineffective",
  "Minimally Effective",
  "Effective",
  "Highly Effective"
]

export default () => (
  <div>
    <table className="scale-table scale-table__rubric">
      <tbody>
         <TableRow
          text="DIFFERENTIATION: Differentiating lessons based on student readiness, interest or other factors."
          rubrics={rubricList}
        />
        <TableRow
          text="RIGOR: Implementing lessons and activities that consistently require rigorous thinking of students."
          rubrics={rubricList}
        />
        <TableRow
          text="FORMATIVE ASSESSMENT: Checking for understanding throughout the lesson using information deliberate methods (such as questioning or short tasks)."
          rubrics={rubricList}
          />
        <TableRow
          text="ADJUSTING INSTRUCTION: Using formative assessment data to make in-the-moment instructional adjustments and provide feedback."
          rubrics={rubricList}
          />
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
            return <td onClick={()=>{this.setCheckbox(index)}} className={`rubric-box ${this.checkActive(index)?  'rubric-box__active': null}`}>
              {this.checkActive(index) ? <i className="fa fa-check-circle blue rubric-box__check"/> : null}
              {value}
            </td>
          })
        }
      </tr>
    )
  }
}