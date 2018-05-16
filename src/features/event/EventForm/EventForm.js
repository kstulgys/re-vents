import React, { Component } from "react";
import { Segment, Button, Form } from "semantic-ui-react";
import cuid from "cuid";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";

const mapState = (state, ownProps) => {
  let event = {
    id: null,
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };
  const eventId = ownProps.match.params.id;
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return { event };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  handleInputChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({ event: newEvent });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.selectedEvent) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoUrl:
          "https://robohash.org/ipsumquoautem.jpg?size=100x100&set=set1"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    console.log("selectedE:", this.props.selectedEvent);
    return (
      <Segment raised color="orange">
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.handleInputChange}
              placeholder="First Name"
              name="title"
              value={this.state.event.title}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Event Date"
              name="date"
              type="date"
              value={this.state.event.date}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.handleInputChange}
              placeholder="City"
              name="city"
              value={this.state.event.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Venue"
              name="venue"
              value={this.state.event.venue}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              onChange={this.handleInputChange}
              placeholder="Hosted By"
              name="hostedBy"
              value={this.state.event.hostedBy}
            />
          </Form.Field>
          <Button
            onClick={this.handleSubmit}
            basic
            content="Submit"
            color="orange"
          />
          <Button
            onClick={this.props.history.goBack}
            basic
            content="Cancel"
            color="brown"
          />
        </Form>
      </Segment>
    );
  }
}

export default connect(mapState, actions)(EventForm);
