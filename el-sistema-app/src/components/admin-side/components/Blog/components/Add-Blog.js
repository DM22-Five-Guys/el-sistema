import React, { Component } from 'react';
import '../style.css';
import camera from '../../../../../img/blue-camera.png';

class AddBlog extends Component{
  render(){
    return(
      <div className='container'>
        <div className='row'>
        <h1 className='add-blog-header'>Add New Blog</h1>
      <div className='blog-caption-title-container'>

        <div className='col-md-9'>


      <ul className='blog-title-caption'>
      <li className='blog-title-li'>
      <input placeholder='Title' type='text' className='blog-title'></input>
      <div className='blog-title-line' ></div>
      </li>
      <li className='blog-caption-li'>
      <input placeholder='Caption' type='text' className='blog-caption'></input>
      <div className='blog-caption-line'></div>
      </li>
      </ul>

<h2 className='blog-content-header'>Blog Content</h2>
    <input placeholder='Description' type='text' className='blog-content-placeholder'></input>
    <div className='blog-content-line'></div>
    </div>
  </div>


      <div className='col-md-2 rectangles'>

        <div className='blog-rectangle'>
          <img src={camera} className='camera img-responsive'></img>
        </div>
        <figcaption className='blog-picute-header'>Add Top Full Picture</figcaption>

        <div className='blog-rectangle'>
          <img src={camera} className='camera img-responsive'></img>

      </div>
      <figcaption className='blog-picute-header'>Add 2nd Full Picture</figcaption>
      </div>
        </div>
        <div className='buttons-container'>
        <ul className='buttons'>
          <li className='list-button'>
            <div className='save-button'>
              <p className='save-text'>SAVE</p>
            </div>
            </li>
          <li className='list-button'>
            <div className='cancel-button' >
            <p className='cancel-text'>CANCEL</p>
            </div>
          </li>
        </ul>
        </div>
</div>
    )
  }
}
export default AddBlog;
