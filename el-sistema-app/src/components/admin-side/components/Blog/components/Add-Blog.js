import React, { Component } from 'react';
import '../style.css';

class AddBlog extends Component{
  render(){
    return(
      <div>
      <div className='blog-caption-title-container'>
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
      </div>

    <input placeholder='Blog Content' type='text' className='blog-content-placeholder'></input>
    <div className='blog-content-line'></div>
</div>
    )
  }
}
export default AddBlog;
