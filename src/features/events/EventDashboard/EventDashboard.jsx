import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';

class EventDashboard extends Component {

  handleDeleteEvent = (eventId) => {
    return () => {
      this.props.deleteEvent(eventId);
    }
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={this.props.events}
            deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    events: state.events
  });
}

export default connect(mapStateToProps, { deleteEvent })(EventDashboard);
