import React, { Component } from 'react';
import './app-frame.style.css';
import menu from '../../../img/menu.png';


export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      showSide: true
    }
  }

  toggleSidebar = function () {
    this.setState({
      showSide: !this.state.showSide
    })
  }

  render() {
    return (

        <div className="container-fluid">
          <div className="hamburger" onClick={ (e) => this.props.toggleSide() }>

          <h3 className="nav-title"><img src={menu} className='menu-img'></img>El Sistema Pittsburg - Website Administration</h3>


          </div>
        </div>

    )
  }
}
