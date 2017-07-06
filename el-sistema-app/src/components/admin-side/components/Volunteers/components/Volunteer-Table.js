import React, {Component} from 'react';
import '../style.css';
import trash from '../../../../../img/trash.png';
import edit from '../../../../../img/pencil.png';


class VolunteerTable extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
        <h1 className='current-volunteer'>Current Volunteers</h1>
        <ul className='volunteers-list'>
          <li >
            <input placeholder='' type='checkbox' className='checkbox-volunteer'></input>
          </li>
          <li className='volunteer-titles'>Name</li>
          <li className='volunteer-titles'>Email Address</li>
          <li className='volunteer-titles'>Job</li>
          <li className='volunteer-titles'>Actions</li>

        </ul>
        <ul className='volunteers-list line'>
          <li className='col-md-3'>
            <div className='checkbox-volunteer'>
            <input placeholder='' type='checkbox' ></input>
            </div>
          </li>
          <li className='col-md-4' >
            <input placeholder='Name' type='text' className='name-volunteer-placeholder '></input>
          </li>
          <li className='col-md-5'>
            <input placeholder='Email Address' type='email' className='email-volunteer-placeholder'></input>
          </li>
          <li className='col-md-6'>
            <input placeholder='Job' type='text' className='job-volunteer-placeholder'></input>
          </li>
          <li className='col-md-2'>
            <img src={edit} className='edit-volunteer' alt=""></img>
          </li>
          <li className='col-md-1'>
            <img src={trash} className='delete-volunteer' alt=""></img>
          </li>


      </ul>
      <ul className='volunteers-list line'>
        <li className='col-md-3'>
          <div className='checkbox-volunteer'>
          <input placeholder='' type='checkbox' ></input>
          </div>
        </li>
        <li className='col-md-4' >
          <input placeholder='Name' type='text' className='name-volunteer-placeholder'></input>
        </li>
        <li className='col-md-5'>
          <input placeholder='Email Address' type='email' className='email-volunteer-placeholder'></input>
        </li>
        <li className='col-md-6'>
          <input placeholder='Job' type='text' className='job-volunteer-placeholder'></input>
        </li>
        <li className='col-md-2'>
          <img src={edit} className='edit-volunteer' alt=""></img>
        </li>
        <li className='col-md-1'>
          <img src={trash} className='delete-volunteer' alt=""></img>
        </li>

      </ul>
      </div>
    </div>

    )
  }
}

export default VolunteerTable;
