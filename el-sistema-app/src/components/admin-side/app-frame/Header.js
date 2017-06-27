import React, { Component } from 'react';
import './app-frame.style.css';

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
      <div>
        <div className="top-nav-container">
          <div className="hamburger" onClick={ (e) => this.props.toggleSide() }>

            <div className="ham-bar"></div>
            <div className="ham-bar"></div>
            <div className="ham-bar"></div>
          </div>
          <h3 className="nav-title">El Sistema Pittsburg - Website Administration</h3>
        </div>
      </div>
    )
  }
}
