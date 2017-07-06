import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './app-frame.style.css';
import menu from '../../../img/menu.png';
import { logout } from './../../../reducers/users.reducer';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      showSide: true,
      redirect: false
    }
  }
  componentDidMount(){
    if(!this.props.loggedin && !this.props.validtoken()){
        this.loggedOut();
    }
  }
  
  clickHam = function () {
    this.props.toggleSide(); 
  }


 loggedOut(){
   this.setState({redirect:false}, ()=> console.log(this.state.redirect))
      return (
        <Redirect to='/admin/login'/>
      )
        
    }
  

  render() {
    return (
      <div className="container-fluid">
        <div className="nav-content">
          <div className="nav-left-side">
            <div className="hamburger" onClick={ (e) => this.props.toggleSide() }>
              <img src={menu} className='menu-img'></img>
            </div>
            <h3 className="nav-title">El Sistema Pittsburg - Website Administration</h3>
          </div>
          
          <div className="logout">
            <h4 onClick={() => { this.props.logout(), this.setState({redirect: true}), ()=> console.log('clicked')}}>{(this.props.loggedin || this.props.validtoken)?"Logout":''}</h4>
              {this.state.redirect === true? this.loggedOut():''}
          </div>
        </div>        
      </div>
      )
    }
}

export default connect(null, { logout })(Header)

{/*<div className="logout">
            <h4 onClick={() => { this.props.logout(), this.setState({redirect: true}), ()=> console.log('clicked')}}>{(this.props.loggedin || this.props.validtoken)?"Logout":''}</h4>
              {this.state.redirect === true? this.loggedOut():''}
          </div>*/}
