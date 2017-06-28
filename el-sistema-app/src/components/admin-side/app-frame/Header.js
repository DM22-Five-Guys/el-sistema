import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      showSide: true
    }
  }

  clickHam = function () {
    this.props.toggleSide(); 
  }

  render() {
    return (
      <div>
        <div className="top-nav-container">
          <div className="hamburger" onClick={ (e) => this.clickHam() }>

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
