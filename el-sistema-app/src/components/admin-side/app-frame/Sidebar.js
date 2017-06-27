import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

  render() {
    return (



      
      <aside className="sidebar-container">
        <div className="sidebar-box create-new-box"><div className="nav-logo"></div> Create New</div>
        <div className="sidebar-box"><div className="nav-logo"></div> <Link className="sidebar-link" to='/admin'> Dashboard </Link></div>
        <div className="sidebar-box"><div className="nav-logo"></div> <Link className="sidebar-link" to='/admin/volunteers'> Volunteers </Link></div>
        <div className="sidebar-box"><div className="nav-logo"></div> <Link className="sidebar-link" to='/admin/classes'> Classes </Link></div>
        <div className="sidebar-box"><div className="nav-logo"></div> <Link className="sidebar-link" to='/admin/content/pictures'> Content Pictures </Link></div>
        <div className="sidebar-box"><div className="nav-logo"></div> <Link className="sidebar-link" to='/admin/content/text'> Content Text </Link></div>
        <div className="sidebar-box"><div className="nav-logo"></div> <Link className="sidebar-link" to='/admin/media'> Media </Link></div>
        <div className="sidebar-box"><div className="nav-logo"></div> <Link className="sidebar-link" to='/admin/blog'> Blog </Link></div>
      </aside>
    )
  }
}
