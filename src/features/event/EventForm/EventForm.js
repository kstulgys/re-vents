import React, { Component } from "react";
import {
  Menu,
  Segment,
  Container,
  Button,
  Grid,
  Form,
  Checkbox,
  Item,
  Image,
  Divider,
  Card,
  Feed
} from "semantic-ui-react";

const blankForm = {
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
  }

  handleInputChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({ event: newEvent });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.selectedEvent.id) {
      this.props.onEventUpdate(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  render() {
    console.log(this.state);
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
