import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './app-frame.style.css';
import create from '../../../img/ic-add-box-24-px.png';
import pictures from '../../../img/invalid-name.png';
import volunteers from '../../../img/ic-face-24-px.png';
import classes from '../../../img/ic-chrome-reader-mode-24-px.png';
import text from '../../../img/ic-content-copy-24-px.png';
import media from '../../../img/ic-perm-media-24-px.png';
import blog from '../../../img/shape.png';


export default class Sidebar extends Component {
  render() {
    return (
        <aside className="sidebar-container">
            <ul className='nav-links'>
                <li className='nav-link create-new-box'><img src={create}></img>
                    <span className='nav-img'>Create New</span>
                </li>
                <Link to='/admin' className='nav-link'>
                  <img src={pictures} alt={pictures}></img><li className='nav-img'>Dashboard</li>
                </Link>
                <Link to='/admin/volunteers' className='nav-link'>
                  <img src={volunteers} alt={volunteers}></img><li className='nav-img'>Volunteers</li>
                </Link>
                <Link to='/admin/classes' className='nav-link'>
                  <img src={classes} alt={classes}></img><li className='nav-img'>Classes</li>
                </Link>
                <Link to='/admin/content/pictures' className='nav-link'>
                  <img src={pictures} alt={pictures}></img><li className='nav-img'>Content Pictures</li>
                </Link>
                <Link to='/admin/content/text' className='nav-link'>
                  <img src={text} alt={text}></img><li className='nav-img'>Content Text</li>
                </Link>
                <Link to='/admin/media' className='nav-link'>
                  <img src={media} alt={media}></img><li className='nav-img'>Media</li>
                </Link>
                <Link to='/admin/blog' className='nav-link'>
                  <img src={blog} alt={blog}></img><li className='nav-img'>Blog</li>
                </Link>
            </ul>
        </aside>
    )

  }
}
