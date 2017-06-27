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
<<<<<<< HEAD
    
       <ul>
         <li> <Link to='/admin'> Dashboard </Link></li>
         <li> <Link to='/admin/volunteers'> Volunteers </Link></li>
         <li> <Link to='/admin/classes'> Classes </Link></li>
         <li> <Link to='/admin/content/pictures'> Content Pictures </Link></li>
         <li> <Link to='/admin/content/text'> Content Text </Link></li>
         <li> <Link to='/admin/media'> Media </Link></li>
         <li> <Link to='/admin/blog'> Blog </Link></li>
       </ul>
=======
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
>>>>>>> master
    )
  }
}
