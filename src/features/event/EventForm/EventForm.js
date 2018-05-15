import React, { Component } from "react";
import { Segment, Button, Form } from "semantic-ui-react";
import cuid from "cuid";

const blankForm = {
  id: null,
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: blankForm
  };

  componentDidMount() {
    if (this.props.selectedEvent) {
      this.setState({ event: this.props.selectedEvent });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedEvent !== nextProps.selectedEvent) {
      this.setState({ event: nextProps.selectedEvent || blankForm });
    }
    null;
  }

  handleInputChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({ event: newEvent });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.selectedEvent) {
      this.props.onEventUpdate(this.state.event);
    } else {
      const eventWithId = { ...this.state.event, id: cuid() };
      this.props.createEvent(eventWithId);
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
            onClick={this.props.handleFormClose}
            basic
            content="Cancel"
            color="brown"
          />
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
