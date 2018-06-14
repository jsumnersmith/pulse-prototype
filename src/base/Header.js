import React, {Component} from 'react';
import Sidebar from './Sidebar';
import UserHeader from './UserHeader';
import logo from '../images/logo.png';
import './header.less';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
    this.state = {
      open: false,
      fixed: true,
      lastScroll: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }

  checkScroll(e){
    const currentScroll = e.target.scrollingElement.scrollTop;
    const {lastScroll} = this.state;
    //console.log(lastScroll, e.currentTarget.scrollTop)
    if (currentScroll < 72) {
      this.setFixed(currentScroll);
    } else if (lastScroll > (currentScroll + 400)) {
      this.setFixed(currentScroll);
    } else if (lastScroll < currentScroll){
      this.setUnfixed(currentScroll);
    }
  }

  toggleOpen(){
    this.setState({open: !this.state.open});
  }

  setFixed(lastScroll){
    this.setState({fixed: true, lastScroll});
  }

  setUnfixed(lastScroll){
    this.setState({fixed: false, lastScroll});
  }

  render(){
    const {fixed, open} = this.state;
    return (
      <div className="cl-wrapper">
        <header className={`ku-header ${fixed || open  ? "fixed" : null} ${open  ? "open" : null}`}>
          <div className="ku-header-toggle">
            <a onClick={()=>this.toggleOpen()}>Menu <i className="fa fa-bars"></i></a>
          </div>
          <div className="ku-header-logo text-center">
            <img src={logo} alt="Kickup Logo"/>
          </div>
          <UserHeader />
        </header>
        <Sidebar
          open={open}
          toggle={this.toggleOpen}
        />
      </div>
    )
  }
}