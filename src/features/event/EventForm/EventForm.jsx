import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
    state = {
        event: {
            title: '',
            date: '',
            city: '',
            venue: '',
            hostedBy: '',
        }
    }

    onInputChange = (evt) => {
        const newEvent = this.state.event;
        newEvent[evt.target.name] = evt.target.value;
        this.setState({
            event: newEvent
        });
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.createEvent(this.state.event);
    }

    render() {
        const {event} = this.state;
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input 
                            value={event.title} 
                            onChange={this.onInputChange} 
                            name="title"
                            placeholder="Event Title" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input 
                            type="date" 
                            value={event.date} 
                            onChange={this.onInputChange} 
                            name="date"
                            placeholder="Event Date"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input 
                            placeholder="City event is taking place" 
                            value={event.city} 
                            onChange={this.onInputChange} 
                            name="city"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input 
                            placeholder="Enter the Venue of the event"
                            value={event.venue} 
                            onChange={this.onInputChange} 
                            name="venue"
                         />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input 
                            placeholder="Enter the name of person hosting" 
                            value={event.hostedBy} 
                            onChange={this.onInputChange} 
                            name="hostedBy"
                        />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
               </Button>
                    <Button type="button" onClick={this.props.handleCancel}>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

export default EventForm;
