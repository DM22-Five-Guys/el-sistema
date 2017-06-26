import React, { Component } from 'react';

import RecentEdits from './components/Recent-Edits';
import Notifications from './components/Notifications';
import Calendar from './components/Calendar';

import './style.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='change-container'>
 <div className='row'>
   <div className='col-md-6'>
            <RecentEdits />
            </div>

             <div className='col-sm-6'>
            <Calendar />
            </div>
</div>
          <Notifications />


        </div>

    )
  }
}
