import React, { Component } from 'react';
import '../style.css';
import trash from '../../../../../img/trash.png';
import edit from '../../../../../img/pencil.png'

class BlogTable extends Component{
  render(){
    return(


<div className='container'>
  <h1 className='current-content'>Content Text Content</h1>
  <ul className='media-list'>
    <li >
    <div className='checkbox-volunteer'>
      <input placeholder='' type='checkbox' ></input>
      </div>
    </li>
    <li className='media-titles'>Title</li>
    <li className='media-titles'>Publish Date</li>
    <li className='media-titles'>Author</li>
    <li className='media-titles'>Actions</li>

  </ul>
  <ul className='media-list line'>
    <li className='col-md-3'>
      <div className='checkbox-volunteer'>
      <input placeholder='' type='checkbox' ></input>
      </div>
    </li>
    <li className='col-md-4' >
      <input placeholder='Title' type='text' className='type-placeholder '></input>
    </li>
    <li className='col-md-5'>
      <input placeholder='Publish Date' type='date' className='date-placeholder'></input>
    </li>
    <li className='col-md-6'>
      <input placeholder='Author' type='text' className='author-placeholder'></input>
    </li>
    <li className='col-md-2'>
      <img src={edit} className='edit-media' alt=""></img>
    </li>
    <li className='col-md-1'>
      <img src={trash} className='delete-media' alt=""></img>
    </li>


</ul>
<ul className='media-list line'>
  <li className='col-md-3'>
    <div className='checkbox-volunteer'>
    <input placeholder='' type='checkbox' ></input>
    </div>
  </li>
  <li className='col-md-4' >
    <input placeholder='Title' type='text' className='type-placeholder '></input>
  </li>
  <li className='col-md-5'>
    <input placeholder='Publish Date' type='date' className='date-placeholder'></input>
  </li>
  <li className='col-md-6'>
    <input placeholder='Author' type='text' className='author-placeholder'></input>
  </li>
  <li className='col-md-2'>
    <img src={edit} className='edit-media' alt=""></img>
  </li>
  <li className='col-md-1'>
    <img src={trash} className='delete-media' alt=""></img>
  </li>
</ul>
</div>
)
}
}
export default BlogTable;
