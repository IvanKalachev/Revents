import React, { Component } from 'react'
import EventListItem from '../EventList/EventListItem'

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event list</h1>
        {events.map((event) => {
          return <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        })}
      </div>
    )
  }
}

export default EventList;
