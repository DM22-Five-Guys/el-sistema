import React from 'react';
import createReactClass from 'create-react-class';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import axios from 'axios';

import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

require('moment/locale/es-do');
require('moment/locale/en-gb');

const English = 'en-gb';
const Spanish = 'es-do';


let Calendar = createReactClass({

  getInitialState(){
    return { culture: English, events: []}
  },
    
  
  componentWillReceiveProps(props){
      this.setState({
          events: props.allEvents
      })
  },

  render(){
    let cultures = [English, Spanish]
    
    

    return (
      <div>
        <h3 className="callout">
          <label>Select a Language</label>
          {' '}
          <select
            className='form-control'
            style={{ width: 200, display: 'inline-block'}}
            defaultValue={English}
            onChange={e => this.setState({ culture: e.target.value })}
          >
          {
            cultures.map((c, idx) =>
              <option key={idx} value={c}>{c}</option>
            )
          }
          </select>
        </h3>
        <BigCalendar
          popup
          events={this.state.events}
          culture={this.state.culture}
          defaultDate={new Date()}
        />
      </div>
    )
  }
})

export default Calendar;
