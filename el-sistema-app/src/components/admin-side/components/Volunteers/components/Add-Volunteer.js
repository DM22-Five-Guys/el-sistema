import React, { Component } from 'react';
import '../style.css';
import camera from '../../../../../img/blue-camera.png';

class AddVolunteer extends Component{
  render(){
    return(
      <div className='container'>

      <div className='add-volunteer-container'>
      <h1 className='add-volunteer'>Add New Volunteer</h1>

</div>

<div className='container '>
  <div className='row'>
    <div className='col-md-9'>
<div className='first-last-name-container'>
<ul className='first-last-name-ul'>
<li className='first-name-li'>
<input placeholder='First name' type='text' className='first-name'></input>
<div className='first-name-line' ></div>
</li>
<li className='last-name-li'>
<input placeholder='Last name' type='text' className='last-name'></input>
<div className='last-name-line'></div>
</li>
</ul>
</div>



  <input placeholder='Email Address' type='email' className='email-placeholder'></input>
  <div className='email-address-line'></div>



  <input placeholder='Job' type='text' className='job-placeholder'></input>
  <div className='job-line'></div>


  <input placeholder='Short Bio' type='text' className='short-bio-placeholder'></input>
  <div className='short-bio-line'></div>



  <input placeholder='Long Bio' type='text' className='long-bio-placeholder'></input>
  <div className='long-bio-line'></div>


<div className='permissions-container'>
  <h1 className='permissions-header'>Permissions</h1>
<div className='checkbox-container'>
<ul className='all-permissions'>
<li className='permissions'><input placeholder='Blog' type='checkbox' className='permission'></input>       Blog</li>
  <li className='permissions'><input placeholder='Videos' type='checkbox' className='permission'></input>     Videos</li>
    <li className='permissions'><input placeholder='Classes' type='checkbox' className='permission'></input>     Classes</li>
      <li className='permissions'><input placeholder='Performance' type='checkbox' className='permission'></input>        Performance</li>
        <li className='permissions'><input placeholder='Content' type='checkbox' className='permission'></input>    Content</li>
</ul>
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
</div>
</div>
<div className='col-md-1'>
  <div className='circle'>
    <img src={camera} className='camera img-responsive'></img>
  </div>
  <div className='rectangle'>
    <img src={camera} className='camera img-responsive'></img>
  </div>
</div>
</div>
</div>

</div>





    )
  }
}
export default AddVolunteer;
