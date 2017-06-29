import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getAllEvents} from '../../../../actions'

import RecentEdits from './components/Recent-Edits';
import Notifications from './components/Notifications';
import Calendar from './components/Calendar';
import getToken from './../../components/login-page/token.service';
import setAuthorization from './../../components/login-page/utils/setAuthorizationToken';

import './style.css';

if(localStorage.id_token){
  setAuthorization(getToken());
}

class Dashboard extends Component {
    
  constructor(){
      super()
      this.state = {
          events: []
      }
  }
    
  componentDidMount(){
      this.props.getAllEvents().then(() => {
          this.settingState()
      })
      
  }
    
  settingState(){
      this.setState({
          events: this.props.events
      })
  }
    
  render() {
    return (


<div className='container'>
  <div className='row'>
    <div className='col-md-6'>
  <ul>
  <li>
  <RecentEdits />
  </li>
  <li>
  <Notifications />
  </li>
  </ul>
  </div>
  <div className='col-md-6'>
        <Calendar allEvents={this.state.events} />
        </div>

      </div>
</div>

    )
  }
}

function mapStateToProps(state){
    return {events: state.events}
}

export default connect(mapStateToProps, {getAllEvents})(Dashboard)