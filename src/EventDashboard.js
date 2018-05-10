import React, { Component } from "react";
import cuid from "cuid";
import eventsMockData from "./events";
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

import EventForm from "./EventForm";
import EventList from "./EventList";

class EventDashboard extends Component {
  state = {
    events: eventsMockData,
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      selectedEvent: null
    }));
  };

  handleFormClose = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleUpdateEvent = eventToUpdate => {
    this.setState({
      events: this.state.events.map(event => {
        if (eventToUpdate.id === event.id) {
          return [...eventsMockData, eventToUpdate];
        }
        return event;
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    const newEvents = [...this.state.events, newEvent];
    this.setState({ events: newEvents, isOpen: false });
  };

  handleEditEvent = eventEdit => () => {
    this.setState({
      isOpen: true,
      selectedEvent: eventEdit
    });
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: 50 }}>
          <Grid columns={2} padded>
            <Grid.Column width={10}>
              <EventList
                events={this.state.events}
                onEventEdit={this.handleEditEvent}
              />
            </Grid.Column>

            <Grid.Column width={6}>
              <Button
                onClick={this.handleFormOpen}
                color="orange"
                content="Create Event"
              />

              {this.state.isOpen && (
                <EventForm
                  selectedEvent={this.state.selectedEvent}
                  createEvent={this.handleCreateEvent}
                  handleFormClose={this.handleFormClose}
                />
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default EventDashboard;
