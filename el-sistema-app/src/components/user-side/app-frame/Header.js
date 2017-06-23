import React, { Component } from 'react';
import Router, { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
       <ul>
         <li> <Link to='/'> Home </Link> </li>
         <li> <Link to='/calendar'> Calendar </Link></li>
         <li> <Link to='/about'> About </Link></li>
         <li> <Link to='/media'>Media </Link></li>
         <li> <Link to='/blog'>Blog </Link></li>
         <li> <Link to='/donate'>Donate </Link></li>
       </ul>
    )
  }
}

export default Header;
