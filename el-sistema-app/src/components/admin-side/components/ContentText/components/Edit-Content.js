import React, { Component } from 'react';
import '../style.css';

class EditContent extends Component{
  render(){
    return(
<div className='edit-container'>
<h1 className='add-text-content-header'>Add New Text Content</h1>
<ul className='edit-catagory-title'>
<li className='catagory-title-li'>
  <select>
    <option>
    Quotes
    </option>
    <option>
      Circ
    </option>
  </select>
<div className='catagory-title-line' ></div>
</li>
<li className='edit-title-li'>
<input placeholder='Title' type='text' className='edit-title'></input>
<div className='edit-title-line'></div>
</li>
</ul>

<input placeholder='Description' type='text' className='long-bio-placeholder'></input>
<div className='long-bio-line'></div>

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
export default EditContent;
