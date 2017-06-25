import React, { Component } from 'react';
import Router, { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
    
       <ul>
         <li> <Link to='/admin'> Dashboard </Link></li>
         <li> <Link to='/admin/volunteers'> Volunteers </Link></li>
         <li> <Link to='/admin/classes'> Classes </Link></li>
         <li> <Link to='/admin/content/pictures'> Content Pictures </Link></li>
         <li> <Link to='/admin/content/text'> Content Text </Link></li>
         <li> <Link to='/admin/media'> Media </Link></li>
         <li> <Link to='/admin/blog'> Blog </Link></li>
       </ul>
    )
  }
}

export default Header;
