import React, { Component } from 'react'
import EventListItem from '../EventList/EventListItem'

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h1>Event list</h1>
        {events.map((event) => {
          return <EventListItem key={event.id} event={event} />
        })}
      </div>
    )
  }
}

export default EventList;
