import React, { Component } from 'react';
import '../style.css';

class AddVolunteer extends Component{
  render(){
    return(
      <div className='main-container'>

      <div className='add-volunteer-container'>
      <h1 className='add-volunteer'>Add New Volunteer</h1>

</div>

<div className='container'>
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

</div>
</div>



    )
  }
}
export default AddVolunteer;
