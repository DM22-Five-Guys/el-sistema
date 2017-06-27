import React, { Component } from 'react';
import './style.css';

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
          <h3 className="nav-title">El Sistema Pittsburg - Website Administration</h3>
          </div>
        </div>

    )
  }
}
