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
<li className='create-new-box'>

  <div className="dropdown show">
    <div className="btn btn-secondary dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img src={create}></img>Create New
    </div>

    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>

</li>



          <li className='nav-link'><img src={pictures} ></img>
          <Link to='/admin' className='nav-img'>Dashboard</Link>

          </li>


          <li className='nav-link'><img src={volunteers} ></img><Link to='/admin/volunteers' className='nav-img'>Volunteers</Link>

          </li>
            <li className='nav-link'>  <img src={classes} ></img><Link to='/admin/classes' className='nav-img'>Classes</Link>

            </li>
            <li className='nav-link'><img src={pictures} ></img><Link to='/admin/content/pictures' className='nav-img'>Content Pictures</Link>

            </li>
            <li className='nav-link'><img src={text} ></img><Link to='/admin/content/text' className='nav-img'>Content Text</Link>

            </li>

              <li className='nav-link'><img src={media} ></img><Link to='/admin/media' className='nav-img'>Media</Link>

              </li>
              <li className='nav-link'><img src={blog} ></img><Link to='/admin/blog' className='nav-img'>Blog</Link>

              </li>

        </ul>


           </aside>

    )
  }
}
