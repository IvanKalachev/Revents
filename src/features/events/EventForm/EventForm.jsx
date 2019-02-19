import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import cuid from 'cuid';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import TextInput from '../../../app/common/form/TextInput';

class EventForm extends Component {
    state = {
        event: Object.assign({}, this.props.event)
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
        if (this.state.event.id) {
            this.props.updateEvent(this.state.event);
            this.props.history.goBack();
        } else {
            const newEvent = {
                ...this.state.event,
                id: cuid(),
                hostPhotoURL: '/assets/user.png'
            }
            this.props.createEvent(newEvent);
            this.props.history.push('/events');
        }
    }

    render() {
        const { event } = this.state;
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Field name="title" type="text" component={TextInput} placeholder="Give your event a name" />
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
                    <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
    }

    if (eventId && state.events.length > 0) {
        event = state.events.filter(ev => ev.id === eventId)[0];
    }

    return {
        event
    }
}

export default connect(mapStateToProps, { createEvent, updateEvent })(reduxForm({ form: 'eventForm' })(EventForm));
