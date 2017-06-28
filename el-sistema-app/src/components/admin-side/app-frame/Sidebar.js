import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <li className='create-new-box'><img src={create} className='nav-img'></img>Create New

          </li>

          <li className='nav-link'><img src={pictures} className='nav-img'></img><Link to='/admin'>Dashboard</Link>

          </li>


          <li className='nav-link'><img src={volunteers} className='nav-img'></img><Link to='/admin/volunteers'>Volunteers</Link>

          </li>
            <li className='nav-link'>  <img src={classes} className='nav-img'></img><Link to='/admin/classes'>Classes</Link>

            </li>
            <li className='nav-link'><img src={pictures} className='nav-img'></img><Link to='/admin/content/pictures'>Content Pictures</Link>

            </li>
            <li className='nav-link'><img src={text} className='nav-img'></img><Link to='./admin/content/text'>Content Text</Link>

            </li>

              <li className='nav-link'><img src={media} className='nav-img'></img><Link to='/admin/media'>Media</Link>

              </li>
              <li className='nav-link'><img src={blog} className='nav-img'></img><Link to='/admin/blog'>Blog</Link>

              </li>

        </ul>


           </aside>

    )
  }
}
