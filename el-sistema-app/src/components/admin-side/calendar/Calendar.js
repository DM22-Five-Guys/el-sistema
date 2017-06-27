//import React, {Component} from 'react';
//import events from './events';
//import moment from 'moment';
//import BigCalendar from 'react-big-calendar';
//import HTML5Backend from 'react-dnd-html5-backend';
//import {DragDropContext} from 'react-dnd';
//import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
//
//import 'react-big-calendar/lib/css/react-big-calendar.css';
//
//BigCalendar.setLocalizer(
//    BigCalendar.momentLocalizer(moment)
//)
//
//const DragAndDropCalendar = withDragAndDrop(BigCalendar)
//
//class Dnd extends Component {
//    constructor (props) {
//        super(props)
//        this.state = {
//            events: events()
//        }
//        this.moveEvent = this.moveEvent.bind(this);
//    }
//    
//    moveEvent({ event, start, end }) {
//    const { events } = this.state;
//    console.log(events)
//    const idx = events.indexOf(event);
//    const updatedEvent = { ...event, start, end };
//
//    const nextEvents = [...events]
//    nextEvents.splice(idx, 1, updatedEvent)
//
//    this.setState({
//      events: nextEvents
//    })
//  }
//
//  render(){
//    return (
//      <DragAndDropCalendar
//        selectable
//        events={this.state.events}
//        onEventDrop={this.moveEvent}
//        defaultView='month'
//        defaultDate={new Date(2017, 5, 16)}
//      />
//    )
//  }
//}
//
//export default DragDropContext(HTML5Backend)(Dnd)

import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

require('moment/locale/es-do');
require('moment/locale/en-gb');

const English = 'en-gb';
const Spanish = 'es-do';

let Cultures = React.createClass({

  getInitialState(){
    return { culture: English }
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
          events={events()}
          culture={this.state.culture}
          defaultDate={new Date()}
        />
      </div>
    )
  }
})

export default Cultures;


