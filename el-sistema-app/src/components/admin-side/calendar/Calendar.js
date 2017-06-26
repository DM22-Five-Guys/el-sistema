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

